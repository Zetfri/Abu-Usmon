import React from 'react';
import Book from "../../imge/Group 34.png"
import Book2 from "../../imge/Group (2).png"
import Book3 from "../../imge/Group 14.png"
import Book4 from "../../imge/Group (3).png"
import Packege from "../Packege/packege.jsx";
import Paceg from "../Packege/paceg.jsx";

function Services(props) {
    return (
        <div className="w-[100%] h-screen text-center translate-y-72">
            <h3 className={"translate-y-[80px] text-[16px]"}>Best Services</h3>
            <h2 className={"translate-y-[85px] text-[36px]"}>Our Services</h2>
            <p className={"w-[955px]  translate-x-[260px] translate-y-[85px] text-[16px] text-[#666666] sm:translate-x-0 sm:w-full"}>There was
                consensus, not surprisingly, that quality traditional travel agencies provide value for money.
                However, this was accompanied by a high level of concern that many consumers</p>
            <div className="w-[100%] h-[600px] mt-2 flex  justify-center items-center gap-16 sm:flex-col sm:mt-32 sm:h-auto">
                <div
                    className={"w-[280px] h-[390px] border border-gray-200  rounded-[25px]   backdrop-[#FAFAFF] justify-center items-center"} data-aos="fade-right" data-aos-delay="200">
                    <img className={" w-[200px] h-[100px]  translate-y-[45px] } pl-[30%]"} src={Book} alt=""/>
                    <div className={" w-[95%] translate-y-[80px]  pl-3"}>
                        <h2 className={"text-[26px] translate-y-[-12px]"}>Book Hotel</h2>
                        <p>In-depth interviews with 19 owners of exceptionally successful US-based conventional travel
                            agencies </p>
                        <button
                            className={"w-[180px] translate-y-[20px]  h-[50px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Explore
                            More
                        </button>
                    </div>
                </div>
                <div
                    className={" w-[280px] h-[390px] border border-gray-200  rounded-[25px]   backdrop-[#FAFAFF] justify-center items-center"} data-aos="fade-right" data-aos-delay="300">
                    <img className={" w-[200px] h-[100px]  translate-y-[45px] } pl-[30%]"} src={Book2} alt=""/>
                    <div className={" w-[95%] translate-y-[80px]  pl-3"}>
                        <h2 className={"text-[26px] translate-y-[-12px]"}>Book Taxi</h2>
                        <p>In-depth interviews with 19 owners of exceptionally successful US-based conventional travel
                            agencies </p>
                        <button
                            className={"w-[180px] translate-y-[20px]  h-[50px] bg-white   rounded-[10px]   text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Explore
                            More
                        </button>
                    </div>
                </div>
                <div
                    className={"w-[280px] h-[390px] border border-gray-200  rounded-[25px]   backdrop-[#FAFAFF] justify-center items-center"} data-aos="fade-right" data-aos-delay="400">
                    <img className={" w-[200px] h-[100px]  translate-y-[45px] } pl-[30%]"} src={Book3} alt=""/>
                    <div className={" w-[95%] translate-y-[80px]  pl-3"}>
                        <h2 className={"text-[26px] translate-y-[-12px]"}>Book Plane</h2>
                        <p>In-depth interviews with 19 owners of exceptionally successful US-based conventional travel
                            agencies </p>
                        <button
                            className={"w-[180px] translate-y-[20px]  h-[50px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Explore
                            More
                        </button>
                    </div>
                </div>
                <div
                    className={"w-[280px]  h-[390px] border border-gray-200     rounded-[25px]   backdrop-[#FAFAFF] justify-center items-center"} data-aos="fade-right" data-aos-delay="500">
                    <img className={" w-[200px] h-[100px]  translate-y-[45px] } pl-[30%]"} src={Book4} alt=""/>
                    <div className={" w-[95%] translate-y-[80px]  pl-3  "}>
                        <h2 className={"text-[26px] translate-y-[-12px]"}>Global Tour</h2>
                         <p >In-depth interviews with 19 owners of exceptionally successful US-based conventional travel
                            agencies </p>
                        <button
                            className={"w-[180px] translate-y-[20px]   h-[50px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Explore
                            More
                        </button>
                    </div>
                </div>
            </div>

            <Paceg/>
        </div>
    );
}

export default Services;