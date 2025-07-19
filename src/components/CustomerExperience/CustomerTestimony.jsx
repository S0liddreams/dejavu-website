"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: `I had less than 24 hours to settle into my new condo before starting a new job. The Dejavu Move-In-Out team was a lifesaver—efficient, respectful, and unbelievably fast. I came back to a fully set-up home with every detail in place.`,
    name: "Sophia Carter",
    service: "Furniture Assembly",
    image: "/images/customer 1.png",
  },
  {
    text: `They helped me relocate and even helped unpack. Everything was smooth and organized.`,
    name: "Daniel Blake",
    service: "Relocation",
    image: "/images/customer 2.jpg",
  },
  {
    text: `My kitchen setup was overwhelming, but Dejavu made it seamless.`,
    name: "Amaka Okafor",
    service: "Kitchen Setup",
    image: "/images/customer 3.jpg",
  },
  {
    text: `The team was courteous, clean, and did all the heavy lifting!`,
    name: "Michael Lee",
    service: "Heavy Lifting",
    image: "/images/customer 2.jpg",
  },
  {
    text: `They arranged everything in the apartment with aesthetics in mind.`,
    name: "Fatima Yusuf",
    service: "Home Arrangement",
    image: "/images/customer 3.jpg",
  },
  {
    text: `Honestly, the easiest move I've ever had. Very professional!`,
    name: "Tunde Onabanjo",
    service: "Full Move-In",
    image: "/images/customer 1.png",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="lg:w-full ">
    <div className="lg:w-full   lg:min-h-[194px] bg-[#E6EEF6] rounded-[16px] lg:px-[20px] p-[10px] xl:p-[20px]">
      <div className="lg:h-full lg:mt-[32px] flex flex-row gap-[10px] justify-between lg:items-center">
        <div className="flex flex-col justify-between gap-[20px] w-[240px] md:w-[800px] xl:w-[682px]">
          <p className="lg:text-[14px] lg:w-full xl:w-[510px]  ">{testimonial.text}</p>
          <div className="lg:h-[42px]">
            <p className="lg:text-[16px] font-semibold text-[#171717]">
              {testimonial.name}
            </p>
            <p className="lg:text-[12px] text-[#525252]">
              {testimonial.service}
            </p>
          </div>
        </div>
        <div className="lg:w-[520px] md:w-[400px]  items-center lg:h-full flex justify-center">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            className="lg:w-[120px] lg:h-[120px] hidden lg:block rounded-[100%]"
            width={120}
            height={120}
          />
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            className="lg:hidden rounded-[100%] w-[80px] h-[80px]"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  </div>
);

const CustomerTestimony = () => {
  // Group testimonials into sets of 3
  const chunked = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    chunked.push(testimonials.slice(i, i + 3));
  }

  return (
    <div className=" lg:h-full lg:w-full min-w-[300px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {chunked.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="space-y-6 ">
              {group.map((testimonial, idx) => (
                <TestimonialCard key={idx} testimonial={testimonial} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerTestimony;
