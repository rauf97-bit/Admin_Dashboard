import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  return (
    <div>
      <div className="flex">
        <React.Fragment>
          <Sidebar />
        </React.Fragment>
        <div className="flex-1">
          <Navbar />
          <div className="">
            <h2 className="text-gray-400 shadow-lg p-2 text-xl">{title}</h2>
            <div className="grid grid-cols-3 p-2">
              <div className="col-span-1 flex justify-center">
                <img
                  src={file ? URL.createObjectURL(file) : "../images/c6.jpg"}
                  className="w-52 h-52 rounded-full my-2"
                  alt="user"
                />
              </div>
              <div className="col-span-2">
                <div className="flex gap-6 justify-around flex-grow flex-wrap">
                  <div className="flex flex-col">
                    <label htmlFor="file">
                      {" "}
                      <DriveFolderUploadOutlined />{" "}
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="hidden"
                    />
                  </div>
                  <div className="flex flex-col">
                    {inputs.map((data) => (
                      <div key={data.id} className="form-grp">
                        <label htmlFor={data.placeholder}>{data.label}</label>
                        <input
                          type={data.type}
                          id={data.placeholder}
                          placeholder={data.placeholder}
                          className="border-0 outline-none border-b border-black active:border-0"
                        />
                      </div>
                    ))}
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="p-3 px-4 rounded-sm bg-green-600 text-center w-52 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
