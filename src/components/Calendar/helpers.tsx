import { EventContentArg } from "@fullcalendar/react";
import { Tooltip } from "antd";
import moment from "moment";
import { EventInput } from "@fullcalendar/react";
import Image from 'components/Image'; 
import styles from "./calender.module.scss";

const diffCalculator = (event: EventInput) => {
  let diff: number;
  var start = moment(event.start, "YYYY-MM-DD");
  var end = moment(event.end, "YYYY-MM-DD");

  // Difference in number of days
  diff = moment.duration(end.diff(start)).asDays();

  return diff;
};

export const renderEventContent = (eventContent: EventContentArg) => {
  const { event } = eventContent;

  let title: string,
    renter: string,
    diff = 0;
  if (event.start && event.end) {
    diff = diffCalculator({
      end: event.end,
      start: event.start,
    });
  }

  title = eventContent.event.title;
  renter = eventContent.event.extendedProps["renter"];

  const description = (
    <>
      <span>
        {eventContent.event.extendedProps["currency"]}
        {eventContent.event.extendedProps["price"]}/
        {eventContent.event.extendedProps["unit"]}
      </span>
      <br />
      <br />
      <b>{renter}</b>
    </>
  );

  const tooltipContent = (
    <div>
      <b>{title}</b> <br />
      {moment.utc(event.start).format('LL')} --- {moment.utc(event.end).format('LL')} <br /> 
      {description}
    </div>
  );

  if (diff < 2) {
    title = title.substring(0, 7) + '...';
    renter = renter.substring(0, 7) + '...';
  }

  return (
    <Tooltip title={tooltipContent}>
      <div className={styles.eventContent}>
        <div>
          <Image
            src={eventContent.event.extendedProps["image"]}
            style={{ height: 100 }}
          />
        </div>
        <div style={{ marginLeft: 5 }}>
          <b>{title}</b> <br />
          {description}
        </div>
      </div>
    </Tooltip>
  );
};

export const showDays = (events: EventInput[]): number => {
  let days = 14;
  events.forEach((event) => {
    const diff = diffCalculator(event);

    if (diff === 1) {
      days = 7;
    }

    if (diff === 0) {
      days = 5;
    }
  });

  return days;
};
