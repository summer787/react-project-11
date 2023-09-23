function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      opacity={0.6}
    >
      <g opacity="0.997">
        <path fill="rgba(255,255,255,0)" d="M0 0h28v28H0z" />
        <g fill="none" stroke="#fff" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M18.688 19.574l4.813 4.89"
          />
          <g transform="translate(4 4)">
            <circle cx="9" cy="9" r="9" stroke="none" />
            <circle cx="9" cy="9" r="8.25" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SearchIcon;
