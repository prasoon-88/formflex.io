import React, { HTMLAttributes } from "react";
import { cx } from "class-variance-authority";

interface Icon extends HTMLAttributes<HTMLElement> {
  iconName: string;
}

const Icon = (props: Icon) => {
  const { iconName, className, ...rest } = props;
  return (
    <i className={cx("material-icons-round", className)} {...rest}>
      {iconName}
    </i>
  );
};

export default Icon;
