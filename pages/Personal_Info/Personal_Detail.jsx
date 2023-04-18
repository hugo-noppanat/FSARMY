import { Card, Grid, Row, Button, Modal, Text} from "@nextui-org/react";
import { Fragment,useState, useEffect} from "react";
import Card_Info from "../../components/cardInfo";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Personalized from "./tabs/Personalized";
import PropTypes from 'prop-types';
import FamilyForm from "./tabs/FamilyForm";
import EducationForm from "./tabs/EducationForm";
import OtherInfoForm from "./tabs/OtherInfoForm";
import UniformForm from "./tabs/UniformForm";
const ThaiAddress = require(`../../image/ThaiAddress.json`);
import UseAxios from "../../components/UseAxios";
import { getSession } from "next-auth/react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function PersonalDetail(prop) {
  const { 
    editMode,
    userProfile,
    reactHookForm,
    subDistrict,
    district,
    province,
    zipcode,
    status,
    statusLife,
    // dyn,
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
    personal,
    setSelectData,
  } = prop;

  const [indexs, setIndex] = useState(1);
  const [selectAddress, setSelectAddress] = useState(null);
  const {handleSubmit, setValue} = reactHookForm;
  const [openSeccess, setOpenSeccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  const thaiAddress = ThaiAddress.map((item) => {
    return {title: `${item.district},${item.amphoe},${item.province},${item.zipcode}`, ...item}
  });

  const submitForm = async (data) =>{
    console.log("submit", data);
    const session = await getSession();
    const response = await UseAxios({
      method: "PUT",
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/callinfo/updateSoldier`,
      data: {
        ...data,
        modify_user: session?.user?.name,
      },
      auth: session?.accessToken,
    });
    
    if(response.status == 200){
      setOpenSeccess(true);
    }else{
      setOpenError(true);
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
    let genaral = personal[0];
    let address = personal[1];
    let hire = personal[2];
    console.log("genaral", genaral);
    if(genaral){
      // setValue("title", genaral.title);
      setValue("firstname", genaral[0].FRIST_NAME ? genaral[0].FRIST_NAME : null);
      setValue("lastname", genaral[0].LAST_NAME ? genaral[0].LAST_NAME : null);
      setValue("nickname", genaral[0].NICKNAME? genaral[0].NICKNAME : null);
      setValue("brithday", genaral[0].BRITH_DATE ? genaral[0].BRITH_DATE : null);
      setValue("age", genaral[0].AGE ? genaral[0].AGE : null);
      setValue("idCard", genaral[0].ID_CARD ? genaral[0].ID_CARD : null);
      setValue("rta_id", genaral[0].RTA_ID ? genaral[0].RTA_ID : null);
      setValue("blood", genaral[0].BLOOD_GRUOP ? genaral[0].BLOOD_GRUOP : null);
      setValue("rta_year", genaral[0].YEAR_ENTRY ? genaral[0].YEAR_ENTRY : null);
      setValue("mobile", genaral[0].PHONE_NUMBER ? genaral[0].PHONE_NUMBER : null);
      setValue("facebook", genaral[0].FACEBOOK ? genaral[0].FACEBOOK : null);
      setValue("twitter", genaral[0].TWITTER ? genaral[0].TWITTER : null);
      setValue("educationLevel", genaral[0].GRADLEVEL ? genaral[0].GRADLEVEL : null);
      setValue("S_name", genaral[0].GRADFROM ? genaral[0].GRADFROM : null);
      setValue("educationGenaral", genaral[0].STUDYREQ ? genaral[0].STUDYREQ : null);
      setValue("educationArmy", genaral[0].ROYALREQ ? genaral[0].ROYALREQ : null);
      setValue("clothesSize1", genaral[0].TRAINING_CLOTHES ? genaral[0].TRAINING_CLOTHES : null);
      setValue("clothesSize2", genaral[0].VNECK_SHIRT ? genaral[0].VNECK_SHIRT : null)
      setValue("clothesSize3", genaral[0].NIGHTDRESS ? genaral[0].NIGHTDRESS : null)
      setValue("clothesSize4", genaral[0].PANTS ? genaral[0].PANTS : null)
      setValue("clothesSize5", genaral[0].COMBAT ? genaral[0].COMBAT : null)
      setValue("clothesSize6", genaral[0].SNEAKERS ? genaral[0].SNEAKERS : null)
      setValue("clothesSize7", genaral[0].EXERCISE_SHOES ? genaral[0].EXERCISE_SHOES : null)
      setValue("occupation", genaral[0].JOB_BEFORE_ENTRY ? genaral[0].JOB_BEFORE_ENTRY : null)
      setValue("workplace", genaral[0].JOB_LOCATION ? genaral[0].JOB_LOCATION : null)
      setValue("income", genaral[0].INCOME ? genaral[0].INCOME : null)
      setValue("englishLanguageAbility", genaral[0].ENGLISH ? genaral[0].ENGLISH : null)
      setValue("MyanmarLanguageAbility", genaral[0].BURMESE ? genaral[0].BURMESE : null)
      setValue("karanLanguageAbility", genaral[0].KAREN ? genaral[0].KAREN : null)
      setValue("other_language", genaral[0].LOCAL ? genaral[0].LOCAL : null)
      setValue("jobAbility", genaral[0].PROFESSIONAL ? genaral[0].PROFESSIONAL : null)
      setValue("MusicAbility", genaral[0].MUSIC_TALENT ? genaral[0].MUSIC_TALENT : null)
      setValue("SportAbility", genaral[0].SPORTS_TALENT ? genaral[0].SPORTS_TALENT : null)
      setValue("DriverAbility", genaral[0].DRIVER ? genaral[0].DRIVER: null)
      setValue("DriverLicense", genaral[0].DRIVING_LICENSE ? genaral[0].DRIVING_LICENSE : null)
      setValue("reasonForEnlistment", genaral[0].REASON_ENTRY ? genaral[0].REASON_ENTRY : null)
      setValue("arrested", genaral[0].LAWSUIT ? genaral[0].LAWSUIT : null)
      setValue("dateArrested", genaral[0].DATE_LAWSUIT ? genaral[0].DATE_LAWSUIT : null)
      setValue("resultArrested", genaral[0].RESULT_LAWSUIT ? genaral[0].RESULT_LAWSUIT : null)
      setValue("note", genaral[0].OTHER ? genaral[0].OTHER : null)
      setValue("family", genaral[0].FAMILY_STATUS ? genaral[0].FAMILY_STATUS : null)
      setValue("M_firstname", genaral[0].NAME_M ? genaral[0].NAME_M : null)
      setValue("M_lastname", genaral[0].LASTNAME_M ? genaral[0].LASTNAME_M : null)
      setValue("M_age", genaral[0].AGE_M ? genaral[0].AGE_M : null)
      setValue("M_career", genaral[0].CAREER_M ? genaral[0].CAREER_M : null)
      setValue("M_income", genaral[0].INCOME_M ? genaral[0].INCOME_M : null)
      setValue("M_status", genaral[0].STATUS_PRESENT_M ? genaral[0].STATUS_PRESENT_M: null)
      setValue("F_firstname", genaral[0].NAME_F ? genaral[0].NAME_F : null)
      setValue("F_lastname", genaral[0].LASTNAME_F ? genaral[0].LASTNAME_F : null)
      setValue("F_age", genaral[0].AGE_F ? genaral[0].AGE_F : null)
      setValue("F_career", genaral[0].CAREER_F ? genaral[0].CAREER_F : null)
      setValue("F_income", genaral[0].INCOME_F ? genaral[0].INCOME_F : null)
      setValue("F_status", genaral[0].STATUS_PRESENT_F ? genaral[0].STATUS_PRESENT_F : null)
      setValue("W_firstname", genaral[0].NAME_W ? genaral[0].NAME_W : null)
      setValue("W_lastname", genaral[0].LASTNAME_W ? genaral[0].LASTNAME_W : null)
      setValue("W_age", genaral[0].AGE_W ? genaral[0].AGE_W : null)
      setValue("W_career", genaral[0].CAREER_W ? genaral[0].CAREER_W : null)
      setValue("W_income", genaral[0].INCOME_W ? genaral[0].INCOME_W : null)
      // setValue("W_status", genaral[0].STATUS_PRESENT_W ? genaral[0].STATUS_PRESENT_W : null)
      setValue("W_child", genaral[0].HEIR ? genaral[0].HEIR: null)
      setValue("W_son", genaral[0].HEIR_M ? genaral[0].HEIR_M : null)
      setValue("W_daughter", genaral[0].HEIR_W ? genaral[0].HEIR_W : null)
      setValue("R_relationship", genaral[0].RELATIONSHIP_R ? genaral[0].RELATIONSHIP_R : null)
      setValue("R_firstname", genaral[0].CONTACT_NAME ? genaral[0].CONTACT_NAME : null)
      setValue("R_lastname", genaral[0].CONTACT_LASTNAME ? genaral[0].CONTACT_LASTNAME : null)
      setValue("army_status", genaral[0].STATUS_C ? genaral[0].STATUS_C : null)
    }

    if(address){
      address.map((item, index) => {
        setValue(`${item.TYPEADDRESS}_province`, item.PROVINCE ? item.PROVINCE : null)
        setValue(`${item.TYPEADDRESS}_district`, item.DISTRICT ? item.DISTRICT : null)
        setValue(`${item.TYPEADDRESS}_subDistrict`, item.SUBDISTRICT ? item.SUBDISTRICT : null)
        setValue(`${item.TYPEADDRESS}_address`, item.ADDRESS1 ? item.ADDRESS1 : null)
        setValue(`${item.TYPEADDRESS}_moo`, item.ADDRESS2 ? item.ADDRESS2 : null)
        setValue(`${item.TYPEADDRESS}_soi`, item.ADDRESS3 ? item.ADDRESS3 : null)
        setValue(`${item.TYPEADDRESS}_road`, item.ADDRESS4 ? item.ADDRESS4: null)
      })
    }

    if(hire){
     hire.map((item, index) => {
      setValue(`familyForm.${index}.C_firstname`, item.HIRE_NAME ? item.HIRE_NAME?.spilt(' ')[0] : null) 
      setValue(`familyForm.${index}.C_lastname`, item.HIRE_NAME ? item.HIRE_NAME?.spilt(' ')[1] : null)
     })}
  },[personal])

  const closeModel = () => {
    if(openSeccess){
      setOpenSeccess(false)
      setSelectData([])
    }else{
      setOpenError(false)
    }
  }

  return(
    <Fragment>
      <Grid.Container gap={1}>
        <Grid xs={0} sm={3}>
          <Card_Info data={userProfile} />
        </Grid>
        <Grid xs={12} sm={9}>
          <Card>
            <Tabs value={indexs} onChange={handleChange} aria-label="infomation-tabs" variant="scrollable" scrollButtons="auto">
              <Tab label="ข้อมูลส่วนตัว" value={1}/>
              <Tab label="สถานภาพครอบครัว" value={2}/>
              <Tab label="การศึกษา" value={3}/>
              <Tab label="เครื่องแต่งกาย" value={4}/>
              <Tab label="ข้อมูลเพิ่มเติม" value={5}/>
            </Tabs>
            <TabPanel value={indexs} index={1}>
              <Personalized 
                reactHookForm={reactHookForm}
                thaiAddress={thaiAddress}
                changeAutoComplete={changeAutoComplete}
                province={province}
                district={district}
                subDistrict={subDistrict}
                zipcode={zipcode}
              />
            </TabPanel>
            <TabPanel value={indexs} index={2}>
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
            </TabPanel>
            <TabPanel value={indexs} index={3}>
              <EducationForm
                reactHookForm={reactHookForm}
                province={province}
                district={district}
                subDistrict={subDistrict}
                zipcode={zipcode}
                yn={yn}
                education={education}
              />
            </TabPanel>
            <TabPanel value={indexs} index={4}>
              <UniformForm
                reactHookForm={reactHookForm}
                size={size}
                />
            </TabPanel>
            <TabPanel value={indexs} index={5}>
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
            </TabPanel>
            <Row justify="end"> 
            <Button css={{marginBottom:"15px", marginRight:"15px"}} onPress={handleSubmit(submitForm)}> บันทึก </Button>
            </Row>
          </Card>
         
        </Grid>
      </Grid.Container>
      <Modal
        // closeButton
        aria-labelledby="modal-title"
        open={openSeccess}
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
        open={openError}
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
  )
}