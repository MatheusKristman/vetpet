"use client";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { barlow } from "@/lib/fonts";

export const Footer = () => {
    const pathname = usePathname();

    function scrollToTop() {
        scroll.scrollToTop();
    }

    return (
        <footer className="w-full bg-orange-100">
            <div className="w-full flex flex-col px-6 md:px-16 lg:container lg:mx-auto">
                <div className="w-full flex flex-col items-center py-6 gap-y-6 border-b border-[#D0C5B4] md:flex-row md:justify-between">
                    <Image
                        src="/images/vetpet-logo.svg"
                        alt="VetPet"
                        width="200"
                        height="65"
                        className="object-contain cursor-pointer"
                        onClick={scrollToTop}
                    />

                    <ul className="flex flex-col items-center gap-y-5 md:items-end lg:flex-row lg:gap-x-6">
                        {pathname === "/termos-de-uso" ||
                        pathname === "/politica-de-privacidade" ? (
                            <li className="flex items-center gap-x-2 group lg:justify-end">
                                <div className="w-6 h-[2px] bg-[#537188] rounded-full transition-all md:hidden group-hover:w-9" />

                                <Link
                                    href="/"
                                    className={cn(
                                        barlow.className,
                                        "text-base font-semibold text-[#537188] cursor-pointer",
                                    )}
                                >
                                    Voltar para início
                                </Link>

                                <div className="w-6 h-[2px] bg-[#537188] rounded-full transition-all group-hover:w-9" />
                            </li>
                        ) : (
                            <>
                                <li className="flex items-center gap-x-2 group lg:w-[146px] lg:justify-end">
                                    <div className="w-6 h-[2px] bg-[#537188] rounded-full transition-all md:hidden group-hover:w-9" />

                                    <ScrollLink
                                        activeClass="active"
                                        to="about"
                                        spy
                                        smooth
                                        offset={-100}
                                        duration={500}
                                        className={cn(
                                            barlow.className,
                                            "text-base font-semibold text-[#537188] cursor-pointer",
                                        )}
                                    >
                                        Quem Somos
                                    </ScrollLink>

                                    <div className="w-6 h-[2px] bg-[#537188] rounded-full transition-all group-hover:w-9" />
                                </li>

                                <li className="flex items-center gap-x-2 group lg:w-[171px] lg:justify-end">
                                    <div className="w-6 h-[2px] bg-[#537188] rounded-full transition-all md:hidden group-hover:w-9" />

                                    <ScrollLink
                                        activeClass="active"
                                        to="services"
                                        spy
                                        smooth
                                        offset={-100}
                                        duration={500}
                                        className={cn(
                                            barlow.className,
                                            "text-base font-semibold text-[#537188] cursor-pointer",
                                        )}
                                    >
                                        Nossos Serviços
                                    </ScrollLink>

                                    <div className="w-6 h-[2px] bg-[#537188] rounded-full transition-all group-hover:w-9" />
                                </li>

                                <li className="flex items-center gap-x-2 group lg:w-[210px] lg:justify-end">
                                    <div className="w-6 h-[2px] bg-[#537188] rounded-full transition-all md:hidden group-hover:w-9" />

                                    <ScrollLink
                                        activeClass="active"
                                        to="faq"
                                        spy
                                        smooth
                                        offset={-100}
                                        duration={500}
                                        className={cn(
                                            barlow.className,
                                            "text-base font-semibold text-[#537188] cursor-pointer",
                                        )}
                                    >
                                        Perguntas Frequentes
                                    </ScrollLink>

                                    <div className="w-6 h-[2px] bg-[#537188] rounded-full transition-all group-hover:w-9" />
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <div className="w-full flex flex-col items-center gap-y-4 py-6 lg:flex-row lg:justify-between">
                    <span
                        className={cn(barlow.className, "text-base font-semibold text-[#537188]")}
                    >
                        © Copyright - 2023
                    </span>

                    <a
                        href="https://www.mkdevsolutions.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Image
                            src="/images/mk-logo.svg"
                            alt="MKDev Solutions"
                            width="75"
                            height="30"
                            className="object-contain"
                        />
                    </a>

                    <ul className="flex flex-wrap items-center justify-between gap-x-4">
                        <li
                            className={cn(
                                barlow.className,
                                "text-base font-semibold text-[#537188]",
                            )}
                        >
                            <Link href="/termos-de-uso">Termos de Uso</Link>
                        </li>

                        <li
                            className={cn(
                                barlow.className,
                                "text-base font-semibold text-[#537188]",
                            )}
                        >
                            <Link href="/politica-de-privacidade">Política de privacidade</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
