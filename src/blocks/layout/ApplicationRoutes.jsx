import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeatilsForm from "../../pages/details-form/DetailsForm";
import Users from "../../pages/users/Users";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeatilsForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
