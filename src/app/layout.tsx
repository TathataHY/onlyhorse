import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { TanStackProvider } from "@/providers/tan-stack-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import "next-cloudinary/dist/cld-video-player.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnlyHorse - E-commerce Store",
  description:
    "OnlyHorse is a platform for horse lovers which includes a wide range of exclusive content and merchandise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen flex flex-col">
            <div className="flex-1">
              <TanStackProvider>{children}</TanStackProvider>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
