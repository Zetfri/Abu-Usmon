import React from 'react';
import Map from "../../asstes/circle.png"
import Oclock from "../../asstes/oclock.png"
import Phone from "../../asstes/phone-call.png"
import Email from "../../asstes/circle (1).png"
import Instagram from "../../asstes/instagram.png"
import Telegram from "../../asstes/telegram (1).png"
import Facebook from "../../asstes/facebook.png"
import Youtube from "../../asstes/youtube.png"
import Uzb from "../../asstes/uzbekistan.png"
import Sau from "../../asstes/flag.png"

function Footer(props) {
    return (
        <div>
            <div className={"w-full h-[640px] bg-[#050402] mt-32 flex px-10 justify-center items-center sm:flex-col sm:h-auto sm:px-2 lg:flex-col lg:h-auto"}>
                <div className={"w-[50%]  h-auto sm:w-full lg:w-full"}>
                    <div className={"w-[620px] h-[55px] bg-orange-500 flex justify-center items-center gap-20 rounded-[15px] sm:w-full sm:h-[70px] sm:gap-10 mt-14 lg:w-full"}>
                        <a href="https://t.me/ABU_USMON_Haj"><img src={Telegram} alt="" className={"w-[42px]"} data-aos="fade-up"  data-aos-delay="200"/></a>
                        <a href=""><img src={Instagram} alt="" className={"w-[42px]"} data-aos="fade-up" data-aos-delay="300"/></a>
                        <a href=""><img src={Facebook} alt="" className={"w-[42px]"}  data-aos="fade-up"  data-aos-delay="400"/></a>
                        <a href=""><img src={Youtube} alt="" className={"w-[42px]"}  data-aos="fade-up" data-aos-delay="500"/></a>
                    </div>
                    <div className={"w-full flex flex-col items-start justify-start mt-10 gap-6 "} data-aos="fade-down" data-aos-delay="200">
                        <div className={"flex gap-6 justify-center items-center"}>
                            <img src={ Oclock} alt="" className={"w-[40px] h-[40px]"}/>
                            <span className={"text-white flex flex-col justify-start items-start"}>
                                 <p className={"text-[24px]"}>Ish vaqti</p>
                                        <p>Dushanba-Yakshanba 9:00-20:00</p>
                            </span>
                        </div>

                        <div className={"flex gap-6 justify-center items-center"} data-aos="fade-down"  data-aos-delay="300">
                            <img src={Map} alt="" className={"w-[40px] h-[40px]"}/>
                            <span className={"text-white flex flex-col justify-start items-start"}>


                                     <p className={"text-[24px]"}>Manzil</p>
                                                        <p>Angren Shahar, Xulkar 1xhi uy</p>

                            </span>
                        </div>
                        <div className={"flex gap-6 justify-center items-center"} data-aos="fade-down"  data-aos-delay="400">
                            <img src={Phone} alt="" className={"w-[40px] h-[40px]"}/>
                            <span className={"text-white flex flex-col justify-start items-start gap-1"}>
                                <p className={"text-[24px]"}>Telefon raqami</p>
                                <a href="Tel:+99891 322 07 87" className={"flex w-auto gap-2 justify-center items-center"}>
                                    <img src={Uzb} alt="" className={"w-[30px] h-[30px]"}/>
                                    📞+99891 322 07 87
                                </a>
                                <a href="Tel:+99897 386 07 87." className={"flex w-auto gap-2 justify-center items-center"}>
                                    <img src={Uzb} alt="" className={"w-[30px] h-[30px]"}/>
                                    📞+99897 386 07 87.
                                </a>
                                <a href="Tel:+966 50 905 3786" className={"flex w-auto gap-2 justify-center items-center"}>
                                    <img src={Sau} alt="" className={"w-[30px] h-[30px]"}/>
                                    📞+966 50 905 3786

                                </a>
                                <a href="Tel:+966 56 291 1630" className={"flex w-auto gap-2 justify-center items-center"}>
                                    <img src={Sau} alt="" className={"w-[30px] h-[30px]"}/>
                                    📞+966562911630

                                </a>
                            </span>
                        </div>
                        <div className={"flex gap-6 justify-center items-center"} data-aos="fade-down" data-aos-delay="500" >
                            <img src={Email} alt="" className={"w-[40px] h-[40px]"}/>
                            <span className={"text-white flex flex-col justify-start items-start"}>
                                <p className={"text-[24px]"}>Email</p>
<a href="mailto:ismatallah199@gmail.com">ismatallah199@gmail.com</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={"flex justify-center w-[50%] h-full items-center pt-[180px] sm:pt-10 lg:w-full"}>
                    <iframe
                        src="https://www.google.com/maps/place/21%C2%B026'24.1%22N+39%C2%B050'38.2%22E/@21.440016,39.84395,16z/data=!4m4!3m3!8m2!3d21.440016!4d39.84395?entry=ttu"
                        frameBorder="0"

                        className={"w-[600px] h-[500px] mb-32 rounded-[15px] lg:w-full"}>


                    </iframe>
                </div>

            </div>
        </div>
    );
}

export default Footer;