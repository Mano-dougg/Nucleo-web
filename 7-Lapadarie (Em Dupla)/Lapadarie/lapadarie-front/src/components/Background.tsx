import React, { useState } from "react";
import "../app/globals.css";

interface BackgroundProps {
  isVisible: boolean;
}

const Background: React.FC<BackgroundProps> = ({ isVisible }) => {
  if(!isVisible) return null;
  return (
    <div className="w-screen h-full bg-black bg-opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
  );
};

export default Background;
