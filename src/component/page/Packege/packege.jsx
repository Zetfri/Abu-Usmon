import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Img from "../../asstes/travael.jpg";
import Img1 from "../../asstes/travael1.jpg";
import Img2 from "../../asstes/travel2.jpg";
import Img3 from "../../asstes/travel3.jpg";
import Img4 from "../../asstes/umra/photo_20_2024-08-10_18-07-10.jpg";
import Img5 from "../../asstes/umra/photo_18_2024-08-10_18-07-10.jpg";
import Img6 from "../../asstes/umra/photo_14_2024-08-10_18-07-10.jpg";
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
        <Carousel responsive={responsive}>
            <div className="flex flex-col sm:ml-10 items-start p-4" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="200">
                <Image  height={260} width={250} src={Img} alt="Trip to Thailand" className="w-[280px] h-[200px] rounded-[10px] object-cover" />
                <h2 className="mt-4 text-left text-[20px]">Trip to Thailand</h2>
                <h2 className="text-left text-[20px] text-[#DB6300]"></h2>
                <p className="text-left text-[16px] text-[#666666] w-[70%]">
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className="text-left">3.25k Review</p>
                <Button onClick={showModal} className={"w-[170px] h-[50px] ml-[-2px] mt-2 rounded-[11px] bg-[#EEAA2B] text-white"}>
                    View Details
                </Button>
                <Modal title="Trip to Thailand" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                    <img src={Img} alt="" className={"mx-auto mb-4"}/>
                    <h2 className={"text-[26px] translate-y-[-12px] text-center "}>Trip to Thailand</h2>
                    <h5 className={" translate-y-[-12px] text-center"}>3.25k Review</h5>
                    <p className={"text-center "}>Join the leader in smallship cruising on the Great Lakes,</p>
                    <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                </Modal>
            </div>
            <div className="flex flex-col sm:ml-10 items-start p-4" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="200">
                <Image  height={260} width={250} src={Img1} alt="Trip to Bali" className="w-[280px] h-[200px] rounded-[10px] object-cover" />
                <h2 className="mt-4 text-left text-[20px]">Trip to Bali</h2>
                <h2 className="text-left text-[20px] text-[#DB6300]"></h2>
                <p className="text-left text-[16px] text-[#666666] w-[70%]">
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className="text-left">4.2k Review</p>
                <Button onClick={showModal} className={"w-[170px] h-[50px] ml-[-2px] mt-2 rounded-[11px] bg-[#EEAA2B] text-white"}>
                    View Details
                </Button>
                <Modal title="Trip to Bali" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                    <img src={Img1} alt="" className={"mx-auto mb-4"}/>
                    <h2 className={"text-[26px] translate-y-[-12px] text-center "}>Trip to Bali</h2>
                    <h5 className={" translate-y-[-12px] text-center"}>4.2k Review</h5>
                    <p className={"text-center "}>Join the leader in smallship cruising on the Great Lakes,</p>
                    <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                </Modal>
            </div>
            <div className="flex flex-col sm:ml-10 items-start p-4" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="200">
                <Image  height={260} width={250} src={Img2} alt="Trip to Maldives" className="w-[280px] h-[200px] rounded-[10px] object-cover" />
                <h2 className="mt-4 text-left text-[20px]">Trip to Maldives</h2>
                <h2 className="text-left text-[20px] text-[#DB6300]"></h2>
                <p className="text-left text-[16px] text-[#666666] w-[70%]">
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className="text-left">2.9k Review</p>
                <Button onClick={showModal} className={"w-[170px] h-[50px] ml-[-2px] mt-2 rounded-[11px] bg-[#EEAA2B] text-white"}>
                    View Details
                </Button>
                <Modal title="Trip to Maldives" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                    <img src={Img2} alt="" className={"mx-auto mb-4"}/>
                    <h2 className={"text-[26px] translate-y-[-12px] text-center "}>Trip to Maldives</h2>
                    <h5 className={" translate-y-[-12px] text-center"}>2.9k Review</h5>
                    <p className={"text-center "}>Join the leader in smallship cruising on the Great Lakes,</p>
                    <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                </Modal>
            </div>
            <div className="flex flex-col sm:ml-10 items-start p-4" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="200">
                <Image  height={260} width={250} src={Img3} alt="Trip to Japan" className="w-[280px] h-[200px] rounded-[10px] object-cover" />
                <h2 className="mt-4 text-left text-[20px]">Trip to Japan</h2>
                <h2 className="text-left text-[20px] text-[#DB6300]"></h2>
                <p className="text-left text-[16px] text-[#666666] w-[70%]">
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className="text-left">5.1k Review</p>
                <Button onClick={showModal} className={"w-[170px] h-[50px] ml-[-2px] mt-2 rounded-[11px] bg-[#EEAA2B] text-white"}>
                    View Details
                </Button>
                <Modal title="Trip to Japan" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                    <img src={Img3} alt="" className={"mx-auto mb-4"}/>
                    <h2 className={"text-[26px] translate-y-[-12px] text-center "}>Trip to Japan</h2>
                    <h5 className={" translate-y-[-12px] text-center"}>5.1k Review</h5>
                    <p className={"text-center "}>Join the leader in smallship cruising on the Great Lakes,</p>
                    <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                </Modal>
            </div>
            <div className="flex flex-col sm:ml-10 items-start p-4" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="200">
                <Image  height={260} width={250} src={Img4} alt="Trip to Japan" className="w-[280px] h-[200px] rounded-[10px] object-cover" />
                <h2 className="mt-4 text-left text-[20px]">Trip to Japan</h2>
                <h2 className="text-left text-[20px] text-[#DB6300]"></h2>
                <p className="text-left text-[16px] text-[#666666] w-[70%]">
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className="text-left">5.1k Review</p>
                <Button onClick={showModal} className={"w-[170px] h-[50px] ml-[-2px] mt-2 rounded-[11px] bg-[#EEAA2B] text-white"}>
                    View Details
                </Button>
                <Modal title="Trip to Japan" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                    <img src={Img4} alt="" className={"mx-auto mb-4"}/>
                    <h2 className={"text-[26px] translate-y-[-12px] text-center "}>Trip to Japan</h2>
                    <h5 className={" translate-y-[-12px] text-center"}>5.1k Review</h5>
                    <p className={"text-center "}>Join the leader in smallship cruising on the Great Lakes,</p>
                    <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                </Modal>
            </div>
            <div className="flex flex-col sm:ml-10 items-start p-4" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="200">
                <Image     height={260} width={250} src={Img5} alt="Trip to Japan" className="w-[280px] h-[200px] rounded-[10px] object-cover" />
                <h2 className="mt-4 text-left text-[20px]">Trip to Japan</h2>
                <h2 className="text-left text-[20px] text-[#DB6300]"></h2>
                <p className="text-left text-[16px] text-[#666666] w-[70%]">
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className="text-left">5.1k Review</p>
                <Button onClick={showModal} className={"w-[170px] h-[50px] ml-[-2px] mt-2 rounded-[11px] bg-[#EEAA2B] text-white"}>
                    View Details
                </Button>
                <Modal title="Trip to Japan" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                    <img src={Img5} alt="" className={"mx-auto mb-4"}/>
                    <h2 className={"text-[26px] translate-y-[-12px] text-center "}>Trip to Japan</h2>
                    <h5 className={" translate-y-[-12px] text-center"}>5.1k Review</h5>
                    <p className={"text-center "}>Join the leader in smallship cruising on the Great Lakes,</p>
                    <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                </Modal>
            </div>
            <div className="flex flex-col sm:ml-10 items-start p-4" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="200">
                <Image     height={260} width={250} src={Img6} alt="Trip to Japan" className="w-[280px] h-[200px] rounded-[10px] object-cover" />
                <h2 className="mt-4 text-left text-[20px]">Trip to Japan</h2>
                <h2 className="text-left text-[20px] text-[#DB6300]"></h2>
                <p className="text-left text-[16px] text-[#666666] w-[70%]">
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className="text-left">5.1k Review</p>
                <Button onClick={showModal} className={"w-[170px] h-[50px] ml-[-2px] mt-2 rounded-[11px] bg-[#EEAA2B] text-white"}>
                    View Details
                </Button>
                <Modal title="Trip to Japan" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '10px'}}>
                    <img src={Img6} alt="" className={"mx-auto mb-4"}/>
                    <h2 className={"text-[26px] translate-y-[-12px] text-center "}>Trip to Japan</h2>
                    <h5 className={" translate-y-[-12px] text-center"}>5.1k Review</h5>
                    <p className={"text-center "}>Join the leader in smallship cruising on the Great Lakes,</p>
                    <input type="text" name="" id="" placeholder={"Enter your name..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <input type="text" name="" id="" placeholder={"Enter your number..."} className={"my-2 w-[300px] border p-2 rounded-[5px]"}/><br/>
                    <button className={"w-[180px] translate-y-[20px]  h-[40px] bg-white   rounded-[10px]  text-[#EEAA2B] border border-[#EEAA2B] hover:bg-[#EEAA2B] hover:text-white"}>Yuborish</button>
                </Modal>
            </div>
        </Carousel>
    );
};

export default MultiCarousel;
