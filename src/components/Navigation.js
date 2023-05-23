import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AddPage, LoginPage, HomePage, EditPage } from "./../pages";
import ProtectedLayout from "../hooks/ProtechLayout";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedLayout>
              <Outlet />
            </ProtectedLayout>
          }
        >
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/add" element={<AddPage />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
