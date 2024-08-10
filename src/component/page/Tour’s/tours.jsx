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
                <img src={Left} alt="" className="mt-[-360px]  w-[100px] sm:ml-[-40px] sm:hidden"/>
                <div className="w-[50%] h-screen sm:w-full sm:h-auto sm:mb-20">
                    <img src={Fon} alt="" className="pt-[50px] w-[620px]  pl-[100px] sm:pl-0 hidden sm:block sm:ml-5 "
                         data-aos="fade-right" data-aos-duration="400"/>
                    <div className="pl-[80px] pt-[-550px] sm:pl-10 ">
                        <h1 className="text-[50px] pt-[220px] pl-[50px] sm:pt-40 sm:text-[40px] sm:w-[250px]     sm:pl-0 sm:pr-32]">
                            Baxt <span className="text-[#DB6300]">Sayohatdir</span>
                        </h1>
                        <h3 className="text-[25px] w-[580px] pl-[50px] pt-4 sm:pl-0 sm:w-[300px]">
                            No matter where in the world you want to go, we can help get you there
                        </h3>
                        <p className="text-[16px] w-[560px] pt-10 text-[#666666] pl-[50px] sm:pl-0  sm:w-[300px]">
                            Travel Agency Threats and Opportunities. The Perspective of Successful Owners. Join the
                            leader in small-ship cruising on the Great Lakes, and enjoy fabulous inclusions such as a
                            pre-voyage hotel.
                        </p>
                    </div>
                </div>
                <div className="w-[50%] h-screen sm:w-full sm:h-auto">
                        <img src={Fon} alt="" className="pt-[50px] w-[620px]  pl-[100px] sm:pl-0 sm:hidden " data-aos="fade-right" data-aos-duration="400"/>
                </div>
                <img src={Right} alt="" className="mt-[-450px]  w-[100px] sm:absolute sm:right-0 sm:hidden"/>
            </div>
            <div className="w-[950px] h-[120px] rounded-md border border-[#CACACA] mt-[-80px] ml-[200px]  sm:flex sm:flex-col sm:w-[90%] sm:ml-4 sm:h-auto">
                <form onSubmit={handleSubmit} className="flex space-x-4 p-4 sm:flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="location" className="mb-2">Location</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="border p-2 rounded-md"
                            placeholder="Where are you going?"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="checkIn" className="mb-2">Check In</label>
                        <input
                            type="number"
                            id="checkIn"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="border p-2 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="checkOut" className="mb-2">Check Out</label>
                        <input
                            type="text"
                            id="checkOut"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="border p-2 rounded-md"
                            required
                        />
                    </div>
                    <button type="submit"
                            className="bg-orange-500 text-white w-[150px] h-[40px] translate-x-8 mt-[35px] rounded-md">
                        Search
                    </button>
                </form>
            </div>
            <Choose/>
        </div>
    );
}

export default Tours;
