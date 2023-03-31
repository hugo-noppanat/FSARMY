import { Fragment, useEffect, useState } from "react"
import TableCard from "../../../components/DataTable"
import DhForm from "./DhForm"
export default function DailyHealth(props){
  const { 
    selectData,
    setSelectData,
    setEditData,
    setViewData,
    editData,
    viewData,
    reactHookForm
  } = props
  
  const columns = [
    {name: "ยศชื่อ-นามสกุล", uid: "name" },
    {name: "รหัสบัตรประชาชน", uid: "id_card" },
    {name: "รหัสประจำตัวทหาร", uid: "rta_id" },
    {name: "สังกัด", uid: "detp" },
    {name: "หน่วย", uid: "sub_detp" },
    {name: "action", uid: "actions" },
  ]

  let loadDataTable = [
    {
      id: 21,
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'พลทหาร สามารถสี่ สมบัติ',
      rta_id: '124567890',
      id_card: '1234567890123',
      detp:'ร.14 พัน 2',
      sub_detp:"ร้อย.อวบ.2",
    },
    {
      id: 24,
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'พลทหาร สองสาม สมบัติ',
      rta_id: '445751258',
      id_card: '789456213555',
      detp:'ร.14 พัน 2',
      sub_detp:"ร้อย.อวบ.1",
    },
  ]


  const editFunction = (rows) => {
    setEditData(rows);
    // setSelectData(rows);
  }
  
  const viewFunction = (rows) => {
    setViewData(rows);
    // setSelectData(rows);
  }

  return(
    <div>
      { 
        editData || viewData ? 
        (
          <DhForm 
            userProfile={editData ? editData : viewData}
            reactHookForm={reactHookForm}
          /> 
        ): (
          <TableCard
            columns={columns}
            data={loadDataTable}
            editFunction={editFunction}
            viewFunction={viewFunction}
            setSelectData={setSelectData}
          />
        )
      }
    </div>
  )
}