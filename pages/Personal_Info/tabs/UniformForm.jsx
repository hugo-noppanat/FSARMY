import {Grid, Input, Text, Card} from "@nextui-org/react";
import DropdownInput from "../../../components/DropdownInput";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function OtherInfoForm(prop){
  const { 
    reactHookForm,
    size
  } = prop;

  const {register, handleSubmit} = reactHookForm;

  const footsize =[
    {label: '6', value: 6 },
    {label: '6.5' , value: 6.5 },
    {label: '7', value: 7 },
    {label: '7.5', value: 7.5 },
    {label: '8', value: 8 },
    {label: '8.5', value: 8.5 },
    {label: '9', value: 9 },
    {label: '9.5', value: 9.5 },
    {label: '10', value: 10 },
    {label: '10.5', value: 10.5 },
    {label: '11', value: 11 },
    {label: '11.5', value: 11.5 },
    {label: '12', value: 12 },
    {label: '12.5', value: 12.5 },
    {label: '13', value: 13 },
    {label: '13.5', value: 13.5 },
    {label: '14', value: 14 },
    {label: '14.5', value: 14.5 },
    {label: '15', value: 15 },
    {label: '15.5', value: 15.5 },
  ]

  return(
    <Grid.Container gap={4}>
      <Grid>
        <DropdownInput
          formName="clothesSize1"
          nameLabel={"ชุดฝึก"}
          menuItems={size}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="clothesSize2"
          nameLabel={"เสื้อยืดคอวี"}
          menuItems={size}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="clothesSize3"
          nameLabel={"ชุดนอน"}
          menuItems={size}
          reactHookForm={reactHookForm}
          
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="clothesSize4"
          nameLabel={"กางเกงสามส่วน"}
          menuItems={size}
          reactHookForm={reactHookForm}
          
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="clothesSize5"
          nameLabel={"รองเท้า Combat"}
          menuItems={footsize}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="clothesSize6"
          nameLabel={"รองเท้าผ้าใบ"}
          menuItems={footsize}
          reactHookForm={reactHookForm}
        />
      </Grid>
      <Grid>
        <DropdownInput
          formName="clothesSize7"
          nameLabel={"รองเท้าออกกำลังกาย"}
          menuItems={footsize}
          reactHookForm={reactHookForm}
        />
      </Grid>

    </Grid.Container>
  )
}
