import MenuCard from "../components/MenuCard"
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]";
import { useRouter } from "next/router";


export default function Home() {
  const {data:session} = useSession({
    required: true,
  })

  // window.localStorage.setItem("user", session.user)

  if(!session){
    return(
      <></>
    )
  }

  const menu = {
    personalInfo :{
      name: "ข้อมูลประวัติส่วนตัว",
      icon: "person-lines-fill",
      description:"เพิ่ม แก้ไข ข้อมูลประวัติส่วนตัวของหทารใหม่",
      path: "/Personal_Info"
    },
    medicalInfo :{
      name: "ข้อมูลการแพทย์",
      icon:"bag-plus",
      description:"เพิ่ม แก้ไข ข้อมูลการแพทย์ของทหารใหม่",
      path: "/Medical_Info"
    },
    report :{
      name: "ข้อมูลรายงาน",
      icon: "card-list",
      description:"ดูสรุปข้อมูลรายงานต่างๆ ของทหารใหม่",
      path: "/Report"
    },
    evalution : {
      name: "การประเมินผล",
      icon: "person-badge",
      description:"การประเมินผลการฝึกรายบุคคลของทหารใหม่",
      path: "/PerformanceForm"
    },
    importData :{
      name: "Import/Export",
      icon:"arrow-down-up",
      description:"การนำเข้าและส่งออกชุดข้อมูลต่างๆ ของทหารใหม่",
      path: "/Import"
    },
    setting:{
      name: "การตั้งค่า",
      icon:"gear",
      description:"ตั้งค่าตัวเลือกข้อมูล และการเปิดปิดแบบฟอร์มของระบบ",
      path: "/Setting"
    }
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
  // const router = useRouter();
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
