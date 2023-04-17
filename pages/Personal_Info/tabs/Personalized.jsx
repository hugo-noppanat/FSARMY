import {Grid, Input, useInput, Button, Text, Card, Checkbox} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";
import { useState, useMemo, useEffect, useRducer} from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


export default function Personalized(prop) {
  const {
    reactHookForm,
    thaiAddress,
    changeAutoComplete,
    subDistrict,
    district,
    province,
    zipcode,
    selectAddress,
    isRegister=false,
  } = prop;

  const [checkbox, setCheckbox] = useState(false);
  // const { value, reset: resets, bindings } = useInput("");
  const {register, reset, getValues,setValue, watch} = reactHookForm;


  const gdtype = [
    {label: "นาย", value: "นาย"},
    {label: "นาง", value: "นาง"},
    {label: "นางสาว", value: "นางสาว"},
    {label: "เด็กชาย", value: "เด็กชาย"},
    {label: "เด็กหญิง", value: "เด็กหญิง"},
    {label: "พลทหาร", value: "พลทหาร"},
  ]

  const bloodType = [
    {label: "A", value: "A"},
    {label: "B", value: "B"},
    {label: "O", value: "O"},
    {label: "AB", value: "AB"},
  ]

  useEffect(() => {
    if (isRegister){
      if(checkbox){
        reset({
          P_address: getValues("O_address"),
          P_moo: getValues("O_moo"),
          P_soi: getValues("O_soi"),
          P_road: getValues("O_road"),
          P_province: getValues("O_province"),
          P_district: getValues("O_district"),
          P_subDistrict: getValues("O_subDistrict"),
          P_zipcode: getValues("O_zipcode"),
        })
      }else{
        reset({
          P_address: "",
          P_moo: "",
          P_soi: "",
          P_road: "",
          P_province: "",
          P_district: "",
          P_subDistrict: "",
          P_zipcode: "",
        })
      }
    }
  },[checkbox]);

  //set zipcode from selected subDistrict
  useEffect(() => {
    if(watch("O_subDistrict")){
      const code = zipcode.find((item) => {
        if(item.value === watch("O_subDistrict")){
          setValue("O_zipcode", item.value);
        }
      })
    }
  },[watch("O_subDistrict")])

  useEffect(() => {
    console.log(watch("brithday"));
    if(watch("brithday")){
      setValue("age", new Date().getFullYear() - watch("brithday").split("-")[0]);
    }
  },[watch("brithday")])


  const onSelectedCheckBox = (e) => {
    if (checkbox) {
      setCheckbox(false);
    }else{
      setCheckbox(true);
    }
  }

  const clickSubmit = (data) => {
    console.log(data);
  }

  return(
    <Grid.Container gap={2}>
      <Grid>
        <DropdownInput
          formName="title"
          nameLabel={"คำนำหน้า"}
          menuItems={gdtype}
          reactHookForm={reactHookForm}
          isReadOnly={true}
          defaultValue={"พลทหาร"}
          // rules={{ required: true }}
          // readOnly
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ชื่อ"
          placeholder="ชื่อ"
          color="primary"
          {...register("firstname")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="นามสกุล"
          placeholder="นามสกุล"
          color="primary"
          {...register("lastname")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ชื่อเล่น"
          placeholder="ชื่อเล่น"
          color="primary"
          {...register("nickname")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="วันเดือนปีเกิด"
          type="date"
          color="primary"
          {...register("brithday")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="อายุปัจจุบัน"
          placeholder="อายุปัจจุบัน"
          color="primary"
          {...register("age")}
          readOnly={true}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="เลขบัตรประชาชน"
          placeholder="เลขบัตรประชาชน"
          color="primary"
          {...register("idcard")}
        />
      </Grid>
      <Grid>
        {!isRegister && (
          <Input
          bordered
          label="เลขประจำตัว"
          placeholder="เลขประจำตัว"
          color="primary"
          {...register("rta_id")}
        />
        )}
        
      </Grid>
      <Grid>
        <DropdownInput
          formName="blood"
          nameLabel={"กรุ๊ปเลือด"}
          menuItems={bloodType}
          reactHookForm={reactHookForm}
          // isReadOnly={true}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="จำนวนปีที่รับราชการ"
          placeholder="จำนวนปีที่รับราชการ"
          color="primary"
          type={"number"}
          {...register("rta_year")}
        />
      </Grid>
      <Grid xs={12}>
      <Card css={{ h: "$15", $$cardColor: '$colors$secondary' }}>
        <Card.Header css={{padding:"5px 10px"}}>
          <Text size={20} weight={"bold"}>ภูมิลำเนา</Text>
        </Card.Header>
      </Card>
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
      </Grid>
      <Grid>
        <Input
          bordered
          label="บ้านเลขที่"
          placeholder="บ้านเลขที่"
          color="primary"
          {...register("O_address")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="หมู่ที่"
          placeholder="หมู่ที่"
          color="primary"
          {...register("O_moo")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ตรอก/ซอย"
          placeholder="ตรอก/ซอย"
          color="primary"
          {...register("O_soi")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ถนน"
          placeholder="ถนน"
          color="primary"
          {...register("O_road")}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="O_province"
          nameLabel={"จังหวัด"}
          menuItems={province}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="O_district"
          nameLabel={"อำเภอ"}
          menuItems={district.filter((item) => Math.floor((item.value/100)%100) == watch("O_province"))}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="O_subDistrict"
          nameLabel={"ตำบล"}
          menuItems={subDistrict.filter((item) => Math.floor((item.value/100)%100000) == watch("O_district"))}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="O_zipcode"
          nameLabel={"รหัสไปรษณีย์"}
          menuItems={zipcode.filter((item) => item.value == watch("O_subDistrict"))}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="โทรศัพท์มือถือ"
          placeholder="โทรศัพท์มือถือ"
          color="primary"
          {...register("mobile")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="Facebook"
          placeholder="Fecebook"
          color="primary"
          {...register("fecebook")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="Line"
          placeholder="Line"
          color="primary"
          {...register("line")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="Twitter"
          placeholder="Twitter"
          color="primary"
          {...register("twitter")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="Email"
          placeholder="Email"
          color="primary"
          {...register("email")}
        />
      </Grid>
      <Grid xs={12}>
        <Input
          bordered
          label="ปัจจุบันอาศัยอยู่กับ"
          placeholder="ปัจจุบันอาศัยอยู่กับ"
          color="primary"
          {...register("live_with")}
        />
      </Grid>
      <Grid xs={12}>
        <Checkbox size="xs" onChange={onSelectedCheckBox}> ที่อยู่เดียวกันกับภูมิลำเนา</Checkbox>
      </Grid>
      <Grid>
        <Input
          bordered
          label="บ้านเลขที่"
          placeholder="บ้านเลขที่"
          color="primary"
          {...register("P_address")}
          readOnly={checkbox}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="หมู่ที่"
          placeholder="หมู่ที่"
          color="primary"
          {...register("P_moo")}
          readOnly={checkbox}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ตรอก/ซอย"
          placeholder="ตรอก/ซอย"
          color="primary"
          {...register("P_soi")}
          readOnly={checkbox}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ถนน"
          placeholder="ถนน"
          color="primary"
          {...register("P_road")}
          readOnly={checkbox}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="P_province"
          nameLabel={"จังหวัด"}
          menuItems={province}
          reactHookForm={reactHookForm}
          disabled={checkbox}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="P_district"
          nameLabel={"อำเภอ"}
          menuItems={!checkbox ? district.filter((item) => Math.floor((item.value/100)%100) == watch("P_province")): district}
          reactHookForm={reactHookForm}
          disabled={checkbox}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="P_subDistrict"
          nameLabel={"ตำบล"}
          menuItems={!checkbox ? subDistrict.filter((item) => Math.floor((item.value/100)%100000) == watch("P_district")): subDistrict}
          reactHookForm={reactHookForm}
          disabled={checkbox}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="P_zipcode"
          nameLabel={"รหัสไปรษณีย์"}
          menuItems={!checkbox ? zipcode.filter((item) => item.value == watch("P_subDistrict")): zipcode}
          reactHookForm={reactHookForm}
          disabled={checkbox}
        />
      </Grid>
    </Grid.Container>
  )
}