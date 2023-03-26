import { Fragment, useState, useEffect} from "react";
import { Button, Container, Spacer, Row, Card, Grid } from "@nextui-org/react";
import Personalized from "../Personal_Info/tabs/Personalized";
import HeaderMenuBar from "../../components/headerMenuBar";
import FamilyForm from "../Personal_Info/tabs/FamilyForm";
import EducationForm from "../Personal_Info/tabs/EducationForm";
import OtherInfoForm from "../Personal_Info/tabs/OtherInfoForm";
import UniformForm from "../Personal_Info/tabs/UniformForm";
import TimeLineForm from "../Personal_Info/tabs/TimeLineForm";

export default function RegPage(props) {
  const { reactHookForm, thaiAddress, page, setPage,
    subDistrict,
    district,
    province,
    zipcode,
    status,
    statusLife,
    drugType,
    timimg,
    yn,
    hnh,
    ndn,
    size,
    dn,
    statusLiving,
    education,
    yep,
    reasonEntry,
    ability,
    dateLists,
  } = props;
  const [pageName, setPageName] = useState("ข้อมูลประวัติส่วนตัว");
  const onChangePage = () => {
    let listPage = [
      "ข้อมูลประวัติส่วนตัว",
      "ข้อมูลครอบครัว",
      "ข้อมูลการศึกษา",
      "ข้อมูลเครื่องแต่งกาย",
      "ข้อมูลอื่นๆ",
    ]
    let maxPage = 6;
    if (page < maxPage) {
      setPage(page + 1);
      setPageName(listPage[page])
    }
  };

  const changeAutoComplete = (data) =>{
    thaiAddress.find((item) =>{
      if(item.title == data){
        console.log("find", item);
      }
    })
  }

  return (
    <Fragment>
      <HeaderMenuBar
        pageName={pageName}
        // selectPage={[]}
        // setSelectPage={[]}
        // setEditPage={[]}
        // setViewPage={[]}
        // viewPage={[]}
        // editPage={[]}
      />
      
      <Grid.Container justify="center">
      <spacer y="2" />
      <Card
        justify="center"
        css={{
          width: "95%",
        }}
      >
        <Row>
          {page === 1 && (
          <Personalized
            reactHookForm={reactHookForm}
            thaiAddress={thaiAddress}
            changeAutoComplete={changeAutoComplete}
            province={province}
            district={district}
            subDistrict={subDistrict}
            zipcode={zipcode}
          />
          )}
          {page === 2 && (
            <FamilyForm
              reactHookForm={reactHookForm}
              thaiAddress={thaiAddress}
              changeAutoComplete={changeAutoComplete}
              province={province}
              district={district}
              subDistrict={subDistrict}
              zipcode={zipcode}
              statusFamily={statusLiving}
              status={status}
              statusLife={statusLife}
            />
          )}
          {page === 3 && (
            <EducationForm
              reactHookForm={reactHookForm}
              province={province}
              district={district}
              subDistrict={subDistrict}
              zipcode={zipcode}
              yn={yn}
              education={education}
            />
          )}
          {page === 4 && (
            <UniformForm
              reactHookForm={reactHookForm}
              size={size}
            />
          )}
          {
            page === 5 && (
              <TimeLineForm
                reactHookForm={reactHookForm}
                province={province}
                district={district}
                dateLists={dateLists}
              />
          )}
          {page === 6 && (
            <OtherInfoForm
              reactHookForm={reactHookForm}
              province={province}
              district={district}
              subDistrict={subDistrict}
              zipcode={zipcode}
              hdh={hnh}
              yep={yep}
              ability={ability}
              reasonEntry={reasonEntry}
            />
          )}
        </Row>
        <Spacer y="2" />
        <Row justify="end" css={{paddingRight:"20px", paddingBottom:"30px"}}>
          <Button onClick={() => onChangePage()}>
            {page !== 6 ? "ถัดไป" : "ยืนยัน"}
          </Button>
        </Row>
      </Card>
      </Grid.Container>
    </Fragment>
  );
}
