import type {Metadata} from "next";
import {Schibsted_Grotesk, Martian_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const schibstedGrotesk = Schibsted_Grotesk({
    variable: "--font-schibsted-grotesk"
});

const martianMono = Martian_Mono({
    variable: "--font-martian-mono"
});

export const metadata: Metadata = {
    title: "Tech Hub",
    description: "Where Developers Connect, Learn, and Grow.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en">
        <body
            className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}>
        <Navbar/>
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}
