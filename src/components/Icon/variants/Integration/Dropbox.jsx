import * as React from "react";
const SvgDropbox = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={14} fill="#0F287F" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 8L6 11L11 14L6 17L11 20L16 17L21 20L26 17L21 14L26 11L21 8L16 11L11 8ZM16 11L21 14L16 17L11 14L16 11Z"
      fill="#DAF8FE"
    />
    <path d="M11 22L16 19L21 22L16 25L11 22Z" fill="#DAF8FE" />
  </svg>
);
export default SvgDropbox;
