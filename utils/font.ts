import localFont from "next/font/local";

export const yekan = localFont({
  src: [
    {
      path: "../fonts/yekan/Yekan.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  display: "swap",
});
