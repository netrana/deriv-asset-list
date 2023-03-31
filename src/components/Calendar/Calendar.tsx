import React, { FC } from "react";
import FullCalendar, { EventApi } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import classNames from "classnames";
import moment from "moment";

import styles from "./calender.module.scss";
import { renderEventContent, showDays } from "./helpers";

import { Props } from "./types";
import { useIsMobile } from "shared/hooks";

export const Calendar: FC<Props> = (props) => {
  const { events, className='' } = props;

  const isMobile = useIsMobile();
  const days = isMobile ? 1 : 7;

  return (
    <div
      className={classNames({
        [styles.calendar]: true,
        [className]: Boolean(className),
      })}
    >
      <div className={styles.calendar}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "title",
            right: "prev next",
          }}
          navLinks={false}
          initialView="timeGridDays"
          views={{
            timeGridDays: {
              type: "dayGrid",
              duration: { days },
            },
          }}
          dayHeaderContent={(args) => {
            return (
              <div className={styles.header}>
                <span className={styles.dateHeader}>
                  {moment(args.date).format("DD/MM")}
                </span>
              </div>
            );
          }}
          events={events}
          editable={false}
          selectable={false}
          weekends={true}
          longPressDelay={1000}
          eventLongPressDelay={1000}
          selectLongPressDelay={1000}
          eventContent={renderEventContent} // custom render function
        />
      </div>
    </div>
  );
};
