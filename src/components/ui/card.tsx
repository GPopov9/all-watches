import React from "react";
import classNames from "classnames";

export const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={classNames("border rounded-lg bg-white", className)}>{children}</div>
);

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={classNames("p-4", className)}>{children}</div>
);
