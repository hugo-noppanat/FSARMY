import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from '../image/logo_default.png'
export default function Navbar() {
    const router = useRouter()
    const direction = () => {
        let href = "/login"
        router.push({pathname: href})
    }
    return(
        <div className='row nav-contrainer'>
            <div className='col'>
                <div className='navbar navber-defualt'>
                    <div className="container">
                        <div className="navbar-header">
                            <div className="navbar-brand mb-1">
                                <Image 
                                    src={logo}
                                    width={45}
                                    height={70}
                                />
                                <h3 className='navbar-text mx-3 mt-3'>ระบบจัดการข้อมูลทหารใหม่</h3>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-right mt-3'>
                            <p className='navbar-text' onClick={direction}>ล็อกอิน</p>
                    </div>
                </div>
            </div>
        </div>
    )
}