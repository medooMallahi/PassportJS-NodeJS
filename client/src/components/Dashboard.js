import React, { Component } from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link class="btn waves-effect waves-light" to="/surveys/new">
        Add new Survey
      </Link>
    </div>
  );
};

export default Dashboard;
