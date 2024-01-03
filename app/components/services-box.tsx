import Image from "next/image";
import { Barlow } from "next/font/google";

import { cn } from "@/lib/utils";

interface ServicesBoxProps {
    imageUrl: string;
    title: string;
    desc: string;
}

const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    weight: "500",
});

export const ServicesBox: React.FC<ServicesBoxProps> = ({ imageUrl, title, desc }) => {
    return (
        <div className="flex flex-col items-center gap-y-6 max-w-sm">
            <Image
                src={imageUrl}
                alt={title}
                width={100}
                height={100}
                className="object-contain object-center"
            />

            <div className="flex flex-col items-center gap-y-4">
                <h3 className="text-2xl font-normal text-gray-800 text-center">{title}</h3>

                <p
                    className={cn(
                        barlow.className,
                        "text-center text-base font-medium text-gray-800/90",
                    )}
                >
                    {desc}
                </p>
            </div>
        </div>
    );
};
