import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { listScreenRows, listScreenColumns } from "../Data";

const List = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex flex-1 items-center">
            <button className=" mx-1 text-purple-400 p-2 border-[1px] border-purple-400">
              View
            </button>
            <button className=" mx-1 text-red-400 p-2 border-[1px] border-red-400">
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="flex">
        <React.Fragment>
          <Sidebar />
        </React.Fragment>
        <div className="flex-1">
          <Navbar />
          <div style={{height: "100%", width: "100%" }}>
            <DataGrid
              rows={listScreenRows}
              columns={listScreenColumns.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
