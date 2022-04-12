import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {listTableRows} from "../Data"

const rows = listTableRows

const ListTable = () => {
  return (
    <div className="p-2 shadow-lg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tracking ID</TableCell>
              <TableCell >Product</TableCell>
              <TableCell >Customer</TableCell>
              <TableCell >Date</TableCell>
              <TableCell >Amount ($)</TableCell>
              <TableCell >Payment Method</TableCell>
              <TableCell >Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell className="">{row.id}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                  <img src={row.img} alt="Img" srcset="" className="h-10 w-10 rounded-full mr-3" />
                  <p>{row.product}</p>
                  </div>
                </TableCell>
                <TableCell className="">{row.customer}</TableCell>
                <TableCell className="">{row.date}</TableCell>
                <TableCell className="">{row.amount}</TableCell>
                <TableCell className="">{row.method}</TableCell>
                <TableCell ><span className={row.status === "Approved" ? "bg-green-300 text-green-700 p-2 rounded-lg" : "bg-orange-300 p-2 text-orange-700 rounded-lg"}>{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListTable;
