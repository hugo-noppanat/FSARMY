import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap"
          rel="stylesheet"
        />
        <link 
          rel="stylesheet" 
          // href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" 
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
          crossOrigin="anonymous">
        </link>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" 
          integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" 
          crossOrigin="anonymous">
        </link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
      </Head>
      {
        router.asPath !== '/login' && <Navbar/>
      }
      <main>
      <Component {...pageProps} />
      </main>
      {
        router.asPath !== '/login' && <Footer/>
      }
      
    </>
  )
}

export default MyApp
