import React from "react";
import Chart from "../components/Chart";
import ListTable from "../components/ListTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import profileImg from "../images/c7.jpg";

const Single = ({mode, setMode}) => {
  return (
    <div className="flex">
      <React.Fragment>
        <Sidebar setMode={setMode} />
      </React.Fragment>
      <div className="flex-1">
        <Navbar setMode={setMode} mode={mode} />
        <div className="flex gap-2">
          <div className="shadow-xl rounded-lg p-3 px-2 relative max-w-sm">
            <p className="absolute top-0 right-0 p-1 rounded-sm text-purple-600 bg-purple-400">
              Edit
            </p>
            <h2 className="text-gray-400 font-semibold mb-2">Information</h2>
            <div className="flex gap-2">
              <img
                src={profileImg}
                alt="User"
                srcset=""
                className="h-24 w-24 rounded-full"
              />
              <div className="">
                <h2 className="text-4xl mb-2">Jane Doe</h2>
                <p className="my-2">
                  Email : <span className="ml-1"> janedoe@gmail.com</span>
                </p>
                <p className="my-2">
                  Phone : <span className="ml-1"> +234 567 890 1</span>
                </p>
                <p className="my-2">
                  Address :{" "}
                  <span className="ml-1">
                    {" "}
                    25a, Madara Crescent, Uchiha Estate
                  </span>
                </p>
                <p className="my-2">
                  Country : <span className="ml-1"> Tsukuyomi</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Chart aspect={3 / 1} />
          </div>
        </div>
        <div className="p-2 shadow-xl">
          <h2 className="text-gray-400 font-semibold my-2">
            Last Transaction{" "}
          </h2>
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
