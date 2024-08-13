import React from 'react';
import Step from "/src/Group 235.png"
import Step1 from "../About Us/media.png"
import Left1 from "../../imge/Frame.png"
import Fleg from "../../imge/Group 293 (1).png"
import Fleg1 from "../../imge/Group 255.png"
import Fleg2 from "../../imge/Group 256.png"
import Signin from "../Sign In/signin.jsx";

function Aboutus(props) {
    return (
        <div className="w-[100%]  h-screen pt-20 sm:pt-0">
            <div className=" w-[100%] h-screen flex  items-center justify-center  px-10 sm:h-auto sm:px-0 sm:ml-[-30px]  sm:w-full">
                <div className="w-[50%] h-screen  sm:w-full lg:ml-52">
                    <img className={"w-20 ml-[-39px] sm:hidden"} src={Left1}  alt=""/>
                    <p className={"text-[16px] pr-[480px] ml-10 sm:pr-0 sm:ml-0"}>Easy and Fast</p>
                    <h2 className={"text-[36px] pr-[100px] w-[600px] ml-10 sm:pr-0 sm:ml-0  sm:w-full"}>Book Next Trip in 3 Easy Steps</h2>
                    <p className={"w-[595px] pl-10 text-left sm:pl-4 sm:w-full sm:text-center sm:px-5"}>There was consensus, not surprisingly,
                        that quality traditional
                        travel agencies provide value for
                        money. However, this was accompanied by a high level of concern that many consumers</p>

                    <div
                        className={"w-full flex  items-center  pt-[50px] sm:flex-col sm:justify-center sm:items-center sm:gap-1  sm:w-full"}
                        data-aos="zoom-out-up" data-aos-duration="700">
                        <img src={Fleg} alt="" className={"pl-20 sm:pl-4"}/>
                        <h1 className={"-translate-y-6 ml-8  text-[20px] sm:translate-y-0 "}>Choose Destionation</h1>
                        <p className={"w-[300px] pt-6 ml-[-185px] sm:ml-0 sm:pt-0"}>There was consensus, not
                            surprisingly, that quality
                            traditional travel agencies</p>
                    </div>
                    <div
                        className={"w-full flex  items-center  pt-[50px] sm:flex-col sm:justify-center sm:items-center sm:gap-1 sm:w-full"}
                        data-aos="zoom-out-up" data-aos-duration="900">
                        <img src={Fleg1} alt="" className={"pl-20 sm:pl-4 "}/>
                        <h1 className={"-translate-y-6 ml-8  text-[20px] sm:translate-y-0 "}>Make Payment</h1>
                        <p className={"w-[300px] pt-6 ml-[-135px] sm:ml-0 sm:pt-0"}>There was consensus, not
                            surprisingly, that quality
                            traditional travel agencies</p>
                    </div>
                    <div
                        className={"w-full flex  items-center  pt-[50px] sm:flex-col sm:justify-center sm:items-center sm:gap-1 sm:w-full"}
                        data-aos="zoom-out-up" data-aos-duration="1100">
                        <img src={Fleg2} alt="" className={"pl-20 sm:pl-4"}/>
                        <h1 className={"-translate-y-6 ml-8  text-[20px] sm:translate-y-0 "}>Reach Airport on Selected
                            Date</h1>
                        <p className={"w-[300px] pt-6 ml-[-284px] sm:ml-0 sm:pt-0"}>There was consensus, not
                            surprisingly, that quality
                            traditional travel agencies</p>
                    </div>
                </div>
                <div className="w-[50%] h-screen  lg:ml-40  justify-center  items-center flex">
                    <img src={Step} alt="" className={"mt-44 sm:hidden lg:mt-10 lg:mr-[100px]"}/>

                </div>
                <br/>
            </div>
            <br/>
            <br/>
            <br/>
            <Signin/>
        </div>
    );
}

export default Aboutus;


