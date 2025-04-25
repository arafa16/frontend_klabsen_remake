import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "#262626",
    fontFamily: "Helvetica",
    fontSize: "12px",
    padding: "30px 50px",
  },
  qrcode: {
    position: "absolute",
    right: "20px",
    top: "20px"
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 14,
  },
  title: {
    fontSize: 10,
    marginBottom: 4,
    borderBottom:0.5
  },
  textBold: {
    fontFamily: "Helvetica-Bold",
  },
  formatData:{
    fontSize:"9px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: 20,
  },
  columnSpace: {
    display: "flex", 
    flexDirection: "row", 
    gap: "30px"
  },
  gapColumn: {
    gap: "10px"
  },
  signPosition:{
    display: "flex", 
    flexDirection: "row", 
    gap: "64px",
    marginBottom: 30,
  },
  signFormat:{
    fontSize:"9px",
    display: "flex",
    flexDirection: "column",
    gap: "64px",
  },
  signGap:{
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  }
});