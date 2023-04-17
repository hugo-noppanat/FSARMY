import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Input,
  Loading,
  Row,
  Text,
  Grid,
  useInput,
} from "@nextui-org/react";
import ToastMessage from "../../components/Toast";
import RegPage from "./RegPage";
import { useForm } from "react-hook-form";
import ThaiAddress from "../../image/ThaiAddress.json";
import UseAxios from "../../components/UseAxios";
// import ToastMessage from '../../components/Toast'
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default function Registration() {
  const { value, reset, bindings } = useInput("");
  const [onSubmit, setOnSubmit] = React.useState(false);
  const [authanticate, setAuthenticate] = React.useState(false);
  const [userProfile, setUserProfile] = React.useState(null);
  const reactHookForm = useForm();
  const [page, setPage] = React.useState(1);

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

  const [loading, setLoading] = useState(false);

  // validate idCard must be 13 digits, not empty, and is number
  const validateIdCard = (value) => {
    if (isNaN(value)) {
      return "กรุณากรอกเลขบัตรประจำตัวประชาชนเป็นตัวเลขเท่านั้น";
    } else if (value.length !== 13) {
      return "กรุณากรอกเลขบัตรประจำตัวประชาชน 13 หลัก";
    }
    return true;
  };

  async function getOptions() {
    // const token = await getSession();
    const getSubDistrict = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "Tombon",
      },
      // // auth: token.user.accessToken
    });
    // console.log(getSubDistrict);
    if (getSubDistrict?.status === "success") {
      const data = getSubDistrict.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setSubDistrict(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n SubDistrict Error",
      });
    }

    const getDistrict = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "District",
      },
      // // auth: token.user.accessToken
    });
    if (getDistrict?.status === "success") {
      const data = getDistrict.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setDistrict(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n District Error",
      });
    }

    const getProvince = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "Province",
      },
      // // auth: token.user.accessToken
    });
    if (getProvince?.status === "success") {
      const data = getProvince.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setProvince(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Province Error",
      });
    }

    const getZipCode = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "zipCode",
      },
      // // auth: token.user.accessToken
    });
    if (getZipCode?.status === "success") {
      const data = getZipCode.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setZipCode(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n ZipCode Error",
      });
    }

    const getYn = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "Y/N",
      },
      // // auth: token.user.accessToken
    });
    if (getYn?.status === "success") {
      const data = getYn.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP,
        };
      });
      setYn(data);
    } else {
      ToastMessage({
        type: "error",
        message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Y/N Error",
      });
    }

    const getHnh = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "hdh",
      },
      // // auth: token.user.accessToken
    });
    if (getHnh?.status === "success") {
      const data = getHnh.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP,
        };
      });
      sethnh(data);
    } else {
      ToastMessage({
        type: "error",
        message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n HDH Error",
      });
    }

    const getSize = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "Size",
      },
      // // auth: token.user.accessToken
    });
    if (getSize?.status === "success") {
      const data = getSize.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setSize(data);
    } else {
      ToastMessage({
        type: "error",
        message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Size Error",
      });
    }

    const getndn = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "NY/NN",
      },
      // // auth: token.user.accessToken
    });
    if (getndn?.status === "success") {
      const data = getndn.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP,
        };
      });
      setNdn(data);
    } else {
      ToastMessage({
        type: "error",
        message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n NDN Error",
      });
    }

    const getStatus = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "Status",
      },
      // // auth: token.user.accessToken
    });
    if (getStatus?.status === "success") {
      const data = getStatus.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP,
        };
      });
      setStatus(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Status Error",
      });
    }

    const getStatusLife = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "StatusLife",
      },
      // auth: token.user.accessToken
    });
    if (getStatusLife?.status === "success") {
      const data = getStatusLife.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP,
        };
      });
      setStatusLife(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n StatusLife Error",
      });
    }

    const getDyn = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "DYN",
      },
      // auth: token.user.accessToken
    });
    if (getDyn?.status === "success") {
      const data = getDyn.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP,
        };
      });
      setDn(data);
    } else {
      ToastMessage({
        type: "error",
        message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n DYN Error",
      });
    }

    const getDrugType = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "DrugType",
      },
      // auth: token.user.accessToken
    });
    if (getDrugType?.status === "success") {
      const data = getDrugType.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setDrugType(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n DrugType Error",
      });
    }

    const getTimimg = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "Timimg",
      },
      // auth: token.user.accessToken
    });
    if (getTimimg?.status === "success") {
      const data = getTimimg.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setTimimg(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Timimg Error",
      });
    }

    const getStatusLiving = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "StatusLiving",
      },
      // auth: token.user.accessToken
    });
    if (getStatusLiving?.status === "success") {
      const data = getStatusLiving.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_DESCP,
        };
      });
      setStatusLiving(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n StatusLiving Error",
      });
    }

    const getEducation = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "EducationLevel",
      },
      // auth: token.user.accessToken
    });
    if (getEducation?.status === "success") {
      const data = getEducation.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setEducation(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Education Error",
      });
    }

    const getYep = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "Yep",
      },
      // auth: token.user.accessToken
    });
    if (getYep?.status === "success") {
      const data = getYep.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setYep(data);
    } else {
      ToastMessage({
        type: "error",
        message: "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Yep Error",
      });
    }

    const getReasonEntry = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "ReasonEntry",
      },
      // auth: token.user.accessToken
    });
    if (getReasonEntry?.status === "success") {
      const data = getReasonEntry.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setReasonEntry(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n ReasonEntry Error",
      });
    }

    const getAbility = await UseAxios({
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/setting/searchGlobalSetting`,
      method: "post",
      data: {
        SG_NAME: "Ability",
      },
      // auth: token.user.accessToken
    });
    if (getAbility?.status === "success") {
      const data = getAbility.data.map((item) => {
        return {
          value: item.SSG_ID,
          label: item.SSG_NAME,
        };
      });
      setAbility(data);
    } else {
      ToastMessage({
        type: "error",
        message:
          "ไม่สามารถดึงข้อมูลได้ (กรุณาติดต่อผู้ดูแลระบบ) \n Ability Error",
      });
    }
    setLoading(false);
  }

  const [dateLists, setDateLists] = useState([]);

  const dateList = [];
  const addDate = async () => {
    for (let i = 0; i < 14; i++) {
      let duration = 1000 * 60 * 60 * 24 * i;
      dateList.push(new Date(+new Date() - duration));
    }
    await setDateLists(dateList);
  };

  useEffect(() => {
    setLoading(true);
    addDate();
    getOptions();
  }, []);

  const helper = React.useMemo(() => {
    if (!value && !onSubmit)
      return {
        text: "",
        color: "",
      };
    const isValid = validateIdCard(value);
    isValid && setOnSubmit(false);
    return {
      text: isValid !== true ? "คำเตือน : " + isValid : "",
      color: isValid !== true ? "warning" : "default",
    };
  }, [value, onSubmit]);

  const callingApi = async (inputMethod, inputUrl, inputData) => {
    var config = {
      method: inputMethod,
      url: inputUrl,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(inputData),
    };

    const response = await axios(config)
      .then((response) => {
        // setAuthentication(response.data);
        // console.log(response.data);
        return response;
      })

      .catch((error) => {
        // console.log(error)
        return error.response;
      });
    return response;
  };

  const handleSubmit = async () => {
    setOnSubmit(true);
    if (value.length === 13 && !isNaN(value)) {
      let data = {
        PERSONAL_ID: value,
      };
      let url = `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/authen/regNewSoldier`;
      const res = await callingApi("post", url, data);
      console.log(res.data);
      if (res.data.status === "success") {
        // ToastMessage("success", "ยินดีต้อนรับสู่ระบบ SmartArmy");
        setUserProfile(res.data.data[0]);
      } else {
        ToastMessage({ type: "error", message: res.data.data });
      }
    }
  };

  const Address = ThaiAddress.map((item) => {
    return {
      title: `${item.district},${item.amphoe},${item.province},${item.zipcode}`,
      ...item,
    };
  });

  useEffect(() => {
    if (userProfile !== null) {
      setAuthenticate(true);
    }
    // console.log(authanticate);
  }, [userProfile]);
  return (
    <>
      {!loading ? (
        <>
          {!authanticate ? (
            <Card
              variant="flat"
              css={{
                width: "auto",
                minWidth: "30%",
                maxWidth: "40%",
                height: "auto",
                // caed center
                margin: "auto",
                marginTop: "10%",
                marginBottom: "10%",
                marginLeft: "30%",
                marginRight: "30%",
                padding: "10px",
                backgroundColor: "var(--secondary)",
              }}
            >
              <Card.Header
                css={{ justifyContent: "center", marginTop: "30px" }}
              >
                <Text h5 align="center">
                  กรุณากรอกเลขบัตรประจำตัวประชาชน
                </Text>
              </Card.Header>
              <Card.Body css={{ justifyContent: "center" }}>
                <Row justify="center">
                  <Input
                    {...bindings}
                    aria-label="idCard"
                    // color="default"
                    placeholder="เลขบัตรประจำตัวประชาชน"
                    clearable
                    onClearClick={reset}
                    status={helper.color}
                    color={helper.color}
                    helperColor={"warning"}
                    helperText={helper.text}
                    required
                    css={{
                      width: "300px",
                      height: "50px",
                    }}
                  />
                </Row>
                <Row justify="center" css={{ marginTop: "30px" }}>
                  <Button
                    onPress={() => {
                      handleSubmit();
                    }}
                    css={{
                      minWidth: "150px",
                      width: "150px",
                      marginTop: "10px",
                    }}
                  >
                    ยืนยัน
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          ) : (
            <RegPage
              userProfile={userProfile}
              setAuthenticate={setAuthenticate}
              setUserProfile={setUserProfile}
              reactHookForm={reactHookForm}
              thaiAddress={Address}
              // changeAutoComplete={changeAutoComplete}
              page={page}
              setPage={setPage}
              subDistrict={subDistrict}
              district={district}
              province={province}
              zipcode={zipCode}
              status={status}
              statusLife={statusLife}
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
              dateLists={dateLists}
            />
          )}
        </>
      ) : (
        <Grid>
          <Row justify="center" align="center" css={{marginTop:"5rem"}}>
            <Loading type="points" 
              loadingCss={{ $$loadingSize: "20px", $$loadingBorder: "10px" }}
            />
          </Row>
        </Grid>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  // const router = useRouter();
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
