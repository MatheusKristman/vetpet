"use client";

import Image from "next/image";
import { AlignJustify, MessageSquareText, X } from "lucide-react";
import { Barlow } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useHeaderStore from "@/stores/use-header-store";

const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    weight: "600",
});

export const Header = () => {
    const { isMenuOpen, openMenu, closeMenu } = useHeaderStore();

    function handleMenu() {
        if (isMenuOpen) {
            closeMenu();
            return;
        }

        openMenu();
    }

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

                <ul className="hidden lg:flex items-center gap-x-12">
                    <li className={cn(barlow.className)}>Quem Somos</li>
                    <li className={cn(barlow.className)}>Nossos Serviços</li>
                    <li className={cn(barlow.className)}>Perguntas Frequentes</li>
                </ul>

                <Button
                    className={cn(
                        "hidden lg:flex items-center justify-center gap-x-2",
                        barlow.className,
                    )}
                >
                    Entre em contato
                    <MessageSquareText />
                </Button>

                <Button className="lg:hidden" onClick={handleMenu}>
                    {isMenuOpen ? <X /> : <AlignJustify />}
                </Button>
            </div>
        </header>
    );
};
