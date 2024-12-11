import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import AbsenUserPage from "../pages/absen/absenUserPage";
import AdminPendapatan from "../pages/pendapatan/adminPendapatan";
import Dashboard from "../pages/dashboard/dashboardPage";
import EventPage from "../pages/event/eventPage";
import EditEvent from "../pages/event/editEventPage";
import CreateEmployeePage from "../pages/employee/createEmployeePage";
import UpdateEmployeePage from "../pages/employee/updateEmployeePage";
import DataEmployePage from "../pages/employee/dataEmployePage";
import ViewEmployePage from "../pages/employee/viewEmployePage";
import CreateEvent from "../pages/event/createEventPage";
import Login from "../pages/auth/login";
import Register from "../pages/auth/registerPage";
import ForgotPassword from "../pages/auth/forgotPassword";
import ResetPassword from "../pages/auth/resetPassword";
import ViewProfilePage from "../pages/profile/viewProfilePage";
import ViewSlipPage from "../pages/pendapatan/viewSlipPage";
import AbsenCheckByUser from "../pages/absen/absenCheckByUser";
import AbsenUserByIdPage from "../pages/absen/absenUserByIdPage";
import KoreksiUserPage from "../pages/koreksi/koreksiUserPage";
import ViewKoreksiPage from "../pages/koreksi/viewKoreksiPage";
import KoreksiApproverPage from "../pages/koreksi/koreksiApproverPage";
import ViewKoreksiApproverPage from "../pages/koreksi/viewKoreksiApproverPage"
import PerhitunganAbsenPage from "../pages/absen/perhitunganAbsenPage";
import PendapatanPage from "../pages/pendapatan/pendapatanPage";
import PendapatanLainPage from "../pages/pendapatan/pendapatanLainPage";
import ViewSlipBonusPage from "../pages/pendapatan/viewSlipBonusPage";
import BankPage from "../pages/bank/bankPage";
import CreateBankPage from "../pages/bank/createBankPage";
import EditBankPage from "../pages/bank/editBankPage";
import ContactEmergancyPage from "../pages/contactEmergancy/contactEmergancyPage";
import CreateContactEmergancyPage from "../pages/contactEmergancy/createContactEmergancyPage";
import EditContactEmergancyPage from "../pages/contactEmergancy/editContactEmergancyPage";
import GanderPage from "../pages/gander/ganderPage";
import CreateGanderPage from "../pages/gander/createGanderPage";
import EditGanderPage from "../pages/gander/editGanderPage";
import GolonganDarahPage from "../pages/golonganDarah/golonganDarahPage";
import CreateGolonganDarahPage from "../pages/golonganDarah/createGolonganDarahPage";
import EditGolonganDarahPage from "../pages/golonganDarah/editGolonganDarahPage";
import GroupPage from "../pages/group/groupPage";
import CreateGroupPage from "../pages/group/createGroupPage";
import EditGroupPage from "../pages/group/editGroupPage";
import JabatanPage from "../pages/jabatan/jabatanPage";
import CreateJabatanPage from "../pages/jabatan/createJabatanPage";
import EditJabatanPage from "../pages/jabatan/editJabatanPage";
import JamOperasionalPage from "../pages/jamOperasional/jamOperasionalPage";
import CreateJamOperasionalPage from "../pages/jamOperasional/createJamOperasionalPage";
import EditJamOperasionalPage from "../pages/jamOperasional/editJamOperasionalPage";
import PendidikanPage from "../pages/pendidikan/pendidikanPage";
import CreatePendidikanPage from "../pages/pendidikan/createPendidikanPage";
import EditPendidikanPage from "../pages/pendidikan/editPendidikanPage";
import PenempatanPage from "../pages/penempatan/penempatanPage";
import CreatePenempatanPage from "../pages/penempatan/createPenempatanPage";
import EditPenempatanPage from "../pages/penempatan/editPenempatanPage";
import SliderPage from "../pages/slider/sliderPage";
import CreateSliderPage from "../pages/slider/createSliderPage";
import ViewSliderPage from "../pages/slider/viewSliderPage";
import PeriodeKerjaPage from "../pages/periodeKerja/periodeKerjaPage";
import EditPeriodeKerjaPage from "../pages/periodeKerja/editPeriodeKerjaPage";
import CreatePeriodeKerjaPage from "../pages/periodeKerja/createPeriodeKerjaPage";
import StatusPerkawinanPage from "../pages/statusPerkawinan/statusPerkawinanPage";
import CreateStatusPerkawinanPage from "../pages/statusPerkawinan/createStatusPerkawinanPage";
import EditStatusPerkawinanPage from "../pages/statusPerkawinan/editStatusPerkawinanPage";
import JamOperasionalGroupPage from "../pages/jamOperasionalGroup/jamOperasionalGroupPage";
import CreateJamOperasionalGroupPage from "../pages/jamOperasionalGroup/createJamOperasionalGroupPage";
import EditJamOperasionalGroupPage from "../pages/jamOperasionalGroup/editJamOperasionalGroupPage";
import MesinAbsenPage from "../pages/mesinAbsen/mesinAbsenPage";
import CreateMesinAbsenPage from "../pages/mesinAbsen/createMesinAbsenPage";
import EditMesinAbsenPage from "../pages/mesinAbsen/editMesinAbsenPage";
import TipeAbsenPage from "../pages/tipeAbsen/tipeAbsenPage";
import EditTipeAbsenPage from "../pages/tipeAbsen/editTipeAbsenPage";
import CreateTipeAbsenPage from "../pages/tipeAbsen/createTipeAbsenPage";
import TipeEventPage from "../pages/tipeEvent/tipeEventPage";
import CreateTipeEventPage from "../pages/tipeEvent/createTipeEventPage";
import EditTipeEventPage from "../pages/tipeEvent/editTipeEventPage";
import TipeNotificationPage from "../pages/tipeNotification/tipeNotificationPage";
import CreateTipeNotificationPage from "../pages/tipeNotification/createTipeEventPage";
import EditTipeNotificationPage from "../pages/tipeNotification/editTipeEventPage";
import TipePendapatanPage from "../pages/tipePendapatan/tipePendapatanPage";
import CreateTipePendapatanPage from "../pages/tipePendapatan/createTipePendapatanPage";
import EditTipePendapatanPage from "../pages/tipePendapatan/editTipePendapatanPage";
import PelanggaranPage from "../pages/pelanggaran/pelanggaranPage";
import CreatePelanggaranPage from "../pages/pelanggaran/createPelanggaranPage";
import EditPelanggaranPage from "../pages/pelanggaran/editPelanggaranPage";
import StatusPage from "../pages/status/statusPage";
import CreateStatusPage from "../pages/status/createStatusPage";
import EditStatusPage from "../pages/status/editStatusPage";
import StatusInOutPage from "../pages/statusInOut/statusInOutPage";
import CreateStatusInOutPage from "../pages/statusInOut/createStatusInOutPage";
import EditStatusInOutPage from "../pages/statusInOut/editStatusInOutPage";
import StatusKoreksiPage from "../pages/statusKoreksi/statusKoreksiPage";
import CreateStatusKoreksiPage from "../pages/statusKoreksi/createStatusKoreksiPage";
import EditStatusKoreksiPage from "../pages/statusKoreksi/editStatusKoreksiPage";
import DataEmailPage from "../pages/dataEmail/dataEmailPage";
import ViewDataEmailPage from "../pages/dataEmail/viewDataEmailPage";
import EditDataEmailPage from "../pages/dataEmail/editDataEmailPage";
import CreateDataEmailPage from "../pages/dataEmail/createDataEmailPage";
import StatusEmailPage from "../pages/statusEmail/statusEmailPage";
import CreateStatusEmailPage from "../pages/statusEmail/createStatusEmailPage";
import EditStatusEmailPage from "../pages/statusEmail/editStatusEmailPage";


