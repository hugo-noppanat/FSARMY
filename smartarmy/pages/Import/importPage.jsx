import { Button, Grid,Row,Col,Card, Input, Spacer} from "@nextui-org/react";
import React, { Fragment, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import DropdownInput from "../../components/DropdownInput";
import {useForm} from "react-hook-form";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import TableCard from "../../components/DataTable";
import Script from "next/script";

export default function ImportPage() {
  const reactHookForm = useForm();
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const [columns, setColumns] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    const checkempty = csvRows.filter(String)

    const array = checkempty.map((i,i_index) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object["id"] = i_index;
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };
  
  const handleOnSubmit = () => {
    // e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  useEffect(() => {
    if (file) {
      handleOnSubmit();
    }
  }, [file]);
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


  return(
    <Fragment>
      <Grid.Container gap={1} justify="center">
        <Card css={{width:"95%"}}>
        <Grid>
          <Row gap={2}>
          <Col>
          <DropdownInput
            formName="type"
            nameLabel="ประเภทข้อมูล"
            menuItems={[{value: "1", label: "ข้อมูลพื้นฐาน"}, {value: "2", label: "ข้อมูลการจัดซื้อจัดจ้าง"}, {value: "3", label: "ข้อมูลการจัดซื้อจัดจ้าง"}]}
            reactHookForm={reactHookForm}
            />
          </Col>
          <Col css={{marginTop:"2.3rem"}}>
          <Button size={"sm"} icon={<DownloadForOfflineIcon/>} bordered ghost justify="center" onClick={() => console.log("Download")}>
            Templete
          </Button>
          </Col>
          </Row>
        </Grid>
        <Grid xs={12}>
            <Row justify="center" gap={2} className="mt-5">
              <form className="d-flex"> 
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />
      </form>
        </Row>  
        </Grid>
        <Grid>
        {
          array.length > 0 && columns.length > 0 && (
          <TableCard
            columns={columns}
            data={array}
          />
          )
        }
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
        </Card>
      </Grid.Container>
    </Fragment>

  )
}