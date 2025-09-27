import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import useSWR from "swr";
import { getFooter } from "@/sanity/sanity-utils";
import PrivacyPolicy from "./PrivacyPolicy";

const fetcher = async () => {
  const data = await getFooter();
  return data;
};

function Footer() {
  const [isPolicyVisible, setIsPolicyVisible] = useState(false);
  const openPolicy = () => setIsPolicyVisible(true);
  const closePolicy = () => setIsPolicyVisible(false);
  const { data } = useSWR("footer", fetcher);
  const footer = data?.[0];
  if (!footer) return null;

  const { address, email, navigation, phone, privacyPolicy } = footer;

  return (
    <footer
      className="relative text-center py-8 bg-cover bg-center bg-no-repeat bg-brand-dark md:text-left"
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
                {!!navigation?.length &&
                  navigation.map((link) => (
                    <li key={link.sectionId}>
                      <a
                        className=" text-brand-light no-underline transition-colors hover:text-brand-default"
                        href={`#${link.sectionId}`}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
              </ul>
              <address className="flex justify-center text-center mt-4 md:mt-0">
                <ul>
                  <li className="flex justify-center  md:block">
                    <a
                      className=" font-thin text-brand-light hover:text-brand-default transition-colors flex flex-col md:flex-row"
                      href={`tel:${phone}`}
                    >
                      {phone}
                    </a>
                  </li>
                  <li className="flex justify-center md:block">
                    <a
                      className=" font-thin text-brand-light hover:text-brand-default transition-colors flex flex-col md:flex-row"
                      href={`mailto:${email}`}
                    >
                      {email}
                    </a>
                  </li>
                  <li className="flex justify-center md:block">
                    <a
                      className="font-thin text-brand-light hover:text-brand-default transition-colors flex flex-col md:flex-row z-20"
                      href={address?.link}
                      target="_blank"
                    >
                      {address?.name}
                    </a>
                  </li>
                  <li>
                    <div className="flex space-x-4 justify-center md:justify-start">
                      <a
                        className="text-brand-light hover:text-brand-default transition-colors flex items-center z-20"
                        href="#"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-2xl"
                        />
                      </a>
                      <a
                        className="text-brand-light hover:text-brand-default transition-colors flex items-center z-20"
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
          <ul className="footer__bottom z-content">
            <li className="flex justify-center lg:block">
              <button
                className="text-sm font-light text-brand-light hover:text-brand-default transition-colors flex flex-col md:flex-row items-start"
                type="button"
                onClick={openPolicy}
              >
                Privacy Policy
              </button>
              <PrivacyPolicy
                onClose={closePolicy}
                privacyPolicy={privacyPolicy}
                isVisible={isPolicyVisible}
              />
            </li>
            <li>
              <p className="text-brand-brick text-sm font-normal">
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
        className="w-[11rem] h-[8rem] bg-no-repeat absolute bottom-0 left-0 z-[-1] lg:z-0"
      />
      <Image
        src="/bread-large.png"
        alt="bread-left"
        width={100}
        height={24}
        className="absolute bottom-0 right-0 w-[20rem] h-[10rem] bg-no-repeat md:w-[24rem] md:h-[12rem]"
      />
    </footer>
  );
}

export default Footer;
