import React from "react";

interface TextProps {
  isBlack: boolean;
  children: any;
}

export const BaseText = (props: TextProps) => {
  return (
    <p
      className={`lg:text-2xl text-xl font-semibold max-w-[441px] flex gap-4 ${
        props.isBlack == true ? "text-text-primary" : "text-text-footer"
      }`}
    >
      {props.children}
    </p>
  );
};

export default BaseText;
