import {Grid, Input, Button, Text, Card, Checkbox} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";
import { useState, useMemo} from "react";
import { getValueFromDropdown } from "./getValueFromDropdown";

export default function EducationForm(prop){
  const {
    reactHookForm,
    province,
    district,
    subDistrict,
    zipcode,
    yn,
    education
  } = prop;

  const {register, handleSubmit} = reactHookForm;

  return(
    <Grid.Container gap={2}>
      <Grid>
        <DropdownInput
          formName="educationLevel"
          nameLabel={"ระดับการศึกษา"}
          menuItems={education}
          reactHookForm={reactHookForm}
          />
      </Grid>
      <Grid xs={12}>
        <Input
          bordered
          label="ชื่อสถาบันที่จบการศึกษาสูงสุด"
          placeholder="ชื่อสถาบัน"
          color="primary"
          {...register("S_name")}
        />
      </Grid>
      {/* ที่อยู่สถาบัน */}
      <Grid>
        <Input
          bordered
          label="เลขที่"
          placeholder="เลขที่"
          color="primary"
          {...register("S_address")}
        />
      </Grid>
        <Grid>
          <Input
            bordered
            label="หมู่ที่"
            placeholder="หมู่ที่"
            color="primary"
            {...register("S_moo")}
          />
        </Grid>
        <Grid>
          <Input
            bordered
            label="ตรอก/ซอย"
            placeholder="ตรอก/ซอย"
            color="primary"
            {...register("S_soi")}
          />
        </Grid>
        <Grid>
          <Input
            bordered
            label="ถนน"
            placeholder="ถนน"
            color="primary"
            {...register("S_road")}
          />
        </Grid>
        <Grid>
        <DropdownInput
            formName="S_province"
            nameLabel={"จังหวัด"}
            menuItems={province}
            reactHookForm={reactHookForm}
          />
        </Grid>
        <Grid>
          <DropdownInput
            formName="S_district"
            nameLabel={"อำเภอ"}
            menuItems={district}
            reactHookForm={reactHookForm}
          />
        </Grid>
        <Grid>
        <DropdownInput
            formName="S_subDistrict"
            nameLabel={"ตำบล"}
            menuItems={subDistrict}
            reactHookForm={reactHookForm}
          />
        </Grid>
        <Grid>
          <Input
            bordered
            label="รหัสไปรษณีย์"
            placeholder="รหัสไปรษณีย์"
            color="primary"
            {...register("S_postal_code")}
          />
        </Grid>
        <Grid xs={12}>
          <DropdownInput
            formName="educationGenaral"
            nameLabel={"ต้องการศึกษาการศึกษานอกระบบหรือไม่ (กศน.)"}
            menuItems={yn}
            reactHookForm={reactHookForm}
          />
        </Grid>
        <Grid xs={12}>
          <DropdownInput
            formName="educationArmy"
            nameLabel={"ต้องการศึกษาโรงเรียนนายสิบทหารบกหรือไม่"}
            menuItems={yn}
            reactHookForm={reactHookForm}
          />
        </Grid>


    </Grid.Container>
  )
}