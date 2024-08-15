import React from "react";
import Map from "../../asstes/circle.png";
import Oclock from "../../asstes/oclock.png";
import Phone from "../../asstes/phone-call.png";
import Email from "../../asstes/circle (1).png";
import Instagram from "../../asstes/instagram.png";
import Telegram from "../../asstes/telegram (1).png";
import Facebook from "../../asstes/facebook.png";
import Youtube from "../../asstes/youtube.png";
import Uzb from "../../asstes/uzbekistan.png";
import Sau from "../../asstes/flag.png";

function Footer(props) {
  return (
    <div>
      <div
        className={
          "w-full h-[640px] bg-[#050402]  sm:pb-10 flex px-10 justify-center items-center sm:flex-col sm:h-auto sm:px-2 lg:flex-col lg:h-auto"
        }
      >
        <div className={"w-[50%]  h-auto sm:w-full lg:w-full"}>
          <div
            className={
              "w-[620px] h-[55px] bg-orange-500 flex justify-center items-center gap-20 rounded-[15px] sm:w-full sm:h-[70px] sm:gap-10 mt-14 lg:w-full"
            }
          >
            <a href="https://t.me/ABU_USMON_Haj">
              <img
                src={Telegram}
                alt=""
                className={"w-[42px]"}
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </a>
            <a href="">
              <img
                src={Instagram}
                alt=""
                className={"w-[42px]"}
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </a>
            <a href="">
              <img
                src={Facebook}
                alt=""
                className={"w-[42px]"}
                data-aos="fade-up"
                data-aos-delay="400"
              />
            </a>
            <a href="">
              <img
                src={Youtube}
                alt=""
                className={"w-[42px]"}
                data-aos="fade-up"
                data-aos-delay="500"
              />
            </a>
          </div>
          <div
            className={
              "w-full flex flex-col items-start justify-start mt-10 gap-6 "
            }
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div className={"flex gap-6 justify-center items-center"}>
              <img src={Oclock} alt="" className={"w-[40px] h-[40px]"} />
              <span
                className={"text-white flex flex-col justify-start items-start"}
              >
                <p className={"text-[24px]"}>Ish vaqti</p>
                <p>Dushanba-Yakshanba 9:00-20:00</p>
              </span>
            </div>

            {/* <div
              className={"flex gap-6 justify-center items-center"}
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <img src={Map} alt="" className={"w-[40px] h-[40px]"} />
              <span
                className={"text-white flex flex-col justify-start items-start"}
              >
                <p className={"text-[24px]"}>Manzil</p>
                <p>Angren Shahar, Xulkar 1xhi uy</p>
              </span>
            </div> */}
            <div
              className={"flex gap-6 justify-center items-center"}
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <img src={Phone} alt="" className={"w-[40px] h-[40px]"} />
              <span
                className={
                  "text-white flex flex-col justify-start items-start gap-1"
                }
              >
                <p className={"text-[24px]"}>Telefon raqami</p>
                <a
                  href="Tel:+99891 322 07 87"
                  className={"flex w-auto gap-2 justify-center items-center"}
                >
                  <img src={Uzb} alt="" className={"w-[30px] h-[30px]"} />
                  📞+99891 322 07 87
                </a>
                <a
                  href="Tel:+99897 386 07 87"
                  className={"flex w-auto gap-2 justify-center items-center"}
                >
                  <img src={Uzb} alt="" className={"w-[30px] h-[30px]"} />
                  📞+99897 386 07 87
                </a>
                <a
                  href="Tel:+966 50 905 3786"
                  className={"flex w-auto gap-2 justify-center items-center"}
                >
                  <img src={Sau} alt="" className={"w-[30px] h-[30px]"} />
                  📞+966 50 905 3786
                </a>
                <a
                  href="Tel:+966 56 291 1630"
                  className={"flex w-auto gap-2 justify-center items-center"}
                >
                  <img src={Sau} alt="" className={"w-[30px] h-[30px]"} />
                  📞+966562911630
                </a>
                <a
                  href="https://t.me/Mukhsin_06"
                  className="flex w-auto gap-2 justify-center items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Mukhsin Khiyodutullaev</span>
                </a>
              </span>
            </div>
            <div
              className={"flex gap-6 justify-center items-center"}
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <img src={Email} alt="" className={"w-[40px] h-[40px]"} />
              <span
                className={"text-white flex flex-col justify-start items-start"}
              >
                <p className={"text-[24px]"}>Email</p>
                <a href="mailto:ismatallah199@gmail.com">
                  ismatallah199@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            "flex justify-center w-[50%] h-full items-center  sm:pt-10 "
          }
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d91567.03780310176!2d70.062223!3d41.0159972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2s!4v1723728385582!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="rounded-[20px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
