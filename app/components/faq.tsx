import { Barlow } from "next/font/google";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/constants/faq";
import { cn } from "@/lib/utils";

const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600"],
});

export const FAQ = () => {
    return (
        <section className="w-full px-6 mb-12 flex flex-col-reverse items-center gap-y-12 md:px-16 lg:container lg:mx-auto lg:flex-row lg:justify-between lg:items-start lg:gap-x-12">
            <Accordion
                type="single"
                collapsible
                className="rounded-2xl overflow-hidden shadow-lg w-full"
            >
                {faqs.map((faq) => (
                    <AccordionItem value={`item-${faq.id}`} key={faq.id} className="bg-white ">
                        <AccordionTrigger
                            className={cn(
                                barlow.className,
                                "text-gray-800 font-semibold text-base text-left hover:no-underline px-6 py-5",
                            )}
                        >
                            {faq.question}
                        </AccordionTrigger>

                        <AccordionContent className="bg-[#FAFAFA] border-l-[5px] border-[#537188] px-6 py-5">
                            {faq.button ? (
                                <div className="flex flex-col gap-y-4">
                                    <p
                                        className={cn(
                                            barlow.className,
                                            "text-base text-[#537188] font-normal",
                                        )}
                                    >
                                        {faq.answer}
                                    </p>

                                    <Button
                                        className={cn(
                                            barlow.className,
                                            "w-full font-semibold text-base",
                                        )}
                                    >
                                        {faq.button}
                                    </Button>
                                </div>
                            ) : (
                                <p
                                    className={cn(
                                        barlow.className,
                                        "text-base text-[#537188] font-normal",
                                    )}
                                >
                                    {faq.answer}
                                </p>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <h2 className="text-3xl font-medium text-center text-gray-800 md:text-4xl lg:max-w-md lg:text-right">
                Perguntas Frequentes: Seu Guia para Entender Melhor os Nossos Serviços
            </h2>
        </section>
    );
};
