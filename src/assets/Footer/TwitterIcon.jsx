import React from "react";
// import  { useContext } from "react";
// import IconColorContext from "@/context/IconColorContext";

function TwitterIcon() {
  // const { iconColor, changeHoverColor } = useContext(IconColorContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52px"
      height="52px"
      viewBox="0 0 42 42"
      // onMouseEnter={() =>
      //   changeHoverColor({ ...iconColor, twitter: ["0.33", "0.51"] })
      // }
      // onMouseLeave={() =>
      //   changeHoverColor({ ...iconColor, twitter: ["0.13", "0.31"] })
      // }
    >
      <rect
        width="42"
        height="42"
        x="-21"
        y="-21"
        fill="#FFF"
        rx="0"
        ry="0"
        transform="translate(21 21)"
        vectorEffect="non-scaling-stroke"
        visibility="hidden"
      />
      <rect
        width="36"
        height="36"
        x="-18"
        y="-18"
        fill="#FFF"
        fillOpacity="0.13"
        rx="18"
        ry="18"
        transform="matrix(1.17 0 0 1.17 21 21)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFF"
        fillOpacity="0.31"
        d="M-4.16 9.118A13 13 0 008.929-3.973c0-.2 0-.4-.013-.594a9.311 9.311 0 002.294-2.382 9.232 9.232 0 01-2.64.724 4.627 4.627 0 002.023-2.545 9.277 9.277 0 01-2.922 1.118A4.6 4.6 0 00-.287-4.507c0 .353.04.706.118 1.05a13.071 13.071 0 01-9.483-4.807 4.6 4.6 0 001.426 6.141 4.567 4.567 0 01-2.085-.576v.059a4.6 4.6 0 003.69 4.51 4.547 4.547 0 01-2.076.077 4.607 4.607 0 004.3 3.2 9.289 9.289 0 01-6.811 1.9 13.011 13.011 0 007.052 2.068"
        transform="matrix(1.17 0 0 1.17 21 21) translate(1.19 -.07)"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default TwitterIcon;
