import { useState, useRef, useEffect } from "react";
import { Dialog } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import {
    FormInput,
  } from "../../base-components/Form";

import { changePassword, resetUsers } from "../../stores/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const resetPassword = (datas:any) => {
    const [showModal, setShowModal] = useState(false);
    const sendButtonRef = useRef(null);

    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [message, setMessage] = useState<any>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isError, isSuccess, isLoading, message:messageUser} = useSelector(
        (state : any) => state.user
    )

    useEffect(()=>{
        if(isSuccess && messageUser){
            if(!isLoading){
                setMessage(messageUser)
                setPassword('');
                setConfPassword('');
                setShowModal(false);
                dispatch(resetUsers());
            }
        }
    },[isSuccess, messageUser, isLoading])

    useEffect(()=>{
        if(isError && messageUser && !isLoading){
            setMessage(messageUser.data)
            dispatch(resetUsers());
        }
    },[isError, messageUser, isLoading])

    const resetPassword = (e :any) => {
        e.preventDefault();
        dispatch(changePassword({
            uuid:datas.uuid,
            password,
            confPassword
        }))
    }

    const modalResetPassword = (
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
                    Reset Password
                </h2>
            </Dialog.Title>
            <form onSubmit={resetPassword}>
            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                <div className="col-span-12 sm:col-span-12">
                    <FormInput
                        type="password"
                        placeholder="new password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="col-span-12 sm:col-span-12">
                    <FormInput
                        type="password"
                        placeholder="confirmation password"
                        value={confPassword}
                        onChange={(e)=>setConfPassword(e.target.value)}
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
                Reset
                </Button>
            </Dialog.Footer>
            </form>
            </Dialog.Panel>
        </Dialog>
    )

    return {
        modalResetPassword, 
        message,
        showModal, setShowModal,
        password, setPassword
    }
}