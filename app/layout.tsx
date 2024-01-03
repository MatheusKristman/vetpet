import type { Metadata } from "next";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

import "./globals.css";

const recoleta = localFont({
    src: [
        {
            path: "./fonts/recoleta-thin-webfont.woff2",
            weight: "200",
            style: "thin",
        },
        {
            path: "./fonts/recoleta-light-webfont.woff2",
            weight: "300",
            style: "light",
        },
        {
            path: "./fonts/recoleta-regular-webfont.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/recoleta-medium-webfont.woff2",
            weight: "500",
            style: "medium",
        },
        {
            path: "./fonts/recoleta-semibold-webfont.woff2",
            weight: "600",
            style: "semibold",
        },
        {
            path: "./fonts/recoleta-bold-webfont.woff2",
            weight: "700",
            style: "bold",
        },
        {
            path: "./fonts/recoleta-black-webfont.woff2",
            weight: "800",
            style: "black",
        },
    ],
});

export const metadata: Metadata = {
    title: "VetPet",
    description:
        "Descubra a excelência em cuidados veterinários na VetPet. Nossa equipe dedicada oferece consultas preventivas, tratamento odontológico especializado e atendimento de emergência 24 horas. Cuidamos não apenas da saúde, mas também da felicidade do seu pet. Agende uma consulta hoje para experienciar serviços personalizados e atendimento compassivo. Seu melhor amigo merece o melhor cuidado – confie na VetPet para promover uma vida longa e saudável para seu animal de estimação.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn(recoleta.className, "bg-orange-50")}>{children}</body>
        </html>
    );
}
