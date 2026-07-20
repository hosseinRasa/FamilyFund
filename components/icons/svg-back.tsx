import * as React from "react";
import type { SVGProps } from "react";
const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <path
      fill="#2F88FF"
      fillRule="evenodd"
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M44 40.836q-7.34-8.96-13.036-10.168t-10.846-.365V41L4 23.545 20.118 7v10.167q9.523.075 16.192 6.833 6.668 6.758 7.69 16.836Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBack;
