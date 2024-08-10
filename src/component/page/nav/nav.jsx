import React from 'react';
import {Link} from 'react-router-dom';
import Logo from"../../imge/Travelix Pro (1).png"
function Nav(props) {
    return (
        <div className="w-[100%]  items-center  justify-center gap-7 pt-7 flex sm:w-full     ">
            <img className={"pr-[550px sm:pr-0]"} src={Logo} alt=""/>
            <Link to="/" className={"sm:hidden"}>Tour’s</Link>
            <Link to="/services" className={"sm:hidden"}>Services</Link>
            <Link to="/packege" className={"sm:hidden"}>Packege</Link>
            <Link to="/about" className={"sm:hidden"}>About Us</Link>
            <Link to="/signin" className={"sm:hidden"}>Sign In</Link>
            <button className={"bg-[#DB6300] hover:bg-[#F07427] text-white font-bold py-2 px-4 rounded"}>Boglanish</button>
        </div>
    );
}

export default Nav;