import React from "react";
import clsx from "clsx";

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

const Navigation = ({ navigation, classNames, onClose }: NavigationProps) => {
  if (!navigation?.length) return null;
  return (
    <ul className={classNames?.root}>
      {!!navigation?.length &&
        navigation.map((link) => (
          <li key={link.sectionId}>
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
          </li>
        ))}
    </ul>
  );
};

export default Navigation;
