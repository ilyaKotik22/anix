import type { ComponentPropsWithoutRef, ElementType } from "react";
import style from "./MyButton.module.css";
type ButtonProps<C extends ElementType = "button"> = {
  as?: C;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  content: string;
} & ComponentPropsWithoutRef<C>;

const MyButton = ({
  as,
  disabled,
  className,
  content,
  onClick,
}: ButtonProps) => {
  const Comp = as || "button";
  return (
    <Comp
      disabled={disabled || false}
      onClick={onClick}
      className={`${style.Mybutton} ${className} `}
    >
      {content}
    </Comp>
  );
};

export default MyButton;
