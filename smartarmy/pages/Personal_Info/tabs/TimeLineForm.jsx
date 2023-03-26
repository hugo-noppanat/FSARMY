import {Grid, Input, Button, Text, Card, Checkbox, Row, Spacer, Col} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";
import React, {useEffect} from "react";
import Timeline from "../../../components/Timeline";
export default function TimeLineForm(props) {
  const { reactHookForm, province, district} = props;
  const { control, register, watch, dateLists} = reactHookForm;
  const [selected, setSelected] = React.useState([]);

  useEffect(() => {
    console.log("aaa", dateLists);
  }, [dateLists])
  return(
    <Grid.Container gap={4} css={{marginTop:"0.5rem"}}>
      <Grid xs={12}>
        <Text size={16} color={"#808080"}>
          วันที่ประเมินความเสี่ยง : {new Date().toLocaleDateString()}
        </Text>
      </Grid>
      <Row justify="center">
        <Grid >
          <DropdownInput
            formName='TimeLineProvinceForm'
            nameLabel='เดินทางมาจากจังหวัด'
            menuItems={province}
            reactHookForm={props.reactHookForm}
          />
        </Grid>
        <Grid>
          <DropdownInput
            formName='TimeLineDistrictForm'
            nameLabel='เดินทางมาจากอำเภอ'
            menuItems={district.filter((item) => Math.floor((item.value/100)%100) == watch("TimeLineProvinceForm"))}
            reactHookForm={props.reactHookForm}
          />
        </Grid>
      </Row>
<Grid xs={12} css={{margin: "0px", padding: "0px"}}>
        </Grid>
      <Grid>
        <Row>
        <Text h4>คำถามประเมินความเสี่ยง</Text>
        </Row>
        <Row>
        <Checkbox.Group
          label="1. ท่านมีประวัติไปสถานที่สถานบันเทิง ตลาด หรือ ทำงานในสถานบันเทิงทำงานในตลาด ภายใน 7 วันก่อนหน้า"
          color="primary"
          value={selected}
          onChange={setSelected}
          size={"md"}
        >
          <Checkbox size={"xs"} value="Y">ใช่</Checkbox>
          <Checkbox size={"xs"} value="N">ไม่ใช่</Checkbox>
        </Checkbox.Group>
        </Row>
      </Grid>
      <Grid xs={12} css={{margin: "0px", padding: "0px"}}>
        </Grid>
      <Grid>
        <Checkbox.Group
          label="2. ท่านมีประวัติสัมผัสใกล้ชิดกับผู้ป่วยยืนยันโรคติดเชื้อไวรัส COVID-19 มาก่อนในช่วง 14 วันที่ผ่านมา"
          color="primary"
          value={selected}
          onChange={setSelected}
          size={"md"}
        >
          <Checkbox size={"xs"} value="Y">ใช่</Checkbox>
          <Checkbox size={"xs"} value="N">ไม่ใช่</Checkbox>
        </Checkbox.Group>
      </Grid>
<Grid xs={12} css={{margin: "0px", padding: "0px"}}>
        </Grid>
      <Grid>
        <Checkbox.Group
          label="3. ท่านได้เดินทางมาจากต่างประเทศ หรือ อาศัยอยู่ ท่องเที่ยวใกล้แนวชายแดนประเทศเพื่อนบ้านของไทย (พม่า ลาว เขมร มาเลเซีย) ในช่วง 14 วันที่ผ่านมา"
          color="primary"
          value={selected}
          onChange={setSelected}
          size={"md"}
        >
          <Checkbox size={"xs"} value="Y">ใช่</Checkbox>
          <Checkbox size={"xs"} value="N">ไม่ใช่</Checkbox>
        </Checkbox.Group>
      </Grid>
<Grid xs={12} css={{margin: "0px", padding: "0px"}}>
        </Grid>
      <Grid>
        <Checkbox.Group
          label="4. ท่านได้เดินทางมาจากพื้นที่ที่มีรายงานการระบาดของโรคติดเชื้อไวรัส COVID-19 ในช่วง 14 วันที่ผ่านมา"
          color="primary"
          value={selected}
          onChange={setSelected}
          size={"md"}
        >
          <Checkbox size={"xs"} value="Y">ใช่</Checkbox>
          <Checkbox size={"xs"} value="N">ไม่ใช่</Checkbox>
        </Checkbox.Group>
      </Grid>
<Grid xs={12} css={{margin: "0px", padding: "0px"}}>
        </Grid>
      <Grid>
        <Checkbox.Group
          label="5. ในสถานที่ท่านที่ไปประจำ คนที่คลุกคลีใกล้ชิดกับท่าน มีอาการ ไข้ ไอ น้ำมูก เสมหะ มากกว่า 5 คน พร้อมๆกัน ในช่วงเวลาภายใน 7 วัน"
          color="primary"
          value={selected}
          onChange={setSelected}
          size={"md"}
        >
          <Checkbox size={"xs"} value="Y">ใช่</Checkbox>
          <Checkbox size={"xs"} value="N">ไม่ใช่</Checkbox>
        </Checkbox.Group>
      </Grid>
<Grid xs={12} css={{margin: "0px", padding: "0px"}}>
        </Grid>
      <Grid>
        <Checkbox.Group
          label="6. ท่านมีประวัติสัมผัสใกล้ชิดกับประชาชนที่มาจากพื้นที่ที่มีรายงานการระบาด ของโรคโควิด 19 ในประเทศอย่างต่อเนื่อง"
          color="primary"
          value={selected}
          onChange={setSelected}
          size={"md"}
        >
          <Checkbox size={"xs"} value="Y">ใช่</Checkbox>
          <Checkbox size={"xs"} value="N">ไม่ใช่</Checkbox>
        </Checkbox.Group>
      </Grid>
<Grid xs={12} css={{margin: "0px", padding: "0px"}}>
        </Grid>
      <Grid>
        <Checkbox.Group
          label="7. ท่านหรือบุคคลใกล้ชิดของท่าน ได้เข้าร่วมกิจกรรมที่มีผู้คนรวมตัวกันเกิน 50 คน ในช่วงเวลา 14 วัน ก่อนหน้านี้"
          color="primary"
          value={selected}
          onChange={setSelected}
          size={"md"}
        >
          <Checkbox size={"xs"} value="Y">ใช่</Checkbox>
          <Checkbox size={"xs"} value="N">ไม่ใช่</Checkbox>
        </Checkbox.Group>
      </Grid>
<Grid xs={12} css={{margin: "0px", padding: "0px"}}>
        </Grid>
      <Grid>
        <Checkbox.Group
          label="ท่านมีอาการและอาการแสดงดังต่อไปนี้หรือไม่"
          color="primary"
          value={selected}
          onChange={setSelected}
          size={"md"}
        >
          <Row gap={4}>
          <Col>
          <Checkbox size={"xs"} value="Y">ไข้ 37.5 องศาเซลเซียส ขึ้นไป</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="N">ไอ</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="Y">เจ็บคอ</Checkbox>
          </Col>
          </Row>
          <Row gap={4}>
          <Col>
          <Checkbox size={"xs"} value="N">มีน้ำมูก</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="Y">หายใจเร็ว, เหนื่อย, ลำบาก</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="N">จมูกไม่ได้กลิ่น</Checkbox>
          </Col>
          </Row>
          <Row gap={4}>
          <Col>
          <Checkbox size={"xs"} value="Y">ลิ้นไม่รับรส</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="N">ตาแดง</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="Y">ท้องเสีย</Checkbox>
          </Col>
          </Row>
          <Row gap={4}>
          <Col>
          <Checkbox size={"xs"} value="N">ปวดศีรษะ</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="Y">ปวดเมื่อย</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="N">มีผื่นขึ้น</Checkbox>
          </Col>
          </Row>
        </Checkbox.Group>
      </Grid>
      <Grid xs={12} css={{marginTop:"2rem"}}>
      <Text h4>
        ไทม์ไลน์ย้อนหลัง 14 วัน
      </Text>
      </Grid>
      <Grid xs={12}>
        {
          dateLists?.map((date,index) => {
            <Timeline
              reactHookForm={reactHookForm}
              date={new Date(date)}
              index={index}
            />
          })
        }
      </Grid>
    </Grid.Container>
  )
}