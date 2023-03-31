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

export default function ShootingTest(props){
  const { userProfile, reactHookForm } = props;

  const { register, control } = reactHookForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "shootingTest",
  });

  useEffect(() => {
    if (fields.length === 0) {
      append({
        times: "",
        date: "",
        gunType: "",
        target: "",
        bullet: "",
        hit: "",
        result: "",
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
                      gunType: "",
                      target: "",
                      bullet: "",
                      hit: "",
                      result: "",
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
                        formName={`shootingTest.${index}.times`}
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
                        {...register(`shootingTest.${index}.date`)}
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
                        width: "95%",
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
                            <th>ชนิดปืน</th>
                            <th>ชนิดเป้า</th>
                            <th>จำนวนกระสุน</th>
                            <th>จำนวนที่ยิงได้</th>
                            <th>ผลการประเมิน</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <DropdownInput
                                formName={`shootingTest.${index}.gunType`}
                                nameLabel={"ชนิดปืน"}
                                menuItems={[
                                  { label: "1", value: "1" },
                                  { label: "2", value: "2" },
                                  { label: "3", value: "3" },
                                  { label: "4", value: "4" }
                                ]}
                                reactHookForm={reactHookForm}
                              />
                            </td>
                            <td>
                              <DropdownInput
                                formName={`shootingTest.${index}.targetType`}
                                nameLabel={"ชนิดเป้า"}
                                menuItems={[
                                  { label: "1", value: "1" },
                                  { label: "2", value: "2" },
                                  { label: "3", value: "3" },
                                  { label: "4", value: "4" }
                                ]}
                                reactHookForm={reactHookForm}
                              />
                            </td>
                            <td>
                              <Input
                                bordered
                                label="จำนวนกระสุน"
                                placeholder="จำนวนกระสุน"
                                color="primary"
                                type="number"
                                {...register(`shootingTest.${index}.bullet`)}
                                css={{
                                  minWidth: "200px",
                                }}
                              />
                            </td>
                            <td>
                              <Input
                                bordered
                                label="จำนวนที่ยิงได้"
                                placeholder="จำนวนที่ยิงได้"
                                color="primary"
                                type="number"
                                {...register(`shootingTest.${index}.bulletHit`)}
                                css={{
                                  minWidth: "200px",
                                }}
                              />
                            </td>
                            <td>
                              <Input
                                bordered
                                label="ผลการประเมิน"
                                placeholder="ผลการประเมิน"
                                color="primary"
                                type="text"
                                {...register(`shootingTest.${index}.result`)}
                                css={{
                                  minWidth: "200px",
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
  )
}