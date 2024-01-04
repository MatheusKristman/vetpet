import localFont from "next/font/local";
import { Barlow } from "next/font/google";

export const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export const recoleta = localFont({
    src: [
        {
            path: "../app/fonts/recoleta-thin-webfont.woff2",
            weight: "200",
            style: "thin",
        },
        {
            path: "../app/fonts/recoleta-light-webfont.woff2",
            weight: "300",
            style: "light",
        },
        {
            path: "../app/fonts/recoleta-regular-webfont.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/recoleta-medium-webfont.woff2",
            weight: "500",
            style: "medium",
        },
        {
            path: "../app/fonts/recoleta-semibold-webfont.woff2",
            weight: "600",
            style: "semibold",
        },
        {
            path: "../app/fonts/recoleta-bold-webfont.woff2",
            weight: "700",
            style: "bold",
        },
        {
            path: "../app/fonts/recoleta-black-webfont.woff2",
            weight: "800",
            style: "black",
        },
    ],
});
