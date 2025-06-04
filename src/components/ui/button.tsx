import React from "react";
import classNames from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "link";
};

export const Button: React.FC<ButtonProps> = ({ children, className, variant = "default", ...props }) => {
  return (
    <button
      className={classNames(
        "inline-flex items-center justify-center font-medium transition rounded",
        {
          "bg-black text-white px-4 py-2 hover:opacity-90": variant === "default",
          "bg-transparent underline text-gold hover:text-yellow-600": variant === "link",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
