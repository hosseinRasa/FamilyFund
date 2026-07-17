"use client";

import { Carousel } from "antd";
import Image from "next/image";

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
              src={src}
              alt="slide"
              fill
              className="object-cover  "
            />
          </div>
        ))}
      </Carousel>
  );
}
