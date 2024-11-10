import { useState, useRef, useEffect } from "react";
import { Dialog } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import {
    FormInput,
  } from "../../base-components/Form";

import { ChangePhotoProfile, resetPhoto } from "../../stores/features/photoSlice";
import { getMe } from "../../stores/features/meSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "../../base-components/LoadingIcon";

export const changePhotoProfile = (datas:any) => {
    const [showModal, setShowModal] = useState(false);
    const sendButtonRef = useRef(null);

    const [photo, setPhoto] = useState('');
    const [urlPhoto, setUrlPhoto] = useState('');
    const [message, setMessage] = useState<any>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isError, isSuccess, isLoading, message:messagePhoto} = useSelector(
        (state : any) => state.photo
    )

    useEffect(()=>{
        if(isSuccess && messagePhoto){
            if(!isLoading){
                setPhoto('');
                setUrlPhoto('');
                setMessage(messagePhoto);
                setShowModal(false);
                dispatch(resetPhoto());
                dispatch(getMe());
            }
        }
    },[isSuccess, messagePhoto, isLoading])

    useEffect(()=>{
        if(isError && messagePhoto && !isLoading){
            setMessage(messagePhoto.data)
            dispatch(resetPhoto());
        }
    },[isError, messagePhoto, isLoading])

    const chagePhoto = (e : any) => {
        const photo = e.target.files[0];
        setUrlPhoto(URL.createObjectURL(photo));
        setPhoto(photo);
    }

    const changePhoto = (e :any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', photo);

        dispatch(ChangePhotoProfile({
            uuid:datas.uuid,
            formData
        }))
    }

    const modalChangePhoto = (
        <Dialog
            open={showModal}
            onClose={() => {
            setShowModal(false);
            }}
            initialFocus={sendButtonRef}
        >
            <Dialog.Panel>
            <Dialog.Title>
                <h2 className="mr-auto text-base font-medium">
                    Photo Profile
                </h2>
            </Dialog.Title>
            <form onSubmit={changePhoto}>
            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                <div className="col-span-12 sm:col-span-12">
                    <FormInput
                        id="modal-form-1"
                        type="file"
                        onChange={chagePhoto}
                    />
                </div>
                <div className={`${!urlPhoto ? 'hidden' : ''} mt-5 w-40 h-40 overflow-hidden border-4 border-white rounded-full shadow-md image-fit`}>
                    <img
                    alt="user image"
                    src={urlPhoto}
                    />
                </div>
            </Dialog.Description>
            <Dialog.Footer>
                <Button
                type="button"
                variant="outline-secondary"
                onClick={() => {
                    setShowModal(false);
                }}
                className="w-20 mr-1"
                >
                Cancel
                </Button>
                <Button
                variant="primary"
                type="submit"
                className="w-20"
                ref={sendButtonRef}
                >
                    {isLoading ? <LoadingIcon icon="circles" className="w-4 h4" color="white"  /> : 'Upload' }
                
                </Button>
            </Dialog.Footer>
            </form>
            </Dialog.Panel>
        </Dialog>
    )

    return {
        modalChangePhoto, 
        message, urlPhoto,
        showModal, setShowModal,
        photo, setPhoto,
        isSuccess, isLoading, messagePhoto
    }
}