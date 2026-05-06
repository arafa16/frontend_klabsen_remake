import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  LoginUser,
  RegisterUser,
  resetAuth,
} from "../../stores/features/authSlice";
import { getMe, resetMe } from "../../stores/features/meSlice";

export const getLoginAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: dataLogin,
    isError: isErrorLogin,
    isSuccess: isSuccessLogin,
    isLoading: isLoadingLogin,
    message: messageLogin,
  } = useSelector((state: any) => state.auth);

  const {
    data: dataMe,
    isSuccess: isSuccessMe,
    isError: isErrorMe,
    loading: loadingMe,
    message: messageMe,
  } = useSelector((state: any) => state.me);

  useEffect(() => {
    if (isSuccessMe && dataMe) {
      if (!loadingMe) {
        dispatch(resetMe());
        navigate("/");
      }
    }
  }, [isSuccessMe, dataMe, loadingMe]);

  useEffect(() => {
    if (isSuccessLogin && dataLogin) {
      if (!isLoadingLogin) {
        dispatch(resetAuth());
        dispatch(getMe());
        setEmail("");
        setPassword("");
        setMessage(null);
      }
    }
  }, [isSuccessLogin, dataLogin, isLoadingLogin]);

  useEffect(() => {
    if (isErrorLogin && messageLogin) {
      if (!isLoadingLogin) {
        setMessage(messageLogin.data);
        setPassword("");
        dispatch(resetAuth());
      }
    }
  }, [isErrorLogin, messageLogin, isLoadingLogin]);

  const submitLogin = (e: any) => {
    e.preventDefault();
    dispatch(
      LoginUser({
        email,
        password,
      }),
    );
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    message,
    isLoadingLogin,
    submitLogin,
  };
};

export const getRegisterAuth = () => {
  const [absen_id, set_absen_id] = useState("");
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [nomor_hp, set_nomor_hp] = useState("");
  const [gander_id, set_gander_id] = useState("");
  const [penempatan_id, set_penempatan_id] = useState("");
  const [message, setMessage] = useState<any>(null);

  const dispatch = useDispatch();

  const {
    data: data_register,
    isError: is_error_register,
    isSuccess: is_success_register,
    isLoading: is_loading_register,
    message: message_register,
  } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (is_success_register && message_register) {
      if (!is_loading_register) {
        console.log(message_register, "message register");
        set_absen_id("");
        set_name("");
        set_email("");
        set_password("");
        set_nomor_hp("");
        set_penempatan_id("");
        set_gander_id("");
        setMessage(message_register);
        dispatch(resetAuth());
      }
    }
  }, [is_success_register, message_register, is_loading_register]);

  useEffect(() => {
    if (is_error_register && message_register) {
      if (!is_loading_register) {
        setMessage(message_register && message_register.data);
        dispatch(resetAuth());
      }
    }
  }, [is_error_register, message_register, is_loading_register]);

  const submit_register = (e: any) => {
    e.preventDefault();
    dispatch(
      RegisterUser({
        absen_id,
        name,
        email,
        password,
        nomor_hp: nomor_hp,
        gander_id,
        penempatan_id: penempatan_id,
      }),
    );
  };
  return {
    absen_id,
    set_absen_id,
    name,
    set_name,
    email,
    set_email,
    password,
    set_password,
    nomor_hp,
    set_nomor_hp,
    gander_id,
    set_gander_id,
    penempatan_id,
    set_penempatan_id,
    message,
    is_loading_register,
    submit_register,
  };
};
