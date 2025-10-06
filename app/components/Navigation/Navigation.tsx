import React, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { LineSvg } from "../Icons";

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
  isHeader?: boolean;
}

const Navigation = ({
  navigation,
  classNames,
  onClose,
  isHeader = false,
}: NavigationProps) => {
  if (!navigation?.length) return null;
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  return (
    <motion.ul
      className={classNames?.root}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {navigation?.map((link, index) => {
        const linkRef = React.useRef<HTMLAnchorElement | null>(null);
        const [linkWidth, setLinkWidth] = React.useState<number | null>(null);

        React.useEffect(() => {
          if (linkRef.current) {
            setLinkWidth(linkRef.current.offsetWidth);
          }
        }, []);

        return (
          <motion.li
            key={link.sectionId}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            className={clsx("relative flex flex-col items-center")}
          >
            <a
              ref={linkRef}
              className={clsx(
                "text-brand-light no-underline",
                !isHeader && "hover:text-brand-default transition-all",
                classNames?.link
              )}
              href={`#${link.sectionId}`}
              onClick={onClose}
            >
              {link.title}
            </a>
            {linkWidth && isHeader && (
              <LineSvg
                className="absolute top-full"
                width={linkWidth}
                isHovered={hoveredIndex === index}
              />
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default Navigation;
