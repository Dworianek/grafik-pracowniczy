import React from "react";
import { Route, Routes } from "react-router-dom";

import ScheduleUK from "./ScheduleUK";
import SchedulePL from "./SchedulePL";
import ErrorPage from "./ErrorPage";
import AdminPage from "./AdminPage";
import HomePage from "./HomePage";

const Page = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/scheduleUK"
          element={<ScheduleUK adminStatus={props.adminStatus} />}
        />
        <Route
          path="/schedulePL"
          element={<SchedulePL adminStatus={props.adminStatus} />}
        />
        <Route
          path="/adminPanel"
          element={
            <AdminPage
              adminStatus={props.adminStatus}
              changePassword={props.changePassword}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Page;
