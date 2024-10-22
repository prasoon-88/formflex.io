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
        "flex gap-2 py-5 px-4 rounded-3xl text-center font-semibold hover:bg-gradient-to-r from-gray-700 to-transparent")
      }
    >
      {icon} <span className={(styles["navtext"], "capitalize")}>{text}</span>
    </Link>
  );
};

const NavGroup = ({ groupName, navItems }: INavGroup) => {
  return (
    <div>
      <div className="capitalize m-5 noble-black-400">{groupName}</div>
      {navItems.map((navItem, index) => (
        <NavItem key={index} {...navItem} />
      ))}
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
        <div className="flex flex-row justify-between p-5 border-y-2 border-y-emerald-900 ">
          <div className="flex flex-row justify-between cursor-pointer ">
            <div className="px-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHwpDcDTQaXme54x16yp2tAQKceNuj_1Jaw&s"
                className="w-10 h-10 flex rounded-full "
              />
            </div>
            <div className="">
              <p className="font-semibold text-white ">team name</p>
              <p className="font-medium text-sm font-semibold  stem-green-500 ">
                member name
              </p>
            </div>
          </div>

          <div className="flex flex-col h-5 w-5 mr-3 hover:border-2 hover:border-gray-600 self-center cursor-pointer" >
            <img
              src="/images/onboarding/chevron-down.png"
              alt="icon"
              className=""
            />
          </div>
        </div>

        {NAV_GROUP.map((group, index) => (
          <NavGroup key={index} {...group} />
        ))}
      </div>

      <div className="mb-2 p-2 border-y-2 border-y-emerald-900">
        <div className="flex flex-row border-2 border-none p-2 rounded-xl bg-gradient-to-r from-transparent to-gray-700 cursor-pointer">
          <div className="px-7">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHwpDcDTQaXme54x16yp2tAQKceNuj_1Jaw&s"
              className="w-10 h-10 flex rounded-full "
            />
          </div>
          <div className="">
            <p className="font-semibold text-white text-lg">Ayush Kurmi</p>
            <p className="font-medium text-sm stem-green-500">subscription</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePannel;
