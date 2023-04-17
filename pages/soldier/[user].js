import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Input,
  Button,
  Text,
  Card,
  Row,
  Spacer,
  Badge
} from "@nextui-org/react";
import Card_Info from "../../components/cardInfo";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import TimeLineForm from "../Personal_Info/tabs/TimeLineForm";
import { useForm } from "react-hook-form";
import DropdownInput from "../../components/DropdownInput";
import TableCard from "../../components/DataTable";

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

export default function UserInfoPage() {
  const router = useRouter();
  const pathData = router.query;
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState('');
  const [q6, setQ6] = useState('');
  const [q7, setQ7] = useState('');
  const [q8, setQ8] = useState('');
  const [indexs, setIndex] = useState(1);
  const [dateLists, setDateLists] = useState([]);
  const reactHookForm = useForm();

  const { register} = reactHookForm;

  const dateList = [];
  const addDate = async () => {
    for (let i = 0; i < 14; i++) {
      let duration = 1000 * 60 * 60 * 24 * i;
      dateList.push(new Date(+new Date() - duration));
    }
    await setDateLists(dateList);
  };
  const columnsTemp=[
    { name: "วัน/เดือน/ปี", uid: "date" },
    { name: "เช้า", uid: "morning" },
    { name: "บ่าย", uid: "afternoon" },
    { name: "เย็น", uid: "evening" },
  ]
  const columnsPee=[
    { name: "วัน/เดือน/ปี", uid: "date" },
    { name: "เช้า", uid: "morning" },
    { name: "บ่าย", uid: "afternoon" },
    { name: "เย็น", uid: "evening" },
  ]

  const dataTemp = [
    {
      id: 1,
      date: "01/01/2564",
      morning: "4.1",
      afternoon: "40.2",
      evening: "40.3",
    }
  ]

  const dataPee = [
    {
      id: 1,
      date: "01/01/2564",
      morning: "2",
      afternoon: "2",
      evening: "2",
    }
  ]
  const userProfile = {
    id: 21,
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "พลทหาร สามารถสี่ สมบัติ",
    rta_id: "124567890",
    id_card: "ไม่แสดงข้อมูล",
    detp: "ร.14 พัน 2",
    sub_detp: "ร้อย.อวบ.2",
  };

  useEffect(() => {
    addDate();
  }, []);

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  return (
    <Fragment>
      <Grid.Container gap={1}>
        <Grid xs={0} sm={3}>
          <Card_Info data={userProfile} />
        </Grid>
        <Grid xs={12} sm={9}>
          <Card>
            <Tabs
              value={indexs}
              onChange={handleChange}
              aria-label="infomation-tabs"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="ข้อมูลทั่วไป" value={1} />
              <Tab label="ข้อมูลคัดกรองโควิด-19" value={2} />
              <Tab label="ข้อมูลสุขภาพประจำวัน" value={3} />
              <Tab label="ข้อมูลทดสอบร่างกาย" value={4} />
            </Tabs>
            <TabPanel value={indexs} index={1}>
              <Grid>
                <Grid xs={12}>
                  <Card css={{ h: "$15", $$cardColor: "$colors$secondary" }}>
                    <Card.Header css={{ padding: "5px 10px" }}>
                      <Text size={20} weight={"bold"}>
                        ข้อมูลทั่วไปพลหทาร
                      </Text>
                    </Card.Header>
                  </Card>
                </Grid>
              </Grid>
              <Grid>
                <label>ชื่อ-นามสกุล : </label>
                <label>&nbsp;พลทหาร สามารถสี่ สมบัติ</label>
              </Grid>
              <Grid>
                <label>ปัจจุบันอายุ : </label>
                <label>&nbsp;30 ปี</label>
              </Grid>
              <Grid>
                <label>จำนวนปีที่รับราชการ : </label>
                <label>&nbsp;1 ปี</label>
              </Grid>
              <Grid>
                <label>การศึกษาสูงสุด : </label>
                <label>&nbsp;ปริญญาตรี</label>
              </Grid>
              <Grid>
                <label> ภูมิลำเนา: </label>
                <label>
                  {" "}
                  &nbsp;142 หมู่ 2 ตำบลแม่ริม อำเภอแม่ริม จังหวัดเชียงใหม่ 50150
                </label>
              </Grid>
              <Grid>
                <label>เบอร์โทรศัพท์ : </label>
                <label>&nbsp;0874547652</label>
              </Grid>
              <Grid>
                <label>อีเมล : </label>
                <label>
                  <a
                    href="mailto:
              "
                  >
                    &nbsp;พลทหาร สามารถสี่ สมบัติ
                  </a>
                </label>
              </Grid>
              <Grid>
                <label>Facebook: </label>
                <label>
                  <a href="https://www.facebook.com/">
                  &nbsp;พลทหาร สามารถสี่ สมบัติ
                  </a>
                </label>
              </Grid>
              <Grid>
                <label>Line ID : </label>
                <label> &nbsp;0874547652</label>
              </Grid>
              <Grid>
                <label>ที่อยู่ปัจจุบัน :</label>
                {/* <Spacer ={0.5} /> */}
                <label>
                &nbsp;142 หมู่ 2 ตำบลแม่ริม อำเภอแม่ริม จังหวัดเชียงใหม่ 50150
                </label>
              </Grid>
              <Grid xs={12}>
                  <Card css={{ h: "$15", $$cardColor: "$colors$secondary" }}>
                    <Card.Header css={{ padding: "5px 10px" }}>
                      <Text size={20} weight={"bold"}>
                        ข้อมูลสุขภาพทหาร
                      </Text>
                    </Card.Header>
                  </Card>
                </Grid>
             <Grid.Container gap={1}>
             <Grid xs={3}>
                <label>ส่วนสูง : </label>
                <label>&nbsp;170</label>
              </Grid>
              <Grid xs={3}>
                <label>น้ำหนัก : </label>
                <label>&nbsp;60</label>
              </Grid>
              <Grid xs={3}>
                <label>หมู่เลือด : </label>
                <label>&nbsp;A</label>
              </Grid >
              <Grid xs={3}>
                <label>ประวัติการแพ้ยา : </label>
                <label>&nbsp;ไม่มี</label>
              </Grid>
              <Grid xs={3}>
                <label>ประวัติการแพ้อาหาร : </label>
                <label>&nbsp;ไม่มี</label>
              </Grid>
              <Grid xs={3}>
                <label> BMI : </label>
                <label>&nbsp;20.76 (ปกติ)</label>
              </Grid>
              <Grid xs={3}>
                <label> อาการป่วยปัจจุบัน : </label>
                <label>&nbsp;ไม่มี</label>
              </Grid>
              </Grid.Container>
            </TabPanel>
            <TabPanel value={indexs} index={2}>
              <TimeLineForm
              reactHookForm={reactHookForm}
              province={[]}
              district={[]}
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
            </TabPanel>
            <TabPanel value={indexs} index={3}>
            <Grid.Container gap={1}>
            <Grid xs={12}>
                <Card css={{ h: "$15", $$cardColor: "$colors$secondary" }}>
                  <Card.Header css={{ padding: "5px 10px" }}>
                    <Text size={20} weight={"bold"}>
                      อุณหภูมิประจำวัน
                    </Text>
                  </Card.Header>
                </Card>
              </Grid>
              <Grid css={{ minWidth: "-webkit-fill-available" }}>
                <TableCard columns={columnsTemp} data={dataTemp} />
              </Grid>

              <Grid xs={12}>
                <Card css={{ h: "$15", $$cardColor: "$colors$secondary" }}>
                  <Card.Header css={{ padding: "5px 10px" }}>
                    <Text size={20} weight={"bold"}>
                      ปัสสาวะประจำวัน
                    </Text>
                  </Card.Header>
                </Card>
              </Grid>
              <Grid css={{ minWidth: "-webkit-fill-available" }}>
                <TableCard columns={columnsPee} data={dataPee} />
              </Grid>
            </Grid.Container>
            </TabPanel>
            <TabPanel value={indexs} index={4}>
            <Grid.Container gap={1}>
              <Fragment>
                    <Row gap={4} css={{ marginTop: "2rem" }}>
                      <DropdownInput
                        formName={`bodyTest.times`}
                        nameLabel={"ครั้งที่"}
                        menuItems={[
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                          { label: "3", value: "3" },
                          { label: "4", value: "4" },
                          { label: "5", value: "5" },
                          { label: "6", value: "6" },
                          { label: "7", value: "7" },
                          { label: "8", value: "8" },
                          { label: "9", value: "9" },
                          { label: "10", value: "10" },
                        ]}
                        defaultValue={"1"}
                        reactHookForm={reactHookForm}
                      />
                      <Spacer x={2} />
                      <Input
                        bordered
                        label="วันที่"
                        placeholder="วันที่"
                        color="primary"
                        type="date"
                        {...register(`bodyTest.date`)}
                        css={{
                          minWidth: "200px",
                        }}
                        defaultValue={new Date("1/4/2564")}
                      />
                      <Spacer x={27} />
                    </Row>
                    <Card
                      css={{
                        width: "90%",
                        border: "2px solid var(--primary)",
                        borderRadius: "12px",
                        marginLeft: "2.3rem",
                        marginTop: "0",
                        // backgroundColor: "var(--secondary)",
                      }}
                    >
                      <table class="table">
                        <thead>
                          <tr>
                            <th>ลำดับ</th>
                            <th>รายการ</th>
                            <th>จำนวนครั้ง/เวลา</th>
                            <th>ผลการประเมิน</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.</td>
                            <td>ท่าดึงข้อ</td>
                            <td>
                            <label>6</label>
                            </td>
                            <td>
                              <Badge color="secondary">ผ่าน</Badge>
                              </td>
                          </tr>
                          <tr>
                            <td>2.</td>
                            <td>ท่าลุก - นั่ง</td>
                            <td>
                            <label>40</label>
                            </td>
                            <td>
                              <Badge color="secondary">ผ่าน</Badge>
                              </td>
                          </tr>
                          <tr>
                            <td>3.</td>
                            <td>ท่าดันพื้น</td>
                            <td>
                            <label>40</label>
                            </td>
                            <td>
                              <Badge color="secondary">ผ่าน</Badge>
                              </td>
                          </tr>
                          <tr>
                            <td>4.</td>
                            <td>วิ่ง 2 กิโลเมตร</td>
                            <td>
                              <label>40</label>
                            </td>
                            <td>
                              <Badge color="secondary">ผ่าน</Badge>
                              </td>
                          </tr>
                        </tbody>
                      </table>
                    </Card>
                  </Fragment>
                </Grid.Container>
            </TabPanel>
          </Card>
        </Grid>
      </Grid.Container>
    </Fragment>
  );
}
