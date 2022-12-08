import React from "react";
import {useForm} from 'react-hook-form';
import InputVertical from "../components/InputVertical";
import Buttons from "../components/button";
import cover from '../image/cover.jpg';
import Image from 'next/image';
import logo from '../image/logo.png'

export default function login(){
    const reactHookForm = useForm();
    const {register,handleSubmit} = reactHookForm;
    const OnClicks = (data) =>{
        console.log(data)
    }

    return(
        <div className="row center">
            <div className="column rightBox auto-hidden">
                <Image 
                    src={cover}
                    width={784}
                    height={490}
                    // className="img-fluid"
                />
            </div>

            <div className="column leftBox">
                <form onSubmit={handleSubmit(OnClicks)}>
                    <div className="col">
                        <div className="centerBox">
                            <div className="col col-md-12 text-center">
                                <Image
                                    src={logo}
                                    width={90}
                                    height={90}
                                />
                            </div>
                            <h1 className="text-align-center mt-3 font-weight-bold">Smart Army</h1>
                            <div className="col col-md-12 mt-3">
                                <InputVertical
                                    label="ชื่อผู้ใช้งาน"
                                    formName="username"
                                    rule={{required : true}}
                                    reactHookForm={reactHookForm}
                                    col={12}
                                />
                                <InputVertical
                                    label="รหัสผ่าน"
                                    formName="password"
                                    rule={{required : true}}
                                    reactHookForm={reactHookForm}
                                    type="password"
                                    col={12}
                                />
                                
                            </div>
                            <div className="col-md-12 text-center">
                                <Buttons
                                    label="เข้าสู่ระบบ"
                                    typeButton={'submit'}
                                    className={'mt-4'}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}