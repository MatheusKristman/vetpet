import Image from "next/image";
import { Barlow } from "next/font/google";

import { cn } from "@/lib/utils";

const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    weight: ["600"],
});

export const Footer = () => {
    return (
        <footer className="w-full bg-orange-100">
            <div className="w-full flex flex-col px-6 md:px-16 lg:container lg:mx-auto">
                <div className="w-full flex flex-col items-center py-6 gap-y-6 border-b border-[#D0C5B4] md:flex-row md:justify-between">
                    <Image
                        src="/images/vetpet-logo.svg"
                        alt="VetPet"
                        width="200"
                        height="65"
                        className="object-contain"
                    />

                    <ul className="flex flex-col items-center gap-y-5 md:items-end lg:flex-row lg:gap-x-6">
                        <li className="flex items-center gap-x-2">
                            <div className="w-6 h-[2px] bg-[#537188] rounded-full md:hidden" />

                            <span
                                className={cn(
                                    barlow.className,
                                    "text-base font-semibold text-[#537188]"
                                )}
                            >
                                Quem Somos
                            </span>

                            <div className="w-6 h-[2px] bg-[#537188] rounded-full" />
                        </li>

                        <li className="flex items-center gap-x-2">
                            <div className="w-6 h-[2px] bg-[#537188] rounded-full md:hidden" />

                            <span
                                className={cn(
                                    barlow.className,
                                    "text-base font-semibold text-[#537188]"
                                )}
                            >
                                Nossos Serviços
                            </span>

                            <div className="w-6 h-[2px] bg-[#537188] rounded-full" />
                        </li>

                        <li className="flex items-center gap-x-2">
                            <div className="w-6 h-[2px] bg-[#537188] rounded-full md:hidden" />

                            <span
                                className={cn(
                                    barlow.className,
                                    "text-base font-semibold text-[#537188]"
                                )}
                            >
                                Perguntas Frequentes
                            </span>

                            <div className="w-6 h-[2px] bg-[#537188] rounded-full" />
                        </li>
                    </ul>
                </div>

                <div className="w-full flex flex-col items-center gap-y-4 py-6 lg:flex-row lg:justify-between">
                    <span
                        className={cn(
                            barlow.className,
                            "text-base font-semibold text-[#537188]"
                        )}
                    >
                        © Copyright - 2023
                    </span>

                    <Image
                        src="/images/mk-logo.svg"
                        alt="MKDev Solutions"
                        width="75"
                        height="30"
                        className="object-contain"
                    />

                    <ul className="flex flex-wrap items-center justify-between gap-x-4">
                        <li
                            className={cn(
                                barlow.className,
                                "text-base font-semibold text-[#537188]"
                            )}
                        >
                            Termos de Uso
                        </li>

                        <li
                            className={cn(
                                barlow.className,
                                "text-base font-semibold text-[#537188]"
                            )}
                        >
                            Política de privacidade
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
