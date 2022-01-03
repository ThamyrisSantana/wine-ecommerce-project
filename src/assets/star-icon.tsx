import React from "react";
import { Props } from "./type";

const StarIcon = ({
  height = "16px",
  width = "17px",
  className,
  color = "#F9B950",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.45192 1.65912C7.76953 1.04304 8.68198 1.05077 8.9969 1.65912L10.7545 5.07215L14.6869 5.62121C15.3921 5.71917 15.6747 6.55179 15.1633 7.02869L12.3183 9.68383L12.9912 13.4345C13.1123 14.1125 12.3668 14.6178 11.7423 14.3033L8.22441 12.5323L4.70651 14.3033C4.08205 14.6203 3.3365 14.1125 3.45763 13.4345L4.13052 9.68383L1.28551 7.02869C0.774109 6.55179 1.05673 5.71917 1.76193 5.62121L5.69432 5.07215L7.45192 1.65912Z"
        fill={color}
      />
    </svg>
  );
};

export default StarIcon;
