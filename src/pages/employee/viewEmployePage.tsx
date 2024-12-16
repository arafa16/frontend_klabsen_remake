import {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../base-components/Button';
import { Menu } from '../../base-components/Headless';
import EditViewPrivilege from '../../features/employee/editViewPrivilege';
import CreatePrivilege from '../../features/employee/createPrivilege';
import { getDataUserById, deleteDataById, getDataUsers } from '../../features/user/user';
import DataUser from '../../components/employee/dataUser';
import ProfileCover from '../../components/employee/profileCover';
import { changePhotoProfile } from "../../features/user/setPhotoProfile";
import { statusUser } from '../../features/employee/statusUser';
import { viewPrivilege } from '../../features/employee/viewPrivilege';
import { editStatusUser } from '../../features/employee/editStatusUser';
import { resetPassword } from '../../features/user/resetPassword';
import { createDataUserRelate, deleteDataUserRelate, getDataUserRelateTable } from "../../features/userRelate/userRelate";
import UserRelate from "../../components/dashboard/userRelate";
import AddUserRelate from '../../components/dashboard/addUserRelate';


const viewEmployePage = () => {
    //get uuid
    const {id} = useParams();
    const navigate = useNavigate();

    //get data user
    const {dataResult: dataUser, reload} = getDataUserById({id});

    //update photo
    const {
        modalChangePhoto, 
        message:messagePhoto,
        showModal:showModalPhoto, setShowModal:setShowModalPhoto,
        isSuccess, isLoading, messagePhoto:messagePhotoCheck
      } = changePhotoProfile({uuid:id});

    //upload photo
    const uploadPhoto = () => {
        setShowModalPhoto(!showModalPhoto)
    }

    useEffect(()=>{
        if(isSuccess && messagePhotoCheck){
            if(!isLoading){
                reload();
            }
        }
    },[isSuccess, isLoading, messagePhotoCheck])


    //status user
    const {view:viewStatusUser, isView:isViewStatusUser, setIsView:setIsViewStatusUser} = statusUser({
        datas:dataUser,
        title:"Status User"
    });

    //edit status user
    const {
        form:formEditStatusUser,
        isUserLoading, isUserSuccess, userMessage,
        isView:isViewEditStatusUser, setIsView:setIsViewEditStatusUser
    } = editStatusUser({
        id:id,
        title:"Edit Status User",
        user:dataUser,
        isViewStatusUser:isViewStatusUser,
        setIsViewStatusUser:setIsViewStatusUser
    });

    useEffect(()=>{
        if(isViewStatusUser === false){
            setIsViewEditStatusUser(true)
        }
    },[isViewStatusUser]);

    useEffect(()=>{
        if(isUserSuccess && userMessage){
            if(!isUserLoading){
                reload();
            }
        }
    },[isUserSuccess, isUserLoading, userMessage])

    
    //view privilege
    const {view:viewPrivilegeUser, isView:isViewPrivilege, setIsView:setIsViewPrivilege} = viewPrivilege({
        datas:dataUser,
        title:"Privilege User",
    });

    const {deleteData} = deleteDataById({id});

    const {modalResetPassword, message, showModal, setShowModal} = resetPassword({uuid:id});

    const {
        dataResult:dataUserRelates,
        page:pageRelate,
        limit:limitRelate,
        search,
        setSearch,
        allPage:allPageRelate, 
        status_code, set_status_code, 
        nextPage:nextPageRelate, 
        prevPage:prevPageRelate,
        reload:reloadData
      } = getDataUserRelateTable({uuid:id});

      //search user
      const {datas:datasSearch, search:serachUser, setSearch:setSearchUser} = getDataUsers();

      //add user
      const {message:messageUserRelate, addSubmit} = createDataUserRelate({reloadData});

      //add user
      const {message:messageDeleteUserRelate, deleteAction} = deleteDataUserRelate({reloadData});

      const addDataUserRelate = (datas:any) => {
            addSubmit({
                user_uuid:id,
                user_relate_uuid:datas.user_relate_uuid,
                is_active:datas.is_active
            });
      }

    return (
        <div className="grid grid-cols-12 gap-4 mt-5 text-xs">
            {modalChangePhoto}
            {modalResetPassword}
            <div className="col-span-12 xl:col-span-12 flex w-full justify-end gap-4 z-50">
                <Menu>
                    <Menu.Button>
                        <Button  variant='primary' size='sm'>
                            Action
                        </Button>
                    </Menu.Button>
                    <Menu.Items className="w-40">
                        <Menu.Item 
                            onClick={()=>navigate(`/employee/update/${id}`)}
                            >
                            Update User
                        </Menu.Item>
                        <Menu.Item 
                            onClick={()=>setShowModal(!showModal)}
                            >
                            Change Password
                        </Menu.Item>
                        <Menu.Item 
                            className={`hover:bg-red-500 hover:text-white`}
                            onClick={()=>deleteData()}
                            >
                            Delete
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
                <Button
                    variant={`secondary`}
                    size='sm'
                    onClick={()=>navigate('/employee/data')}
                    >
                    Back to Employe
                </Button>
            </div>
            <div className="col-span-12 xl:col-span-12">
                <ProfileCover 
                    users={dataUser}
                    uploadPhoto={uploadPhoto}
                />
            </div>
            <div className="col-span-12 xl:col-span-8">
                <div>
                    <DataUser 
                        users={dataUser}
                        title={`Data User`}
                    />
                </div>
                <div className='mt-4'>
                    <UserRelate
                        datas={dataUserRelates}
                        page={pageRelate}
                        limit={limitRelate}
                        nextPage={nextPageRelate}
                        prevPage={prevPageRelate}
                        allPage={allPageRelate}
                        search={search}
                        setSearch={setSearch}
                        link='/absen/view/'
                        viewTrash={true}
                        deleteAction={deleteAction}
                    />
                </div>
                <div className='mt-4'>
                    <AddUserRelate 
                        addSubmit={addDataUserRelate}
                        datas={datasSearch}
                        search={serachUser}
                        setSearch={setSearchUser}
                    />
                </div>
            </div>
            <div className="col-span-12 xl:col-span-4">
                <div>
                    {viewStatusUser}
                    {formEditStatusUser}
                </div>
                <div className='mt-4'>
                    {viewPrivilegeUser}
                    <EditViewPrivilege 
                        title={`Edit Privilege User`}
                        datas={dataUser}
                        changeEditPrivilege={setIsViewPrivilege}
                        viewEditPriviege={isViewPrivilege}
                    />
                    <CreatePrivilege
                        title={`Create Privilege User`}
                        datas={dataUser}
                        changeEditPrivilege={setIsViewPrivilege}
                        viewCreatePriviege={isViewPrivilege}
                    />
                </div>
            </div>
        </div>
    )
}

export default viewEmployePage