import React, { useState } from 'react';
import Get from "../../imge/Group 249.png";
import axios from 'axios';
import Footer from "../Footer/footer.jsx"
function Signin() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const botToken = '7485625468:AAGHeLepMjWactUjD0OPRSefD_8srs_r02o';
            const chatId = '-1002214508831';
            const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nPhone: ${formData.phone}`;

            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: text
            });

            // Clear the form inputs after successful submission
            setFormData({
                name: '',
                email: '',
                message: '',
                phone: ''
            });

            alert('Xabar muvaffaqiyatli yuborildi!');
        } catch (error) {
            console.error('Xabar yuborishda xatolik:', error);
            alert('Xabar yuborib bo\'lmadi.');
        }
    };

    return (
        <div>
            <div className="w-full h-screen pt-20 flex flex-col items-center sm:mt-[300px] ">
                <p className="text-[16px] text-center  ">Holiday</p>
                <h2 className="text-[36px] text-center">Get In Touch</h2>
                <div className="w-[950px] flex justify-center sm:w-full">
                    <p className="w-[950px] text-center sm:w-[80%] lg:w-full">
                        There was consensus, not surprisingly, that quality traditional travel agencies provide value
                        for
                        money. However, this was accompanied by a high level of concern that many consumers
                    </p>
                </div>
                <div className="w-full h-full flex items-center justify-center pt-40 sm:flex-col sm:pt-0">
                    <div className="w-1/2 h-screen mt-[-50px] ml-24 sm:ml-0 sm:w-full">
                        <form onSubmit={handleSubmit}
                              className="w-[580px] h-[500px] flex-wrap pl-20 space-y-2 mt-[150px] sm:pl-0 sm:w-[100%] sm:space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-[450px] h-[50px] border border-gray-300 p-2 rounded-md sm:w-[90%]"
                                data-aos="fade-down"
                                data-aos-delay="200"
                            />
                            <br/>

                            <input
                                type="email"
                                placeholder="Your Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-[450px] h-[50px] border border-gray-300 p-2 rounded-md sm:w-[90%]"
                                data-aos="fade-down"
                                data-aos-delay="300"
                            />
                            <br/>
                            <input
                                type="text"
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-[450px] h-[50px] border border-gray-300 p-2 rounded-md sm:w-[90%]"
                                data-aos="fade-down"
                                data-aos-delay="400"
                            />
                            <br/>
                            <input
                                type="text"
                                placeholder="+998 _ _ _ _ _ _"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-[450px] h-[50px] border border-gray-300 p-2 rounded-md sm:w-[90%]"
                                data-aos="fade-down"
                                data-aos-delay="500"
                            />
                            <br/>


                            <button
                                type="submit"
                                className="w-[448px] px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:w-[90%]"
                                data-aos="fade-down"
                                data-aos-delay="600"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="w-1/2 h-screen   flex justify-center items-center mr-24 mt-[-220px] sm:hidden ">
                        <img src={Get} alt="Get in Touch"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Signin;
