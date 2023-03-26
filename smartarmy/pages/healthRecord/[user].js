import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import { Grid, Input, Button, Text, Card, Row,Spacer} from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import DropdownInput from '../../components/DropdownInput'

export default function UserPage() {
    const router = useRouter()
    const pathData = router.query
    const reactHookForm = useForm()
    const { register, handleSubmit, watch, control} = reactHookForm;
    const onSubmit = data => console.log(data);

    return (
        <Fragment>
        <Grid.Container gap={1}>
            <Grid xs={12} className="mt-2" justify='center'>
                <Text h2 justify='center'>บันทึกข้อมูลสุขภาพประจำวัน</Text>
            </Grid>
        </Grid.Container>
        <Row justify='center'>
        <Card
            shadow
            style={{ width: "30rem", marginTop: "1rem" }}
        >
            <Grid.Container gap={2} justify="center">
            <Row justify='center'>
            {/* <Grid xs={12}> */}
                <Text h3 className="mt-3">รหัสประจำตัว: {pathData.id}</Text>
            {/* </Grid> */}
            </Row>

            {/* <Row justify='center'> */}
            <Grid xs={6}>
              <Input
                bordered
                label="วันเดือนปี"
                placeholder="วันเดือนปี"
                color="primary"
                type={"date"}
                {...register("date")}
                required
              />
            </Grid>
            <Grid xs={6} className="mt-3">
              <DropdownInput
                formName="time"
                nameLabel="ห้วงเวลา"
                menuItems={[
                  {
                    label: "เช้า", value: "morning"
                  },
                  {
                    label: "กลางวัน", value: "noon"
                  },
                  {
                    label: "เย็น", value: "evening"
                  },
                ]}
                reactHookForm={reactHookForm}
              />
            </Grid>
            <Grid xs={6}>
              <Input
                bordered
                label="อุณหภูมิ"
                placeholder="อุณหภูมิ"
                color="primary"
                type={"number"}
                labelRight="°C"
                role={{ min: 0, max: 100, required: true }}
                {...register("temp", { required: true })}

              />
            </Grid>
            <Grid xs={6} className="mt-3">
              <DropdownInput
                formName="pee"
                nameLabel="ระดับปัสสาวะ"
                menuItems={[
                  {label: "ปกติ", value: "normal"},
                  {label: "เบา", value: "light"},
                  {label: "ปานกลาง", value: "medium"},
                  {label: "หนัก", value: "heavy"},
                ]}
                reactHookForm={reactHookForm}
              />
            </Grid>
            <Grid>
          <Row justify="end" className=" d-flex mb-2 p-2">
            <Button size={"sm"} color={"error"} flat onClick={() => console.log("Download")}>
              ยกเลิก
            </Button>
            <Spacer x={0.5} />
            <Button size={"sm"} coler={"primary"} flat onClick={() => console.log("Download")}>
              นำเข้า
            </Button>
          </Row>
        </Grid>
            </Grid.Container>

        </Card>
        </Row>
        </Fragment>
    )
}

import { getServerSession } from 'next-auth';
import { authOptions } from "../api/auth/[...nextauth]";
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)
  if(!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}