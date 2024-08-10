import React from 'react';
import Trip from '../../imge/Rectangle 33.png';
import Img from "../../asstes/travael.jpg"
import Img1 from "../../asstes/travael1.jpg"
import Img2 from "../../asstes/travel2.jpg"
import Img3 from "../../asstes/travel3.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

    return (
        <Carousel responsive={responsive} className={"w-full flex justify-center items-center gap-2 sm:flex-wrap sm:h-auto"}>
            <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start gap-1 sm:w-full'} data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-delay="200">
                <img src={Img} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
                <h2 className={' text-[20px]'}>Trip to Thailand</h2>
                <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
                <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className={''}>3.25k Review</p>
                <button
                    className={
                        'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
                    }
                >
                    View Details
                </button>
            </div>
            <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start gap-1 sm:w-full'} data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-delay="300">
                <img src={Img1} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
                <h2 className={' text-[20px]'}>Trip to Thailand</h2>
                <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
                <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className={''}>3.25k Review</p>
                <button
                    className={
                        'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
                    }
                >
                    View Details
                </button>
            </div>
            <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start gap-1 sm:w-full'} data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-delay="400">
                <img src={Img2} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
                <h2 className={' text-[20px]'}>Trip to Thailand</h2>
                <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
                <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className={''}>3.25k Review</p>
                <button
                    className={
                        'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
                    }
                >
                    View Details
                </button>
            </div>
            <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start gap-1 sm:w-full'} data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-delay="500">
                <img src={Img3} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
                <h2 className={' text-[20px]'}>Trip to Thailand</h2>
                <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
                <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
                    Join the leader in smallship cruising on the Great Lakes,
                </p>
                <p className={''}>3.25k Review</p>
                <button
                    className={
                        'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
                    }
                >
                    View Details
                </button>
            </div>

        </Carousel>
    );
};

export default MultiCarousel;