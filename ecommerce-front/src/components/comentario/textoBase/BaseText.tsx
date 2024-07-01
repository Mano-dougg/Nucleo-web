import React from "react";

interface TextProps {
  isBlack: boolean;
  children: any;
}

export const BaseText = (props: TextProps) => {
  return (
    <p
      className={`text-2xl font-semibold max-w-[441px] ${
        props.isBlack == true ? "text-text-primary" : "text-text-footer"
      }`}
    >
      {props.children}
    </p>
  );
};

export default BaseText;
