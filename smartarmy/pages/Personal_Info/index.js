import React, { useEffect } from 'react';
import { Fragment, useState} from 'react';
import TableCard from '../../components/DataTable';
import HeaderMenuBar from '../../components/headerMenuBar';
import PersonalDetail from './Personal_Detail';
import { getServerSession } from 'next-auth';
import { authOptions } from "../api/auth/[...nextauth]";
import { useForm } from 'react-hook-form';

export default function Personal_Info(){
  const reactHookForm = useForm();

  const [selectData, setSelectData] = useState([]);
  const [editData, setEditData] = useState(false);
  const [viewData, setViewData] = useState(false);
  
  const editFunction = (rows) => {
    setSelectData(rows);
    setEditData(true);
  }

  const viewFunction = (rows) => {
    setSelectData(rows);
    setViewData(true);
  }

  const columns = [
    {name: "ยศชื่อ-นามสกุล", uid: "name" },
    {name: "รหัสบัตรประชาชน", uid: "id_card" },
    {name: "รหัสประจำตัวทหาร", uid: "rta_id" },
    {name: "สังกัด", uid: "detp" },
    {name: "หน่วย", uid: "sub_detp" },
    {name: "action", uid: "actions" },
  ]

  const loadDataTable = [
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
  return(
    <div>
      <HeaderMenuBar
        pageName="ข้อมูลประวัติส่วนตัว"
        selectPage={selectData}
        setSelectPage={setSelectData}
        setEditPage={setEditData}
        setViewPage={setViewData}
        viewPage={viewData}
        editPage={editData}
      />
      <div className="container container-card">
        {/* <PersonalDetail
          userPorfile={selectData}
        /> */}
        {editData || viewData && selectData ? (
          <PersonalDetail
            userProfile={selectData}
            editData={editData}
            viewData={viewData}
            setEditData={setEditData}
            setViewData={setViewData}
            reactHookForm={reactHookForm}
            />
        ):(
          <TableCard
          columns={columns}
          data={loadDataTable}
          editFunction={editFunction}
          viewFunction={viewFunction}
          // setSelectData={setSelectData}
          />
        )}
        
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  // const router = useRouter();
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