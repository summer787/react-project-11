import React from "react";
// import { useContext } from "react";
// import IconColorContext from "@/context/IconColorContext";

function InstagramIcon() {
  // const { iconColor, changeHoverColor } = useContext(IconColorContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52px"
      height="52px"
      viewBox="0 0 42 42"
      // onMouseEnter={() =>
      //   changeHoverColor({ ...iconColor, instagram: ["0.33", "0.51"] })
      // }
      // onMouseLeave={() =>
      //   changeHoverColor({ ...iconColor, instagram: ["0.13", "0.31"] })
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
      <g transform="matrix(1.17 0 0 1.17 21 21)">
        <rect
          className="iconBg"
          width="36"
          height="36"
          x="-18"
          y="-18"
          fill="#FFF"
          fillOpacity="0.13"
          rx="18"
          ry="18"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="iconLine"
          fill="#FFF"
          fillOpacity="0.31"
          d="M15.21 6.085c2.972 0 3.324.011 4.5.065a6.161 6.161 0 012.067.383 3.686 3.686 0 012.113 2.113c.245.662.375 1.361.383 2.067.054 1.174.065 1.526.065 4.5s-.011 3.324-.065 4.5a6.161 6.161 0 01-.383 2.067 3.686 3.686 0 01-2.113 2.113 6.161 6.161 0 01-2.067.383c-1.174.054-1.526.065-4.5.065s-3.324-.011-4.5-.065a6.161 6.161 0 01-2.067-.383A3.686 3.686 0 016.53 21.78a6.161 6.161 0 01-.383-2.067c-.054-1.174-.065-1.526-.065-4.5s.011-3.324.065-4.5a6.161 6.161 0 01.383-2.067 3.686 3.686 0 012.115-2.113 6.161 6.161 0 012.067-.383c1.174-.054 1.526-.065 4.5-.065m0-2.006c-3.023 0-3.4.013-4.589.067a8.17 8.17 0 00-2.7.517 5.692 5.692 0 00-3.26 3.256 8.17 8.17 0 00-.517 2.7c-.054 1.187-.067 1.566-.067 4.589 0 3.023.013 3.4.067 4.589a8.17 8.17 0 00.517 2.7 5.692 5.692 0 003.255 3.255 8.17 8.17 0 002.7.517c1.187.054 1.566.067 4.589.067 3.023 0 3.4-.013 4.589-.067a8.17 8.17 0 002.7-.517 5.692 5.692 0 003.261-3.252 8.17 8.17 0 00.517-2.7c.054-1.187.067-1.566.067-4.589 0-3.023-.013-3.4-.067-4.589a8.17 8.17 0 00-.517-2.7A5.692 5.692 0 0022.5 4.663a8.17 8.17 0 00-2.7-.517c-1.187-.054-1.566-.067-4.589-.067z"
          transform="translate(.19 .19) translate(-15.21 -15.21)"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="iconLine"
          fill="#FFF"
          fillOpacity="0.31"
          d="M131.809 126.635a5.174 5.174 0 100 10.348 5.174 5.174 0 000-10.348zm0 8.533a3.359 3.359 0 110-6.718 3.359 3.359 0 010 6.718z"
          transform="translate(.19 .19) translate(-131.81 -131.81)"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          className="iconLine"
          r="1.469"
          fill="#FFF"
          fillOpacity="0.31"
          transform="translate(6.05 -5.67)"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}

export default InstagramIcon;
