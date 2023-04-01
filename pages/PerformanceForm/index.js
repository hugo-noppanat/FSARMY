import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { Fragment, useEffect, useState } from "react";
import { Grid, Card, Text } from "@nextui-org/react";
import HeaderMenuBar from "../../components/headerMenuBar";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BodyTest from "./BodyTest";
import Performances from "./Performances";
import ShootingTest from "./ShootingTest";
import TableCard from "../../components/DataTable";
import { useForm } from "react-hook-form";

export default function Performance() {
  const [selectData, setSelectData] = useState([]);
  const [editData, setEditData] = useState(false);
  const [viewData, setViewData] = useState(false);
  const [pageName, setPageName] = useState("การประเมินผลและการบันทึกผล");

  const reactHookForm = useForm();
  //change page name
  useEffect(() => {
    if (selectData.length === 0) {
      setPageName("การประเมินผลและการบันทึกผล");
    }
  }, [selectData]);

  const columns = [
    { name: "ยศชื่อ-นามสกุล", uid: "name" },
    { name: "รหัสบัตรประชาชน", uid: "id_card" },
    { name: "รหัสประจำตัวทหาร", uid: "rta_id" },
    { name: "สังกัด", uid: "detp" },
    { name: "หน่วย", uid: "sub_detp" },
    { name: "action", uid: "actions" },
  ];

  const loadDataTable = [
    {
      id: 21,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "พลทหาร สามารถสี่ สมบัติ",
      rta_id: "124567890",
      id_card: "1234567890123",
      detp: "ร.14 พัน 2",
      sub_detp: "ร้อย.อวบ.2",
    },
    {
      id: 24,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "พลทหาร สองสาม สมบัติ",
      rta_id: "445751258",
      id_card: "789456213555",
      detp: "ร.14 พัน 2",
      sub_detp: "ร้อย.อวบ.1",
    },
  ];

  const editFunction = (rows) => {
    console.log(rows);
    setEditData(rows);
    // setSelectData(rows);
  }
  
  const viewFunction = (rows) => {
    setViewData(rows);
    // setSelectData(rows);
  }

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
                setSelectData("bodyTest");
                setPageName("บันทึกผลการทดสอบสมรรถภาพทางด้านร่างกาย");
              }}
            >
              <Card.Header>
                <DirectionsRunIcon sx={{ fontSize: 60 }} />
                <Grid.Container
                  css={{ pl: "$6", paddingLeft: "25px" }}
                  // justify="center"
                  // align="center"
                >
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      บันทึกผลการทดสอบสมรรถภาพทางด้านร่างกาย
                    </Text>
                  </Grid>
                  {/* <div className="line" style={{height:"0px"}}></div> */}
                  <Grid xs={12} css={{ marginTop: "10px" }}>
                    <Text css={{ color: "$accents8", fontSize: "80%" }}>
                      ระบบบันทึกผลทดสอบสมรรถภาพของทหารใหม่
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
                setSelectData("shootingTest");
                setPageName("บันทึกผลการยิงปืน");
              }}
            >
              <Card.Header>
                <TrackChangesIcon sx={{ fontSize: 60 }} />
                <Grid.Container
                  css={{ pl: "$6", paddingLeft: "25px" }}
                  // justify="center"
                  // align="center"
                >
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      บันทึกผลการยิงปืน
                    </Text>
                  </Grid>
                  {/* <div className="line" style={{height:"0px"}}></div> */}
                  <Grid xs={12} css={{ marginTop: "10px" }}>
                    <Text css={{ color: "$accents8", fontSize: "80%" }}>
                      ระบบบันทึกผลคะแนนการยิงปืนในแต่ละครั้ง
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
                setSelectData("performance");
                setPageName("การประเมินผลรายบุคคล");
              }}
            >
              <Card.Header>
                <AssignmentIndIcon sx={{ fontSize: 60 }} />
                <Grid.Container
                  css={{ pl: "$6", paddingLeft: "25px" }}
                  // justify="center"
                  // align="center"
                >
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      การประเมินผลรายบุคคล
                    </Text>
                  </Grid>
                  {/* <div className="line" style={{height:"0px"}}></div> */}
                  <Grid xs={12} css={{ marginTop: "10px" }}>
                    <Text css={{ color: "$accents8", fontSize: "80%" }}>
                      ระบบประเมินผลของทหารใหม่เป็นรายบุคคล
                    </Text>
                  </Grid>
                </Grid.Container>
                <KeyboardArrowRightIcon sx={{ fontSize: 60 }} />
              </Card.Header>
            </Card>
          </Grid>
        </Grid.Container>
      )}
      {selectData === "bodyTest" && (
        <div>
          {editData || viewData ? (
            <BodyTest 
            userProfile={editData ? editData : viewData}
            reactHookForm={reactHookForm}
            />
          ) : (
            <TableCard
              columns={columns}
              data={loadDataTable}
              editFunction={editFunction}
              viewFunction={viewFunction}
              setSelectData={setSelectData}
            />
          )}
        </div>
      )}
      {selectData === "shootingTest" && (
        <div>
          {editData || viewData ? (
            <ShootingTest 
            userProfile={editData ? editData : viewData}
            reactHookForm={reactHookForm}
            />
          ) : (
            <TableCard
              columns={columns}
              data={loadDataTable}
              editFunction={editFunction}
              viewFunction={viewFunction}
              setSelectData={setSelectData}
            />
          )}
        </div>
      )}
      {selectData === "performance" && (
        <div>
          {editData || viewData ? (
            <Performances 
            userProfile={editData ? editData : viewData}
            reactHookForm={reactHookForm}
            />
          ) : (
            <TableCard
              columns={columns}
              data={loadDataTable}
              editFunction={editFunction}
              viewFunction={viewFunction}
              setSelectData={setSelectData}
            />
          )}
        </div>
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
