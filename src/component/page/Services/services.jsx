import React, { useState } from 'react';
import { Button, Modal, notification } from 'antd';
import axios from 'axios';
import Book from "../../imge/Group 34.png";
import Book2 from "../../imge/Group (2).png";
import Book3 from "../../imge/Group 14.png";
import Book4 from "../../imge/Group (3).png";
import Paceg from "../Packege/paceg.jsx";

function Services(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentService, setCurrentService] = useState('');
    const [formData, setFormData] = useState({ name: '', number: '' });

    const showModal = (service) => {
        setCurrentService(service);
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        if (!formData.name || !formData.number) {
            notification.warning({
                message: 'Majburiy maydonlar',
                description: 'Iltimos, barcha majburiy maydonlarni to\'ldiring!',
            });
            return;
        }

        try {
            const botToken = '7485625468:AAGHeLepMjWactUjD0OPRSefD_8srs_r02o';
            const chatId = '-1002214508831';
            const text = `Service: ${currentService}\nName: ${formData.name}\nNumber: ${formData.number}`;

            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: text
            });

            setFormData({ name: '', number: '' });
            setIsModalOpen(false);
            notification.success({
                message: 'Muvaffaqiyatli',
                description: 'Xabar muvaffaqiyatli yuborildi!',
            });
        } catch (error) {
            console.error('Xabar yuborishda xatolik:', error);
            notification.error({
                message: 'Xatolik',
                description: 'Xabar yuborib bo\'lmadi.',
            });
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-[100%] h-screen text-center translate-y-72">
            <h3 className={"translate-y-[80px] text-[16px] "}>Eng yaxshi xizmatlar</h3>
            <h2 className={"translate-y-[85px] text-[36px]"}>Bizning xizmatlar</h2>
            <p className={"w-[955px] translate-x-[260px] translate-y-[85px] text-[16px] text-[#666666] sm:translate-x-0 sm:w-full lg:translate-x-0 lg:w-full lg:px-2"}>
                Sifatli an'anaviy sayyohlik agentliklari pul qiymatini ta'minlaydi, degan konsensus mavjud edi. Biroq,
                bu ko'plab iste'molchilarning yuqori darajadagi tashvishi bilan birga keldi
            </p>
            <div className="w-[100%] h-[600px] mt-2 flex justify-center items-center gap-16 sm:flex-col sm:mt-32 sm:h-auto lg:flex-wrap lg:h-auto lg:mt-32 lg:mb-20 sm:mb-0">
                {/* Service Cards */}
                {[
                    { img: Book, title: 'Book Hotel', desc: 'In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies' },
                    { img: Book2, title: 'Book Taxi', desc: 'In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies' },
                    { img: Book3, title: 'Book Plane', desc: 'In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies' },
                    { img: Book4, title: 'Global Tour', desc: 'In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies' }
                ].map((service, index) => (
                    <div
                        key={index}
                        className={"w-[280px] h-[390px] border border-gray-200 rounded-[25px] backdrop-[#FAFAFF] flex flex-col justify-center items-center"}
                        data-aos="fade-right" data-aos-delay={(index + 1) * 100}
                    >
                        <img className={"w-[150px] h-[75px]"} src={service.img} alt={service.title}/>
                        <div className={"w-[95%] translate-y-[20px] pl-3 text-center"}>
                            <h2 className={"text-[20px]"}>{service.title}</h2>
                            <p className={"text-[14px] text-[#666666]"}>{service.desc}</p>
                            <Button
                                onClick={() => showModal(service.title)}
                                className={"mt-4 w-[150px] h-[40px] bg-white rounded-[10px] text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}
                            >
                                Explore More
                            </Button>
                            <Modal
                                title={service.title}
                                open={isModalOpen && currentService === service.title}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                                width={600}
                            >
                                <img src={service.img} alt={service.title} className={"w-[100px] h-[50px] mx-auto mb-4"}/>
                                <h2 className={"text-[22px] text-center my-2"}>{service.title}</h2>
                                <p className={"text-center text-[14px]"}>{service.desc}</p>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name..."
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={"my-2 w-[250px] border p-2 rounded-[5px]"}
                                /><br/>
                                <input
                                    type="text"
                                    name="number"
                                    placeholder="Enter your number..."
                                    value={formData.number}
                                    onChange={handleInputChange}
                                    className={"my-2 w-[250px] border p-2 rounded-[5px]"}
                                /><br/>
                                <Button
                                    onClick={handleOk}
                                    className={"w-[150px] h-[40px] bg-white rounded-[10px] text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}
                                >
                                    Yuborish
                                </Button>
                            </Modal>
                        </div>
                    </div>
                ))}
            </div>

            <Paceg/>
        </div>
    );
}

export default Services;
