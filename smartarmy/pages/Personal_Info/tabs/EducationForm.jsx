import {Grid, Input, Button, Text, Card, Checkbox} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";
import { useState, useMemo} from "react";
import { getValueFromDropdown } from "./getValueFromDropdown";

export default function EducationForm(prop){
  const {
    reactHookForm,
  } = prop;

  const {register, handleSubmit} = reactHookForm;

  return(
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <DropdownInput
          nameLabel={"ระดับการศึกษาสูงสุด"}
          menuItems={["ประถมศึกษา", "มัธยมศึกษา", "ปวช.", "ปวส.", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"]}
          selectedNname={[]}
          setSelectedNname={[]}
          />
      </Grid>
      <Grid xs={12}>
        <DropdownInput
          nameLabel={"จบการศึกษาสูงสุดจากโรงเรียน/สถาบัน"}
          menuItems={[]}
          selectedNname={[]}
          setSelectedNname={[]} 
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
            nameLabel={"ตำบล"}
            menuItems={[]}
            selectedNname={[]}
            setSelectedNname={[]}
          />
        </Grid>
        <Grid>
          <DropdownInput
            nameLabel={"อำเภอ"}
            menuItems={[]}
            selectedNname={[]}
            setSelectedNname={[]}
          />
        </Grid>
        <Grid>
        <DropdownInput
            nameLabel={"จังหวัด"}
            menuItems={[]}
            selectedNname={[]}
            setSelectedNname={[]}
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
            nameLabel={"ต้องการศึกษาโรงเรียนนายสิบทหารบกหรือไม่"}
            menuItems={[]}
            selectedNname={[]}
            setSelectedNname={[]}
          />
        </Grid>
        <Grid xs={12}>
          <DropdownInput
            nameLabel={"ต้องการศึกษาโรงเรียนนายสิบทหารบกหรือไม่"}
            menuItems={[]}
            selectedNname={[]}
            setSelectedNname={[]}
          />
        </Grid>


    </Grid.Container>
  )
}