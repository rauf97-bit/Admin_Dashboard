import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { listScreenRows, listScreenColumns } from "../Data";
import { Link } from "react-router-dom";
import "../App.css";
import { DarkModeContext } from "../context/darkModeContext";

const List = () => {
  const { darkMode } = useContext(DarkModeContext);
  const handleClick = id => {
    setNewRow(newRow.filter(row => row.id !== id))
  }
  const [newRow, setNewRow] = useState(listScreenRows)
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex flex-1 items-center">
            <Link
              to="/users/:userid"
              className=" mx-1 text-purple-400 p-2 border-[1px] border-purple-400"
            >
              View
            </Link>
            <button className=" mx-1 text-red-400 p-2 border-[1px] border-red-400" 
              onClick={() => handleClick(params.id)}>
              Remove
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <style>
        {`
          #darkText{
            color: white !important;
            background : #808080;
          }  
        `}
      </style>
      <div>
        <div className="flex">
          <React.Fragment>
            <Sidebar />
          </React.Fragment>
          <div className="flex-1">
            <Navbar />
            <div style={{ height: "100%", width: "100%" }} 
                id={darkMode ? "darkText" : ""}>
              <DataGrid
                rows={newRow}
                columns={listScreenColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
