import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { Fragment, useEffect, useState } from "react";
import HeaderMenuBar from "../../components/headerMenuBar";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DailyHealth from "./tabs/DailyHealth";
import MedicalInfo from "./tabs/MedicalInfo";
import { useForm } from "react-hook-form";

export default function Medical_Info() {
  const [selectData, setSelectData] = useState([]);
  const [editData, setEditData] = useState(false);
  const [viewData, setViewData] = useState(false);
  const [pageName, setPageName] = useState("ข้อมูลทางการแพทย์");
  const reactHookForm = useForm();

  //change page name
  useEffect(() => {
    if (selectData.length === 0) {
      setPageName("ข้อมูลทางการแพทย์");
    }
  }, [selectData]);

  useEffect(() => {
    console.log("E",selectData);
  }, [selectData]);

  // const editFunction = (rows) => {
  //   console.log(rows);
  //   setSelectData(rows);
  //   setEditData(true);
  // }
  
  // const viewFunction = (rows) => {
  //   console.log(rows);
  //   setSelectData(rows);
  //   setViewData(true);
  // }

  return (
    <Fragment>
      <HeaderMenuBar
        pageName={pageName}
        selectPage={selectData}
        setSelectPage={setSelectData}
        setEditPage={setEditData}
        setViewPage={setViewData}
        viewPage={viewData}
        editPage={editData}
      />
      {selectData.length === 0 && (
        <Grid.Container gap={2}>
          <Grid xs={12} justify="center" css={{ marginTop: "10px" }}>
            <Card
              isPressable
              isHoverable
              variant="bordered"
              css={{ p: "$6", mw: "90%" }}
              onClick={() => {
                setSelectData("DailyHealth");
                setPageName("สุขภาพประจำวันของทหารใหม่");
              }}
            >
              <Card.Header>
                <VolunteerActivismIcon sx={{ fontSize: 60 }} />
                <Grid.Container
                  css={{ pl: "$6", paddingLeft: "25px" }}
                  // justify="center"
                  // align="center"
                >
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      สุขภาพประจำวันของทหารใหม่
                    </Text>
                  </Grid>
                  {/* <div className="line" style={{height:"0px"}}></div> */}
                  <Grid xs={12} css={{ marginTop: "10px" }}>
                    <Text css={{ color: "$accents8", fontSize: "80%" }}>
                      ระบบบันทึก แก้ไข ข้อมูลการวัดอุณหภูมิ และ ปัสสาวะ
                      ประจำวันของทหารใหม่
                    </Text>
                  </Grid>
                </Grid.Container>
                <KeyboardArrowRightIcon sx={{ fontSize: 60 }} />
              </Card.Header>
            </Card>
          </Grid>
          <Grid xs={12} justify="center">
            <Card
              isPressable
              isHoverable
              variant="bordered"
              css={{ p: "$6", mw: "90%" }}
              onClick={() => {
                setSelectData("MedicalInfo");
                setPageName("ข้อมูลทางการแพทย์ของทหารใหม่");
              }}
            >
              <Card.Header>
                <HealthAndSafetyIcon sx={{ fontSize: 60 }} />
                <Grid.Container
                  css={{ pl: "$6", paddingLeft: "25px" }}
                  // justify="center"
                  // align="center"
                >
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      ข้อมูลทางการแพทย์ของทหารใหม่
                    </Text>
                  </Grid>
                  {/* <div className="line" style={{height:"0px"}}></div> */}
                  <Grid xs={12} css={{ marginTop: "10px" }}>
                    <Text css={{ color: "$accents8", fontSize: "80%" }}>
                      ระบบบันทึก แก้ไข ข้อมูลสุขภาพของทหารใหม่ เช่น โรคประจำตัว
                      BMI CPK สารเสพติด และอื่นๆ
                    </Text>
                  </Grid>
                </Grid.Container>
                <KeyboardArrowRightIcon sx={{ fontSize: 60 }} />
              </Card.Header>
            </Card>
          </Grid>
        </Grid.Container>
      )}
      {selectData === "MedicalInfo" && 
        <DailyHealth
          selectData={selectData}
          setSelectData={setSelectData}
          setEditData={setEditData}
          setViewData={setViewData}
          editData={editData}
          viewData={viewData}
          reactHookForm={reactHookForm}
          // editFunction={editFunction}
          // viewFunction={viewFunction}
        />
      }
      {selectData === "DailyHealth" && (
        <MedicalInfo
        selectData={selectData}
        setSelectData={setSelectData}
        setEditData={setEditData}
        setViewData={setViewData}
        editData={editData}
        viewData={viewData}
        reactHookForm={reactHookForm}
        />
      )}
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
