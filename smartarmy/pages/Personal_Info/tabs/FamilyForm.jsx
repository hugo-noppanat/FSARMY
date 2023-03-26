import {Grid, Input, Button, Text, Card, Checkbox,Row} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";
import { useState, useMemo, Fragment, useEffect} from "react";
import { getValueFromDropdown } from "./getValueFromDropdown";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useFieldArray } from "react-hook-form";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function FamilyForm(prop) {
  const {
    reactHookForm,
    // thaiAddress,
    // changeAutoComplete
    province,
    district,
    subDistrict,
    zipcode,
    statusFamily,
    status,
    statusLife,
  } = prop;

  const {register, control} = reactHookForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "familyForm"
  });
  

  useEffect(() => {
    append({ name: "familyForm" });
  }, []);
  return(
    <Grid.Container gap={2}>
      <Grid>
        <DropdownInput
          formName="family"
          nameLabel={"ปัจจุบัน บิดา มารดา (อยู่ด้วยกัน, แยกกันอยู่, หรือ หย่าร้าง)"}
          menuItems={statusFamily}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid xs={12}>
        <Text css={{fontWeight: "bold", marginBottom:"0px", marginTop:"5px"}}>ข้อมูลบิดา</Text>
      </Grid>
      <Grid>
        <Input
          bordered
          label="ชื่อบิดา"
          Placeholder="ชื่อบิดา"
          color="primary"
          {...register("F_firstname")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="นามสกุลบิดา"
          Placeholder="นามสกุลบิดา"
          color="primary"
          {...register("F_lastname")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="อายุ"
          Placeholder="อายุ"
          color="primary"
          {...register("F_age")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="อาชีพ"
          Placeholder="อาชีพ"
          color="primary"
          {...register("F_career")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="รายได้ต่อเดือน"
          Placeholder="รายได้ต่อเดือน"
          color="primary"
          {...register("F_income")}
        />
      </Grid>
      <Grid>
      <DropdownInput
          formName="F_status"
          nameLabel={"ปัจจุบันบิดา"}
          menuItems={statusLife}
          reactHookForm={reactHookForm}
        />
      </Grid>
      {/* <Grid xs={12}>
        <Input
          bordered
          labelPlaceholder="กรุณากรอกที่อยู่"
          color="primary"
          css={{width:"100%"}}
          {...register("PreAddress1")}
        />
      </Grid> */}
      <Grid xs={12} css={{marginTop:"0px"}}>
      </Grid>
      <Grid>
        <Input
          bordered
          label="บ้านเลขที่"
          Placeholder="บ้านเลขที่"
          color="primary"
          {...register("F_address")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="หมู่ที่"
          Placeholder="หมู่ที่"
          color="primary"
          {...register("F_moo")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ตรอก/ซอย"
          Placeholder="ตรอก/ซอย"
          color="primary"
          {...register("F_soi")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ถนน"
          Placeholder="ถนน"
          color="primary"
          {...register("F_road")}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="F_province"
          nameLabel={"จังหวัด"}
          menuItems={province}
          reactHookForm={reactHookForm}
          // disable={true}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="F_district"
          nameLabel={"อำเภอ"}
          menuItems={district}
          reactHookForm={reactHookForm}
          // disable={true}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="F_subDistrict"
          nameLabel={"ตำบล"}
          menuItems={subDistrict}
          reactHookForm={reactHookForm}
          // disable={true}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="รหัสไปรษณีย์"
          Placeholder="รหัสไปรษณีย์"
          color="primary"
          {...register("F_zipcode")}
        />
      </Grid>
      <Grid xs={12}>
        <Text css={{fontWeight: "bold", marginBottom:"0px", marginTop:"5px"}}>ข้อมูลมารดา</Text>
      </Grid>
      <Grid>
        <Input
          bordered
          label="ชื่อมารดา"
          Placeholder="ชื่อมารดา"
          color="primary"
          {...register("M_firstname")}
        />  
      </Grid>
      <Grid>
        <Input
          bordered
          label="นามสกุลมารดา"
          Placeholder="นามสกุลมารดา"
          color="primary"
          {...register("M_lastname")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="อายุ"
          Placeholder="อายุ"
          color="primary"
          {...register("M_age")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="อาชีพ"
          Placeholder="อาชีพ"
          color="primary"
          {...register("M_career")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="รายได้ต่อเดือน"
          Placeholder="รายได้ต่อเดือน"
          color="primary"
          {...register("M_income")}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="M_status"
          nameLabel={"ปัจจุบันมารดา"}
          menuItems={statusLife}
          reactHookForm={reactHookForm}
        />
      </Grid>
      {/* <Grid xs={12}>
        <Input
          bordered
          labelPlaceholder="กรุณากรอกที่อยู่"
          color="primary"
          css={{width:"100%"}}
          {...register("PreAddress2")}
        />
      </Grid>
      <Grid xs={12}>
        <Autocomplete
          id="free-solo"
          fullWidth
          freeSolo
          options={thaiAddress.map((option) => option.title)}
          onChange={(e, value)=>{changeAutoComplete(value)}}
          renderInput={(params) => (
            <TextField 
            variant="standard"
            label="Search input"
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
          )}
        />
      </Grid> */}
      <Grid xs={12} css={{marginTop:"0px"}}>
      </Grid>
      <Grid>
        <Input
          bordered
          label="บ้านเลขที่"
          Placeholder="บ้านเลขที่"
          color="primary"
          {...register("M_address")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="หมู่ที่"
          Placeholder="หมู่ที่"
          color="primary"
          {...register("M_moo")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ตรอก/ซอย"
          Placeholder="ตรอก/ซอย"
          color="primary"
          {...register("M_soi")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ถนน"
          Placeholder="ถนน"
          color="primary"
          {...register("M_road")}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="M_province"
          nameLabel={"จังหวัด"}
          menuItems={province}
          reactHookForm={reactHookForm}
          // disable={true}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="M_district"
          nameLabel={"อำเภอ"}
          menuItems={district}
          reactHookForm={reactHookForm}
          // disable={true}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="M_subDistrict"
          nameLabel={"ตำบล"}
          menuItems={subDistrict}
          reactHookForm={reactHookForm}
          // disable={true}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="รหัสไปรษณีย์"
          Placeholder="รหัสไปรษณีย์"
          color="primary"
          {...register("M_zipcode")}
        />
      </Grid>
      <Grid xs={12}>
      <Card css={{ h: "$15", $$cardColor: '$colors$secondary' }}>
        <Card.Header css={{padding:"5px 10px"}}>
          <Text size={20} weight={"bold"}>สถานภาพทหารใหม่</Text>
        </Card.Header>
      </Card>
      </Grid>
      <Grid>
        <DropdownInput
          formName="M_status"
          nameLabel={"สถานภาพ"}
          menuItems={status}
          reactHookForm={reactHookForm}
          // disable={true}
        />
      </Grid>
      <Grid xs={12} justify="end">
        <Checkbox size="xs">สถานภาพโสด และมีบุตร หรือ สถานภาพหย่าร้าง และมีบุตร</Checkbox>
      </Grid>
      {/* ภรรยา */}
      <Grid>
        <Input
          bordered
          label="ชื่อภรรยา"
          Placeholder="ชื่อภรรยา"
          color="primary"
          {...register("W_firstname")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="นามสกุลภรรยา"
          Placeholder="นามสกุลภรรยา"
          color="primary"
          {...register("W_lastname")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="อายุ"
          Placeholder="อายุ"
          color="primary"
          {...register("W_age")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="อาชีพ"
          Placeholder="อาชีพ"
          color="primary"
          {...register("W_career")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="รายได้ต่อเดือน"
          Placeholder="รายได้ต่อเดือน"
          color="primary"
          {...register("W_income")}
        />
      </Grid>
      {/* ที่อยู่ภรรยา */}
      {/* <Grid xs={12}>
        <Autocomplete
          id="free-solo"
          fullWidth
          freeSolo
          options={thaiAddress.map((option) => option.title)}
          onChange={(e, value)=>{changeAutoComplete(value)}}
          renderInput={(params) => (
            <TextField 
            variant="standard"
            label="Search input"
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
          )}
        />
      </Grid> */}
      <Grid xs={12} css={{marginTop:"0px"}}>
      </Grid>
      <Grid>
        <Input
          bordered
          label="บ้านเลขที่"
          Placeholder="บ้านเลขที่"
          color="primary"
          {...register("W_address")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="หมู่ที่"
          Placeholder="หมู่ที่"
          color="primary"
          {...register("W_moo")}
        />  
      </Grid>
      <Grid>
        <Input
          bordered
          label="ตรอก/ซอย"
          Placeholder="ตรอก/ซอย"
          color="primary"
          {...register("W_soi")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ถนน"
          Placeholder="ถนน"
          color="primary"
          {...register("W_road")}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="W_province"
          nameLabel={"จังหวัด"}
          menuItems={province}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="W_district"
          nameLabel={"อำเภอ"}
          menuItems={district}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="W_subDistrict"
          nameLabel={"ตำบล"}
          menuItems={subDistrict}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="รหัสไปรษณีย์"
          Placeholder="รหัสไปรษณีย์"
          color="primary"
          {...register("W_zipcode")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="เบอร์โทรศัพท์"
          Placeholder="เบอร์โทรศัพท์"
          color="primary"
          {...register("W_tel")}
        />
      </Grid>
      <Grid xs={12}>
        <Checkbox size="xs">มีบุตร</Checkbox>
      </Grid>
      <Grid>
        <Input
          bordered
          label="จำนวนบุตร (คน)"
          Placeholder="จำนวนบุตร"
          color="primary"
          {...register("W_child")}
        /> 
      </Grid>

      <Grid>
        <Input
          bordered
          label="เป็นชาย (คน)"
          Placeholder="เป็นชาย"
          color="primary"
          {...register("W_son")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="เป็นหญิง (คน)"
          Placeholder="เป็นหญิง"
          color="primary"
          {...register("W_daughter")}
        />
      </Grid>
      <Row justify="end">
        <Grid>
          <Button color="primary" auto ghost onClick={()=>{append({
            C_firstname: "",
            C_lastname: "",
          })}}>
            <AddCircleIcon className="mx-1"></AddCircleIcon>
            เพิ่ม
            </Button>
        </Grid>
      </Row>
      {/* บุตร */}
      <Grid xs={12}></Grid>
      {
        fields.map((item, index) => (
          <Fragment>
            <Grid>
              <Input
                key={item}
                bordered
                label="ชื่อบุตร"
                Placeholder="ชื่อบุตร"
                color="primary"
                {...register(`familyForm.C_firstname.${index}`)}
              />
            </Grid>
            <Grid>
              <Input
                key={item}
                bordered
                label="นามสกุลบุตร"
                Placeholder="นามสกุลบุตร"
                color="primary"
                {...register(`familyForm.C_lastname.${index}`)}
              />
            </Grid>
            <Grid>
              <RemoveCircleIcon className="mx-1" style={{marginTop:"2.3rem", cursor: "pointer"}} onClick={() => index > 0 && remove(index)}></RemoveCircleIcon>
            </Grid>
          </Fragment>
        ))
      }
      <Grid xs={12}>
        <Card css={{ h: "$15", $$cardColor: '$colors$secondary' }}>
          <Card.Header css={{padding:"5px 10px"}}>
            <Text size={20} weight={"bold"}>ข้อมูลเพิ่มเติม</Text>
          </Card.Header>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Text color="warning"> กรุณากรอกข้อมูลญาติ หรือบุคคลใกล้ชิดที่สามารถติดต่อได้</Text>
      </Grid>
      <Grid>
        <Input
          bordered
          label="ชื่อ"
          Placeholder="ชื่อ"
          color="primary"
          {...register("R_firstname")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="นามสกุล"
          Placeholder="นามสกุล"
          color="primary"
          {...register("R_lastname")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="เกี่ยวข้องเป็น"
          Placeholder="เกี่ยวข้องเป็น"
          color="primary"
          {...register("R_relationship")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="เบอร์โทรศัพท์"
          Placeholder="เบอร์โทรศัพท์"
          color="primary"
          {...register("R_tel")}
        />
      </Grid>
      <Grid xs={12} css={{marginTop:"0px"}}>
      </Grid>
      <Grid>
        <Input
          bordered
          label="บ้านเลขที่"
          Placeholder="บ้านเลขที่" 
          color="primary"
          {...register("R_address")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="หมู่ที่"
          Placeholder="หมู่ที่"
          color="primary"
          {...register("R_moo")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ตรอก/ซอย"
          Placeholder="ตรอก/ซอย"
          color="primary"
          {...register("R_soi")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ถนน"
          Placeholder="ถนน"
          color="primary"
          {...register("R_road")}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="R_province"
          nameLabel={"จังหวัด"}
          menuItems={province}
          reactHookForm={reactHookForm}
          // disable={true}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="R_district"
          nameLabel={"อำเภอ"}
          menuItems={district}
          reactHookForm={reactHookForm}
          // disable={true}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="R_subDistrict"
          nameLabel={"ตำบล"}
          menuItems={subDistrict}
          reactHookForm={reactHookForm}
          // disable={true}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="รหัสไปรษณีย์"
          Placeholder="รหัสไปรษณีย์"
          color="primary"
          {...register("R_zipcode")}
        />
      </Grid>

    </Grid.Container>
  )
}