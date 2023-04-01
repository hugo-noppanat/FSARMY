import React from "react";
import {useForm} from 'react-hook-form';
// import InputVertical from "../components/InputVertical";
// import Buttons from "../components/button";
import cover from '../image/cover2.jpg';
import Image from 'next/image';
import logo from '../image/logo_non_bg.png'
import {signIn} from "next-auth/react";
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]";

export default function Signin({providers, loginError}){
    const {register,handleSubmit} = useForm();
    const [user, setUser] = useState("");
    const router = useRouter();

    const loginbyUser = async (dat) =>{
        const sec = signIn("credentials",{
            redirect: true,
            USER_ID: dat.username,
            PASSWORD: dat.password,
            callbackUrl:'/'
        });

        console.log(sec);
    }

    return(
        <section className="vh-100" style={{"height":"100%","width":"100%"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10" >
                    <div className="card" style={{"borderRadius": "1rem","backgroundColor": "#84CDF8"}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <Image src={cover} alt="login form" className="img-fluid" style={{"borderRadius": "1rem 0 0 1rem","height":"100%"}} />
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">

                            <form onSubmit={handleSubmit(loginbyUser)}>

                            <div className="d-flex align-items-center mb-3 pb-1 fw-bold" style={{"fontFamily": "Cuprum, sans-serif"}}>
                                <Image src={logo} alt="logo RTA" width="60" height="100" className="d-inline-block"/>
                                <h2 className="mx-3 fw-bold">New Soldier Registry (N.S.R)</h2>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label">ชื่อผู้ใช้งาน</label>
                                <input type="input" {...register('username')} name="username" className="form-control form-control-lg" />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label">รหัสผ่าน</label>
                                <input type="password" {...register('password')} name="password" className="form-control form-control-lg" />
                            </div>

                            <div className="pt-1 mb-4">
                                <button className="btn btn-dark btn-lg btn-block" type="submit">เข้าสู่ระบบ</button>
                            </div>

                            {/* <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!"
                                style="color: #393f81;">Register here</a></p>
                            <a href="#!" className="small text-muted">Terms of use.</a>
                            <a href="#!" className="small text-muted">Privacy policy</a> */}
                            </form>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);
    // const router = useRouter();
    if(session) {
      return {
        redirect: {
          destination: "/",
          permanent: false
        }
      }
    }
  
    return {
      props: {
  
      }
    }
  }
