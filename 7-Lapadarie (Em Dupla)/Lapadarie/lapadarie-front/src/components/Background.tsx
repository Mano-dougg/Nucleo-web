import React, { useState } from "react";
import "../app/globals.css";

interface BackgroundProps {
  // onCancel: () => void;
  // onSend: (name: string, breadAmount: string) => void; // Update to accept parameters
}

const Background: React.FC<BackgroundProps> = ({}) => {
  return (
    <div className="w-screen h-full bg-black bg-opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
  );
};

export default Background;