function Router() {
  const routes = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/absen",
          element: <AbsenUserPage />,
        },
        {
          path: "/absen/user",
          element: <AbsenCheckByUser />
        },
        {
          path: "/absen/check/:uuid",
          element: <AbsenUserByIdPage />
        },
        {
          path: "/absen/perhitungan",
          element: <PerhitunganAbsenPage />
        },
        {
          path: "/event",
          element: <EventPage />,
        },
        {
          path: "/event/create",
          element: <CreateEvent />,
        },
        {
          path: "/event/edit/:id",
          element: <EditEvent />,
        },
        //employe
        {
          path: "/employee/data",
          element: <DataEmployePage />
        },
        {
          path: "/employee/create",
          element: <CreateEmployeePage />
        },
        {
          path: "/employee/update/:id",
          element: <UpdateEmployeePage />
        },
        {
          path: "/employee/data/:id",
          element: <ViewEmployePage />
        },
        //profile
        {
          path: "/profile/data/:id",
          element: <ViewProfilePage />
        },
        {
          path: "/koreksi/user",
          element: <KoreksiUserPage />,
        },
        {
          path: "/koreksi/approver",
          element: <KoreksiApproverPage />,
        },
        {
          path: "/koreksi/view",
          element: <ViewKoreksiPage />,
        },
        {
          path: "/koreksi/view_approver",
          element: <ViewKoreksiApproverPage />,
        },
        //pendapatan
        {
          path: "/pendapatan/user",
          element: <PendapatanPage />
        },
        {
          path: "/pendapatan/slip/:id",
          element: <ViewSlipPage />
        },
        {
          path: "/pendapatan/lain",
          element: <PendapatanLainPage />
        },
        {
          path: "/pendapatan/bonus/:id",
          element: <ViewSlipBonusPage />
        },
        {
          path: "/pendapatan/admin",
          element: <AdminPendapatan />
        },
        //Bank
        {
          path: "/bank",
          element: <BankPage />
        },
        {
          path: "/bank/edit/:uuid",
          element: <EditBankPage />
        },
        {
          path: "/bank/create",
          element: <CreateBankPage />
        },
        //contact emergency
        {
          path: "/contact",
          element: <ContactEmergancyPage />
        },
        {
          path: "/contact/create",
          element: <CreateContactEmergancyPage />
        },
        {
          path: "/contact/edit/:uuid",
          element: <EditContactEmergancyPage />
        },
        //gander
        {
          path: "/gander",
          element: <GanderPage />
        },
        {
          path: "/gander/create",
          element: <CreateGanderPage />
        },
        {
          path: "/gander/edit/:uuid",
          element: <EditGanderPage />
        },
        //golongan darah
        {
          path: "/golonganDarah",
          element: <GolonganDarahPage />
        },
        {
          path: "/golonganDarah/create",
          element: <CreateGolonganDarahPage />
        },
        {
          path: "/golonganDarah/edit/:uuid",
          element: <EditGolonganDarahPage />
        },
        //group
        {
          path: "/group",
          element: <GroupPage />
        },
        {
          path: "/group/create",
          element: <CreateGroupPage />
        },
        {
          path: "/group/edit/:uuid",
          element: <EditGroupPage />
        },
        //jabatan
        {
          path: "/jabatan",
          element: <JabatanPage />
        },
        {
          path: "/jabatan/create",
          element: <CreateJabatanPage />
        },
        {
          path: "/jabatan/edit/:uuid",
          element: <EditJabatanPage />
        },
        //jam operasional
        {
          path: "/jamOperasional",
          element: <JamOperasionalPage />
        },
        {
          path: "/jamOperasional/create",
          element: <CreateJamOperasionalPage />
        },
        {
          path: "/jamOperasional/edit/:uuid",
          element: <EditJamOperasionalPage />
        },
        //pendidikan
        {
          path: "/pendidikan",
          element: <PendidikanPage />
        },
        {
          path: "/pendidikan/create",
          element: <CreatePendidikanPage />
        },
        {
          path: "/pendidikan/edit/:uuid",
          element: <EditPendidikanPage />
        },
        //penempatan
        {
          path: "/penempatan",
          element: <PenempatanPage />
        },
        {
          path: "/penempatan/create",
          element: <CreatePenempatanPage />
        },
        {
          path: "/penempatan/edit/:uuid",
          element: <EditPenempatanPage />
        },
        //slider
        {
          path: "/slider",
          element: <SliderPage />
        },
        {
          path: "/slider/create",
          element: <CreateSliderPage />
        },
        {
          path: "/slider/view/:uuid",
          element: <ViewSliderPage />
        },
        //periode kerja
        {
          path: "/periodeKerja",
          element: <PeriodeKerjaPage />
        },
        {
          path: "/periodeKerja/create",
          element: <CreatePeriodeKerjaPage />
        },
        {
          path: "/periodeKerja/edit/:uuid",
          element: <EditPeriodeKerjaPage />
        },
        //status perkawinan
        {
          path: "/statusPerkawinan",
          element: <StatusPerkawinanPage />
        },
        {
          path: "/statusPerkawinan/create",
          element: <CreateStatusPerkawinanPage />
        },
        {
          path: "/statusPerkawinan/edit/:uuid",
          element: <EditStatusPerkawinanPage />
        },
        //jam operasional group
        {
          path: "/jamOperasionalGroup",
          element: <JamOperasionalGroupPage />
        },
        {
          path: "/jamOperasionalGroup/create",
          element: <CreateJamOperasionalGroupPage />
        },
        {
          path: "/jamOperasionalGroup/edit/:uuid",
          element: <EditJamOperasionalGroupPage />
        },
        //mesin absen
        {
          path: "/mesinAbsen",
          element: <MesinAbsenPage />
        },
        {
          path: "/mesinAbsen/create",
          element: <CreateMesinAbsenPage />
        },
        {
          path: "/mesinAbsen/edit/:uuid",
          element: <EditMesinAbsenPage />
        },
        //tipe absen
        {
          path: "/tipeAbsen",
          element: <TipeAbsenPage />
        },
        {
          path: "/tipeAbsen/create",
          element: <CreateTipeAbsenPage />
        },
        {
          path: "/tipeAbsen/edit/:uuid",
          element: <EditTipeAbsenPage />
        },
         //tipe event
         {
          path: "/tipeEvent",
          element: <TipeEventPage />
        },
        {
          path: "/tipeEvent/create",
          element: <CreateTipeEventPage />
        },
        {
          path: "/tipeEvent/edit/:uuid",
          element: <EditTipeEventPage />
        },
        //tipe notification
        {
          path: "/tipeNotification",
          element: <TipeNotificationPage />
        },
        {
          path: "/tipeNotification/create",
          element: <CreateTipeNotificationPage />
        },
        {
          path: "/tipeNotification/edit/:uuid",
          element: <EditTipeNotificationPage />
        },
        //tipe pendapatan
        {
          path: "/tipePendapatan",
          element: <TipePendapatanPage />
        },
        {
          path: "/tipePendapatan/create",
          element: <CreateTipePendapatanPage />
        },
        {
          path: "/tipePendapatan/edit/:uuid",
          element: <EditTipePendapatanPage />
        },
        //pelanggaran
        {
          path: "/pelanggaran",
          element: <PelanggaranPage />
        },
        {
          path: "/pelanggaran/create",
          element: <CreatePelanggaranPage />
        },
        {
          path: "/pelanggaran/edit/:uuid",
          element: <EditPelanggaranPage />
        },
        //status
        {
          path: "/status",
          element: <StatusPage />
        },
        {
          path: "/status/create",
          element: <CreateStatusPage />
        },
        {
          path: "/status/edit/:uuid",
          element: <EditStatusPage />
        },
        //statusInOut
        {
          path: "/statusInOut",
          element: <StatusInOutPage />
        },
        {
          path: "/statusInOut/create",
          element: <CreateStatusInOutPage />
        },
        {
          path: "/statusInOut/edit/:uuid",
          element: <EditStatusInOutPage/>
        },
        //status koreksi
        {
          path: "/statusKoreksi",
          element: <StatusKoreksiPage />
        },
        {
          path: "/statusKoreksi/create",
          element: <CreateStatusKoreksiPage />
        },
        {
          path: "/statusKoreksi/edit/:uuid",
          element: <EditStatusKoreksiPage/>
        },
        //statusEmail
        {
          path: "/statusEmail",
          element: <StatusEmailPage />
        },
        {
          path: "/statusEmail/create",
          element: <CreateStatusEmailPage />
        },
        {
          path: "/statusEmail/edit/:uuid",
          element: <EditStatusEmailPage/>
        },
        //email
        {
          path: "/dataEmail",
          element: <DataEmailPage />
        },
        {
          path: "/dataEmail/view/:uuid",
          element: <ViewDataEmailPage/>
        },
        {
          path: "/dataEmail/create",
          element: <CreateDataEmailPage/>
        },
        {
          path: "/dataEmail/edit/:uuid",
          element: <EditDataEmailPage/>
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/reset/:token",
      element: <ResetPassword />,
    }
  ];

  return useRoutes(routes);
}

export default Router;
