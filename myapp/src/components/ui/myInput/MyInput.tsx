import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactElement } from "react";
import style from "./MyInput.module.css";
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean | string;
  leftIcon?: string | ReactElement;
}

export const MyInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, leftIcon, error, ...props }, ref) => {
    return (
      <>
        <div
          style={{
            position: "absolute",
            left: "8.5vw",
            top: "30px",
            pointerEvents: "none",
          }}
        >
          {leftIcon}
        </div>
        <input
          ref={ref}
          className={`${style.MyInput} ${className}`}
          aria-invalid={!!error}
          {...props}
        />
      </>
    );
  },
);
