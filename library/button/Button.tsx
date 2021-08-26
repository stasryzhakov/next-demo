import { Button } from "antd";
import React, { FC } from "react";

import { ButtonProps } from "antd";

export type ButtonSize = "small" | "medium" | "large";

export type MyButtonProps = ButtonProps & { size: ButtonSize };

export const MyButton: FC<MyButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
