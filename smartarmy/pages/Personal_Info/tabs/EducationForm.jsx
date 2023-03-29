import {Grid, Input, Button, Text, Card, Checkbox} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";
import { useState, useEffect} from "react";
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

  const {register, watch, setValue} = reactHookForm;

  useEffect(() => {
    if(watch("S_subDistrict")){
      const code = zipcode.find((item) => {
        if(item.value === watch("S_subDistrict")){
          setValue("S_zipcode", item.value);
        }
      })
    }
  },[watch("S_subDistrict")])

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
            menuItems={district.filter((item) => Math.floor((item.value/100)%100) == watch("S_province"))}
            reactHookForm={reactHookForm}
          />
        </Grid>
        <Grid>
        <DropdownInput
            formName="S_subDistrict"
            nameLabel={"ตำบล"}
            menuItems={subDistrict.filter((item) => Math.floor((item.value/100)%100000) == watch("S_district"))}
            reactHookForm={reactHookForm}
          />
        </Grid>
        <Grid>
        <DropdownInput
          formName={"S_zipcode"}
          nameLabel={"รหัสไปรษณีย์"}
          menuItems={zipcode.filter((item) => item.value == watch("S_subDistrict"))}
          reactHookForm={reactHookForm}
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