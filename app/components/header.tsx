"use client";

import Image from "next/image";
import Link from "next/link";
import { AlignJustify, ChevronLeft, MessageSquareText, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useHeaderStore from "@/stores/use-header-store";
import { recoleta, barlow } from "@/lib/fonts";

export const Header = () => {
    const pathname = usePathname();

    const { isMenuOpen, openMenu, closeMenu } = useHeaderStore();

    function handleMenu() {
        if (isMenuOpen) {
            closeMenu();
            return;
        }

        openMenu();
    }

    console.log(pathname);

    return (
        <header className="relative z-10 w-full bg-white border-b border-[#DDDDDD]">
            <div className="w-full flex items-center justify-between px-6 py-3 md:px-16 lg:container lg:mx-auto">
                <div className="relative w-24 h-10">
                    <Image
                        src="/images/vetpet-logo.svg"
                        alt="VetPet"
                        fill
                        className="object-contain"
                    />
                </div>

                <ul
                    className={cn(
                        pathname === "/termos-de-uso" || pathname === "/politica-de-privacidade"
                            ? "hidden"
                            : "hidden lg:flex items-center gap-x-12",
                    )}
                >
                    <li
                        className={cn(
                            barlow.className,
                            "font-semibold text-gray-800 cursor-pointer hover:text-[#537188] transition-colors",
                        )}
                    >
                        <ScrollLink
                            activeClass="active"
                            to="about"
                            spy
                            smooth
                            offset={-100}
                            duration={500}
                        >
                            Quem Somos
                        </ScrollLink>
                    </li>
                    <li
                        className={cn(
                            barlow.className,
                            "font-semibold text-gray-800 cursor-pointer hover:text-[#537188] transition-colors",
                        )}
                    >
                        <ScrollLink
                            activeClass="active"
                            to="services"
                            spy
                            smooth
                            offset={-100}
                            duration={500}
                        >
                            Nossos Serviços
                        </ScrollLink>
                    </li>
                    <li
                        className={cn(
                            barlow.className,
                            "font-semibold text-gray-800 cursor-pointer hover:text-[#537188] transition-colors",
                        )}
                    >
                        <ScrollLink
                            activeClass="active"
                            to="faq"
                            spy
                            smooth
                            offset={-100}
                            duration={500}
                        >
                            Perguntas Frequentes
                        </ScrollLink>
                    </li>
                </ul>

                <Button
                    className={cn(
                        pathname === "/termos-de-uso" || pathname === "/politica-de-privacidade"
                            ? "hidden"
                            : "hidden lg:flex items-center justify-center gap-x-2 text-base font-medium cursor-pointer",
                        barlow.className,
                    )}
                    asChild
                >
                    <ScrollLink
                        activeClass="active"
                        to="contact"
                        spy
                        smooth
                        offset={-100}
                        duration={500}
                    >
                        Entre em contato
                        <MessageSquareText />
                    </ScrollLink>
                </Button>

                <Button
                    className={cn(
                        pathname === "/termos-de-uso" || pathname === "/politica-de-privacidade"
                            ? "flex items-center justify-center gap-x-2 text-base font-medium cursor-pointer"
                            : "hidden",
                        barlow.className,
                    )}
                    asChild
                >
                    <Link href="/">
                        <ChevronLeft />
                        Voltar
                    </Link>
                </Button>

                <Button
                    className={cn(
                        pathname === "/termos-de-uso" || pathname === "/politica-de-privacidade"
                            ? "hidden"
                            : "lg:hidden",
                    )}
                    onClick={handleMenu}
                >
                    {isMenuOpen ? <X /> : <AlignJustify />}
                </Button>
            </div>
        </header>
    );
};
