import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {listTableRows} from "../Data"
import '../App.css'
import { DarkModeContext } from "../context/darkModeContext";


const rows = listTableRows
const ListTable = () => {
  const {darkMode} = useContext(DarkModeContext)
  
  return (
    <>
    <style>
      {
        `
          #darkText{
            color: white !important;
          }  
        `
      }
    </style>
    <div className="p-2 shadow-lg ">
      <TableContainer component={Paper} className={darkMode ? "app dark-theme" : ""}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell id={darkMode ? "darkText" : ""}>Tracking ID</TableCell>
              <TableCell id={darkMode ? "darkText" : ""} >Product</TableCell>
              <TableCell id={darkMode ? "darkText" : ""} >Customer</TableCell>
              <TableCell id={darkMode ? "darkText" : ""} >Date</TableCell>
              <TableCell id={darkMode ? "darkText" : ""} >Amount ($)</TableCell>
              <TableCell id={darkMode ? "darkText" : ""} >Payment Method</TableCell>
              <TableCell id={darkMode ? "darkText" : ""} >Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell id={darkMode ? "darkText" : ""}>{row.id}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                  <img src={row.img} alt="Img" srcSet="" className="h-10 w-10 rounded-full mr-3" />
                  <p id={darkMode ? "darkText" : ""}>{row.product}</p>
                  </div>
                </TableCell>
                <TableCell id={darkMode ? "darkText" : ""}>{row.customer}</TableCell>
                <TableCell id={darkMode ? "darkText" : ""}>{row.date}</TableCell>
                <TableCell id={darkMode ? "darkText" : ""}>{row.amount}</TableCell>
                <TableCell id={darkMode ? "darkText" : ""}>{row.method}</TableCell>
                <TableCell id={darkMode ? "darkText" : ""}><span className={row.status === "Approved" ? "bg-green-300 text-green-700 p-2 rounded-lg" : "bg-orange-300 p-2 text-orange-700 rounded-lg"}>{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
};

export default ListTable;
