import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const description = "Get ready to celebrate some love!";

export const metadata: Metadata = {
    title: "Taylor and Ryan's Wedding",
    description: description,
    openGraph: {
        description: description,
        images: [`images/e6.JPG`],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>Taylor & Ryan</title>
                <meta name="_csrf" content="${_csrf.token}" />
                <meta name="_csrf_header" content="${_csrf.headerName}" />
            </head>
            <body className="spaceGrotesk.className">
                <ThemeProvider
                    // attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                // disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
