import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface NavigationProps {
  navigation?: {
    title?: string;
    sectionId?: string;
  }[];
  classNames?: {
    root?: string;
    link?: string;
  };
  onClose?: () => void;
}
const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // delay between items
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Navigation = ({ navigation, classNames, onClose }: NavigationProps) => {
  if (!navigation?.length) return null;
  return (
    <motion.ul
      className={classNames?.root}
      variants={list}
      initial="hidden"
      animate="show"
    >
      {!!navigation?.length &&
        navigation.map((link) => (
          <motion.li key={link.sectionId} variants={item}>
            <a
              className={clsx(
                "text-brand-light no-underline transition-colors hover:text-brand-default",
                classNames?.link
              )}
              href={`#${link.sectionId}`}
              onClick={onClose}
            >
              {link.title}
            </a>
          </motion.li>
        ))}
    </motion.ul>
  );
};

export default Navigation;
