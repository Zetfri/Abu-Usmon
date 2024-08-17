

import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import Img from "../../asstes/u`mra/photo_2024-08-09_20-43-00 1.png";
import Img1 from "../../asstes/u`mra/photo_2024-08-15_18-04-16 1.png";
import Img2 from "../../asstes/u`mra/photo_2024-08-09_20-36-22 1.png";
import Img3 from "../../asstes/travel3.jpg";
import Img4 from "../../asstes/img/usmon-1.jpg";
import Img5 from "../../asstes/img/usmon-2.jpg";
import Img6 from "../../asstes/img/usmon-3.jpg";
import Img7 from "../../asstes/img/usmon-4.jpg";
import Img8 from "../../asstes/img/usmon-5.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Image } from 'antd';

const MultiCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTrip, setCurrentTrip] = useState({});
    const [userName, setUserName] = useState('');
    const [userNumber, setUserNumber] = useState('');

    const sendToTelegram = (tripName) => {
        const botToken = '7485625468:AAGHeLepMjWactUjD0OPRSefD_8srs_r02o';
        const chatId = '-1002214508831';
        const message = `Trip Name: ${tripName}\nName: ${userName}\nPhone Number: ${userNumber}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Message sent:", data);
            })
            .catch(error => {
                console.error("Error sending message:", error);
            });
    };

    const showModal = (trip) => {
        setCurrentTrip(trip);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        if (userName.trim() && userNumber.trim()) {
            sendToTelegram(currentTrip.name);
            message.success('Message sent successfully!');
            setUserName(''); // Clear form
            setUserNumber(''); // Clear form
            setIsModalOpen(false); // Close modal
        } else {
            message.error('Please fill in all the fields.');
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setUserName(''); // Clear form
        setUserNumber(''); // Clear form
    };

    const trips = [
        { name: "Masjidul Haram", img: Img, p: "Masjidul haramga 10-kun umra amallari" },
        { name: "Qizil dengiz", img: Img1, p: "Qizildengiz sayohati          " },
        { name: "Madina munavara", img: Img2 , p: "Qubo masjidi                      "},
        { name: "Madina munavara", img: Img3 ,p: "Hojilarimizdan foto lavha                     "},
        { name: "Madina munavara", img: Img4 ,p: "Hojilarimizdan foto lavha                     "},
        { name: "Madina munavara", img: Img5 ,p: "Hojilarimizdan foto lavha                     "},
        { name: "Madina munavara", img: Img6 ,p: "Hojilarimizdan foto lavha                     "},
        { name: "Madina munavara", img: Img7 ,p: "Hojilarimizdan foto lavha                     "},
        { name: "Madina munavara", img: Img8 ,p: "Hojilarimizdan foto lavha                     "},
    ];

    return (
        <Carousel
            responsive={responsive}
            customLeftArrow={
                <button
                    className="custom-left-arrow"
                    style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: '#EEAA2B',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        color: 'white',
                        fontSize: '20px',
                        cursor: 'pointer',
                        zIndex: 2,
                    }}
                >
                    ←
                </button>
            }
            customRightArrow={
                <button
                    className="custom-right-arrow "
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: '#EEAA2B',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        color: 'white',
                        fontSize: '20px',
                        cursor: 'pointer',
                        zIndex: 2,
                    }}
                >
                    →
                </button>
            }
            className='flex justify-center items-center sm:justify-start sm:items-start'
        >
            {trips.map((trip, index) => (
                <div key={index} className="flex h-[450px]   flex-col items-start p-4 sm:ml-[50px] lg:ml-20 sm:w-full lg:w-full">
                    <Image height={260} width={250} src={trip.img} alt={trip.name} className="w-[280px] h-[200px] rounded-lg object-cover shadow-lg" />
                    <h2 className="mt-4 text-left text-xl font-semibold">{trip.name}</h2>
                    <p className="text-left text-base text-gray-600 w-[70%]">
                        {trip.p}
                    </p>
                    <Button onClick={() => showModal(trip)} className="w-[170px] h-[50px] mt-2 rounded-lg bg-[#EEAA2B] text-white shadow-md hover:bg-[#d99926]">
Murojat uchun                    </Button>
                    <Modal
                        title={null}
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={null}

                        centered
                        style={{
                            width: '100%',
                            padding: '20px',
                        }}
                        bodyStyle={{
                            padding: '20px',
                            borderRadius: '10px',
                            backgroundColor: '#FDFDFD', // Set the background color
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        }}
                        wrapClassName="custom-modal-overlay"
                    >
                        <div className="flex flex-col items-center mb-20">
                            <img
                                src={currentTrip.img}
                                alt=""
                                className="w-[80%] max-w-md h-[200px] object-cover rounded-lg shadow-lg"
                            />
                            <h2 className="text-xl font-semibold mt-4 mb-2">{currentTrip.name}</h2>
                            <p className="text-center text-base text-gray-600 mb-4">Join the leader in smallship cruising on the Great Lakes,</p>
                            <input
                                type="text"
                                placeholder="Enter your name..."
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="my-2 w-full max-w-md border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EEAA2B]"
                            />
                            <input
                                type="text"
                                placeholder="Enter your number..."
                                value={userNumber}
                                onChange={(e) => setUserNumber(e.target.value)}
                                className="my-2 w-full max-w-md border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EEAA2B]"
                            />
                            <button
                                onClick={handleOk}
                                className="w-full max-w-md h-[40px] mt-4 bg-[#EEAA2B] text-white rounded-lg shadow-md hover:bg-[#d99926] transition duration-300"
                            >
                                Yuborish
                            </button>
                        </div>
                    </Modal>
                </div>
            ))}
        </Carousel>
    );
};

export default MultiCarousel;
