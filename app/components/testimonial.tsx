"use client";

import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { testimonials } from "@/constants/testimonials";
import { recoleta, barlow } from "@/lib/fonts";

export const Testimonial = () => {
    return (
        <section className="w-full px-6 mb-12 flex flex-col items-center md:px-16 md:mb-24 lg:container lg:mx-auto lg:mb-36">
            <span
                className={cn(
                    barlow.className,
                    "bg-white text-[#537188] text-sm font-medium rounded-full px-4 py-1 mb-6",
                )}
            >
                Depoimentos de clientes
            </span>

            <Carousel className="w-full">
                <CarouselContent>
                    {testimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.name}>
                            <div className="flex flex-col items-center gap-y-9">
                                <Image
                                    src="/images/testimonial-quote.svg"
                                    alt="Depoimento"
                                    width="100"
                                    height="100"
                                    className="object-contain object-center"
                                />

                                <p
                                    className={cn(
                                        recoleta.className,
                                        "text-2xl font-normal text-center text-gray-800 md:text-3xl",
                                    )}
                                >
                                    {testimonial.desc}
                                </p>

                                <div className="w-full flex flex-col items-center gap-y-4">
                                    <div className="relative w-16 min-w-16 max-w-16 h-16 min-h-16 max-h-16 overflow-hidden rounded-full">
                                        <Image
                                            src={testimonial.image}
                                            alt="Testemunho"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>

                                    <span
                                        className={cn(
                                            barlow.className,
                                            "text-base font-semibold text-[#537188] text-center",
                                        )}
                                    >
                                        {testimonial.name}
                                    </span>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="hidden lg:inline-flex bg-white text-[#537188] border-[#537188] shadow-md" />
                <CarouselPrevious className="hidden lg:inline-flex bg-white text-[#537188] border-[#537188] shadow-md" />
            </Carousel>
        </section>
    );
};
