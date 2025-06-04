import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input
    className={`border border-gray-300 rounded px-3 py-2 outline-none focus:ring focus:border-black ${className || ""}`}
    {...props}
  />
);
