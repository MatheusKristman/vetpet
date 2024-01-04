"use client";

import { MessageSquareText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useHeaderStore from "@/stores/use-header-store";
import { containerAnimation } from "@/constants/framer/header-mobile-menu-animation";
import { barlow } from "@/lib/fonts";

export const HeaderMobileMenu = () => {
    const { isMenuOpen, closeMenu } = useHeaderStore();

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
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy
                                    smooth
                                    offset={-100}
                                    duration={500}
                                    onSetActive={closeMenu}
                                >
                                    Quem Somos
                                </Link>
                            </li>
                            <li className={cn(barlow.className, "text-white text-lg font-medium")}>
                                <Link
                                    activeClass="active"
                                    to="services"
                                    spy
                                    smooth
                                    offset={-100}
                                    duration={500}
                                    onSetActive={closeMenu}
                                >
                                    Nossos Serviços
                                </Link>
                            </li>
                            <li className={cn(barlow.className, "text-white text-lg font-medium")}>
                                <Link
                                    activeClass="active"
                                    to="faq"
                                    spy
                                    smooth
                                    offset={-100}
                                    duration={500}
                                    onSetActive={closeMenu}
                                >
                                    Perguntas Frequentes
                                </Link>
                            </li>
                        </ul>

                        <Button
                            variant="secondary"
                            className={cn(
                                "w-full flex items-center justify-center text-lg gap-x-2",
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
                                onSetActive={closeMenu}
                            >
                                Entre em contato
                                <MessageSquareText />
                            </Link>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
