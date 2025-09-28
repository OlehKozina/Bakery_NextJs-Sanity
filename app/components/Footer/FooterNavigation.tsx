import React from "react";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterPrivacy from "./FooterPrivacy";
import { NavigationType } from "@/types";

const FooterNavigation = ({
  footerNavigation,
}: {
  footerNavigation?: NavigationType;
}) => {
  if (!footerNavigation) return null;
  const { address, email, navigation, phone, privacyPolicy } = footerNavigation;
  const contactLinks = [
    { href: `tel:${phone}`, label: phone },
    { href: `mailto:${email}`, label: email },
    { href: address?.link, label: address?.name, external: true },
  ];

  const socialLinks = [
    { href: "#", icon: faInstagram, label: "Instagram" },
    { href: "#", icon: faFacebook, label: "Facebook" },
    { href: "#", icon: faXTwitter, label: "Twitter" },
  ];
  return (
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
      <ul className="flex flex-col justify-center text-center mt-4 md:mt-0">
        {contactLinks.map(
          (link) =>
            link.label && (
              <li key={link.href} className="flex justify-center md:block">
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-thin text-brand-light hover:text-brand-default transition-colors flex flex-col md:flex-row"
                >
                  {link.label}
                </a>
              </li>
            )
        )}
        <li>
          <div className="flex space-x-4 justify-center md:justify-start">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-brand-light hover:text-brand-default transition-colors flex items-center"
              >
                <FontAwesomeIcon icon={s.icon} className="text-2xl" />
              </a>
            ))}
          </div>
        </li>
      </ul>
      <FooterPrivacy privacyPolicy={privacyPolicy} />
    </div>
  );
};

export default FooterNavigation;
