import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../asstes/umra/logot.png";
import { Button, Modal, Input, Form, notification } from 'antd';
import Burger from "../../asstes/menu.png";
import Sau from "../../asstes/flag.png";
import Uzb from "../../asstes/uzbekistan.png";

function Nav() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showContactModal = () => {
        setIsContactModalOpen(true);
    };

    const handleContactCancel = () => {
        setIsContactModalOpen(false);
    };

    const handleFormSubmit = (values) => {
        const botToken = '7485625468:AAGHeLepMjWactUjD0OPRSefD_8srs_r02o';
        const chatId = '-1002214508831';
        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const message = `
            Ism: ${values.name}
            Telefon: ${values.phone}
            Savol: ${values.question}
        `;

        fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    notification.success({ message: 'Muvaffaqiyatli yuborildi!' });
                    form.resetFields(); // Formani tozalash
                    setIsContactModalOpen(false); // Modalni yopish
                } else {
                    notification.error({ message: 'Yuborishda xatolik yuz berdi.' });
                }
            })
            .catch(() => {
                notification.error({ message: 'Yuborishda xatolik yuz berdi.' });
            });
    };

    return (
        <div className="w-full flex items-center justify-center gap-7 pt-7 sm:gap-2">
            <div className="mr-[550px] sm:mr-0 lg:mr-0">
                <Link to="/">
                    <img className="pl-[80px] sm:pl-0 sm:w-[100px] sm:mx-6" src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="flex gap-10 sm:hidden">
                <Link to="/" className="hover:text-blue-700">Bosh menu</Link>
                <Link to="/signin" className="hover:text-blue-700">Murojat uchun</Link>
                <Link to="/galer" className="hover:text-blue-700" onClick={handleCancel}>Rasmlar</Link>
            </div>
            <div>
                <button
                    className="bg-[#DB6300] hover:bg-[#F07427] text-white font-bold py-2 px-4 rounded"
                    onClick={showContactModal}
                >
                    Bog'lanish
                </button>
            </div>
            <div className="sm:block hidden">
                <Button type="text" onClick={showModal} className="h-[42px]">
                    <img src={Burger} alt="Menu" />
                </Button>
                <Modal
                    title="Abu Usmon uz"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null}
                    className="dark:bg-gray-800 dark:text-white"
                    closeIcon={<span className="text-white">X</span>}
                >
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="text-blue-500 hover:text-blue-700" onClick={handleCancel}>Bosh menu</Link>
                        <Link to="/signin" className="text-blue-500 hover:text-blue-700" onClick={handleCancel}>Murojat uchun</Link>
                        <Link to="/galer" className="text-blue-500 hover:text-blue-700" onClick={handleCancel}>Rasmlar</Link>
                        <div className="flex items-center gap-2">
                            <a href="Tel:+99891 322 07 87" className="flex w-auto gap-2 justify-center items-center text-blue-500">
                                <img src={Uzb} alt="Uzbekistan" className="w-[30px] h-[30px]" />
                                📞+99891 322 07 87
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="Tel:+99897 386 07 87" className="flex w-auto gap-2 justify-center items-center text-blue-500">
                                <img src={Uzb} alt="Uzbekistan" className="w-[30px] h-[30px]" />
                                📞+99897 386 07 87
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="tel:+966509053786" className="flex w-auto gap-2 justify-center items-center text-blue-500 hover:text-blue-700">
                                <img src={Sau} alt="Saudi Arabia" className="w-[30px] h-[30px]" />
                                📞+966 50 905 3786
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="tel:+966562911630" className="flex w-auto gap-2 justify-center items-center text-blue-500 hover:text-blue-700">
                                <img src={Sau} alt="Saudi Arabia" className="w-[30px] h-[30px]" />
                                📞+966 56 291 1630
                            </a>
                        </div>
                    </div>
                </Modal>
            </div>
            <Modal
                title="Bog'lanish"
                open={isContactModalOpen}
                onCancel={handleContactCancel}
                footer={null}
            >
                <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
                    <Form.Item
                        label="Ismingiz"
                        name="name"
                        rules={[{ required: true, message: 'Iltimos, ismingizni kiriting!' }]}
                    >
                        <Input placeholder="Ismingiz" />
                    </Form.Item>
                    <Form.Item
                        label="Telefon raqamingiz"
                        name="phone"
                        rules={[{ required: true, message: 'Iltimos, telefon raqamingizni kiriting!' }]}
                    >
                        <Input placeholder="Telefon raqamingiz" />
                    </Form.Item>
                    <Form.Item
                        label="Savolingiz"
                        name="question"
                    >
                        <Input.TextArea rows={4} placeholder="Savolingizni kiriting" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Yuborish
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default Nav;
