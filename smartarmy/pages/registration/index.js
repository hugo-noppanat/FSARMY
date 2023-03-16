import React, { useEffect } from 'react';
import TableCard from '../../components/DataTable';
import HeaderMenuBar from '../../components/headerMenuBar';
import PersonalDetail from './Personal_Detail';
import { useForm } from 'react-hook-form';

export default function Registration(){
  const reactHookForm = useForm();
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