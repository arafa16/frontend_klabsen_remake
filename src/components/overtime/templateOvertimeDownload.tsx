import React, { useEffect, useRef, useState } from 'react'
import {
    Page,
    Text,
    View,
    Document,
    PDFViewer,
    PDFDownloadLink,
    StyleSheet,
    Image,
    Svg
  } from "@react-pdf/renderer";
import { styles } from "./style";
import dayjs from 'dayjs';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';
  
const templateOvertimeDownload = (props:any) => {
    const {data, view, download, link} = props;

    const qrcode = QRCode.toDataURL(`${link}`);
    
    // Create Document Component
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.qrcode}>
                    <Image style={{ width: 50 }} src={qrcode} />
                </View>
                <View style={styles.header}>
                    <View>
                        <Text style={[styles.title, styles.textBold]}>SURAT TUGAS LEMBUR</Text>
                        <Text style={{fontSize: "9px"}}>No. : {data && data.number}</Text>
                    </View>
                </View>
                <View style={[styles.formatData]}>
                    <Text>Diinstruksikan kepada :</Text>
                    <View style={[styles.columnSpace]}>
                        <View style={[styles.gapColumn]}>
                            <Text>Nama</Text>
                            <Text>NIK</Text>
                            <Text>Bagian/Divisi</Text>
                            <Text>Lokasi Kerja</Text>
                        </View>
                        <View style={[styles.gapColumn]}>
                            <Text>: {data && data.user && data.user.name}</Text>
                            <Text>: {data && data.user && data.user.nik}</Text>
                            <Text>: {data && data.user && data.user.group  && data.user.group.name}</Text>
                            <Text>: {data && data.user && data.user.penempatan  && data.user.penempatan.name}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.formatData]}>
                    <Text>Untuk melaksanakan lembur pada :</Text>
                    <View style={[styles.columnSpace]}>
                        <View style={[styles.gapColumn]}>  
                            <Text>Jam Mulai - Jam Selesai</Text>
                            <Text>Total Jam</Text>
                        </View>
                        <View style={[styles.gapColumn]}>
                            <Text>: {data && dayjs(data.time_start).format("YYYY-MM-DD HH:mm:ss")} - {data && dayjs(data.time_finised).format("YYYY-MM-DD HH:mm:ss")}</Text>
                            <Text>: {data && dayjs(data.time_finised).diff(dayjs(data.time_start), 'h', true).toFixed(2)}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.formatData]}>
                    <Text>Pelaksanaan lembur tersebut diperlukan untuk menyelesaikan tugas sebagai berikut :</Text>
                    <Text>: {data && data.note}</Text>
                </View>
                <View style={[styles.signPosition]}>
                    <View style={[styles.signFormat]}>
                        <View style={[styles.signGap]}>
                            <Text> </Text>
                            <Text>Mengetahui Atasan Langsung</Text>
                        </View>
                        <View>
                            <Text></Text>
                            <Text>{data && data.superior && data.superior.name}</Text>
                            <Text>NIK : {data && data.superior && data.superior.nik}</Text>
                        </View>
                    </View>
                    <View style={[styles.signFormat]}>
                        <View style={[styles.signGap]}>
                            <Text> </Text>
                            <Text>Yang memberi Tugas</Text>
                        </View>
                        <View>
                            <Text>{data && data.assignor && data.assignor.name}</Text>
                            <Text>NIK : {data && data.assignor && data.assignor.nik}</Text>
                        </View>
                    </View>
                    <View style={[styles.signFormat]}>
                        <View style={[styles.signGap]}>
                        <Text>Jakarta, {dayjs(data && data.updated_at).format("DD MMMM YYYY") }</Text>
                            <Text>Yang Diberi Tugas</Text>
                        </View>
                        <View>
                            <Text>{data && data.user && data.user.name}</Text>
                            <Text>NIK : {data && data.user && data.user.nik}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.header}>
                    <View>
                        <Text style={[styles.title, styles.textBold]}>LAPORAN PELAKSANAAN LEMBUR</Text>
                    </View>
                </View>

                <View style={[styles.formatData]}>
                    <Text>Berdasarkan Surat Tugas Lembur No. : {data && data.number} yang bertanda tangan dibawah ini :</Text>
                    <View style={[styles.columnSpace]}>
                        <View style={[styles.gapColumn]}>
                            <Text>Nama</Text>
                            <Text>NIK</Text>
                            <Text>Bagian/Divisi</Text>
                            <Text>Lokasi Kerja</Text>
                        </View>
                        <View style={[styles.gapColumn]}>
                            <Text>: {data && data.user && data.user.name}</Text>
                            <Text>: {data && data.user && data.user.nik}</Text>
                            <Text>: {data && data.user && data.user.group  && data.user.group.name}</Text>
                            <Text>: {data && data.user && data.user.penempatan  && data.user.penempatan.name}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.formatData]}>
                    <Text>Untuk melaksanakan lembur pada :</Text>
                    <View style={[styles.columnSpace]}>
                        <View style={[styles.gapColumn]}>
                            <Text>Hari/Tanggal</Text>
                            <Text>Jam</Text>
                        </View>
                        <View style={[styles.gapColumn]}>
                            <Text>: {data && data.overtime_report && dayjs(data.overtime_report.time_start).format("YYYY-MM-DD HH:mm:ss")} - {data && data.overtime_report && dayjs(data.overtime_report.time_finised).format("YYYY-MM-DD HH:mm:ss")}</Text>
                            <Text>: {data && data.overtime_report && dayjs(data.overtime_report.time_finised).diff(dayjs(data.overtime_report.time_start), 'h', true).toFixed(2)}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.formatData]}>
                    <Text>Pelaksanaan lembur tersebut diperlukan untuk menyelesaikan tugas sebagai berikut :</Text>
                    <Text>: {data && data.overtime_report && data.overtime_report.note}</Text>
                </View>
                <View style={[styles.signPosition]}>
                    <View style={[styles.signFormat]}>
                        <View style={[styles.signGap]}>
                            <Text> </Text>
                            <Text>Mengetahui Atasan Langsung</Text>
                        </View>
                        <View>
                            <Text></Text>
                            <Text>{data && data.superior && data.superior.name}</Text>
                            <Text>NIK : {data && data.superior && data.superior.nik}</Text>
                        </View>
                    </View>
                    <View style={[styles.signFormat]}>
                        <View style={[styles.signGap]}>
                            <Text> </Text>
                            <Text>Yang memberi Tugas</Text>
                        </View>
                        <View>
                            <Text>{data && data.assignor && data.assignor.name}</Text>
                            <Text>NIK : {data && data.assignor && data.assignor.nik}</Text>
                        </View>
                    </View>
                    <View style={[styles.signFormat]}>
                        <View style={[styles.signGap]}>
                            <Text>Jakarta, {dayjs(data && data.updated_at).format("DD MMMM YYYY") }</Text>
                            <Text>Yang Diberi Tugas</Text>
                        </View>
                        <View>
                            <Text>{data && data.user && data.user.name}</Text>
                            <Text>NIK : {data && data.user && data.user.nik}</Text>
                        </View>
                    </View>
                </View>
                
            </Page>
        </Document>
    );

    return (
        <div>
            <div className={`w-full h-screen ${view ? '' : 'hidden'}`}>
                <PDFViewer width="100%" height="100%">
                    <MyDocument />
                </PDFViewer>
            </div>
            <div className={`${download ? '' : 'hidden'}`}>
                <PDFDownloadLink document={<MyDocument />} fileName={`${data && data.number} - ${data && data.user && data.user.name}`}>
                <button className="flex items-center bg-blue-800 text-white text-xs px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Download PDF
                </button>
                </PDFDownloadLink>
            </div>
            
        </div>
    )
}

export default templateOvertimeDownload