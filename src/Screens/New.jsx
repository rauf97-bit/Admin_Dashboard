import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import img from '../images/c6.jpg'

const New = ({ inputs, title, mode, setMode }) => {
  const [file, setFile] = useState("");
  return (
    <div>
      <div className="flex">
      <React.Fragment>
        <Sidebar setMode={setMode} />
      </React.Fragment>
      <div className="flex-1">
        <Navbar setMode={setMode} mode={mode} />
          <div className="">
            <h2 className="text-gray-400 shadow-lg p-2 text-xl">{title}</h2>
            <div className="grid grid-cols-4 p-2">
              <div className="col-span-1">
                <img
                    src={file ? URL.createObjectURL(file) : img}
                    className="w-52 h-52 rounded-full my-2"
                    alt="user"
                />
              </div>
              <div className="col-span-3 ">
                <div className="block">
                    <label htmlFor="file" className="cursor-pointer">
                      <DriveFolderUploadOutlined />
                      Upload Image
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="hidden"  
                    />
                </div>
                <div className="grid grid-cols-2">
                    {inputs.map((data) => (
                      <div key={data.id} className="col-span-1 w-[50%]">
                        <label htmlFor={data.placeholder} className="mt-1 block font-semibold text-xl">{data.label}</label>
                        <input
                          type={data.type}
                          id={data.placeholder}
                          placeholder={data.placeholder}
                          className="border-0 outline-none mb-2 p-2 border-b border-black active:border-0"
                        />
                      </div>
                    ))}
                    <div className="col-span-1">
                    <input
                    type="submit"
                    value="Submit"
                    className="p-3 px-4 mt-5 rounded-sm cursor-pointer text-white font-bold bg-green-600 text-center w-52 "/>
                    </div>
                </div>
              </div>
            </div>

            {/* 
              <div className="col-span-1 flex justify-center">
                
              </div>
              <div className="col-span-3">
                <div className="flex w-[100%] justify-around">
                  <div className="flex flex-col">
                  </div>
                </div>
                  
              </div>
        </div> */}
            </div>
          </div>
      </div>
    </div>
  );
};

export default New;
