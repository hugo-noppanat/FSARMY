import {Grid, Input, Text, Card} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";

export default function OtherInfoForm(prop){
  const { 
    reactHookForm,
    hdh,
    yep,
    reasonEntry,
    ability,
  } = prop;

  const {register} = reactHookForm;

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
      <Grid css={{marginLeft:"4rem"}}>
        <DropdownInput
          formName={"englishLanguageAbility"}
          nameLabel={"ภาษาอังกฤษ"}
          menuItems={ability}
          reactHookForm={reactHookForm}
        />
      </Grid>
      {/* <Grid css={{marginLeft:"4rem"}}>
        <DropdownInput
          formName={"chinaLanguageAbility"}
          nameLabel={"ภาษาจีน"}
          menuItems={ability}
          reactHookForm={reactHookForm}
        />
      </Grid> */}
      <Grid css={{marginLeft:"4rem"}}>
        <DropdownInput
          formName={"karanLanguageAbility"}
          nameLabel={"ภาษากระเหรี่ยง"}
          menuItems={ability}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid css={{marginLeft:"4rem"}}>
        <DropdownInput
          formName={"MyanmarLanguageAbility"}
          nameLabel={"ภาษาพม่า"}
          menuItems={ability}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid css={{marginLeft:"4rem"}}>
        <Input
          size="md"
          bordered
          label={"ภาษาอื่นๆ"}
          placeholder="ภาษาอื่นๆ"
          color="primary"
          {...register("other_language")}
        />
      </Grid>
      <Grid xs={12}></Grid>
      <Grid>
        <DropdownInput
          formName={"jobAbility"}
          nameLabel={"ความสามารถด้านอาชีพ"}
          menuItems={yep}
          reactHookForm={reactHookForm}
          />
      </Grid>
      <Grid>
        <DropdownInput
          formName={"SportAbility"}
          nameLabel={"ความสามารถด้านกีฬา"}
          menuItems={yep}
          reactHookForm={reactHookForm}
          />
      </Grid>
      <Grid>
        <DropdownInput
          formName={"MusicAbility"}
          nameLabel={"ความสามารถด้านดนตรี/ศิลปะ"}
          menuItems={yep}
          reactHookForm={reactHookForm}
          />
      </Grid>
      <Grid>
        <DropdownInput
          formName={"DriverAbility"}
          nameLabel={"ความสามารถในการขับขี่"}
          menuItems={yep}
          reactHookForm={reactHookForm}
          />
      </Grid>
      <Grid>
        <DropdownInput
          formName={"DriverLicense"}
          nameLabel={"ท่านมีใบอนุญาตขับขี่รถยนต์หรือไม่"}
          menuItems={yep}
          reactHookForm={reactHookForm}
          />
      </Grid>
      <Grid>
        <DropdownInput
          formName={"reasonForEnlistment"}
          nameLabel={"เหตุเข้ารับราชการ"}
          menuItems={reasonEntry}
          reactHookForm={reactHookForm}
          />
      </Grid>
      {/* <Grid>
        <DropdownInput
          formName={"reasonForEnlistment"}

          />
      </Grid> */}
      {/* <Grid xs={12}>
        <Text>แผนที่โดยสังเขป</Text>
      </Grid> */}
      <Grid xs={12}>
      <Card css={{ h: "$15", $$cardColor: '$colors$secondary' }}>
        <Card.Header css={{padding:"5px 10px"}}>
          <Text size={20} weight={"bold"}>ประวัติอาชญากรรม</Text>
        </Card.Header>
      </Card>
      </Grid>
      <Grid>
        <DropdownInput
          formName={"arrested"}
          nameLabel={"เคยถูกจับกุมหรือไม่"}
          menuItems={hdh}
          reactHookForm={reactHookForm}
          />
      </Grid>
      <Grid>
        <Input
          bordered
          label={"เมื่อวันที่"}
          type="date"
          color="primary"
          {...register("dateArrested")}
        />
      </Grid>
      <Grid>
        <Input
          bordered
          label={"ผลการตัดสิน"}
          placeholder="ผลการตัดสิน"
          color="primary"
          {...register("resultArrested")}
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
