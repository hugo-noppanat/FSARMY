import MenuCard from "../components/MenuCard"
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]";
import UseAxios from "../components/UseAxios";
import { useEffect, useState } from "react";
import {getSession} from 'next-auth/react';

export default function Home() {
  // const token = getSession();
  const [menu, setMenu] = useState([])
  const [count, setCount] = useState(0)
  const {data:session} = useSession({
    required: true,
  })

  // window.localStorage.setItem("user", session.user)

  if(!session){
    return(
      <></>
    )
  }

  async function loadMenu (){

    const res = await UseAxios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_SSARMY_AUTHEN}/masterProgram/getProgramByRole`,
      data: {
        ROLE_ID : session.role,
      },
      auth: session.accessToken
    })

    if(res.success){
      let menu = res?.data.map(i => {
        return(
          {
            name: i.NAME,
            icon: i.ICONNAME,
            description: i.DESCRIPTION,
            path: i.PATH,
          }
        )
        })
  
      setMenu(menu)
    }
  }
  
  if(count < 3){
    loadMenu();
    setCount(count+1)
  }

  return (
    <>
      <div className="container-fluid" 
        style={{ "backgroundColor": "#84CDF8", "borderBottomRightRadius":"20px", "borderBottomLeftRadius":"20px"}}>
        <div className="row mt-3 pt-4" key={`${uuidv4()}`}>
            {
              Object.values(menu).map(i =>{
              return(
                  <MenuCard
                    headerName={i.name}
                    icon={i.icon}
                    description={i.description}
                    path={i.path}
                    key={`${uuidv4()}`}
                  />
              )
              })
            }
          </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if(!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}
