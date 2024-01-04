import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { Header } from "./components/header";
import { HeaderMobileMenu } from "./components/header-mobile-menu";
import { Footer } from "./components/footer";

import "./globals.css";

export const metadata: Metadata = {
    title: "VetPet",
    description:
        "Descubra a excelência em cuidados veterinários na VetPet. Nossa equipe dedicada oferece consultas preventivas, tratamento odontológico especializado e atendimento de emergência 24 horas. Cuidamos não apenas da saúde, mas também da felicidade do seu pet. Agende uma consulta hoje para experienciar serviços personalizados e atendimento compassivo. Seu melhor amigo merece o melhor cuidado – confie na VetPet para promover uma vida longa e saudável para seu animal de estimação.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn("bg-orange-50")}>
                <Header />
                <HeaderMobileMenu />
                {children}
                <Footer />
            </body>
        </html>
    );
}
