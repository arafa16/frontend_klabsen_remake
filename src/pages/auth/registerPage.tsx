import React from 'react'
import { FormInput, FormSelect } from '../../base-components/Form'
import Button from '../../base-components/Button'
import LoadingIcon from '../../base-components/LoadingIcon'
import { getRegisterAuth } from '../../features/auth/auth'
import { getDataPenempatanSelect } from '../../features/penempatan/penempatan'
import { useNavigate } from 'react-router-dom'
import { getDataGanderSelect } from '../../features/gander/gander'
import { getMessageShow } from '../../features/messageShow'

const registerPage = () => {
    const navigate = useNavigate();

    //penempatan
    const {dataResult:dataPenempatan} = getDataPenempatanSelect();
    
    //data select gander
    const {dataResult:dataGander} = getDataGanderSelect();


    const {
        absen_id, set_absen_id,
        name, set_name,
        email, set_email, 
        password, set_password,
        nomor_hp, set_nomor_hp, 
        gander_id, set_gander_id,
        penempatan_id, set_penempatan_id,
        message,
        is_loading_register, 
        submit_register
    } = getRegisterAuth();

    //message
    const messageShow = getMessageShow(message);

    return (
        <div className="container">
            {messageShow}
            <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20 text-xs">
                <div className="w-96 intro-y">
                <form onSubmit={submit_register}>
                    <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                        <FormInput
                            type="text"
                            formInputSize="sm"
                            className="block px-4 py-3"
                            placeholder="Absen Id"
                            required
                            value={absen_id}
                            onChange={(e)=>set_absen_id(e.target.value)}
                        />
                        <FormInput
                            type="text"
                            formInputSize="sm"
                            className="block px-4 py-3 mt-4"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={(e)=>set_name(e.target.value)}
                        />
                        <FormInput
                            type="email"
                            formInputSize="sm"
                            className="block px-4 py-3 mt-4"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e)=>set_email(e.target.value)}
                        />
                        <FormInput
                            type="password"
                            formInputSize="sm"
                            className="block px-4 py-3 mt-4"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e)=>set_password(e.target.value)}
                        />
                        <FormInput
                            type="text"
                            formInputSize="sm"
                            className="block px-4 py-3 mt-4"
                            placeholder="Nomor Telpon/Hp"
                            required
                            value={nomor_hp}
                            onChange={(e)=>set_nomor_hp(e.target.value)}
                        />
                        <FormSelect
                            formSelectSize="sm"
                            className="block px-4 py-3 mt-4"
                            name='penempatan'
                            required
                            value={penempatan_id}
                            onChange={(e)=>set_penempatan_id(e.target.value)}
                            >
                            <option></option>
                            {dataPenempatan && dataPenempatan.map((data : any, index :any)=>(
                                <option key={index} value={data.id}>{data.name}</option>
                            ))}
                        </FormSelect>
                        <FormSelect
                            formSelectSize="sm"
                            className="block px-4 py-3 mt-4"
                            name='gander'
                            required
                            value={gander_id}
                            onChange={(e)=>set_gander_id(e.target.value)}
                            >
                            <option></option>
                            {dataGander && dataGander.map((data : any, index :any)=>(
                                <option key={index} value={data.id}>{data.name}</option>
                            ))}
                        </FormSelect>
                        <div className="mt-5 text-center xl:mt-8 xl:text-left">
                            <Button type="submit" variant="primary" className="w-full xl:mr-3">
                                {is_loading_register ? <LoadingIcon icon="circles" className="w-4 h4" color="white"  /> : 'Register'}
                            </Button>
                            <Button 
                                variant="outline-secondary" 
                                className="w-full mt-3"
                                type="button"
                                onClick={()=>navigate('/login')}
                                >
                                Sign in
                            </Button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        
    )
}

export default registerPage