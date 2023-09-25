import React from "react";
// import {useContext} from "react";
// import IconColorContext from "@/context/IconColorContext";

function FacebookIcon() {
  // const { iconColor, changeHoverColor } = useContext(IconColorContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52px"
      height="52px"
      viewBox="0 0 42 42"
      // onMouseEnter={() =>
      //   changeHoverColor({ ...iconColor, facebook: ["0.33", "0.51"] })
      // }
      // onMouseLeave={() =>
      //   changeHoverColor({ ...iconColor, facebook: ["0.13", "0.31"] })
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
        d="M1.822-5.592v2.58h4.085L5.37 1.18H1.822v10.21h-4.3V1.18h-3.439v-4.192h3.439v-3.654c0-6.234 8.384-4.514 8.384-4.514v3.654h-2.15A1.794 1.794 0 001.82-5.591"
        transform="matrix(1.17 0 0 1.17 21 21) translate(.23 .23)"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default FacebookIcon;
