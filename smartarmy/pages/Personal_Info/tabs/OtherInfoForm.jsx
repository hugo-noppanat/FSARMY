import {Grid, Input, Text, Card} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function OtherInfoForm(prop){
  const { 
    reactHookForm,
  } = prop;

  const {register, handleSubmit} = reactHookForm;

  return(
    <Grid.Container gap={2}>
      <Grid>
        <Input
          bordered
          label="อาชีพก่อนเข้ารับราชการทหารกองประจำการ"
          placeholder="อาชีพ"
          color="primary"
          {...register("occupation")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label="สถานที่ทำงาน"
          placeholder="สถานที่ทำงาน"
          color="primary"
          {...register("workplace")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label={"รายได้ต่อเดือน"}
          placeholder="รายได้ต่อเดือน"
          color="primary"
          {...register("income")}
        />
      </Grid>
      <Grid xs={12} css={{paddingBottom:"0" }}>
        <Text size={14} css={{marginBottom:"0.3rem", marginLeft:"0.5rem"}} color="primary">ความสามารถพิเศษ</Text>
      </Grid>
      <Grid xs={12} css={{padding:"0" }}>
        <Text size={14} css={{marginBottom:"0.3rem", marginLeft:"2rem", padding:"1px"}} color="primary">ความสามารถด้านภาษา</Text>
      </Grid>
      <Grid xs={12} css={{marginLeft:"4rem"}}>
        <DropdownInput
          nameLabel={"ภาษาอังกฤษ"}
          menuItems={["พูดได้ดี", "พูดได้ปานกลาง", "พูดได้น้อย", "ไม่พูด"]}
          selectedNname={[]}
          setSelectedNname={[]}
          size="sm"
        />
      </Grid>
      <Grid xs={12} css={{marginLeft:"4rem"}}>
        <DropdownInput
          nameLabel={"ภาษาเมียนมาร์"}
          menuItems={["พูดได้ดี", "พูดได้ปานกลาง", "พูดได้น้อย", "ไม่พูด"]}
          selectedNname={[]}
          setSelectedNname={[]}
          size="sm"
        />
      </Grid>
      <Grid xs={12} css={{marginLeft:"4rem"}}>
        <DropdownInput
          nameLabel={"ภาษากระเหรี่ยง"}
          menuItems={["พูดได้ดี", "พูดได้ปานกลาง", "พูดได้น้อย", "ไม่พูด"]}
          selectedNname={[]}
          setSelectedNname={[]}
          size="sm"
        />
      </Grid>
      <Grid xs={12} css={{marginLeft:"4rem"}}>
        <DropdownInput
          nameLabel={"ภาษาพม่า"}
          menuItems={["พูดได้ดี", "พูดได้ปานกลาง", "พูดได้น้อย", "ไม่พูด"]}
          selectedNname={[]}
          setSelectedNname={[]}
          size="sm"
        />
      </Grid>
      <Grid xs={12} css={{marginLeft:"4rem"}}>
        <Input
          size="md"
          bordered
          label={"ภาษาอื่นๆ"}
          placeholder="ภาษาอื่นๆ"
          color="primary"
          {...register("other_language")}
        />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"ความสามารถด้านอาชีพ"}
          menuItems={["ไม่มี", "มี"]}
          selectedNname={[]}
          setSelectedNname={[]}
          />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"ความสามารถด้านกีฬา"}
          menuItems={["ไม่มี", "มี"]}
          selectedNname={[]}
          setSelectedNname={[]}
          />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"ความสามารถด้านดนตรี/ศิลปะ"}
          menuItems={["ไม่มี", "มี"]}
          selectedNname={[]}
          setSelectedNname={[]}
          />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"ความสามารถในการขับขี่"}
          menuItems={["ไม่มี", "มี"]}
          selectedNname={[]}
          setSelectedNname={[]}
          />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"ท่านมีใบอนุญาตขับขี่รถยนต์หรือไม่"}
          menuItems={["ไม่มี", "มี"]}
          selectedNname={[]}
          setSelectedNname={[]}
          />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"เหตุเข้ารับราชการ"}
          menuItems={["เลือกเหตุเข้ารับราชการ", "เหตุเข้ารับราชการ"]}
          selectedNname={[]}
          setSelectedNname={[]}
          />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"การรับราชการ"}
          menuItems={["เลือกการรับราชการ", "การรับราชการ"]}
          selectedNname={[]}
          setSelectedNname={[]}
          />
      </Grid>
      <Grid xs={12}>
        <Text>แผนที่โดยสังเขป</Text>
      </Grid>
      <Grid xs={12}>
      <Card css={{ h: "$15", $$cardColor: '$colors$secondary' }}>
        <Card.Header css={{padding:"5px 10px"}}>
          <Text size={20} weight={"bold"}>ประวัติอาชญากรรม</Text>
        </Card.Header>
      </Card>
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"เคยถูกจับกุมหรือไม่"}
          menuItems={["ไม่เคย", "เคย"]}
          selectedNname={[]}
          setSelectedNname={[]}
          />
      </Grid>
      <Grid>
        <Input
          bordered
          label={"เมื่อวันที่"}
          type="date"
          color="primary"
          {...register("date")}
        />
      </Grid>
      <Grid>
        <DropdownInput
          nameLabel={"ผลการตัดสินคดี"}
          menuItems={["ไม่เคย", "เคย"]}
          selectedNname={[]}
          setSelectedNname={[]}
          />
      </Grid>
      <Grid>
        <Input
          bordered
          label={"หมายเหตุ"}
          placeholder="หมายเหตุ"
          color="primary"
          {...register("note")}
        />
      </Grid>
    </Grid.Container>

  )
}
