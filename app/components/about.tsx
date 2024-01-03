import Image from "next/image";
import { Barlow } from "next/font/google";

import { cn } from "@/lib/utils";

const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    weight: "500",
});

export const About = () => {
    return (
        <section className="w-full px-6 md:px-16 lg:container lg:mx-auto">
            <div className="bg-orange-100 rounded-3xl w-full flex items-center p-12 shadow-lg mb-12 lg:p-0 md:mb-24">
                <div className="hidden lg:flex">
                    <Image
                        src="/images/about-image.png"
                        alt="Comprometimento com a Saúde e Felicidade Animal"
                        height={435}
                        width={393}
                        className="object-contain"
                    />
                </div>

                <div className="w-full flex flex-col items-center gap-y-4 lg:p-12 lg:w-2/3">
                    <h2 className="text-3xl font-medium text-gray-800 text-center md:text-4xl">
                        Comprometimento com a Saúde e Felicidade Animal
                    </h2>

                    <p
                        className={cn(
                            barlow.className,
                            "text-base font-medium text-gray-800/80 text-center",
                        )}
                    >
                        Na VetPet, transformamos a saúde dos pets em alegres narrativas. Com uma
                        equipe dedicada, oferecemos cuidados personalizados, focando no bem-estar.
                        Fortalecemos laços entre você e seu amigo peludo, com serviços veterinários
                        de qualidade. Seja para check-ups, tratamentos ou emergências, estamos aqui
                        para cada pata. Descubra na VetPet uma abordagem calorosa e compassiva, onde
                        a saúde encontra a felicidade, e cada história de pata é uma história feliz.
                    </p>
                </div>
            </div>
        </section>
    );
};
