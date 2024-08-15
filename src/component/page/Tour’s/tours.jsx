import React, {useState} from 'react';
import axios from 'axios';
import Left from "../../imge/Group (1).png";
import Right from "../../imge/Group.png";
import Fon from "../../asstes/photo_2024-08-09_17-32-32-removebg-preview 2.png";
import Choose from "./choose.jsx";

function Tours(props) {
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = '7485625468:AAGHeLepMjWactUjD0OPRSefD_8srs_r02o';
        const chatId = '-1002214508831';
        const message = `Location: ${location}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}`;

        try {
            await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: chatId,
                text: message,
            });
            alert('Message sent successfully!');

            // Clear input fields
            setLocation('');
            setCheckIn('');
            setCheckOut('');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message.');
        }
    };
    ``
    return (
        <div className="w-full h-screen sm:h-auto relative">
            <div className="w-full h-screen    flex justify-center items-center   sm:w-full sm:mb-10 sm:h-auto">
                <img src={Left} alt="" className="mt-[-360px]  w-[100px] sm:hidden"/>
                <div className="w-[50%] h-screen sm:w-full   sm:h-auto sm:mb-20 lg:w-full">
                    <img src={Fon} alt="" className="pt-[0px] w-[620px]  pl-[100px] sm:pl-0  hidden sm:block sm:ml-12  sm:mt-20 lg:block lg:w-[70%] lg:ml-20 "
                         data-aos="fade-right" data-aos-duration="400"/>
                    <div className="pl-[80px] pt-[-550px] sm:pl-10 ">
                        <h1 className="text-[50px] pt-[160px] pl-[-10px] sm:pt-40 sm:text-[27px] sm:w-[350px] ml-12   sm:ml-[-1px]   sm:pl-0 sm:pr-32">
                            Xaj va<span className="text-[#DB6300]">  Umra  </span>
                        </h1>
                        <h3 className="text-[25px] w-[580px] pl-[50px] pt-4 sm:pl-0 sm:w-[300px]">
                            Ziyorati   2024-2025
                        </h3>
                        <p className="text-[16px] w-[560px] pt-10 text-[#666666] pl-[50px] sm:pl-0  sm:w-[300px]">
                            UMRA ziyorati uchun qabullar davom etmoqda adashmang biz bilan barchasi ishonchli uz joyingizni band qiling joylar soni CHEGARALANGAN
                        </p>
                    </div>
                </div>
                <div className="w-[50%] h-screen sm:w-full sm:h-auto lg:w-full">
                    <img src={Fon} alt="" className="pt-[0px] w-[620px]  pl-[100px] sm:pl-0 sm:hidden lg:hidden lg:w-0 lg:h-0" data-aos="fade-right" data-aos-duration="400"/>
                </div>
                <img src={Right} alt="" className="mt-[-450px]  w-[100px] sm:absolute sm:right-0 sm:hidden"/>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="w-[950px] h-[120px] rounded-md border border-[#CACACA] mt-[-252px] ml-[200px]  sm:flex sm:flex-col sm:w-[90%] sm:mt-[-150px] sm:ml-4 sm:h-auto lg:w-[95%] lg:ml-2 lg:flex lg:flex-col lg:h-auto">
                <form onSubmit={handleSubmit} className="flex space-x-2 p-4 sm:flex-col lg:flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="location" className="mb-2 ml-4">Ism</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="border p-2 rounded-md sm:w-[310px] ml-[8px]"
                            required
placeholder={"Ism kiritin"}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="checkIn" className="mb-2">Telefon</label>
                        <input
                            type="number"
                            id="checkIn"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="border p-2 rounded-md"
                            required
                            placeholder={"Tel +  _ _ _ _ _ _ _ _ "}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="checkOut" className="mb-2">Savol</label>
                        <input
                            type="text"
                            id="checkOut"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="border p-2 rounded-md"
                            required
                            placeholder={"Qoshimcha savol"}
                        />
                    </div>
                    <button type="submit"
                            className="bg-orange-500 text-white w-[150px] h-[40px] translate-x-8 mt-[35px] rounded-md lg:translate-x-0  lg:p-2 ">
                        Yuborish
                    </button>
                </form>
            </div>
            <Choose/>
        </div>
    );
}

export default Tours;
