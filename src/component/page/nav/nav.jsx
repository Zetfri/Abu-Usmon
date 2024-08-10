import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from"../../asstes/umra/logot.png"
import { Button, Modal } from 'antd';
import Burger from "../../asstes/menu.png"

function Nav(props) {
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
        <div className="w-[100%]  items-center  justify-center gap-7 pt-7 flex sm:w-full sm:gap-2 ">
<div className={"mr-[550px] sm:mr-0"}>


    <Link to="/" className={""}>
        <img className={"pl-[80px] sm:pl-0 sm:w-[100px] sm:mx-6"} src={Logo} alt=""/>
    </Link>
</div>
<div className={"flex gap-10 "}>

    <Link to="/" className={"sm:hidden"}>Tour’s</Link>
    <Link to="/signin" className={"sm:hidden"}>Sign In</Link>
    <Link to="/galer" className={"sm:hidden"}>Fotogalereya</Link>
</div>

            <div>
                <button className={"bg-[#DB6300] hover:bg-[#F07427] text-white font-bold py-2 px-4 rounded"}>Boglanish
                </button>

            </div>
            <div className={"hidden sm:block"}>
                <Button type="" onClick={showModal} className={"h-[42px]"}>
                    <img src={Burger} alt=""/>
                </Button>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className={""}>
                    <div>
                        <Link to="/" className={"sm:hidden"}>Tour’s</Link>
                        <Link to="/signin" className={"sm:hidden"}>Sign In</Link>
                        <Link to="/galer" className={"sm:hidden"}>Fotogalereya</Link>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Nav;