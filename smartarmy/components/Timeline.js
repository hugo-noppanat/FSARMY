import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent, { timelineContentClasses } from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {Card, Text} from "@nextui-org/react"
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { useFieldArray } from 'react-hook-form';
import { useEffect,useState, Fragment} from 'react';

export default function OppositeContentTimeline(props) {

  const {
    reactHookForm,
    date,
    index
  } = props;

  const { control, register} = reactHookForm;
  const { fields, append, remove} = useFieldArray({
    control,
    name: "timeline",
  });

  useEffect(() => {
    console.log(date)
  }, [date])

  return (
    <Fragment>
    <Timeline
    sx={{
      [`& .${timelineOppositeContentClasses.root}`]: {
        flex: 0.01,
      },
    }}
    key={index}
    >
      <TimelineItem>
      <TimelineOppositeContent>
            {date}
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card>
            <h1>Today</h1>
          </Card>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Fragment>
  );
}
