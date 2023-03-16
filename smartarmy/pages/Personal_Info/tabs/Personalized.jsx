import {Grid, Input, Button, Text, Card, Checkbox} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";
import { useState, useMemo, useEffect} from "react";
import { getValueFromDropdown } from "./getValueFromDropdown";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


export default function Personalized(prop) {
  const {
    reactHookForm,
    thaiAddress,
    changeAutoComplete,
  } = prop;

  const [selectedNname, setSelectedNname] = useState([]);
  const [selectedBloodType, setSelectedBloodType] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [selectedSubDistrict, setSelectedSubDistrict] = useState([]);
  const [selectedProvince2, setSelectedProvince2] = useState([]);
  const [selectedDistrict2, setSelectedDistrict2] = useState([]);
  const [selectedSubDistrict2, setSelectedSubDistrict2] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  const {register, handleSubmit, reset, getValues} = reactHookForm;

  const submitForm = (data) => {
    const Nname = getValueFromDropdown(selectedNname);
    console.log(data , Nname );
  }

  const gdtype = [
    {key: "1", value: "นาย"},
    {key: "2", value: "นาง"},
    {key: "3", value: "นางสาว"},
    {key: "4", value: "ด.ช."},
    {key: "5", value: "ด.ญ."},
    {key: "6", value: "พลทหาร"}
  ]

  const bloodType = [
    {key: "1", value: "A"},
    {key: "2", value: "B"},
    {key: "3", value: "O"},
    {key: "4", value: "AB"},
  ]

  useEffect(() => {
    if(checkbox){
      reset({
        P_address: getValues("O_address"),
        P_moo: getValues("O_moo"),
        P_soi: getValues("O_soi"),
        P_road: getValues("O_road"),
        P_zipcode: getValues("O_zipcode"),
      })
    }else{
      reset({
        P_address: "",
        P_moo: "",
        P_soi: "",
        P_road: "",
        P_zipcode: "",
      })
    }
  },[checkbox])

  const onSelectedCheckBox = (e) => {
    if (checkbox) {
      setCheckbox(false);
    }else{
      setCheckbox(true);
    }
  }
  return(
    <Grid.Container gap={2}>
      <Grid>
        <DropdownInput 
          nameLabel={"คำนำหน้าชื่อ"} 
          menuItems={gdtype}
          selectedNname={selectedNname}
          setSelectedNname={setSelectedNname}
          disable={true}
          />
      </Grid>
      <Grid>
        <Input
          bordered
          label="ชื่อ"
          placeholder="ชื่อ"
          color="primary"
          {...register("firstname")}
          initialValue="yyyy"
          readOnly={true}
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
          {...register("ิbrithday")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="อายุปัจจุบัน"
          placeholder="อายุปัจจุบัน"
          color="primary"
          {...register("age")}
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
        <Input
          bordered
          label="เลขประจำตัว"
          placeholder="เลขประจำตัว"
          color="primary"
          {...register("rta_id")}
        />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"กรุ๊ปเลือด"} 
          menuItems={bloodType}
          selectedNname={selectedBloodType}
          setSelectedNname={setSelectedBloodType}
          // disable={true}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="จำนวนปีที่รับราชการ"
          placeholder="จำนวนปีที่รับราชการ"
          color="primary"
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
          nameLabel={"ตำบล"}
          menuItems={gdtype}
          selectedNname={selectedSubDistrict}
          setSelectedNname={setSelectedSubDistrict}
          // disable={true}
        />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"อำเภอ"}
          menuItems={gdtype}
          selectedNname={selectedDistrict}
          setSelectedNname={setSelectedDistrict}
          // disable={true}
        />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"จังหวัด"}
          menuItems={gdtype}
          selectedNname={selectedProvince}
          setSelectedNname={setSelectedProvince}
          // disable={true}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="รหัสไปรษณีย์"
          placeholder="รหัสไปรษณีย์"
          color="primary"
          {...register("O_zipcode")}
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
          nameLabel={"ตำบล"}
          menuItems={gdtype}
          selectedNname={selectedSubDistrict2}
          setSelectedNname={setSelectedSubDistrict2}
          // disable={true}
        />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"อำเภอ"}
          menuItems={gdtype}
          selectedNname={selectedDistrict2}
          setSelectedNname={setSelectedDistrict2}
          // disable={true}
        />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"จังหวัด"}
          menuItems={gdtype}
          selectedNname={selectedProvince2}
          setSelectedNname={setSelectedProvince2}
          // disable={true}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="รหัสไปรษณีย์"
          placeholder="รหัสไปรษณีย์"
          color="primary"
          {...register("P_zipcode")}
          // disabled={checkbox}
          readOnly={checkbox}
        />
      </Grid>
    </Grid.Container>
  )
}