import React from 'react';
import Car from "../../imge/Group 289.png"
import Airport from "../../imge/Group 277.png"
import Airport1 from "../../imge/Group 279.png"
import Airport2 from "../../imge/Group 278.png"
import Airport4 from "../../imge/Group 280.png"
import Airport3 from "../../imge/Group 293 (1).png"
import Services from "../Services/services.jsx";

function Choose(props) {
    return (
        <div className="w-[100%] h-screen flex-col   bg-white   gap-[150px]  flex  ">
            <div className="flex  w-[100%] h-screen bg-white sm:w-full  lg:w-full lg:flex-col ">
                <div className={"w-[50%]  h-screen  sm:hidden lg:w-[90%]"}>
                    <img src={Car} alt="" className={"w-[90%] translate-x-20 pt-[100px] sm:hidden mt-8"}/>
                </div>
                <div className={"w-[50%] h-screen  sm:flex sm:flex-col sm:w-[95%] px-6 lg:flex lg:flex-col lg:w-full"}>
                    <div className={"translate-y-20 ml-32  sm:translate-y-[100px] sm:ml-0"}>
                        <h1 className={"text-[36px] w-[550px] sm:w-[350px] sm:text-[25px]"}>Nima uchun bizni tanlaysiz?</h1>
                        <p className={"w-auto text-[16px] sm:w-full sm:mt-4 " }>
                            Sifatli an'anaviy sayyohlik agentliklari pul qiymatini ta'minlaydi, degan konsensus mavjud edi. Biroq, bu ko'plab iste'molchilarning yuqori darajadagi tashvishi bilan birga keldi
                        </p>
                        <div className={"w-full flex  items-center  pt-[50px] sm:h-auto " } data-aos="fade-down"  data-aos-delay="200">
                            <img src={Airport} alt="" className={"sm:h-[90px] sm:mt-3"}/>
                            <h1 className={"-translate-y-6 ml-5  text-[20px] sm:ml-4 sm:w-[200px]"}>Airport Car</h1>
                            <p className={"w-[300px] pt-6 ml-[-98px] sm:ml-[-160px] sm:mt-4 sm:w-[88%]"}>There was consensus, not surprisingly, that quality traditional travel agencies</p>
                        </div>
                        <div className={"w-full flex   items-center  pt-[50px]  sm:h-auto " } data-aos="fade-down"  data-aos-delay="300">
                            <img src={Airport1} alt="" className={"sm:h-[90px] sm:mt-3"}/>
                            <h1 className={"-translate-y-6 ml-5  text-[20px] sm:ml-4 sm:w-[200px]"}>24/7 Support</h1>
                            <p className={"w-[300px] pt-6 ml-[-118px] sm:ml-[-176px] sm:mt-6 sm:w-[80%]"}>There was consensus, not surprisingly, that quality traditional travel agencies</p>
                        </div>
                        <div className={"w-full flex  items-center  pt-[50px] sm:h-auto" } data-aos="fade-down"  data-aos-delay="400">
                            <img src={Airport2} alt="" className={"sm:h-[90px] sm:mt-3"}/>
                            <h1 className={"-translate-y-6 ml-5  text-[20px] sm:ml-4 sm:w-[200px]"}>Special Discount</h1>
                            <p className={"w-[300px] pt-6 ml-[-148px] sm:ml-[-172px] sm:mt-6 sm:w-[80%]"}>There was consensus, not surprisingly, that quality traditional travel agencies</p>
                        </div>
                        <div className={"w-full flex  items-center  pt-[50px] sm:h-auto" } data-aos="fade-down"  data-aos-delay="500">
                            <img src={Airport4} alt="" className={"sm:h-[90px] sm:mt-4"}/>
                            <h1 className={"-translate-y-6 ml-5  text-[20px] sm:ml-4 sm:w-[200px]"}>Special Discount</h1>
                            <p className={"w-[300px] pt-6 ml-[-148px] sm:mt-6 sm:w-[80%]  sm:ml-[-170px]"}>There was consensus, not surprisingly, that quality traditional travel agencies</p>
                        </div>
                        <div className={"w-full flex  items-center  pt-[50px] sm:h-auto" } data-aos="fade-down"  data-aos-delay="500">
                            <img src={Airport3} alt="" className={"sm:h-[90px] sm:mt-5"}/>
                            <h1 className={"-translate-y-6 ml-5  text-[20px] sm:ml-4 sm:w-[200px]"}>Tour Guide</h1>
                            <p className={"w-[300px] pt-6 ml-[-98px] sm:mt-6 sm:w-[80%]  sm:ml-[-170px]"}>There was consensus, not surprisingly, that quality traditional travel agencies</p>
                        </div>

                    </div>
                </div>
            </div>
            <Services/>
        </div>
    );
}

export default Choose;