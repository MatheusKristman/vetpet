"use client";

import Image from "next/image";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Barlow } from "next/font/google";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    weight: ["500", "600"],
});

const isMobilePhone =
    /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/;

const contactSchema = z.object({
    name: z.string().min(5, "Nome precisa ter no mínimo 5 caracteres"),
    cel: z.string().refine((value) => isMobilePhone.test(value), {
        message: "Celular inválido",
    }),
    email: z
        .string()
        .min(1, { message: "E-mail é obrigatório" })
        .email({ message: "E-mail inválido" }),
    message: z.string().min(100, { message: "Mensagem precisa ter no mínimo 100 caracteres" }),
});

export const Contact = () => {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            cel: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof contactSchema>) {
        console.log(values);
    }

    return (
        <section className="w-full px-6 mb-12 md:px-16 md:mb-24 lg:container lg:mx-auto">
            <div className="w-full bg-[#537188] rounded-3xl p-6 flex flex-col gap-y-12 shadow-lg sm:p-12 lg:flex-row lg:justify-between lg:gap-x-12">
                <div className="w-full flex flex-col gap-y-6 max-w-xl">
                    <h2 className="text-3xl text-white font-medium">
                        Entre em Contato - Estamos Aqui para Você e Seu Pet
                    </h2>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="mb-4">
                                        <FormLabel
                                            className={cn(
                                                barlow.className,
                                                "text-lg text-white font-medium",
                                            )}
                                        >
                                            Nome
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Digite seu nome"
                                                {...field}
                                                className="bg-[#3A5162] border-0 outline-none focus-visible:outline-none text-base text-white"
                                            />
                                        </FormControl>

                                        <FormMessage
                                            className={cn(
                                                barlow.className,
                                                "text-base text-[#FF9292]",
                                            )}
                                        />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="cel"
                                render={({ field }) => (
                                    <FormItem className="mb-4">
                                        <FormLabel
                                            className={cn(
                                                barlow.className,
                                                "text-lg text-white font-medium",
                                            )}
                                        >
                                            Celular
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Digite seu celular"
                                                {...field}
                                                className="bg-[#3A5162] border-0 outline-none focus-visible:outline-none text-base text-white"
                                            />
                                        </FormControl>

                                        <FormMessage
                                            className={cn(
                                                barlow.className,
                                                "text-base text-[#FF9292]",
                                            )}
                                        />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="mb-4">
                                        <FormLabel
                                            className={cn(
                                                barlow.className,
                                                "text-lg text-white font-medium",
                                            )}
                                        >
                                            E-mail
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Digite seu e-mail"
                                                {...field}
                                                className="bg-[#3A5162] border-0 outline-none focus-visible:outline-none text-base text-white"
                                            />
                                        </FormControl>

                                        <FormMessage
                                            className={cn(
                                                barlow.className,
                                                "text-base text-[#FF9292]",
                                            )}
                                        />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="mb-6">
                                        <FormLabel
                                            className={cn(
                                                barlow.className,
                                                "text-lg text-white font-medium",
                                            )}
                                        >
                                            Mensagem
                                        </FormLabel>

                                        <FormControl>
                                            <Textarea
                                                placeholder="Digite sua mensagem"
                                                {...field}
                                                className="resize-none bg-[#3A5162] border-0 outline-none focus-visible:outline-none text-base text-white"
                                            />
                                        </FormControl>

                                        <FormMessage
                                            className={cn(
                                                barlow.className,
                                                "text-base text-[#FF9292]",
                                            )}
                                        />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                variant="secondary"
                                className={cn(barlow.className, "text-base font-semibold")}
                            >
                                Enviar
                            </Button>
                        </form>
                    </Form>
                </div>

                <div className="w-full flex flex-col sm:flex-row lg:flex-col lg:w-fit">
                    <div className="relative w-full aspect-square sm:w-1/2 lg:w-[450px] lg:h-[400px]">
                        <Image
                            src="/images/contact-image.png"
                            alt="Entre em Contato"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <ul className="space-y-7 sm:w-1/2 sm:mt-4 lg:w-fit lg:mt-0">
                        <li className="flex items-center gap-x-2">
                            <Image
                                src="/images/check.svg"
                                alt="Atendimento Personalizado"
                                width="14"
                                height="14"
                                className="object-contain object-center"
                            />

                            <span
                                className={cn(barlow.className, "text-base font-medium text-white")}
                            >
                                Atendimento Personalizado
                            </span>
                        </li>

                        <li className="flex items-center gap-x-2">
                            <Image
                                src="/images/check.svg"
                                alt="Respostas Rápidas e Eficientes"
                                width="14"
                                height="14"
                                className="object-contain object-center"
                            />

                            <span
                                className={cn(barlow.className, "text-base font-medium text-white")}
                            >
                                Respostas Rápidas e Eficientes
                            </span>
                        </li>

                        <li className="flex items-center gap-x-2">
                            <Image
                                src="/images/check.svg"
                                alt="Comunicação Acessível"
                                width="14"
                                height="14"
                                className="object-contain object-center"
                            />

                            <span
                                className={cn(barlow.className, "text-base font-medium text-white")}
                            >
                                Comunicação Acessível
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
