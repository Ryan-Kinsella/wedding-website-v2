import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const description = "Get ready to celebrate some love!";

const url = process.env.NODE_ENV === 'production' ?
    `${process.env.WEBPAGE_PROD_URL}` :
    'http://localhost:3000';

//console.log(`running url ${url}`)

export const metadata: Metadata = {
    metadataBase: new URL(url),
    title: "Taylor & Ryan",
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
                {/* <meta name="_csrf" content="${_csrf.token}" /> */}
                {/* <meta name="_csrf_header" content="${_csrf.headerName}" /> */}
                <meta property="og:image" content={`${url}/og-image.png`} />
            </head>
            <body>
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
