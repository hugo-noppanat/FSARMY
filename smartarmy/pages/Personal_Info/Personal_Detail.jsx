import { Card, Grid, Row, Button} from "@nextui-org/react";
import { Fragment,useState } from "react";
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
  } = prop;

  const [value, setValue] = useState(1);
  const {handleSubmit} = reactHookForm;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const thaiAddress = ThaiAddress.map((item) => {
    return {title: `${item.district},${item.amphoe},${item.province},${item.zipcode}`, ...item}
  });

  const changeAutoComplete = (data) =>{
    thaiAddress.find((item) =>{
      if(item.title == data){
        console.log("find", item);
      }
    })
  }

  const submitForm = (data) =>{
    console.log("submit", data);
  }

  return(
    <Fragment>
      <Grid.Container gap={1}>
        <Grid xs={0} sm={3}>
          <Card_Info data={userProfile} />
        </Grid>
        <Grid xs={12} sm={9}>
          <Card>
            <Tabs value={value} onChange={handleChange} aria-label="infomation-tabs" variant="scrollable" scrollButtons="auto">
              <Tab label="ข้อมูลส่วนตัว" value={1}/>
              <Tab label="สถานภาพครอบครัว" value={2}/>
              <Tab label="การศึกษา" value={3}/>
              <Tab label="เครื่องแต่งกาย" value={4}/>
              <Tab label="ข้อมูลเพิ่มเติม" value={5}/>
            </Tabs>
            <TabPanel value={value} index={1}>
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
            <TabPanel value={value} index={2}>
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
            <TabPanel value={value} index={3}>
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
            <TabPanel value={value} index={4}>
              <UniformForm
                reactHookForm={reactHookForm}
                size={size}
                />
            </TabPanel>
            <TabPanel value={value} index={5}>
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
    </Fragment>
  )
}