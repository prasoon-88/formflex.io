import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import { cx } from "class-variance-authority";
import Icon from "@/components/ui/icon";
import Link from "next/link";

interface INavGroup {
  groupName: string;
  navItems: INavItem[];
}

interface INavItem {
  text: string;
  icon: ReactNode;
  link: string;
}

const BASE = "/app";

const NAV_GROUP: INavGroup[] = [
  {
    groupName: "general",
    navItems: [
      {
        text: "home",
        icon: <Icon iconName="home" />,
        link: BASE + "/",
      },
      {
        text: "forms",
        icon: <Icon iconName="texture" />,
        link: BASE + "/forms/",
      },

      {
        text: "analytics",
        icon: <Icon iconName="bar_chart" />,
        link: BASE + "/analytics/",
      },

      {
        text: "settings",
        icon: <Icon iconName="settings" />,
        link: BASE + "/settings/",
      },
      {
        text: "create form",
        icon: <Icon iconName="plumbing" />,
        link: BASE + "/create/",
      },
    ],
  },
];

const NavItem = ({ text, icon, link }: INavItem) => {
  return (
    <Link
      href={link}
      className={
        (cx(styles["navitem"]),
        "flex gap-2 py-4 px-3  hover:bg-blue-100 hover:text-blue-900")
      }
    >
      {icon} <span className={(styles["navtext"], "capitalize")}>{text}</span>
    </Link>
  );
};

const NavGroup = ({ groupName, navItems }: INavGroup) => {
  return (
    <div>
      <div className="capitalize">{groupName}</div>
      {navItems.map((navItem, index) => (
        <NavItem key={index} {...navItem} />
      ))}
    </div>
  );
};

const SidePannel = () => {
  return (
    <div className={cx(styles["sidepannel"])}>
      {NAV_GROUP.map((group, index) => (
        <NavGroup key={index} {...group} />
      ))}
    </div>
  );
};

export default SidePannel;
