"use client";

import { Barlow } from "next/font/google";
import { MessageSquareText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useHeaderStore from "@/stores/use-header-store";
import { containerAnimation } from "@/constants/framer/header-mobile-menu-animation";

const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    weight: "600",
});

export const HeaderMobileMenu = () => {
    const { isMenuOpen } = useHeaderStore();

    return (
        <>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={containerAnimation}
                        className="absolute top-[65px] right-0 bg-[#537188] p-6 rounded-bl-lg rounded-br-lg lg:hidden"
                    >
                        <ul className="flex flex-col items-center gap-y-2 mb-4">
                            <li className={cn(barlow.className, "text-white text-lg font-medium")}>
                                Quem Somos
                            </li>
                            <li className={cn(barlow.className, "text-white text-lg font-medium")}>
                                Nossos Serviços
                            </li>
                            <li className={cn(barlow.className, "text-white text-lg font-medium")}>
                                Perguntas Frequentes
                            </li>
                        </ul>

                        <Button
                            variant="secondary"
                            className={cn(
                                barlow.className,
                                "w-full flex items-center justify-center text-lg gap-x-2",
                            )}
                        >
                            Entre em contato
                            <MessageSquareText />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
