import React from 'react';
import Packege from "./packege.jsx";
import Aboutus from "../About Us/aboutus.jsx";

function Paceg(props) {
    return (
        <div>
            <p className={"text-[36px] font-bold sm:mt-32 sm:w-[100%] sm:ml-[0px]"}>Maka Madina ziyoratlari </p>
         
            <br/>
            <br/>
            <br/>
            <Packege/>
            <Aboutus/>
        </div>
    );
}

export default Paceg;