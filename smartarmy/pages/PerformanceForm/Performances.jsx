import React, { Fragment } from "react";
import {
  Grid,
  Input,
  Card,
  Text,
  Spacer,
  Row,
  Col,
  Button,
  Textarea,
} from "@nextui-org/react";
import Card_Info from "../../components/cardInfo";
import { useForm } from "react-hook-form";
import DropdownInput from "../../components/DropdownInput";

export default function Performances(props) {
  const {
    userProfile,
    reactHookForm,
    scoreBodyTest = 0,
    scoreShooting = 0,
    numShooting = 0,
  } = props;
  const { register, handleSubmit } = reactHookForm;

  return (
    <Fragment>
      <Grid.Container gap={1}>
        <Grid xs={0} sm={3}>
          <Card_Info data={userProfile} />
        </Grid>
        <Grid xs={12} sm={9}>
          {/* <Row gap={1}> */}
          <Col>
            <Row>
              <Card className="mt-2">
                <Grid.Container gap={2} justify="center">
                  <Row justify="end">
                    <Button light color={"success"} auto>
                      เพิ่มเติม
                    </Button>
                  </Row>
                  <Row justify="center" className="p-0 m-0">
                    <Col>
                      <Text size={40} className="p-0 m-0" align="center">
                        {scoreBodyTest}%
                      </Text>
                    </Col>
                    <Col
                      css={{
                        display: "flex!important",
                        justifyContent: "center",
                      }}
                    >
                      <Text size={40} className="p-0 m-0" align="center">
                        {scoreShooting}/
                      </Text>
                      <Text size={20} className="p-0 m-0 mt-4" align="center">
                        {numShooting}
                      </Text>
                    </Col>
                  </Row>
                  <Row justify="center" className="p-0 m-0">
                    <Col>
                      <Text align="center" className="p-0 m-0">
                        ความก้าวหน้าของสมรรถภาพทางกายภาพ
                      </Text>
                    </Col>
                    <Col>
                      <Text align="center">คะแนนการยิงปืนครั้งล่าสุด</Text>
                    </Col>
                  </Row>
                </Grid.Container>
              </Card>
            </Row>
            <Row css={{ marginTop: "5px" }}>
              <Card>
                <Grid.Container gap={2}>
                  <Row gap={2} >
                    <Text h5 className={"mt-3"}> รายละเอียดการประเมินผล </Text>
                  </Row>
                  <Row gap={2} wrap>
                    <Col span="6">
                      <Text className={"mt-3"}>
                        1. ความไว้เนื้อเชื่อใจ วางใจได้ ทำตามคำพูด มีเยื่อใย
                        เห็นใจกันยามยาก ไม่ทุจริต (Trust){" "}
                      </Text>
                    </Col>
                    <Spacer x={1} />
                    <Col span="2" >
                      <DropdownInput
                        formName="trust"
                        nameLabel=""
                        menuItems={[
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                          { label: "3", value: "3" },
                          { label: "4", value: "4" },
                          { label: "5", value: "5" },
                        ]}
                        reactHookForm={reactHookForm}
                        width="20%"
                        height="1.5rem"
                      />
                    </Col>
                    <Spacer x={1} />
                  </Row>
                  <Row gap={2} wrap>
                    <Col span="6">
                      <Text className={"mt-3"}>
                        2. ความเสียสละ ร่วมเป็นร่วมตายกับเพื่อนร่วมงาน
                        การแบ่งปันให้กับผู้ขาดแคลน (Sacrifice)
                      </Text>
                    </Col>
                    <Spacer x={1} />
                    <Col span="2">
                      <DropdownInput
                        formName="sacrifice"
                        nameLabel=""
                        menuItems={[
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                          { label: "3", value: "3" },
                          { label: "4", value: "4" },
                          { label: "5", value: "5" },
                        ]}
                        reactHookForm={reactHookForm}
                      />
                    </Col>
                    <Spacer x={1} />
                  </Row>
                  <Row gap={2} wrap>
                    <Col span="6">
                      <Text className={"mt-3"}>
                        3. ความกล้าหาญ ไม่เกรงกลัวที่จะผจญกับความทุกข์ยาก ใช้
                        Courage ต่อสู้ความกลัว รักษา Bravery
                        อันเป็นคุณสมบัติโดยหน้าที่ไว้ (Brave){" "}
                      </Text>
                    </Col>
                    <Spacer x={1} />
                    <Col span="2">
                      <DropdownInput
                        formName="brave"
                        nameLabel=""
                        menuItems={[
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                          { label: "3", value: "3" },
                          { label: "4", value: "4" },
                          { label: "5", value: "5" },
                        ]}
                        reactHookForm={reactHookForm}
                      />
                    </Col>
                    <Spacer x={1} />
                  </Row>
                  <Row gap={2} wrap>
                    <Col span="6">
                      <Text className={"mt-3"}>
                        4. ความจงรักภักดี ความรู้สึกรักและนับถือ อย่างมั่นคง
                        มีความซื่อสัตย์ และสำนึกในหน้าที่การงานของตน (Loyalty){" "}
                      </Text>
                    </Col>
                    <Spacer x={1} />
                    <Col span="2">
                      <DropdownInput
                        formName="loyalty"
                        nameLabel=""
                        menuItems={[
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                          { label: "3", value: "3" },
                          { label: "4", value: "4" },
                          { label: "5", value: "5" },
                        ]}
                        reactHookForm={reactHookForm}
                      />
                    </Col>
                    <Spacer x={1} />
                  </Row>
                  <Row gap={2} wrap>
                    <Col span="6">
                      <Text className={"mt-3"}>
                        5. ลักษณะท่าทาง การวางตัว การพฤติตน
                      </Text>
                    </Col>
                    <Spacer x={1} />
                    <Col span="2">
                      <DropdownInput
                        formName="action"
                        nameLabel=""
                        menuItems={[
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                          { label: "3", value: "3" },
                          { label: "4", value: "4" },
                          { label: "5", value: "5" },
                        ]}
                        reactHookForm={reactHookForm}
                      />
                    </Col>
                    <Spacer x={1} />
                  </Row>
                  <Row gap={2} wrap>
                    <Col span={3}>
                      <Text className={"mt-4"}>ตำแหน่งที่เหมาะสม</Text>
                    </Col>
                    <Spacer x={1} />
                    <Col span={3}>
                      <DropdownInput
                        formName="position"
                        nameLabel=""
                        menuItems={[
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                          { label: "3", value: "3" },
                          { label: "4", value: "4" },
                          { label: "5", value: "5" },
                        ]}
                        reactHookForm={reactHookForm}
                        
                      />
                    </Col>
                    <Spacer x={1} />
                  </Row>
                  <Row gap={2} justify="center" className={"mt-2"}>
                    <Textarea
                      label="ความคิดเห็นเพิ่มเติม"
                      placeholder="ความคิดเห็นเพิ่มเติม"
                      {...register("comment")}
                      cols={100}
                      rows={8}
                      required
                    />
                  </Row>
                  <Grid xs={12}>
                    <Row justify="end" className=" d-flex mb-2 p-2 mt-2">
                      <Button
                        size={"sm"}
                        color={"error"}
                        flat
                        onClick={() => console.log("Download")}
                      >
                        ยกเลิก
                      </Button>
                      <Spacer x={0.5} />
                      <Button
                        size={"sm"}
                        coler={"primary"}
                        flat
                        onClick={() => console.log("Download")}
                      >
                        บันทึก
                      </Button>
                    </Row>
                  </Grid>
                </Grid.Container>
              </Card>
            </Row>
          </Col>
        </Grid>
      </Grid.Container>
    </Fragment>
  );
}
