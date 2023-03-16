import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider, useSession} from "next-auth/react"
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"
import { ThemeProvider as MuiThemeProvider, createTheme as createMuiTheme } from '@mui/material/styles';

function MyApp({ Component, pageProps, session}) {
  const router = useRouter()
  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        primary: '#0C9AEC',
        secondary: '#84CDF8',
        error: '#FCC5D8',
      },
      fonts: {
        sans: "Inter, -apple-system, BlinkMacSystemFont, 'Prompt', sans-serif;",
      }
    }
  })
  const thememui = createMuiTheme({
    typography: {
     "fontFamily": `"Prompt", sans-serif`
    }
 });

  return (
    <>
      <SessionProvider session={session}>
        <NextUIProvider theme={theme}>
          <MuiThemeProvider theme={thememui}>
          <Navbar/>  
          <Component {...pageProps} />
          <ToastContainer />
          {/* <Footer/> */}
          </MuiThemeProvider>
        </NextUIProvider>
      </SessionProvider>
      
      
    </>
  )
}

export default MyApp
