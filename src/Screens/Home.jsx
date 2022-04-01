import React from "react";
import Chart from "../components/Chart";
import Features from "../components/Features";
import ListTable from "../components/ListTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

const Home = () => {
  return (
    <div className="flex">
      <React.Fragment>
        <Sidebar />
      </React.Fragment>
      <div className="flex-1">
        <Navbar />
        <div className="flex gap-5">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="grid gap-5 grid-cols-3 py-3">
          <Features />
          <Chart />
        </div>
        <ListTable />
      </div>
    </div>
  );
};

export default Home;
