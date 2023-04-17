import TableCard from "../../../components/DataTable";
import React,{ Fragment, useState, useEffect } from "react";
import MedForm from "./MedForm";
import UseAxios from "../../../components/UseAxios"
import { getSession } from "next-auth/react"
import ToastMessage from "../../../components/Toast"
import { Loading, Row } from "@nextui-org/react"

export default function MedicalInfo(props) {
  const { selectData, setSelectData, setEditData, setViewData, editData, viewData, reactHookForm} = props;

  const [editFormTemp, setEditFormTemp] = useState([]);
  const [editFormPee, setEditFormPee] = useState([]);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const columns = [
    {name: "ยศชื่อ-นามสกุล", uid: "name" },
    // {name: "รหัสบัตรประชาชน", uid: "id_card" },
    {name: "รหัสประจำตัวทหาร", uid: "rta_id" },
    {name: "สังกัด", uid: "detp" },
    // {name: "หน่วย", uid: "sub_detp" },
    {name: "action", uid: "actions" },
  ]

  const loadDataTable = async() => {
    let session = await getSession()

    const data = await UseAxios(
      {
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/callInfo/soldier`,
        data: {
          "RESP_UNIT": session?.dept,
        },
        auth: session?.accessToken
      }
    )
    if(data){
      const res = data.data.map((i) =>{
        return(
          {
            id: i.PERSOANL_ID,
            name: `${i.FRIST_NAME} ${i.LAST_NAME}`,
            rta_id: i.PERSOANL_ID,
            detp: i.DEPT,
          }
        )
      })
      setData(res)
      setLoading(false)
    }else{
      ToastMessage({
        type: "error",
        message: "ไม่สามารถโหลดข้อมูลได้"
      })
      setLoading(false)
    }

  }

  useEffect(() => {
    loadDataTable()
  }, [])


  const editFunction = (rows) => {
    setEditData(rows);
  };

  const viewFunction = (rows) => {
    setViewData(rows);
  };

  const columnsMedForm = [
    { name: "วัน/เดือน/ปี", uid: "date" },
    { name: "เช้า", uid: "morning" },
    { name: "บ่าย", uid: "afternoon" },
    { name: "เย็น", uid: "evening" },
  ]

  const loadDataTemp = [
    {
      id: 1,
      date: "01/01/2564",
      morning: "4.1",
      afternoon: "40.2",
      evening: "40.3",
    }
  ];

  const loadDataPee = [
    {
      id: 1,
      date: "01/01/2564",
      morning: "2",
      afternoon: "2",
      evening: "2",
    }
  ];


  return (
    <Fragment>
      {editData || viewData ? (
        <MedForm
          userProfile={editData ? editData : viewData}
          columns={columnsMedForm}
          data={loadDataTemp}
          setEditFromPee={setEditFormPee}
          setEditFromTemp={setEditFormTemp}
          editFormPee={editFormPee}
          editFormTemp={editFormTemp}
          reactHookForm={reactHookForm}
        />
      
      ) : (
        !loading ?(
          <TableCard
          columns={columns}
          data={data}
          editFunction={editFunction}
          viewFunction={viewFunction}
          setSelectData={setSelectData}
        />
        ):(
          <Row justify="center" align="center" css={{marginTop:"10%"}}>
             <Loading size="lg" type="points" color="primary" />
          </Row>
        )
      )}
    </Fragment>
  );
}
