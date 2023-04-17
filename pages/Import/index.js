import { useEffect, useState, Fragment} from 'react';
import { Card, Text, Button, Grid} from '@nextui-org/react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HeaderMenuBar from '../../components/headerMenuBar';

export default function Import(){
  const [selectData, setSelectData] = useState([]);
  const [editData, setEditData] = useState(false);
  const [viewData, setViewData] = useState(false);
  const [pageName, setPageName] = useState("Import/Export");

  //change page name
  useEffect(() => {
    if (selectData.length === 0) {
      setPageName("Import/Export");
    }
  }, [selectData]);

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
                setSelectData("import");
                setPageName("นำข้อมูลเข้า");
              }}
            >
              <Card.Header>
                <FileUploadIcon sx={{ fontSize: 60 }} />
                <Grid.Container
                  css={{ pl: "$6", paddingLeft: "25px" }}
                  // justify="center"
                  // align="center"
                >
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      นำข้อมูลเข้า
                    </Text>
                  </Grid>
                  {/* <div className="line" style={{height:"0px"}}></div> */}
                  <Grid xs={12} css={{ marginTop: "10px" }}>
                    <Text css={{ color: "$accents8", fontSize: "80%" }}>
                      นำข้อมูลเข้าระบบฐานขัอมูล เพื่อจัดเก็บข้อมูลต่างๆ
                      โดยการอัพโหลดไฟล์เป็น comma separated values (CSV)
                      เท่านั้น
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
                setSelectData("export");
                setPageName("ส่งออกข้อมูล");
              }}
            >
              <Card.Header>
                <FileDownloadIcon sx={{ fontSize: 60 }} />
                <Grid.Container
                  css={{ pl: "$6", paddingLeft: "25px" }}
                  // justify="center"
                  // align="center"
                >
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      ส่งออกข้อมูล
                    </Text>
                  </Grid>
                  {/* <div className="line" style={{height:"0px"}}></div> */}
                  <Grid xs={12} css={{ marginTop: "10px" }}>
                    <Text css={{ color: "$accents8", fontSize: "80%" }}>
                      การส่งออกข้อมูลในระบบฐานข้อมูล
                      เพื่อนำไปใช้งานต่อโดยการออกรายงานต่างๆ ในรูปแบบไฟล์ comma
                      separated values (CSV) เท่านั้น
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
                setSelectData("qrcode");
                setPageName("คิวอาร์โค้ด");
              }}
            >
              <Card.Header>
                <QrCode2OutlinedIcon sx={{ fontSize: 60 }} />
                <Grid.Container
                  css={{ pl: "$6", paddingLeft: "25px" }}
                  // justify="center"
                  // align="center"
                >
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      คิวอาร์โค้ด
                    </Text>
                  </Grid>
                  {/* <div className="line" style={{height:"0px"}}></div> */}
                  <Grid xs={12} css={{ marginTop: "10px" }}>
                    <Text css={{ color: "$accents8", fontSize: "80%" }}>
                      คิวอาร์โค้ดสำหรับทหารใหม่
                    </Text>
                  </Grid>
                </Grid.Container>
                <KeyboardArrowRightIcon sx={{ fontSize: 60 }} />
              </Card.Header>
            </Card>
          </Grid>
        </Grid.Container>
      )}
      {selectData === "import" && <ImportPage 
        setSelectData={setSelectData}
      />}
      {selectData === "export" && <h1>export</h1>}
      {selectData === "qrcode" && <ExportQR/>}
    </Fragment>
  );
}

import { getServerSession } from 'next-auth';
import { authOptions } from "../api/auth/[...nextauth]";
import ImportPage from './importPage';
import ExportQR from './exportqr';
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)
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