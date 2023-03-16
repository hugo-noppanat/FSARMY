import { Card, Grid } from "@nextui-org/react";
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
  } = prop;

  const [value, setValue] = useState(1);

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
              <Tab label="ข้อมูลเพิ่มเติม" value={4}/>
            </Tabs>
            <TabPanel value={value} index={1}>
              <Personalized 
                reactHookForm={reactHookForm}
                thaiAddress={thaiAddress}
                changeAutoComplete={changeAutoComplete}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <FamilyForm
                reactHookForm={reactHookForm}
                thaiAddress={thaiAddress}
                changeAutoComplete={changeAutoComplete}
              />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <EducationForm
                reactHookForm={reactHookForm}
              />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <OtherInfoForm
                reactHookForm={reactHookForm}
              />
            </TabPanel>
            
          </Card>
        </Grid>
      </Grid.Container>
    </Fragment>
  )
}