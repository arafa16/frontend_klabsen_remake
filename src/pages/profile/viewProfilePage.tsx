import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDataUserById } from '../../features/user/user';
import { changePhotoProfile } from '../../features/user/setPhotoProfile';
import ProfileCover from '../../components/employee/profileCover';
import DataUser from '../../components/employee/dataUser';
import Button from '../../base-components/Button';
import { getMe } from '../../stores/features/meSlice';
import { useDispatch } from 'react-redux';
import { getMeAuth } from '../../features/auth/meAuth';

const viewProfilePage = () => {
    //get uuid
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    //get data auth
    const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

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
    
  return (
    <div className="grid grid-cols-12 gap-4 mt-5 text-xs">
        {modalChangePhoto}
        <div className="col-span-12 xl:col-span-12">
            <ProfileCover 
                users={dataUser}
                uploadPhoto={uploadPhoto}
            />
        </div>
        <div className="col-span-12 xl:col-span-8">
            <DataUser 
                users={dataUser}
                title={`Data User`}
            />
        </div>
        <div className={`${dataMe && dataMe.privilege && dataMe.privilege.editUserSub !== true ? 'hidden' : '' } col-span-12 xl:col-span-4 intro-y`}>
            <Button 
                variant='primary'
                size='sm'
                className='w-full'
                onClick={()=>navigate(`/profile/edit/${id}`)}
            >
                Edit Data User
            </Button>
        </div>
    </div>
  )
}

export default viewProfilePage