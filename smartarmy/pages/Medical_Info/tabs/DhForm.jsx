import React, { Fragment } from "react";
import { Grid, Input, Card, Text } from "@nextui-org/react";
import Card_Info from "../../../components/cardInfo";
import DropdownInput from "../../../components/DropdownInput";

export default function DhForm(props) {
  const { userProfile, reactHookForm} = props;
  const { register } = reactHookForm;

  return (
    <Fragment>
      <Grid.Container gap={1}>
        <Grid xs={0} sm={3}>
          <Card_Info data={userProfile} />
        </Grid>
        <Grid xs={12} sm={9}>
          <Card>
            <Grid.Container gap={2}>
              <Grid xs={12}>
                <Card css={{ h: "$15", $$cardColor: "$colors$secondary" }}>
                  <Card.Header css={{ padding: "5px 10px" }}>
                    <Text size={20} weight={"bold"}>
                      ข้อมูลทั่วไป
                    </Text>
                  </Card.Header>
                </Card>
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="ชื่อ"
                  placeholder="ชื่อ"
                  color="primary"
                  {...register("name")}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="นามสกุล"
                  placeholder="นามสกุล"
                  color="primary"
                  {...register("lastName")}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="อายุ"
                  placeholder="อายุ"
                  color="primary"
                  {...register("age")}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="กรุ๊ปเลือด"
                  placeholder="กรุ๊ปเลือด"
                  color="primary"
                  {...register("blood")}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="โรคประจำตัว"
                  placeholder="โรคประจำตัว"
                  color="primary"
                  {...register("disease")}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="เคยรับการรักษาที่"
                  placeholder="เคยรับการรักษาที่"
                  color="primary"
                  {...register("้hospitalHistory")}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="การแพ้ยา"
                  placeholder="การแพ้ยา"
                  color="primary"
                  {...register("drugAllergy")}
                />
              </Grid>
              <Grid>
                <DropdownInput
                  formName={"drugUsed"}
                  nameLabel={"ใช้ยาประจำหรือไม่"}
                  menuItems={[]}
                  reactHookForm={reactHookForm}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="ท่านใช้ยาประเภทใด"
                  placeholder="ท่านใช้ยาประเภทใด"
                  color="primary"
                  {...register("drugType")}
                />
              </Grid>
              <Grid xs={12}>
                <Card css={{ h: "$15", $$cardColor: "$colors$secondary" }}>
                  <Card.Header css={{ padding: "5px 10px" }}>
                    <Text size={20} weight={"bold"}>
                      {" "}
                      ดัชนีมวลกาย (Body Mass Index : BMI)
                    </Text>
                  </Card.Header>
                </Card>
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="น้ำหนัก"
                  placeholder="น้ำหนัก"
                  color="primary"
                  {...register("weight")}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="ส่วนสูง"
                  placeholder="ส่วนสูง"
                  color="primary"
                  {...register("height")}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="ดัชนีมวลกาย"
                  placeholder="ดัชนีมวลกาย"
                  color="primary"
                  {...register("bmi")}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="ผลลัพธ์"
                  placeholder="ผลลัพธ์"
                  color="primary"
                  {...register("bmiResult")}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="ความเสี่ยงต่อโรค"
                  placeholder="ความเสี่ยงต่อโรค"
                  color="primary"
                  {...register("risk")}
                />
              </Grid>
              <Grid xs={12}>
                <Card css={{ h: "$15", $$cardColor: "$colors$secondary" }}>
                  <Card.Header css={{ padding: "5px 10px" }}>
                    <Text size={20} weight={"bold"}>
                      {" "}
                      ประวัติการใช้สารเสพติด
                    </Text>
                  </Card.Header>
                </Card>
              </Grid>
              <Grid>
                <DropdownInput
                  formName={"drugVUsed"}
                  nameLabel={"ท่านเคยใช้สารเสพติดหรือไม่"}
                  menuItems={[]}
                  reactHookForm={reactHookForm}
                />
              </Grid>
              <Grid>
                <DropdownInput
                  formName={"drugVType"}
                  nameLabel={"ประเภทของสารเสพติดที่ใช้"}
                  menuItems={[]}
                  reactHookForm={reactHookForm}
                />
              </Grid>
              <Grid>
                <DropdownInput
                  formName={"drugVUsedTime"}
                  nameLabel={"เคยใช้มาแล้วเป็นเวลาเท่าใด"}
                  menuItems={[]}
                  reactHookForm={reactHookForm}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="สาเหตุที่ใช้สารเสพติด"
                  placeholder="สาเหตุที่ใช้สารเสพติด"
                  color="primary"
                  {...register("reasonUse")}
                />
              </Grid>
              <Grid>
                <DropdownInput
                  formName={"drugVDisuse"}
                  nameLabel={
                    "หากเลิกใช้สารเสพติดแล้ว เคยเลิกใช้มาเป็นเวลาเท่าใด"
                  }
                  menuItems={[]}
                  reactHookForm={reactHookForm}
                />
              </Grid>
              <Grid>
                <Input
                  bordered
                  label="สาเหตุที่เลิกใช้สารเสพติด"
                  placeholder="สาเหตุที่เลิกใช้สารเสพติด"
                  color="primary"
                  {...register("reasonDisuse")}
                />
              </Grid>
            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>
    </Fragment>
  );
}
