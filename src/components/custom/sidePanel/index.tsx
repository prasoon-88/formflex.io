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
        icon: <Icon iconName="home" style={{ fontSize: 20 }} />,
        link: BASE + "/",
      },
      {
        text: "forms",
        icon: <Icon iconName="texture" style={{ fontSize: 20 }} />,
        link: BASE + "/forms/",
      },

      {
        text: "analytics",
        icon: <Icon iconName="bar_chart" style={{ fontSize: 20 }} />,
        link: BASE + "/analytics/",
      },

      {
        text: "settings",
        icon: <Icon iconName="settings" style={{ fontSize: 20 }} />,
        link: BASE + "/settings/",
      },
      {
        text: "create form",
        icon: <Icon iconName="plumbing" style={{ fontSize: 20 }} />,
        link: BASE + "/create/",
      },
    ],
  },
];

const NavItem = ({ text, icon, link }: INavItem) => {
  return (
    <Link
      href={link}
      className={cx(
        styles["navitem"],
        "py-3 px-4 rounded-sm font-medium",
        "flex items-center gap-4"
      )}
    >
      {icon} <span className={(styles["navtext"], "capitalize")}>{text}</span>
    </Link>
  );
};

const NavGroup = ({ groupName, navItems }: INavGroup) => {
  return (
    <div className="px-2 py-6">
      <div className="capitalize px-4 text-xs font-semibold noble-black-400 mb-6">
        {groupName}
      </div>
      <div className="grid gap-2">
        {navItems.map((navItem, index) => (
          <NavItem key={index} {...navItem} />
        ))}
      </div>
    </div>
  );
};

interface INavItemWithImage {
  withBg?: boolean;
  icon?: ReactNode;
}

const NavItemWithImage = ({ withBg, icon }: INavItemWithImage) => {
  return (
    <div
      className={cx(
        "flex justify-between items-center px-4 py-3 m-2 rounded-lg",
        withBg && styles["navItemWithBG"]
      )}
    >
      <div className="flex items-center gap-4 cursor-pointer ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHwpDcDTQaXme54x16yp2tAQKceNuj_1Jaw&s"
          className="w-10 h-10 rounded-full "
        />
        <div className="">
          <p className="font-semibold text-white text-sm">team name</p>
          <p className="font-medium text-xs stem-green-500 ">member name</p>
        </div>
      </div>

      <div className="flex flex-col">{icon}</div>
    </div>
  );
};

const SidePannel = () => {
  return (
    <div
      className={
        (cx(styles["sidepannel"]),
        "flex flex-col justify-between h-screen bg-noble-black-700")
      }
    >
      <div>
        <NavItemWithImage />

        {NAV_GROUP.map((group, index) => (
          <NavGroup key={index} {...group} />
        ))}
      </div>

      <NavItemWithImage withBg={true}/>
    </div>
  );
};

export default SidePannel;
