"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ScrollScreen = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      image:
        "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
      name: "terry",
      tools: ["vscode", "react", "next.js", "javascript"],
      profession: "backend engineer",
    },
    {
      id: 2,
      image:
        "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
      name: "jessica",
      tools: ["vscode", "react", "next.js", "javascript"],
      profession: "frontend engineer",
    },
    {
      id: 3,
      image:
        "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
      name: "Fedora",
      tools: ["vscode", "react", "next.js", "javascript"],
      profession: "fullstck engineer",
    },
    {
      id: 4,
      image:
        "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
      name: "Sonia",
      tools: ["vscode", "react", "next.js", "javascript"],
      profession: "backend engineer",
    },
    {
      id: 5,
      image:
        "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
      name: "James",
      tools: ["vscode", "react", "next.js", "javascript"],
      profession: "backend engineer",
    },
    {
      id: 6,
      image:
        "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
      name: "David",
      tools: ["vscode", "react", "next.js", "javascript"],
      profession: "frontend engineer",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="slider-container w-full">
        <Slider {...settings}>
          {data?.map((props: any) => (
            <div key={props.id}>
              <section className="mx-2 h-[400px] overflow-hidden rounded-[25px] relative ">
                <video
                  autoPlay
                  loop
                  muted
                  src={props?.image}
                  className="w-full h-full bg-slate-300 object-cover"
                />
                <div className="w-full absolute h-full top-0 opacity-90 bg-gradient-to-b from-transparent from-60% to-black">
                  <div className="text-white absolute bottom-0 p-4">
                    <p className="text-[18px] font-bold uppercase">
                      {props?.name}
                    </p>
                    <p className="text-[12px]">{props?.profession}</p>
                    <div className="flex flex-wrap w-full gap-3 mt-4">
                      {props.tools.map((el: string, i: number) => (
                        <p
                          key={i}
                          className="border rounded-full px-4 py-2 text-[12px] font-semibold"
                        >
                          {el}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ScrollScreen;
