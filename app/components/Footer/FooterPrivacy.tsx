import React, { useState } from "react";
import PrivacyPolicy from "../Form/PrivacyPolicy";
import { PortableTextBlock } from "next-sanity";
import { useLockScroll } from "@/app/hooks/useLockScroll";

const FooterPrivacy = ({
  privacyPolicy,
}: {
  privacyPolicy?: PortableTextBlock;
}) => {
  const [isPolicyVisible, setIsPolicyVisible] = useState(false);
  const openPolicy = () => setIsPolicyVisible(true);
  const closePolicy = () => setIsPolicyVisible(false);
  useLockScroll(!!isPolicyVisible);
  return (
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
  );
};

export default FooterPrivacy;
