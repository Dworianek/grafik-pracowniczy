import React from "react";

import trash from "../img/trash.svg";

import "../style/scheduleuk.css";

const brigade1ScheduleUK = [
  { day: 1, hours: "6-18" },
  { day: 2, hours: "6-18" },
  { day: 3, hours: "6-18" },
  { day: 4, hours: "6-18" },
  { day: 5, hours: "x" },
  { day: 6, hours: "x" },
  { day: 7, hours: "18-6" },
  { day: 8, hours: "18-6" },
  { day: 9, hours: "18-6" },
  { day: 10, hours: "18-6" },
  { day: 11, hours: "6-18" },
  { day: 12, hours: "6-18" },
  { day: 13, hours: "6-18" },
  { day: 14, hours: "6-18" },
  { day: 15, hours: "x" },
  { day: 16, hours: "x" },
  { day: 17, hours: "18-6" },
  { day: 18, hours: "18-6" },
  { day: 19, hours: "18-6" },
  { day: 20, hours: "18-6" },
  { day: 21, hours: "6-18" },
  { day: 22, hours: "6-18" },
  { day: 23, hours: "6-18" },
  { day: 24, hours: "6-18" },
  { day: 25, hours: "x" },
  { day: 26, hours: "x" },
  { day: 27, hours: "18-6" },
  { day: 28, hours: "18-6" },
  { day: 29, hours: "18-6" },
  { day: 30, hours: "18-6" },
];

const brigade2ScheduleUK = [
  { day: 1, hours: "x" },
  { day: 2, hours: "x" },
  { day: 3, hours: "18-6" },
  { day: 4, hours: "18-6" },
  { day: 5, hours: "18-6" },
  { day: 6, hours: "18-6" },
  { day: 7, hours: "x" },
  { day: 8, hours: "x" },
  { day: 9, hours: "6-18" },
  { day: 10, hours: "6-18" },
  { day: 11, hours: "6-18" },
  { day: 12, hours: "6-18" },
  { day: 13, hours: "x" },
  { day: 14, hours: "x" },
  { day: 15, hours: "18-6" },
  { day: 16, hours: "18-6" },
  { day: 17, hours: "18-6" },
  { day: 18, hours: "18-6" },
  { day: 19, hours: "x" },
  { day: 20, hours: "x" },
  { day: 21, hours: "6-18" },
  { day: 22, hours: "6-18" },
  { day: 23, hours: "6-18" },
  { day: 24, hours: "6-18" },
  { day: 25, hours: "x" },
  { day: 26, hours: "x" },
  { day: 27, hours: "18-6" },
  { day: 28, hours: "18-6" },
  { day: 29, hours: "18-6" },
  { day: 30, hours: "18-6" },
];

const Worker = (props) => {
  const scheduleUk1 = brigade1ScheduleUK.map((scheduleDay) => (
    <td key={scheduleDay.day}>{scheduleDay.hours}</td>
  ));
  const scheduleUk2 = brigade2ScheduleUK.map((scheduleDay) => (
    <td key={scheduleDay.day}>{scheduleDay.hours}</td>
  ));

  return (
    <>
      <tr>
        {props.adminStatus ? (
          <td style={{ backgroundColor: "white" }}>
            <img
              className="trashIcon"
              onClick={() => props.delete(props.id)}
              src={trash}
            ></img>
          </td>
        ) : null}
        <td>{props.rcp}</td>
        <td>{props.name}</td>
        <td>{props.surname}</td>
        <td>{props.status}</td>
        {props.brigade == 1 ? scheduleUk1 : null}
        {props.brigade == 2 ? scheduleUk2 : null}
      </tr>
    </>
  );
};

export default Worker;
