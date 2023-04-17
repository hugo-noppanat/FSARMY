import { Button, Grid,Row,Col,Card, Input, Spacer,Modal,Text} from "@nextui-org/react";
import React, { Fragment, useEffect, useState } from "react";
import DropdownInput from "../../components/DropdownInput";
import {useForm} from "react-hook-form";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import TableCard from "../../components/DataTable";
import ToastMessage from "../../components/Toast";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import useAxios from "../../components/UseAxios";
import {getSession} from 'next-auth/react';
import csvDownload from 'json-to-csv-export'

export default function ImportPage(props) {
  const { setSelectData } = props;
  const reactHookForm = useForm();
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const [columns, setColumns] = useState([]);
  const [error, setError] = useState([]);
  const [isOpenedSuccess, setIsOpenedSuccess] = useState(false);
  const [isOpenedError, setIsOpenedError] = useState(false);

  const fileReader = new FileReader();

  const lists = [
    {value: "TRN_PERSOANL_NAME", label: "ข้อมูลการลงทะเบียนของทหารใหม่"}
  ]

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(/[\r,]/);
    const lastCsvHeader = csvHeader.slice(0, csvHeader.indexOf(""))
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    // const lastCsvRows = csvRows.slice(0, csvRows.indexOf("")).split("/[/r]/");
    const checkempty = csvRows.filter(String)

    return (checkempty.map((i,i_index) => {
      const values = i.split(",");
      const obj = lastCsvHeader.reduce((object, header, index) => {
        object["id"] = i_index;
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    }))
  };
  
  useEffect(() => {
    let count = 0;
    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        let arrayData = csvFileToArray(text);
        if(count == 0) {
          setArray(arrayData)
          count = count + 1;
        }
      };
      fileReader.readAsText(file);
    }
  });
  
  const handleOnSubmit = async () => {
    let session = await getSession();
    let token = await session?.accessToken
    if (array) {
      // useAxios({
      //   method: "POST",
      //   url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/import/importSoldierList`,
      //   data: {
      //     DATA: array,
      //     TABLE_NAME: reactHookForm.getValues("type")
      //   },
      //   auth: token
      // }).then((res) => {
      //   console.log(res);
      //   if(res?.status == "success") {
      //     setIsOpenedSuccess(true)
      //   }else {
      //     setIsOpenedError(true)
      //   }
      // });

      const response = await useAxios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/import/importSoldierList`,
        data: {
          DATA: array,
          TABLE_NAME: reactHookForm.getValues("type")
        },
        auth: token
      })
      console.log(response);
      if(response?.status == "success") {
        setIsOpenedSuccess(true)
      }else {
        setError(response?.data)
        setIsOpenedError(true)
      }
    }
    else {
      ToastMessage({
        type: 'error',
        message: "กรุณาเลือกไฟล์"
      })
    }
  };

  useEffect(() => {
    console.log(error)
  },[error])


  const headerKeys = Object.keys(Object.assign({}, ...array));

  useEffect(() => {
    if(headerKeys.length > 0){
      const columns = headerKeys.map((key) => {
        return {
          name: key,
          uid: key
        };
      });
      setColumns(columns);
    }
  },[headerKeys])

  const closeModal = () => {
    setIsOpenedSuccess(false)
    setSelectData([])
  }

  const handleCanceled = () => {
    setArray([])
    setColumns([])
    setError([])
    setFile()
    reactHookForm.reset()
  }

  const onDownload = async() => {
    let session = await getSession();
    let token = await session?.accessToken
    useAxios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_SSARMY_TRNSECTION}/import/getColumn`,
      data: {
        TABLE_NAME: reactHookForm.getValues("type")
      },
      auth: token
    }).then((res) => {
      let header = []
      res.data.map((i) => {
        header.push(i.column_name)
      })
      csvDownload({headers: header, filename:"templete.csv",delimiter: ',', data: []})
    });
  }

  return(
    <Fragment>
      <Grid.Container gap={1} justify="center">
        <Card css={{width:"95%", minHeight:"20rem"}}>
        <Grid>
          <Row gap={2}>
          <Col>
          <DropdownInput
            formName="type"
            nameLabel="ประเภทข้อมูล"
            menuItems={lists}
            reactHookForm={reactHookForm}
            />
          </Col>
          <Col css={{marginTop:"2.3rem"}}>
          {
            reactHookForm.watch("type") && (
              <Button size={"sm"} icon={<DownloadForOfflineIcon/>} bordered ghost justify="center" onClick={() => onDownload()}>
                Templete
              </Button>
            )
          }
          </Col>
          </Row>
        </Grid>
        {
          reactHookForm.watch("type") && (
            <Grid xs={12}>
            <Row justify="center" gap={2} className="mt-5">
              <form className="d-flex"> 
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={(e) => handleOnChange(e)}
        />
      </form>
        </Row>  
        </Grid>
          )
        }
        {
          error.length > 0 && (
            <>
              {/* <Row gap={2} className="mt-5"> */}
              <Grid xs={12} className="mx-4 p-0">
              <Text size={14} color="warning">คำเตือน : </Text>
              </Grid>
              <Col className="mx-5 p-0">
              {
                error.map((item) => {
                  return(
                    <li style={{fontSize:"14px", color:"var(--nextui-colors-warning)"}}>{item}</li>
                  )
                })
              }
              </Col>
              {/* </Grid> */}
            </>
          )
        }
        <Grid>
        {
          array.length > 0 && columns.length > 0 && file && (
          <TableCard
            columns={columns}
            data={array}
          />
          )
        }
        </Grid>
       {
         reactHookForm.watch("type") && (
          <Grid>
          <Row justify="end" className=" d-flex mb-2 p-2">
            <Button size={"sm"} color={"error"} flat onPress={handleCanceled}>
              ยกเลิก
            </Button>
            <Spacer x={0.5} />
            <Button size={"sm"} coler={"primary"} flat onPress={handleOnSubmit}>
              นำเข้า
            </Button>
          </Row>
        </Grid>
         )
       }
        </Card>
      </Grid.Container>
      <Modal
        // closeButton
        aria-labelledby="modal-title"
        open={isOpenedSuccess}
        // onClose={closeModel}
        css={{
          padding: "0px",
        }}
      >
        <Modal.Header>
        <CheckCircleOutlineIcon  style={{ color: 'green', fontSize: '80px', marginTop: "20px"}} />
        </Modal.Header>
        <Modal.Body>
            <Row justify="center">
            <Text h5 size={25} css={{color: 'green', marginTop:"20px"}}>
            บันทึกข้อมูลสำเร็จ
          </Text>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="success" onPress={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        // closeButton
        aria-labelledby="modal-title"
        open={isOpenedError}
        // onClose={closeModel}
        css={{
          padding: "0px",
        }}
      >
        <Modal.Header>
        <ErrorOutlineIcon style={{ color: 'red', fontSize: '80px', marginTop: "20px"}} />
        </Modal.Header>
        <Modal.Body>
        <Row justify="center">
        <Text h5 size={25} css={{color: 'red', marginTop:"20px"}}>
            บันทึกข้อมูลล้มเหลว
          </Text>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={()=> setIsOpenedError(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>

  )
}