// import React from 'react';
// import Trip from '../../imge/Rectangle 33.png';
// import Img from "../../asstes/travael.jpg"
// import Img1 from "../../asstes/travael1.jpg"
// import Img2 from "../../asstes/travel2.jpg"
// import Img3 from "../../asstes/travel3.jpg"
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
//
// const MultiCarousel = () => {
//     const responsive = {
//         superLargeDesktop: {
//             breakpoint: { max: 4000, min: 3000 },
//             items: 5,
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 5,
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2,
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1,
//         },
//     };
//
//     return (
//         <Carousel responsive={responsive} className={"w-full flex justify-center items-center gap-2 sm:flex-wrap sm:h-auto"}>
//             <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start  sm:w-full'} data-aos="fade-down" data-aos-easing="linear" data-aos-delay="200">
//                 <img src={Img} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
//                 <h2 className={' text-[20px]'}>Trip to Thailand</h2>
//                 <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
//                 <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
//                     Join the leader in smallship cruising on the Great Lakes,
//                 </p>
//                 <p className={''}>3.25k Review</p>
//                 <button
//                     className={
//                         'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
//                     }
//                 >
//                     View Details
//                 </button>
//             </div>
//             <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start  sm:w-full'} data-aos="fade-down" data-aos-easing="linear" data-aos-delay="300">
//                 <img src={Img1} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
//                 <h2 className={' text-[20px]'}>Trip to Thailand</h2>
//                 <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
//                 <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
//                     Join the leader in smallship cruising on the Great Lakes,
//                 </p>
//                 <p className={''}>3.25k Review</p>
//                 <button
//                     className={
//                         'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
//                     }
//                 >
//                     View Details
//                 </button>
//             </div>
//             <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start  sm:w-full'} data-aos="fade-down" data-aos-easing="linear" data-aos-delay="400">
//                 <img src={Img2} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
//                 <h2 className={' text-[20px]'}>Trip to Thailand</h2>
//                 <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
//                 <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
//                     Join the leader in smallship cruising on the Great Lakes,
//                 </p>
//                 <p className={''}>3.25k Review</p>
//                 <button
//                     className={
//                         'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
//                     }
//                 >
//                     View Details
//                 </button>
//             </div>
//             <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start sm:w-full'} data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500">
//                 <img src={Img3} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
//                 <h2 className={' text-[20px]'}>Trip to Thailand</h2>
//                 <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
//                 <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
//                     Join the leader in smallship cruising on the Great Lakes,
//                 </p>
//                 <p className={''}>3.25k Review</p>
//                 <button
//                     className={
//                         'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
//                     }
//                 >
//                     View Details
//                 </button>
//             </div>
//             <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start  sm:w-full'} data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500">
//                 <img src={Img3} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
//                 <h2 className={' text-[20px]'}>Trip to Thailand</h2>
//                 <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
//                 <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
//                     Join the leader in smallship cruising on the Great Lakes,
//                 </p>
//                 <p className={''}>3.25k Review</p>
//                 <button
//                     className={
//                         'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
//                     }
//                 >
//                     View Details
//                 </button>
//             </div>
//             <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start  sm:w-full'} data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500">
//                 <img src={Img3} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
//                 <h2 className={' text-[20px]'}>Trip to Thailand</h2>
//                 <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
//                 <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
//                     Join the leader in smallship cruising on the Great Lakes,
//                 </p>
//                 <p className={''}>3.25k Review</p>
//                 <button
//                     className={
//                         'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
//                     }
//                 >
//                     View Details
//                 </button>
//             </div>
//             <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start  sm:w-full'} data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500">
//                 <img src={Img3} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
//                 <h2 className={' text-[20px]'}>Trip to Thailand</h2>
//                 <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
//                 <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
//                     Join the leader in smallship cruising on the Great Lakes,
//                 </p>
//                 <p className={''}>3.25k Review</p>
//                 <button
//                     className={
//                         'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
//                     }
//                 >
//                     View Details
//                 </button>
//             </div>
//             <div className={' mt-[100px] w-[300px] h-[500px] flex flex-col justify-start items-start  sm:w-full'} data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500">
//                 <img src={Img3} alt='' className={"w-[220px] h-[250px] rounded-[10px]"}/>
//                 <h2 className={' text-[20px]'}>Trip to Thailand</h2>
//                 <h2 className={' text-[20px] text-[#DB6300]'}>250$</h2>
//                 <p className={'text-[16px] text-[#666666] w-[250px] ml-[-25px]'}>
//                     Join the leader in smallship cruising on the Great Lakes,
//                 </p>
//                 <p className={''}>3.25k Review</p>
//                 <button
//                     className={
//                         'w-[170px] h-[50px]  rounded-[11px]  bg-[#EEAA2B] text-white  '
//                     }
//                 >
//                     View Details
//                 </button>
//             </div>
//
//         </Carousel>
//     );
// };
//
// export default MultiCarousel;