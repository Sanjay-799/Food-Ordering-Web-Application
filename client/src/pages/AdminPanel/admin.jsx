import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";

function AdminPage() {
  return (
    <>
      <AdminNavbar />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default AdminPage;
