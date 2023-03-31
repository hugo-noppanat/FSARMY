import {Grid, Input, Button, Text, Card, Checkbox, Row, Spacer, Col} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";
import React, {useEffect} from "react";
import Timelines from "../../../components/Timeline";

export default function TimeLineForm(props) {
  const { reactHookForm, province, district, dateLists,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    setQ1,
    setQ2,
    setQ3,
    setQ4,
    setQ5,
    setQ6,
    setQ7,
    setQ8,
  } = props;
  const { control, register, watch} = reactHookForm;
  const [selected, setSelected] = React.useState([]);

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
          <Checkbox size={"sm"} label="1. ท่านมีประวัติไปสถานที่สถานบันเทิง ตลาด หรือ ทำงานในสถานบันเทิงทำงานในตลาด ภายใน 7 วันก่อนหน้า" isSelected={q1} onChange={setQ1}/>
        </Row>
        <Row>
          <Checkbox size={"sm"} label="2. ท่านมีประวัติสัมผัสใกล้ชิดกับผู้ป่วยยืนยันโรคติดเชื้อไวรัส COVID-19 มาก่อนในช่วง 14 วันที่ผ่านมา" isSelected={q2} onChange={setQ2}/>
        </Row>
        <Row>
          <Checkbox size={"sm"} label="3. ท่านได้เดินทางมาจากต่างประเทศ หรือ อาศัยอยู่ ท่องเที่ยวใกล้แนวชายแดนประเทศเพื่อนบ้านของไทย (พม่า ลาว เขมร มาเลเซีย) ในช่วง 14 วันที่ผ่านมา" isSelected={q3} onChange={setQ3}/>
        </Row>
        <Row>
          <Checkbox size={"sm"} label="4. ท่านได้เดินทางมาจากพื้นที่ที่มีรายงานการระบาดของโรคติดเชื้อไวรัส COVID-19 ในช่วง 14 วันที่ผ่านมา" isSelected={q4} onChange={setQ4}/>
        </Row>
        <Row>
          <Checkbox size={"sm"} label="5. ในสถานที่ท่านที่ไปประจำ คนที่คลุกคลีใกล้ชิดกับท่าน มีอาการ ไข้ ไอ น้ำมูก เสมหะ มากกว่า 5 คน พร้อมๆกัน ในช่วงเวลาภายใน 7 วัน" isSelected={q5} onChange={setQ5}/>
        </Row>
        <Row>
          <Checkbox size={"sm"} label="6. ท่านมีประวัติสัมผัสใกล้ชิดกับประชาชนที่มาจากพื้นที่ที่มีรายงานการระบาด ของโรคโควิด 19 ในประเทศอย่างต่อเนื่อง" isSelected={q6} onChange={setQ6}/>
        </Row>
        <Row>
          <Checkbox size={"sm"} label="7. ท่านหรือบุคคลใกล้ชิดของท่าน ได้เข้าร่วมกิจกรรมที่มีผู้คนรวมตัวกันเกิน 50 คน ในช่วงเวลา 14 วัน ก่อนหน้านี้" isSelected={q7} onChange={setQ7}/>
        </Row>
      </Grid>
<Grid xs={12} css={{margin: "0px", padding: "0px"}}>
        </Grid>
      <Grid>
        <Checkbox.Group
          label="ท่านมีอาการและอาการแสดงดังต่อไปนี้หรือไม่"
          color="primary"
          size={"md"}
          value={q8}
          onChange={setQ8}
        >
          <Row gap={4}>
          <Col>
          <Checkbox size={"xs"} value="ไข้,">ไข้ 37.5 องศาเซลเซียส ขึ้นไป</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="ไอ,">ไอ</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="เจ็บคอ,">เจ็บคอ</Checkbox>
          </Col>
          </Row>
          <Row gap={4}>
          <Col>
          <Checkbox size={"xs"} value="มีน้ำมูก,">มีน้ำมูก</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="หายใจเร็ว,">หายใจเร็ว, เหนื่อย, ลำบาก</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="จมูกไม่ได้กลิ่น,">จมูกไม่ได้กลิ่น</Checkbox>
          </Col>
          </Row>
          <Row gap={4}>
          <Col>
          <Checkbox size={"xs"} value="ลิ้นไม่รับรส,">ลิ้นไม่รับรส</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="ตาแดง,">ตาแดง</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="ท้องเสีย,">ท้องเสีย</Checkbox>
          </Col>
          </Row>
          <Row gap={4}>
          <Col>
          <Checkbox size={"xs"} value="ปวดศีรษะ,">ปวดศีรษะ</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="ปวดเมื่อย,">ปวดเมื่อย</Checkbox>
          </Col>
          <Col>
          <Checkbox size={"xs"} value="มีผื่นขึ้น,">มีผื่นขึ้น</Checkbox>
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
      <Timelines
        reactHookForm={reactHookForm}
        date={dateLists}
      />
      </Grid>
    </Grid.Container>
  )
}