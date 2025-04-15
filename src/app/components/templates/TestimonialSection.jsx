"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import TestimonialCard from "../molecules/TestimonialCard";

export default function TestimonialSection() {
    return (
        <div className="w-full h-auto bg-fuchsia-100 py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-10 text-center">
                What other users say
            </h1>

            <div className="px-5">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <TestimonialCard
                            name="Jane Doe"
                            role="Senior Designer"
                            image="pic4.png"
                            title="Placerat feugiat senectus"
                            description="Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies."
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <TestimonialCard
                            name="John Smith"
                            role="Software Engineer"
                            image="pic5.png"
                            title="Amet vel convallis"
                            description="Velit purus egestas tellus phasellus. Mattis eget sed sit risus semper. Tellus natoque et sed tortor, amet, egestas."
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <TestimonialCard
                            name="Emily Johnson"
                            role="Product Manager"
                            image="pic6.png"
                            title="In ultrices eu"
                            description="Mi in quam eu accumsan orci. Eu, bibendum in tellus consequat, turpis. Amet, quis orci egestas arcu."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard
                            name="John Smith"
                            role="Product Manager"
                            image="pic7.png"
                            title="Vestibulum ante ipsum"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ex at diam tincidunt vehicula vel ac sapien."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard
                            name="Lia Kim"
                            role="UX Researcher"
                            image="pic6.png"
                            title="Tellus, elit blandit"
                            description="Morbi quis libero nec justo efficitur fermentum. Pellentesque habitant morbi tristique senectus et netus."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard
                            name="Carlos Rivera"
                            role="Software Engineer"
                            image="pic5.png"
                            title="Purus sit amet volutpat"
                            description="Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, at maximus orci sapien in nisi."
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
