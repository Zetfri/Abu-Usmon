import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Book from "../../imge/Group 34.png"
import Book2 from "../../imge/Group (2).png"
import Book3 from "../../imge/Group 14.png"
import Book4 from "../../imge/Group (3).png"
import Packege from "../Packege/packege.jsx";
import Paceg from "../Packege/paceg.jsx";

function Services(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="w-[100%] h-screen text-center translate-y-72">
            <h3 className={"translate-y-[80px] text-[16px]"}>Eng yaxshi xizmatlar</h3>
            <h2 className={"translate-y-[85px] text-[36px]"}>Bizning xizmatlar</h2>
            <p className={"w-[955px]  translate-x-[260px] translate-y-[85px] text-[16px] text-[#666666] sm:translate-x-0 sm:w-full"}>
                Sifatli an'anaviy sayyohlik agentliklari pul qiymatini ta'minlaydi, degan konsensus mavjud edi. Biroq, bu ko'plab iste'molchilarning yuqori darajadagi tashvishi bilan birga keldi
            </p>
            <div className="w-[100%] h-[600px] mt-2 flex  justify-center items-center gap-16 sm:flex-col sm:mt-32 sm:h-auto">
                <div
                    className={"w-[280px] h-[390px] border border-gray-200  rounded-[25px]   backdrop-[#FAFAFF] justify-center items-center"} data-aos="fade-right" data-aos-delay="200">
                    <img className={" w-[200px] h-[100px]  translate-y-[45px] } pl-[30%]"} src={Book} alt=""/>
                    <div className={" w-[95%] translate-y-[80px]  pl-3"}>
                        <h2 className={"text-[26px] translate-y-[-12px]"}>Book Hotel</h2>
                        <p>In-depth interviews with 19 owners of exceptionally successful US-based conventional travel
                            agencies </p>
                        <Button onClick={showModal} className={"w-[180px] translate-y-[20px]  h-[50px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>
                            Explore More
                        </Button>
                        <Modal title="Book Hotel" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                            <img src={Book} alt="" className={"mx-auto mb-4"}/>
                            <h2 className={"text-[26px] translate-y-[-12px] text-center my-2"}>Book Hotel</h2>
                            <p className={"text-center "}>In-depth interviews with 19 owners of exceptionally successful US-based conventional
                                travel
                                agencies </p>
                            <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                            <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                            <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                        </Modal>
                    </div>
                </div>
                <div
                    className={" w-[280px] h-[390px] border border-gray-200  rounded-[25px]   backdrop-[#FAFAFF] justify-center items-center"}
                    data-aos="fade-right" data-aos-delay="300">
                    <img className={" w-[200px] h-[100px]  translate-y-[45px] } pl-[30%]"} src={Book2} alt=""/>
                    <div className={" w-[95%] translate-y-[80px]  pl-3"}>
                        <h2 className={"text-[26px] translate-y-[-12px]"}>Book Taxi</h2>
                        <p>In-depth interviews with 19 owners of exceptionally successful US-based conventional travel
                            agencies </p>
                        <Button onClick={showModal} className={"w-[180px] translate-y-[20px]  h-[50px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>
                            Explore More
                        </Button>
                        <Modal title="Book Taxi" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                            <img src={Book2} alt="" className={"mx-auto mb-4"}/>
                            <h2 className={"text-[26px] translate-y-[-12px] text-center my-2"}>Book Taxi</h2>
                            <p className={"text-center "}>In-depth interviews with 19 owners of exceptionally successful US-based conventional
                                travel
                                agencies </p>
                            <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                            <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                            <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                        </Modal>
                    </div>
                </div>
                <div
                    className={"w-[280px] h-[390px] border border-gray-200  rounded-[25px]   backdrop-[#FAFAFF] justify-center items-center"} data-aos="fade-right" data-aos-delay="400">
                    <img className={" w-[200px] h-[100px]  translate-y-[45px] } pl-[30%]"} src={Book3} alt=""/>
                    <div className={" w-[95%] translate-y-[80px]  pl-3"}>
                        <h2 className={"text-[26px] translate-y-[-12px]"}>Book Plane</h2>
                        <p>In-depth interviews with 19 owners of exceptionally successful US-based conventional travel
                            agencies </p>
                        <Button onClick={showModal} className={"w-[180px] translate-y-[20px]  h-[50px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>
                            Explore More
                        </Button>
                        <Modal title="Book Plane" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                            <img src={Book3} alt="" className={"mx-auto mb-4"}/>
                            <h2 className={"text-[26px] translate-y-[-12px] text-center my-2"}>Book Plane</h2>
                            <p className={"text-center "}>In-depth interviews with 19 owners of exceptionally successful US-based conventional
                                travel
                                agencies </p>
                            <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                            <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                            <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                        </Modal>
                    </div>
                </div>
                <div
                    className={"w-[280px]  h-[390px] border border-gray-200     rounded-[25px]   backdrop-[#FAFAFF] justify-center items-center"} data-aos="fade-right" data-aos-delay="500">
                    <img className={" w-[200px] h-[100px]  translate-y-[45px] } pl-[30%]"} src={Book4} alt=""/>
                    <div className={" w-[95%] translate-y-[80px]  pl-3  "}>
                        <h2 className={"text-[26px] translate-y-[-12px]"}>Global Tour</h2>
                         <p >In-depth interviews with 19 owners of exceptionally successful US-based conventional travel
                            agencies </p>
                        <Button onClick={showModal} className={"w-[180px] translate-y-[20px]  h-[50px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>
                            Explore More
                        </Button>
                        <Modal title="Book Plane" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                            <img src={Book4} alt="" className={"mx-auto mb-4"}/>
                            <h2 className={"text-[26px] translate-y-[-12px] text-center my-2"}>Global Tour</h2>
                            <p className={"text-center "}>In-depth interviews with 19 owners of exceptionally successful US-based conventional
                                travel
                                agencies </p>
                            <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                            <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                            <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                        </Modal>
                    </div>
                </div>
            </div>

            <Paceg/>
        </div>
    );
}

export default Services;