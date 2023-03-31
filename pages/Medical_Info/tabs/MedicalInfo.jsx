import TableCard from "../../../components/DataTable";
import React,{ Fragment, useState } from "react";
import MedForm from "./MedForm";

export default function MedicalInfo(props) {
  const { selectData, setSelectData, setEditData, setViewData, editData, viewData, reactHookForm} = props;

  const [editFormTemp, setEditFormTemp] = useState([]);
  const [editFormPee, setEditFormPee] = useState([]);

  const columns = [
    { name: "ยศชื่อ-นามสกุล", uid: "name" },
    { name: "รหัสบัตรประชาชน", uid: "id_card" },
    { name: "รหัสประจำตัวทหาร", uid: "rta_id" },
    { name: "สังกัด", uid: "detp" },
    { name: "หน่วย", uid: "sub_detp" },
    { name: "action", uid: "actions" },
  ];

  let loadDataTable = [
    {
      id: 21,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "พลทหาร สามารถสี่ สมบัติ",
      rta_id: "124567890",
      id_card: "1234567890123",
      detp: "ร.14 พัน 2",
      sub_detp: "ร้อย.อวบ.2",
    },
    {
      id: 24,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "พลทหาร สองสาม สมบัติ",
      rta_id: "445751258",
      id_card: "789456213555",
      detp: "ร.14 พัน 2",
      sub_detp: "ร้อย.อวบ.1",
    },
  ];

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
        <TableCard
          columns={columns}
          data={loadDataTable}
          editFunction={editFunction}
          viewFunction={viewFunction}
          setSelectData={setSelectData}
        />
      )}
    </Fragment>
  );
}
