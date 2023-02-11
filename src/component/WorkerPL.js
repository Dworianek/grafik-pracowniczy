import React from "react";

import trash from "../img/trash.svg";

import "../style/scheduleuk.css";

const brigade1SchedulePL = [
  { day: 1, hours: "6-14" },
  { day: 2, hours: "6-14" },
  { day: 3, hours: "6-14" },
  { day: 4, hours: "6-14" },
  { day: 5, hours: "6-14" },
  { day: 6, hours: "x" },
  { day: 7, hours: "x" },
  { day: 8, hours: "14-22" },
  { day: 9, hours: "14-22" },
  { day: 10, hours: "14-22" },
  { day: 11, hours: "14-22" },
  { day: 12, hours: "14-22" },
  { day: 13, hours: "x" },
  { day: 14, hours: "x" },
  { day: 15, hours: "22-6" },
  { day: 16, hours: "22-6" },
  { day: 17, hours: "22-6" },
  { day: 18, hours: "22-6" },
  { day: 19, hours: "22-6" },
  { day: 20, hours: "x" },
  { day: 21, hours: "x" },
  { day: 22, hours: "6-14" },
  { day: 23, hours: "6-14" },
  { day: 24, hours: "6-14" },
  { day: 25, hours: "6-14" },
  { day: 26, hours: "6-14" },
  { day: 27, hours: "x" },
  { day: 28, hours: "x" },
  { day: 29, hours: "14-22" },
  { day: 30, hours: "14-22" },
];
const brigade2SchedulePL = [
  { day: 1, hours: "14-6" },
  { day: 2, hours: "14-6" },
  { day: 3, hours: "14-6" },
  { day: 4, hours: "14-6" },
  { day: 5, hours: "6-16" },
  { day: 6, hours: "x" },
  { day: 7, hours: "x" },
  { day: 8, hours: "22-6" },
  { day: 9, hours: "22-6" },
  { day: 10, hours: "22-6" },
  { day: 11, hours: "22-6" },
  { day: 12, hours: "22-6" },
  { day: 13, hours: "x" },
  { day: 14, hours: "x" },
  { day: 15, hours: "6-14" },
  { day: 16, hours: "6-14" },
  { day: 17, hours: "6-14" },
  { day: 18, hours: "6-14" },
  { day: 19, hours: "6-14" },
  { day: 20, hours: "x" },
  { day: 21, hours: "x" },
  { day: 22, hours: "14-6" },
  { day: 23, hours: "14-6" },
  { day: 24, hours: "14-6" },
  { day: 25, hours: "14-6" },
  { day: 26, hours: "14-6" },
  { day: 27, hours: "x" },
  { day: 28, hours: "x" },
  { day: 29, hours: "22-6" },
  { day: 30, hours: "22-6" },
];
const brigade3SchedulePL = [
  { day: 1, hours: "22-6" },
  { day: 2, hours: "22-6" },
  { day: 3, hours: "22-6" },
  { day: 4, hours: "22-6" },
  { day: 5, hours: "22-6" },
  { day: 6, hours: "x" },
  { day: 7, hours: "x" },
  { day: 8, hours: "6-14" },
  { day: 9, hours: "6-14" },
  { day: 10, hours: "6-14" },
  { day: 11, hours: "6-14" },
  { day: 12, hours: "6-14" },
  { day: 13, hours: "x" },
  { day: 14, hours: "x" },
  { day: 15, hours: "14-22" },
  { day: 16, hours: "14-22" },
  { day: 17, hours: "14-22" },
  { day: 18, hours: "14-22" },
  { day: 19, hours: "14-22" },
  { day: 20, hours: "x" },
  { day: 21, hours: "x" },
  { day: 22, hours: "22-6" },
  { day: 23, hours: "22-6" },
  { day: 24, hours: "22-6" },
  { day: 25, hours: "22-6" },
  { day: 26, hours: "22-6" },
  { day: 27, hours: "x" },
  { day: 28, hours: "x" },
  { day: 29, hours: "6-14" },
  { day: 30, hours: "6-14" },
];

const Worker = (props) => {
  const schedulePl1 = brigade1SchedulePL.map((scheduleDay) => (
    <td key={scheduleDay.day}>{scheduleDay.hours}</td>
  ));
  const schedulePl2 = brigade2SchedulePL.map((scheduleDay) => (
    <td key={scheduleDay.day}>{scheduleDay.hours}</td>
  ));
  const schedulePl3 = brigade3SchedulePL.map((scheduleDay) => (
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
        {props.brigade == 1 ? schedulePl1 : null}
        {props.brigade == 2 ? schedulePl2 : null}
        {props.brigade == 3 ? schedulePl3 : null}
      </tr>
    </>
  );
};

export default Worker;
