import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Barlow } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    weight: ["500", "600"],
});

export const Hero = () => {
    return (
        <main className="w-full px-6 pt-6 md:px-16 md:pt-12 lg:container lg:mx-auto lg:pt-36">
            <div className="w-full flex flex-col items-center gap-y-12 lg:flex-row lg:items-start">
                <div className="w-full flex flex-col items-center lg:items-start lg:pb-12">
                    <h1 className="text-5xl font-medium text-gray-800 mb-4 text-center md:text-6xl lg:text-left lg:max-w-[500px]">
                        Cuidado Especial para Seu Melhor Amigo
                    </h1>

                    <p
                        className={cn(
                            barlow.className,
                            "text-base font-medium text-[#5F7081] mb-6 text-center lg:text-left lg:max-w-[500px]",
                        )}
                    >
                        Apaixonados por animais, comprometidos com a saúde. Oferecemos serviços
                        veterinários de alta qualidade, combinando conhecimento técnico avançado com
                        um toque pessoal que faz toda a diferença.
                    </p>

                    <Button
                        className={cn(
                            barlow.className,
                            "text-large font-semibold text-white flex items-center gap-x-2",
                        )}
                    >
                        Faça seu agendamento
                        <ArrowRight />
                    </Button>
                </div>

                <div className="w-full self-end flex justify-center">
                    <Image
                        src="/images/hero-image.png"
                        alt="Pet"
                        width={650}
                        height={570}
                        className="object-contain"
                    />
                </div>
            </div>
        </main>
    );
};
