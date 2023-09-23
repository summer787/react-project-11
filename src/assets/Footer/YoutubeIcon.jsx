import React from "react";
// import  { useContext } from "react";
// import IconColorContext from "@/context/IconColorContext";

function YoutubeIcon() {
  // const { iconColor, changeHoverColor } = useContext(IconColorContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52px"
      height="52px"
      viewBox="0 0 42 42"
      // onMouseEnter={() =>
      //   changeHoverColor({ ...iconColor, youtube: ["0.33", "0.51"] })
      // }
      // onMouseLeave={() =>
      //   changeHoverColor({ ...iconColor, youtube: ["0.13", "0.31"] })
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
        d="M10.719-5.388a2.8 2.8 0 00-1.978-1.978c-1.745-.468-8.743-.468-8.743-.468s-7 0-8.743.468a2.8 2.8 0 00-1.978 1.978 31.26 31.26 0 000 10.772 2.8 2.8 0 001.982 1.978c1.745.468 8.743.468 8.743.468s7 0 8.743-.468a2.8 2.8 0 001.978-1.978 31.263 31.263 0 000-10.772zm-12.96 8.743v-6.714L3.572-.002z"
        transform="matrix(1.17 0 0 1.17 21 21) translate(-.1 -.1)"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default YoutubeIcon;
