import React from "react";
import { Props } from "./type";

export const ArrowLeft = ({
  height = "20px",
  width = "40px",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7739 21.8231C18.1237 21.3957 18.0607 20.7657 17.6332 20.416L7.57915 12.1899L17.6332 3.96387C18.0607 3.61414 18.1237 2.98412 17.7739 2.55667C17.4242 2.12923 16.7942 2.06623 16.3667 2.41595L5.36673 11.416C5.1346 11.6059 4.99997 11.89 4.99997 12.1899C4.99997 12.4898 5.1346 12.7739 5.36673 12.9639L16.3667 21.9639C16.7942 22.3136 17.4242 22.2506 17.7739 21.8231Z"
        fill="black"
      />
    </svg>
  );
};
