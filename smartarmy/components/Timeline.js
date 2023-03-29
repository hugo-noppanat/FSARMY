import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Button, Card, Divider, Grid, Input, Row, Spacer, Textarea } from "@nextui-org/react";
import DropdownInput from "./DropdownInput";
import { useFieldArray } from "react-hook-form";
import { useEffect, useState, Fragment } from "react";
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";

export default function Timelines(props) {
  const { reactHookForm, date} = props;

  const {register, control} = reactHookForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "timeline",
  });

  useEffect(() => {
    if (fields.length === 0) {
      append();
    }
  }, []);

  return (
    <VerticalTimeline
      lineColor={"var(--primary)"}
      layout={"1-column-left"}
    >
      {
        date.map((date,index) => {
          return (
            <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff", fontSize:"25px", paddingRight:"4px", paddingLeft:"6px", paddingTop:"3px", paddingBottom:"5px" }}
          icon={(new Date(date).getDate()).toString()}
        >
            <Grid.Container gap={2}>
              {
                fields.map((field, index) => {
                    return(
                      <Fragment key={field.id}>
                      
                      <Grid xs={12}>
                <Input
                className="vertical-timeline-element-title"
                underlined
                readOnly
                {...register(`timeline.${index}.date.${(new Date(date).getDate()).toString()}`)}
                css={{fontSize:"25px"}}
                initialValue={
                  new Date(date).toLocaleDateString(
                    "th-TH",
                    {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                />
              </Grid>
              {/* <Row justify="end">
                        <Button light size={"sm"} css={{minWidth:"0px"}} icon={<AddCircle/>} onClick={()=>{ append({ time: "", location: "", practice: "", note: "" });}}/> 
                        <Button light size={"sm"}  css={{minWidth:"0px"}} icon={<RemoveCircle/>} onClick={()=>{ remove(index);}}/>
                      </Row> */}
              <Grid xs={12}>
                <Row>
                <DropdownInput
                  formName={`timeline.${index}.time.${(new Date(date).getDate()).toString()}`}
                  nameLabel={"ห้วงเวลา"}
                  menuItems={[
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                  ]}
                  reactHookForm={reactHookForm}
                />
                <Spacer x={2}/>
                <Input
                  bordered
                  placeholder="สถานที่"
                  label="สถานที่"
                  color="primary"
                  {...register(`timeline.${index}.location.${(new Date(date).getDate()).toString()}`)}
                />
                </Row>
              </Grid>
              <Grid xs={12}>
              <Row>
                  <Textarea
                    label="วิธีปฏิบัติ"
                    placeholder="วิธีปฏิบัติ"
                    color="primary"
                    width="100%"
                    rows={5}
                    {...register(`timeline.${index}.practice.${(new Date(date).getDate()).toString()}`)}
                  />
                </Row>
              </Grid>
              <Grid xs={12}>
              <Row>
                  <Textarea
                    label="หมายเหตุ"
                    placeholder="หมายเหตุ"
                    color="primary"
                    width="100%"
                    rows={3}
                    {...register(`timeline.${index}.note.${(new Date(date).getDate()).toString()}`)}
                  />
                </Row>
              </Grid>
              <Divider/>
                    </Fragment>
                    )
                })
              }
              
            </Grid.Container>
        </VerticalTimelineElement>
          )
          })
      }
    </VerticalTimeline>
  );
}
