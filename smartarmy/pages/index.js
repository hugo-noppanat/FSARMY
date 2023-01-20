import MenuCard from "../components/MenuCard"

export default function Home() {
  const menu = {
    personalInfo :{
      name: "ข้อมูลประวัติส่วนตัว",
      icon: "person-lines-fill",
      description:"เพิ่ม แก้ไข ข้อมูลประวัติส่วนตัวของหทารใหม่",
    },
    medicalInfo :{
      name: "ข้อมูลการแพทย์",
      icon:"bag-plus",
      description:"เพิ่ม แก้ไข ข้อมูลการแพทย์ของทหารใหม่",
    },
    report :{
      name: "ข้อมูลรายงาน",
      icon: "card-list",
      description:"ดูสรุปข้อมูลรายงานต่างๆ ของทหารใหม่",
    },
    evalution : {
      name: "การประเมินผล",
      icon: "person-badge",
      description:"การประเมินผลการฝึกรายบุคคลของทหารใหม่",
    },
    importData :{
      name: "Import/Export",
      icon:"arrow-down-up",
      description:"การนำเข้าและส่งออกชุดข้อมูลต่างๆ ของทหารใหม่",
    },
    setting:{
      name: "การตั้งค่า",
      icon:"gear",
      description:"ตั้งค่าตัวเลือกข้อมูล และการเปิดปิดแบบฟอร์มของระบบ",
    }
  }

  // const menu_Maping = () =>{
  //   // for (let [key, value] of Object.entries(menu)){
  //   //   console.log(key, value);
  //   //   return(
  //   //     <MenuCard
  //   //       headerName={value.name}
  //   //       icon={value.icon}
  //   //       description={value.description}
  //   //     />
  //   //   )
  //   // }

  //   return(
  //     Object.values(menu).forEach(i =>{
  //       console.log(i.name);
  //       // <MenuCard
  //       //   headerName={i.name}
  //       //   icon={i.icon}
  //       //   description={i.description}
  //       // />
  //     })
  //   )
  // }
  

  return (
    <>
      <div className="row mt-4 mx-4">
        {/* <div className="col"> */}
          {/* <div className="container"> */}
            {
              Object.values(menu).map(i =>{
              return(
                  <MenuCard
                    headerName={i.name}
                    icon={i.icon}
                    description={i.description}
                  />
              )
              console.log(i);
              })
            }
          {/* </div> */}
        {/* </div> */}
        
      </div>
      
    </>
  )
}
