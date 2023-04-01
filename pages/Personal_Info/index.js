import React, { useEffect } from 'react';
import { Fragment, useState} from 'react';
import TableCard from '../../components/DataTable';
import HeaderMenuBar from '../../components/headerMenuBar';
import PersonalDetail from './Personal_Detail';
import { getServerSession } from 'next-auth';
import { authOptions } from "../api/auth/[...nextauth]";
import { useForm } from 'react-hook-form';
import UseAxios from '../../components/UseAxios';
import ToastMessage from '../../components/Toast'
import {getSession} from 'next-auth/react';
import { getOptionsFromChildren } from '@mui/base';

export default function Personal_Info(props){
  // const {data:session} = useSession({
  //   required: true,
  // })
  const reactHookForm = useForm();
  const {reset} = reactHookForm;

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

  const [subDistrict, setSubDistrict] = useState([]);
  const [district, setDistrict] = useState([]);
  const [province, setProvince] = useState([]);
  const [zipCode, setZipCode] = useState([]);
  const [yn, setYn] = useState([]);
  const [hnh, sethnh] = useState([]);
  const [size, setSize] = useState([]);
  const [ndn, setNdn] = useState([]);
  const [status, setStatus] = useState([]);
  const [statusLife, setStatusLife] = useState([]);
  const [dn, setDn] = useState([]);
  const [drugType, setDrugType] = useState([]);
  const [timimg, setTimimg] = useState([]);
  const [statusLiving, setStatusLiving] = useState([]);
  const [education, setEducation] = useState([]);
  const [yep, setYep] = useState([]);
  const [reasonEntry, setReasonEntry] = useState([]);
  const [ability, setAbility] = useState([]);

  async function getOptions (){
    const token = await getSession();
    const getSubDistrict = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"Tombon"
      },
      auth: token.user.email
    })
    // console.log(getSubDistrict);
    if(getSubDistrict?.status === 'success') {
    const data = getSubDistrict.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      });
    setSubDistrict(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n SubDistrict Error"})
    }

    const getDistrict = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"District"
      },
      auth: token.user.email
    })
    if(getDistrict?.status === 'success') {
    const data = getDistrict.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      });
    setDistrict(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n District Error"})
    }

    const getProvince= await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"Province"
      },
      auth: token.user.email
    })
    if(getProvince?.status === 'success') {
    const data = getProvince.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      });
    setProvince(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Province Error"})
    }

    const getZipCode = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"zipCode"
      },
      auth: token.user.email
    })
    if(getZipCode?.status === 'success') {
    const data = getZipCode.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      }
    );
    setZipCode(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n ZipCode Error"})
    }

    const getYn = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"Y/N"
      },
      auth: token.user.email
    })
    if(getYn?.status === 'success') {
    const data = getYn.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP
        }
      });
    setYn(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Y/N Error"})
    }

    const getHnh = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"hdh"
      },
      auth: token.user.email
    })
    if(getHnh?.status === 'success') {
    const data = getHnh.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP
        }
      });
    sethnh(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n HDH Error"})
    }

    const getSize = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"Size"
      },
      auth: token.user.email
    })
    if(getSize?.status === 'success') {
    const data = getSize.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      });
    setSize(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Size Error"})
    }

    const getndn = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"NY/NN"
      },
      auth: token.user.email
    })
    if(getndn?.status === 'success') {
    const data = getndn.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP
        }
      });
    setNdn(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n NDN Error"})
    }

    const getStatus = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"Status"
      },
      auth: token.user.email
    })
    if(getStatus?.status === 'success') {
    const data = getStatus.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP
        }
      });
    setStatus(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Status Error"})
    }

    const getStatusLife = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"StatusLife"
      },
      auth: token.user.email
    })
    if(getStatusLife?.status === 'success') {
    const data = getStatusLife.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP
        }
      });
    setStatusLife(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n StatusLife Error"})
    }

    const getDyn = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"DYN"
      },
      auth: token.user.email
    })
    if(getDyn?.status === 'success') {
    const data = getDyn.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP
        }
      });
    setDn(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n DYN Error"})
    }

    const getDrugType = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"DrugType"
      },
      auth: token.user.email
    })
    if(getDrugType?.status === 'success') {
    const data = getDrugType.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      });
    setDrugType(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n DrugType Error"})
    }

    const getTimimg = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"Timimg"
      },
      auth: token.user.email
    })
    if(getTimimg?.status === 'success') {
    const data = getTimimg.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      });
    setTimimg(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Timimg Error"})
    }

    const getStatusLiving = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"StatusLiving"
      },
      auth: token.user.email
    })
    if(getStatusLiving?.status === 'success') {
    const data = getStatusLiving.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP
        }
      });
    setStatusLiving(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n StatusLiving Error"})
    }

    const getEducation = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"EducationLevel"
      },
      auth: token.user.email
    })
    if(getEducation?.status === 'success') {
    const data = getEducation.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      });
    setEducation(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Education Error"})
    }

    const getYep = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"Yep"
      },
      auth: token.user.email
    })
    if(getYep?.status === 'success') {
    const data = getYep.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      });
    setYep(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Yep Error"})
    }

    const getReasonEntry = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"ReasonEntry"
      },
      auth: token.user.email
    })
    if(getReasonEntry?.status === 'success') {
    const data = getReasonEntry.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      });
    setReasonEntry(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n ReasonEntry Error"})
    }

    const getAbility = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: 'post',
      data:{
        SG_NAME:"Ability"
      },
      auth: token.user.email
    })
    if(getAbility?.status === 'success') {
    const data = getAbility.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME
        }
      });
    setAbility(data);
    }else{
      ToastMessage({type: "error", message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Ability Error"})
    }

  }

  useEffect(() => {
    getOptions();
    if (selectData.length === 0) {
      reset();
    }
  }, [selectData])

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
            subDistrict={subDistrict}
            district={district}
            province={province}
            zipcode={zipCode}
            status={status}
            statusLife={statusLife}
            // dyn={dyn}
            drugType={drugType}
            timimg={timimg}
            yn={yn}
            hnh={hnh}
            ndn={ndn}
            size={size}
            dn={dn}
            statusLiving={statusLiving}
            education={education}
            yep={yep}
            reasonEntry={reasonEntry}
            ability={ability}
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
  // const router = useRouter()
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