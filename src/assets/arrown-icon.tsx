import React from "react";
import { Props } from "./type";

const ArrownIcon = ({ height = "9px", width = "15px", className }: Props) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 7 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.794164 9.3984L5.46545 4.99966L0.794164 0.601601C0.659664 0.474959 0.647377 0.256777 0.766358 0.11637C0.884693 -0.0261023 1.08838 -0.0398678 1.22224 0.0867742L6.1677 4.74224C6.30608 4.87301 6.30608 5.12699 6.1677 5.25707L1.22224 9.91323C1.08838 10.0399 0.884693 10.0261 0.766358 9.88363C0.711394 9.81824 0.684882 9.73703 0.684882 9.65581C0.684882 9.56083 0.721741 9.46654 0.794164 9.3984Z"
          fill="#888888"
        />
      </svg>
    </>
  );
};

export default ArrownIcon;
