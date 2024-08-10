import React from 'react';
import Step from "../../imge/Group 235.png"
import Left1 from "../../imge/Frame.png"
import Fleg from"../../imge/Group 293 (1).png"
import Fleg1 from"../../imge/Group 255.png"
import Fleg2 from"../../imge/Group 256.png"
import Signin from "../Sign In/signin.jsx";

function Aboutus(props) {
    return (
        <div className="w-[100%]  h-screen pt-20 sm:pt-0">
            <div className=" w-[100%] h-screen flex  items-center justify-center  px-10 sm:h-auto">
                <div className="w-[50%] h-screen  sm:w-full">
                    <img className={"w-20"} src={Left1} alt=""/>
                    <p className={"text-[16px] pr-[490px] sm:pr-0"}>Easy and Fast</p>
                    <h2 className={"text-[36px] pr-[100px] sm:pr-0"}>Book Next Trip in 3 Easy Steps</h2>
                    <p className={"w-[595px] pl-10 text-left sm:pl-4 sm:w-full"}>There was consensus, not surprisingly, that quality traditional
                        travel agencies provide value for
                        money. However, this was accompanied by a high level of concern that many consumers</p>

                    <div className={"w-full flex  items-center  pt-[50px] sm:flex-col sm:justify-center sm:items-center sm:gap-1"} data-aos="zoom-out-up" data-aos-duration="700">
                        <img src={Fleg} alt="" className={"pl-20 sm:pl-4"}/>
                        <h1 className={"-translate-y-6 ml-8  text-[20px] sm:translate-y-0"}>Choose Destionation</h1>
                        <p className={"w-[300px] pt-6 ml-[-185px] sm:ml-0 sm:pt-0"}>There was consensus, not surprisingly, that quality
                            traditional travel agencies</p>
                    </div>
                    <div className={"w-full flex  items-center  pt-[50px] sm:flex-col sm:justify-center sm:items-center sm:gap-1"} data-aos="zoom-out-up" data-aos-duration="900">
                        <img src={Fleg1} alt="" className={"pl-20 sm:pl-4"}/>
                        <h1 className={"-translate-y-6 ml-8  text-[20px] sm:translate-y-0"}>Make Payment</h1>
                        <p className={"w-[300px] pt-6 ml-[-135px] sm:ml-0 sm:pt-0"}>There was consensus, not surprisingly, that quality
                            traditional travel agencies</p>
                    </div>
                    <div className={"w-full flex  items-center  pt-[50px] sm:flex-col sm:justify-center sm:items-center sm:gap-1"} data-aos="zoom-out-up" data-aos-duration="1100">
                        <img src={Fleg2} alt="" className={"pl-20 sm:pl-4"}/>
                        <h1 className={"-translate-y-6 ml-8  text-[20px] sm:translate-y-0"}>Reach Airport on Selected Date</h1>
                        <p className={"w-[300px] pt-6 ml-[-284px] sm:ml-0 sm:pt-0"}>There was consensus, not surprisingly, that quality
                            traditional travel agencies</p>
                    </div>
                </div>
                <div className="w-[50%] h-screen   justify-center  items-center flex ">
                    <img src={Step} alt="" className={"pt-20 sm:hidden"}/>
                </div>
            </div>
            <Signin/>
        </div>
    );
}

export default Aboutus;