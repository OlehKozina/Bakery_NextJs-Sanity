"use client";
import FooterImages from "./FooterImages";
import React from "react";
import FooterContainer from "./FooterContainer";
import { NavigationType } from "@/types";

function Footer({ footer }: { footer?: NavigationType }) {
  if (!footer) return null;
  const { footerImages, ...footerContainer } = footer;
  return (
    <footer className="relative text-center py-8 bg-cover bg-center bg-no-repeat md:text-left hover:bg-brand-dark hover:bg-opacity-40 transition-all">
      <FooterContainer footerContainer={footerContainer} />
      <FooterImages footerImages={footerImages} />
    </footer>
  );
}

export default Footer;
