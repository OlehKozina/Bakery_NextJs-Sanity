import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer
      className="relative  text-center py-8 bg-cover bg-center bg-no-repeat bg-[#31261a] md:text-left"
      style={{
        backgroundImage: "url('/footer-image.png')",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:gap-10">
          <nav className="flex text-center flex-grow flex-col md:flex-row">
            <div className=" mt-4 flex justify-center md:inline-block md:justify-start md:mt-0 z-[5]">
              <a href="#">
                <Image
                  src="/logo.svg"
                  alt="bakery_logo"
                  width={100}
                  height={24}
                  className="relative z-5"
                />
              </a>
            </div>
            <div className="flex z-9 mt-4 flex-grow justify-evenly flex-col md:flex-row text-center md:mt-0">
              <ul>
                <li>
                  <a
                    className=" text-light-color no-underline transition-colors duration-300 hover:text-brand-color"
                    href="#traditions"
                  >
                    Franchise
                  </a>
                </li>
                <li>
                  <a
                    className=" text-light-color no-underline transition-colors duration-300 hover:text-brand-color"
                    href="#cooks"
                  >
                    Bakers
                  </a>
                </li>
                <li>
                  <a
                    className=" text-light-color no-underline transition-colors duration-300 hover:text-brand-color"
                    href="#formats"
                  >
                    Formats
                  </a>
                </li>
                <li>
                  <a
                    className=" text-light-color no-underline transition-colors duration-300 hover:text-brand-color"
                    href="#contacts"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
              <address className="flex justify-center text-center mt-4 md:mt-0">
                <ul>
                  <li className="flex justify-center  md:block">
                    <a
                      className=" font-thin max-w-[211px] text-light-color hover:text-brand-color transition-colors flex flex-col md:flex-row"
                      href="tel:+380960000007"
                    >
                      + 1 (325) 333 7777
                    </a>
                  </li>
                  <li className="flex justify-center md:block">
                    <a
                      className=" font-thin max-w-[211px] text-light-color hover:text-brand-color transition-colors flex flex-col md:flex-row "
                      href="mailto:shopbakery@gmail.com"
                    >
                      shopbakery@gmail.com
                    </a>
                  </li>
                  <li className="flex justify-center  md:block">
                    <a
                      className=" font-thin max-w-[290px] text-light-color hover:text-brand-color transition-colors flex flex-col md:flex-row z-20"
                      href="https://maps.app.goo.gl/S6ubsjYejrpp1G1W6"
                      target="_blank"
                    >
                      Edmonton, AB, 13000 67 st NW AB T0C0C0
                    </a>
                  </li>
                  <li>
                    <div className="flex space-x-4 justify-center md:justify-start">
                      <a
                        className="text-light-color hover:text-brand-color transition-colors flex items-center z-20"
                        href="#"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-2xl"
                        />
                      </a>
                      <a
                        className="text-light-color hover:text-brand-color transition-colors flex items-center z-20"
                        href="#"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="text-2xl"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </address>
            </div>
          </nav>
          <ul className="footer__bottom">
            <li className="flex justify-center lg:block">
              <a
                className="text-sm font-light max-w-[211px] text-light-color hover:text-brand-color transition-colors flex flex-col md:flex-row items-start"
                href="#"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <p className="text-[#a18268] text-[14px] font-normal">
                &copy;Data is protected!
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Image
        src="/bread.png"
        alt="bread-left"
        width={100}
        height={24}
        className="w-[180px] h-[120px] bg-no-repeat absolute bottom-0 left-0 z-[-1] lg:z-0"
      />
      <Image
        src="/bread-large.png"
        alt="bread-left"
        width={100}
        height={24}
        className="absolute bottom-0 right-0 w-[329px] h-[154px] bg-no-repeat md:w-[380px] md:h-[190px]"
      />
    </footer>
  );
}

export default Footer;
