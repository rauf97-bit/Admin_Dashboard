import { KeyboardArrowDown, MoreVert } from "@mui/icons-material";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";

const Features = () => {
  return (
    <div className="col-span-1">
      <div className="shadow-xl p-2">
        <div className="flex justify-between text-gray-500 text-xl font-semibold mb-2">
          <span>Total Revenue</span>
          <MoreVert />
        </div>
        <div className="text-center  p-2">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={4} className="h-[120px]" />
          <p className="text-gray-500 mt-4 my-2 ">Total sales made today.</p>
          <h3 className="my-4 text-4xl">$ 420</h3>
          <p className="text-gray-500">
            Previous transactions may not be available. Last Payment are not
            included.
          </p>
        </div>
        <div className="grid gap-5 grid-cols-3 my-3">
          <div className="col-span-1 text-center ">
            <p>Today</p>
            <span>
              <KeyboardArrowDown /> $12.4k
            </span>
          </div>
          <div className="col-span-1 text-center">
            <p>Last Week</p>
            <span>
              <KeyboardArrowDown /> $12.4k
            </span>
          </div>
          <div className="col-span-1 text-center">
            <p>Last Month</p>
            <span>
              <KeyboardArrowDown /> $12.4k
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
