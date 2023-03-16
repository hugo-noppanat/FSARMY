import React, { Fragment, useState } from "react";
// import { Grid } from "@nextui-org/react";
import Card_Info from "../../../components/cardInfo";
import { Grid, Input, Card, Text, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import DropdownInput from "../../../components/DropdownInput";
import TableCard from "../../../components/DataTable";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Modal } from '@nextui-org/react';


export default function MedForm(props) {
  const {
    userProfile,
    columns,
    data,
    dataPee,
    setEditFormPee,
    setEditFormTemp,
    editFormPee,
    editFormTemp,
  } = props;

  const { register, handleSubmit } = useForm();
  const [ openModal, setOpenModal ] = useState(false);
  return (
    <Fragment>
      <Grid.Container gap={1}>
        <Grid xs={0} sm={3}>
          <Card_Info data={userProfile} />
        </Grid>
        <Grid xs={12} sm={9}>
          <Card>
            <Grid.Container gap={1}>
              <Grid xs={12}>
                <Card css={{ h: "$15", $$cardColor: "$colors$secondary" }}>
                  <Card.Header css={{ padding: "5px 10px" }}>
                    <Text size={20} weight={"bold"}>
                      อุณหภูมิประจำวัน
                    </Text>
                  </Card.Header>
                </Card>
              </Grid>
              <Grid container justify="center">
                <Grid xs={10}>
                  </Grid>
                <Grid xs={2}>
                <Button size={"sm"} icon={<AddCircleIcon />} flat onClick={() =>{setOpenModal(true)}}>
                  เพิ่มข้อมูล
                </Button>
                </Grid>
              </Grid>
              <Grid css={{ minWidth: "-webkit-fill-available" }}>
                <TableCard columns={columns} data={data} />
              </Grid>

              <Grid xs={12}>
                <Card css={{ h: "$15", $$cardColor: "$colors$secondary" }}>
                  <Card.Header css={{ padding: "5px 10px" }}>
                    <Text size={20} weight={"bold"}>
                      ปัสสาวะประจำวัน
                    </Text>
                  </Card.Header>
                </Card>
              </Grid>
              <Grid css={{ minWidth: "-webkit-fill-available" }}>
                <TableCard columns={columns} data={data} />
              </Grid>

            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>

      {/* modal editFormTemp */}
      <Modal
        closeButton
        open={openModal}
        onClose={() => setOpenModal(false)}
        // aria-labelledby="modal-title"
        width="600px"
        css={{
          padding: "10px !important",
        }}
        // {...bindings}
      >
        <Modal.Header>
          <Text>ข้อมูลประจำวัน</Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={1}>
            <Grid xs={6}>
              <Input
                bordered
                label="วันเดือนปี"
                placeholder="วันเดือนปี"
                color="primary"
                type={"date"}
                {...register("date")}
              />
            </Grid>
            <Grid xs={6}>
              <DropdownInput
                nameLabel="ห้วงเวลา"
                menuItems={["เช้า", "บ่าย", "เย็น"]}
                selectedNname={[]}
                setSelectedNname={[]}
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
                role={""}
                {...register("temp")}
              />
            </Grid>
            <Grid xs={6}>
              <DropdownInput
                nameLabel="ระดับปัสสาวะ"
                menuItems={["ปกติ", "เบา", "ปานกลาง", "หนัก"]}
                selectedNname={[]}
                setSelectedNname={[]}
              />
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={()=>{setOpenModal(false)}}>
            ปิด
          </Button>
          <Button auto onPress={()=>{setOpenModal(false)}}>
            บันทึก
          </Button>
        </Modal.Footer>
        </Modal>

    </Fragment>
  );
}
