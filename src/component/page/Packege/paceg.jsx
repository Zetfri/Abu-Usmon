import React from 'react';
import Packege from "./packege.jsx";
import Aboutus from "../About Us/aboutus.jsx";

function Paceg(props) {
    return (
        <div>
            <p className={"text-[15px] sm:mt-32"}>Recomanded Packages</p>
            <h2 className={"text-[36px] "}>Best Value Trips</h2>
            <p className={"text-[16px] w-[800px] ml-[300px] sm:w-full sm:ml-0  sm:flex  sm:gap-[-100px] lg:w-full lg:ml-0 lg:px-10"}>There was consensus, not surprisingly, that quality
                traditional travel agencies
                provide
                value for money. However, this was accompanied by a high level of concern that many
                consumers</p>
            <br/>
            <br/>
            <br/>
            <Packege/>
            <Aboutus/>
        </div>
    );
}

export default Paceg;