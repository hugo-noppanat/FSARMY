import { Fragment, useState, useEffect} from "react";
import { Button, Spacer, Row, Card, Grid, Modal, Text} from "@nextui-org/react";
import Personalized from "../Personal_Info/tabs/Personalized";
import HeaderMenuBar from "../../components/headerMenuBar";
import FamilyForm from "../Personal_Info/tabs/FamilyForm";
import EducationForm from "../Personal_Info/tabs/EducationForm";
import OtherInfoForm from "../Personal_Info/tabs/OtherInfoForm";
import UniformForm from "../Personal_Info/tabs/UniformForm";
import TimeLineForm from "../Personal_Info/tabs/TimeLineForm";
import DhForm from "../Medical_Info/tabs/DhForm";
import { useRouter } from "next/router";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import UseAxios from "../../components/UseAxios";

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
    userProfile,
    setAuthenticate,
    setUserProfile,
  } = props;
  const [pageName, setPageName] = useState("ข้อมูลประวัติส่วนตัว");
  const {setValue, handleSubmit} = reactHookForm;
  const [selectAddress, setSelectAddress] = useState(null);
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState('');
  const [q6, setQ6] = useState('');
  const [q7, setQ7] = useState('');
  const [q8, setQ8] = useState('');
  const [isOpenedSuccess, setIsOpenedSuccess] = useState(false);
  const [isOpenedError, setIsOpenedError] = useState(false);
  const router = useRouter();

  const onChangePage = (dat) => {
    let listPage = [
      "ข้อมูลประวัติส่วนตัว",
      "ข้อมูลครอบครัว",
      "ข้อมูลการศึกษา",
      "ข้อมูลทางการแพทย์",
      "ข้อมูลเครื่องแต่งกาย",
      "ข้อมูลคัดกรองโควิด-19",
      "ข้อมูลอื่นๆ",
    ]
    let maxPage = 7;
    if (page < maxPage) {
      setPage(page + 1);
      setPageName(listPage[page])
    }
  };

  const onSubmitForm = async (data) => {
    const dataForm ={
      ...data,
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
      q5: q5,
      q6: q6,
      q7: q7,
      q8: q8,
      create_user: 'system',
    }
    const submit = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/authen/submitRegNewSoldier`,
      method: 'post',
      data: dataForm,
    })

    console.log(submit);

    if(submit?.status === 'success'){
      setIsOpenedSuccess(true);
    }else{
      setIsOpenedError(true);
    }
  };

  const closeModel = () => {
    if(isOpenedSuccess){
      setIsOpenedSuccess(false);
      setAuthenticate(false);
      setUserProfile(null);
      setPage(1);
    }else{
      setIsOpenedError(false);
    }
  }

  const changeAutoComplete = (data) =>{
    thaiAddress.find((item) =>{
      if(item.title == data){
        setSelectAddress(item);
      }
    })
  }

  useEffect(() => {
    if(selectAddress){
      setValue("O_province", selectAddress.province_code.toString());
      setValue("O_district",selectAddress.amphoe_code.toString());
      setValue("O_subDistrict",  selectAddress.district_code.toString());
      setValue("O_zipcode", selectAddress.amphoe_code.toString());
    }
  },[selectAddress])

  useEffect(() => {
    if(userProfile){
      setValue("firstname", userProfile.FRIST_NAME);
      setValue("lastname", userProfile.LAST_NAME);
      setValue("idcard", userProfile.PERSOANL_ID);
    }
  },[userProfile])

  return (
    <Fragment>
      <HeaderMenuBar
        pageName={pageName}
      />
      
      <Grid.Container justify="center">
      <Spacer y="2" />
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
            selectAddress={selectAddress}
            isRegister={true}
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
            <DhForm
              reactHookForm={reactHookForm}
              drugType={drugType}
              timimg={timimg}
              ndn={ndn}
              dn={dn}
              yn={yn}
              isRegister={true}
            />
          )}
          {page === 5 && (
            <UniformForm
              reactHookForm={reactHookForm}
              size={size}
            />
          )}
          {
            page === 6 && (
              <TimeLineForm
                reactHookForm={reactHookForm}
                province={province}
                district={district}
                dateLists={dateLists}
                q1={q1}
                q2={q2}
                q3={q3}
                q4={q4}
                q5={q5}
                q6={q6}
                q7={q7}
                q8={q8}
                setQ1={setQ1}
                setQ2={setQ2}
                setQ3={setQ3}
                setQ4={setQ4}
                setQ5={setQ5}
                setQ6={setQ6}
                setQ7={setQ7}
                setQ8={setQ8}
              />
          )}
          {page === 7 && (
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
          <Button 
          // onPress={() => {page == 7 ? handleSubmit(onSubmitForm) : onChangePage()}}
            // onPress={handleSubmit(onSubmitForm)}
            onPress={page == 7 ? handleSubmit(onSubmitForm) : onChangePage}
          >
            {page !== 7 ? "ถัดไป" : "ยืนยัน"}
          </Button>
        </Row>
      </Card>
      </Grid.Container>

      <Modal
        // closeButton
        aria-labelledby="modal-title"
        open={isOpenedSuccess}
        // onClose={closeModel}
      >
        <Modal.Header>
        <CheckCircleOutlineIcon  style={{ color: 'green', fontSize: '80px', marginTop: "20px"}} />
         

        </Modal.Header>
        <Modal.Body>
            <Row justify="center">
            <Text h5 size={25} css={{color: 'green', marginTop:"20px"}}>
            บันทึกข้อมูลสำเร็จ
          </Text>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="success" onPress={closeModel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        // closeButton
        aria-labelledby="modal-title"
        open={isOpenedError}
        // onClose={closeModel}
        css={{
          padding: "0px",
        }}
      >
        <Modal.Header>
        <ErrorOutlineIcon style={{ color: 'red', fontSize: '80px', marginTop: "20px"}} />
        </Modal.Header>
        <Modal.Body>
        <Row justify="center">
        <Text h5 size={25} css={{color: 'red', marginTop:"20px"}}>
            บันทึกข้อมูลล้มเหลว
          </Text>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeModel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </Fragment>
  );
}
