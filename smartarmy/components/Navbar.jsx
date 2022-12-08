import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from '../image/logo.png'
export default function Navbar() {
    const router = useRouter()
    const direction = () => {
        let href = "/login"
        router.push(href)
    }
    return(
        <div className='row nav-contrainer'>
            <div className='col-lg-12'>
                <div className='navbar navber-defualt'>
                    <div className="container">
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                <Image 
                                    src={logo}
                                    width={60}
                                    height={60}
                                />
                                <h3 className='navbar-text mx-3 mt-3'>ระบบจัดการข้อมูลทหารใหม่</h3>
                            </div>
                        </div>
                        <div >
                            <p className='navbar-text' onClick={direction}>ล็อกอิน</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}