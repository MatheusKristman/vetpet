"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { recoleta, barlow } from "@/lib/fonts";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    imageAnimation,
    infoContainerAnimation,
    infoAnimation,
} from "@/constants/framer/hero-animation";

export const Hero = () => {
    return (
        <main className="w-full px-6 pt-6 overflow-y-hidden md:px-16 md:pt-12 lg:container lg:mx-auto lg:pt-36">
            <div className="w-full flex flex-col items-center gap-y-12 lg:flex-row lg:items-start">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={infoContainerAnimation}
                    className="w-full flex flex-col items-center lg:items-start lg:pb-12"
                >
                    <motion.h1
                        variants={infoAnimation}
                        className={cn(
                            recoleta.className,
                            "text-5xl font-medium text-gray-800 mb-4 text-center md:text-6xl lg:text-left lg:max-w-[500px]",
                        )}
                    >
                        Cuidado Especial para Seu Melhor Amigo
                    </motion.h1>

                    <motion.p
                        variants={infoAnimation}
                        className={cn(
                            "text-base font-medium text-[#5F7081] mb-6 text-center lg:text-left lg:max-w-[500px]",
                            barlow.className,
                        )}
                    >
                        Apaixonados por animais, comprometidos com a saúde. Oferecemos serviços
                        veterinários de alta qualidade, combinando conhecimento técnico avançado com
                        um toque pessoal que faz toda a diferença.
                    </motion.p>

                    <motion.div variants={infoAnimation}>
                        <Button
                            className={cn(
                                "text-lg font-semibold text-white flex items-center gap-x-2 cursor-pointer",
                                barlow.className,
                            )}
                            asChild
                        >
                            <Link
                                activeClass="active"
                                to="contact"
                                spy
                                smooth
                                offset={-100}
                                duration={500}
                            >
                                Faça seu agendamento
                                <ArrowRight />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={imageAnimation}
                    className="w-full self-end flex justify-center"
                >
                    <Image
                        src="/images/hero-image.png"
                        alt="Pet"
                        width={650}
                        height={570}
                        className="object-contain"
                    />
                </motion.div>
            </div>
        </main>
    );
};
