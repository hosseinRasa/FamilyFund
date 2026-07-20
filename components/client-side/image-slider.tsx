"use client";

// import { Carousel } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image";

const Carousel = dynamic(() => import("antd").then((mod) => mod.Carousel), {
  ssr: false,
  loading: () => (
    <div className="relative md:h-70 h-50 bg-gray-200 animate-pulse text-green-600 grid place-content-center">
      {" "}
      سامانه قرض السحنه رسا
      <br />
      <small className="text-center">در حال بارگزاری...</small>
    </div>
  ),
});
export default function ImageSlider() {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  return (
    <Carousel autoplay>
      {images.map((src) => (
        <div key={src} className="relative md:h-70 h-50 ">
          <Image
            fill
            src={src}
            alt="slide"
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      ))}
    </Carousel>
  );
}
