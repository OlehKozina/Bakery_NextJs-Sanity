import { PortableTextBlock } from "next-sanity";

export type NavigationType = {
  navigation?: {
    title?: string;
    sectionId?: string;
  }[];
  privacyPolicy?: PortableTextBlock;
  phone?: string;
  address?: {
    name?: string;
    link?: string;
  };
  socialLinks?: string[];
  email?: string;
  footerImages?: {
    left?: string;
    right?: string;
  };
};
