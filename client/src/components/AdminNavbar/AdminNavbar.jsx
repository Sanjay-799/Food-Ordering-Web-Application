import React from "react";
import './AdminNavbar.css';
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div className="nav-div">
      <h1 className="nav-title">Admin Panel</h1>
      <ul className="nav-links">
        <li><Link to="/admin/additems">Add Items</Link></li>
        <li><Link to="/admin/deleteitems">Delete Items</Link></li>
        <li><Link to="/admin/updateitems">Update Items</Link></li>
        <li><Link to="/admin/allitems">All Items</Link></li>
      </ul>
    </div>
  );
}

export default AdminNavbar;
