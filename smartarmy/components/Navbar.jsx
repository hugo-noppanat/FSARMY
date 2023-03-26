import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from '../image/logo_default.png'
// import { useAuth } from "../contexts/auth";
import { signOut,useSession} from 'next-auth/react'
// import signin from '../pages/login'
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./Layout.js";
// import { AcmeLogo } from "./AcmeLogo.js";
// import { useRouter } from "next/router";



export default function NavbarCustom() {
    // const { logout } = useAuth();
    const {data:session} = useSession()
    const router = useRouter()

    const logoutByUser = async() =>{
        await signOut();
    }

    if(!session && router.pathname === '/login'){
        return(<div></div>)
    }
    return(
        // <nav className="navbar navbar-light" style={{"backgroundColor": "#0c9aec"}}>
        //     <div className="container-fluid">
        //         <span className="navbar-brand" href="#" style={{"fontFamily": "Cuprum, sans-serif"}}>
        //             <Image src={logo} alt="" width="35" height="50" className="d-inline-block"/>
        //             <h3 className="d-inline-block mx-3">New Soldier Registry (N.S.R)</h3>
        //         </span>
        //         <span onClick={logoutByUser} className="navbar-btn" > ออกจากระบบ </span>
        //     </div>
        // </nav>
        <Layout >
      <Navbar 
      variant="sticky"
      css={{
        background: "#0c9aec",
      }}
      > 
        <Navbar.Brand >
          <Image src={logo} alt="" width="50" height="65" className="d-inline-block mx-3"/>
          <Text h4 color="inherit" hideIn="xs">
            New Soldier Registry (N.S.R)
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          {session && (
          <Navbar.Link color="inherit" onClick={logoutByUser}>
            ออกจากระบบ
          </Navbar.Link>
          )}
        </Navbar.Content>
      </Navbar>
      </Layout>
        
    )
}