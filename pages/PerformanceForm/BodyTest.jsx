import React, { Fragment, useEffect } from "react";
import {
  Grid,
  Input,
  Card,
  Text,
  Row,
  Spacer,
  Button,
  Col,
} from "@nextui-org/react";
import Card_Info from "../../components/cardInfo";
import DropdownInput from "../../components/DropdownInput";
import AddCircle from "@mui/icons-material/AddCircle";
import { useFieldArray } from "react-hook-form";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

export default function BodyTest(props) {
  const { userProfile, reactHookForm } = props;

  const { register, control } = reactHookForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "bodyTest",
  });

  //initial form data by array fields
  useEffect(() => {
    if (fields.length === 0) {
      append({
        times: "",
        date: "",
        pull_up: "",
        sit_up: "",
        push_up: "",
        run: "",
      });
    }
  }, []);

  return (
    <Fragment>
      <Grid.Container gap={1}>
        <Grid xs={0} sm={3}>
          <Card_Info data={userProfile} />
        </Grid>
        <Grid xs={12} sm={9}>
          <Card>
            <Grid.Container>
              <Row
                justify="end"
                css={{
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              >
                <Button
                  icon={<AddCircle />}
                  size="sm"
                  color="primary"
                  css={{
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    append({
                      times: "",
                      date: "",
                      pull_up: "",
                      sit_up: "",
                      push_up: "",
                      run: "",
                    });
                  }}
                >
                  เพิ่มข้อมูล
                </Button>
              </Row>
              {fields.map((item, index) => {
                return (
                  <Fragment key={item.id}>
                    <Row gap={4} css={{ marginTop: "2rem" }}>
                      <DropdownInput
                        formName={`bodyTest.${index}.times`}
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
                        reactHookForm={reactHookForm}
                      />
                      <Spacer x={2} />
                      <Input
                        bordered
                        label="วันที่"
                        placeholder="วันที่"
                        color="primary"
                        type="date"
                        {...register(`bodyTest.${index}.date`)}
                        css={{
                          minWidth: "200px",
                        }}
                      />
                      <Spacer x={27} />
                      <IconButton
                        aria-label="delete"
                        color="error"
                        className="mt-4 "
                        onClick={() => {
                          if (fields.length > 1) remove(index);
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
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
                              <Input
                                bordered
                                placeholder="จำนวนครั้ง"
                                color="primary"
                                type="number"
                                {...register(`bodyTest.pull_up.${index}`)}
                                size="sm"
                                css={{
                                  width: "70%",
                                }}
                              />
                            </td>
                            <td>{"ssss"}</td>
                          </tr>
                          <tr>
                            <td>2.</td>
                            <td>ท่าลุก - นั่ง</td>
                            <td>
                              <Input
                                bordered
                                placeholder="จำนวนครั้ง"
                                color="primary"
                                type="number"
                                {...register(`bodyTest.sit_up.${index}`)}
                                size="sm"
                                css={{
                                  width: "70%",
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3.</td>
                            <td>ท่าดันพื้น</td>
                            <td>
                              <Input
                                bordered
                                placeholder="จำนวนครั้ง"
                                color="primary"
                                type="number"
                                {...register(`bodyTest.push_up.${index}`)}
                                size="sm"
                                css={{
                                  width: "70%",
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4.</td>
                            <td>วิ่ง 2 กิโลเมตร</td>
                            <td>
                              <Input
                                bordered
                                placeholder="จำนวนครั้ง"
                                color="primary"
                                type="number"
                                {...register(`bodyTest.run.${index}`)}
                                size="sm"
                                css={{
                                  width: "70%",
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Card>
                  </Fragment>
                );
              })}
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
        </Grid>
      </Grid.Container>
    </Fragment>
  );
}
