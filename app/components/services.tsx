"use client";

import { Element } from "react-scroll";
import { motion } from "framer-motion";

import { servicesInfos } from "@/constants/services";
import { cn } from "@/lib/utils";
import { ServicesBox } from "./services-box";
import { recoleta, barlow } from "@/lib/fonts";
import {
    containerAnimation,
    tagAnimation,
    titleAnimation,
} from "@/constants/framer/services-animation";

export const Services = () => {
    return (
        <section className="w-full px-6 mb-12 md:px-16 md:mb-24 lg:mb-36 lg:container lg:mx-auto">
            <Element name="services">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={containerAnimation}
                    className="w-full flex flex-col items-center"
                >
                    <motion.div
                        variants={tagAnimation}
                        className={cn(
                            barlow.className,
                            "bg-white text-[#537188] text-sm font-medium rounded-full px-4 py-1 mb-4",
                        )}
                    >
                        Nossos Serviços
                    </motion.div>

                    <motion.h2
                        variants={titleAnimation}
                        className={cn(
                            "text-3xl font-medium text-center text-gray-800 mb-12 relative z-10 md:text-4xl md:max-w-lg",
                            "after:content-[''] after:block after:bg-services-illustration after:bg-no-repeat after:bg-contain after:w-16 after:h-24 after:absolute after:bottom-2/3 after:right-0 z-0",
                            recoleta.className,
                        )}
                    >
                        Nossos Cuidados Especializados para Seu Pet
                    </motion.h2>

                    <motion.div
                        variants={containerAnimation}
                        className="w-full flex flex-col items-center gap-16 lg:flex-row lg:justify-between"
                    >
                        {servicesInfos.map((service) => (
                            <ServicesBox
                                key={service.imageUrl}
                                imageUrl={service.imageUrl}
                                title={service.title}
                                desc={service.desc}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </Element>
        </section>
    );
};
