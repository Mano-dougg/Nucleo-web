import "./Button.css"
import React from "react"

interface ButtonProps {
    text: string;
    color: string;
    textColor: string;
    width: string;
    height: string;
    padding: string;
    gap: string;
    borderRadius: string;
    borderColor: string;
    borderWidth: string;
    borderStyle: string;
    opacity: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  }
  
  export const Button: React.FC<ButtonProps> = ({
    text,
    color,
    textColor,
    width,
    height,
    padding,
    gap,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    opacity,
    fontSize,
    fontWeight,
    lineHeight,
  }) => {
    const buttonStyle: React.CSSProperties = {
      backgroundColor: color,
      color: textColor,
      width,
      height,
      padding,
      gap,
      borderRadius,
      borderColor,
      borderWidth,
      borderStyle,
      opacity,
      fontSize,
      fontWeight,
      lineHeight,
    };
  
    return (
      <button className="button" style={buttonStyle}>
        {text}
      </button>
    );
  };