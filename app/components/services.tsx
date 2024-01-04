import { Barlow } from "next/font/google";

import { servicesInfos } from "@/constants/services";
import { cn } from "@/lib/utils";
import { ServicesBox } from "./services-box";

const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500"],
});

export const Services = () => {
    return (
        <section className="w-full px-6 mb-12 flex flex-col items-center md:px-16 md:mb-24 lg:mb-36 lg:container lg:mx-auto">
            <div
                className={cn(
                    barlow.className,
                    "bg-white text-[#537188] text-sm font-medium rounded-full px-4 py-1 mb-4",
                )}
            >
                Nossos Serviços
            </div>

            <h2
                className={cn(
                    "text-3xl font-medium text-center text-gray-800 mb-12 relative z-10 md:text-4xl md:max-w-lg",
                    "after:content-[''] after:block after:bg-services-illustration after:bg-no-repeat after:bg-contain after:w-16 after:h-24 after:absolute after:bottom-2/3 after:right-0 z-0",
                )}
            >
                Nossos Cuidados Especializados para Seu Pet
            </h2>

            <div className="w-full flex flex-col items-center gap-16 lg:flex-row lg:justify-between">
                {servicesInfos.map((service) => (
                    <ServicesBox
                        key={service.imageUrl}
                        imageUrl={service.imageUrl}
                        title={service.title}
                        desc={service.desc}
                    />
                ))}
            </div>
        </section>
    );
};
