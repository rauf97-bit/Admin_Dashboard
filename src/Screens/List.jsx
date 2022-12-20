import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { listScreenRows, listScreenColumns } from "../Data";
import { Link } from "react-router-dom";

const List = ({mode, setMode}) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex flex-1 items-center">
            <Link to='/users' className=" mx-1 text-purple-400 p-2 border-[1px] border-purple-400">
              View
            </Link>
            <button className=" mx-1 text-red-400 p-2 border-[1px] border-red-400">
              Remove
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className='flex'>
      <React.Fragment>
        <Sidebar setMode={setMode} />
      </React.Fragment>
      <div className="flex-1" >
        <Navbar setMode={setMode} mode={mode} />
          <div style={{height: "100%", width: "100%" }} className={mode ? "text-white" : ""}>
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
