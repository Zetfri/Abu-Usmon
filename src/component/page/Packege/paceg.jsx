import React from "react";
import Packege from "./packege.jsx";
import Aboutus from "../About Us/aboutus.jsx";

function Paceg(props) {
  return (
    <div>
      <p className={"text-[15px] sm:mt-32 sm:w-[50%] sm:ml-[100px]"}>
        Recomanded Packages
      </p>
      <h2 className={"text-[36px] sm:w-[60%] sm:text-[30px] sm:ml-[80px]"}>
        Best Value Trips
      </h2>
      <p className={"text-[16px]   w-[800px] ml-[300px]   sm:ml-0 sm:w-full sm:px-2"}>
        There was consensus, not surprisingly, that quality traditional travel
        agencies provide value for money. However, this was accompanied by a
        high level of concern that many consumers
      </p>
      <br />
      <Packege />
      <Aboutus />
    </div>
  );
}

export default Paceg;
