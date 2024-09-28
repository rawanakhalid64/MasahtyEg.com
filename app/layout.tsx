
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import LazyYouTube from "@/components/video/LazyYouTube";
import "./globals.css";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Main } from "@/components/craft";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import Logo from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mashety",
  description:
    "Mashety",
  metadataBase: new URL("https://masahtyeg.com"),
};

// Revalidate content every hour
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

const Nav: React.FC<NavProps> = ({ className, children, id }) => {
  
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-[#198754]",
        "border-b",
        "fade-in",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="lg:max-w-7xl max-w-5xl mx-auto px-4 md:px-0 py-4 flex justify-between items-center"
      >
        <Link
          className="flex items-center gap-2 transition-all duration-300 hover:opacity-80 hover:scale-105 transform"
          href="/"
        >
          <h2 className="text-2xl text-white font-bold text-primary-500 tracking-wide">
            مصحتي
          </h2>
        </Link>

        {children}

        <div className="flex items-center gap-2">
  <div className="mx-2 hidden md:flex">
    {/* item.name === "البرامج" ? (
        <div key={item.name} className="relative group">
          <Button variant="ghost" size="sm">
            <span className="text-white text-xl hover:text-black">{item.name}</span>
          </Button>

          <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:transition-opacity group-hover:duration-500 transition-all delay-300">
            <Link
              href="/programs"
              className="block px-4 py-2 text-[#198754] hover:bg-gray-100"
            >
              برامج الادمان
            </Link>
            <Link
              href="/mental-health-programs"
              className="block px-4 py-2 text-[#198754] hover:bg-gray-100"
            >
              برامج الامراض النفسيه
            </Link>
          </div>
        </div>
      ) :  */}
    {mainMenu.map((item) =>
      (
        <Button key={item.name} asChild variant="ghost" size="sm">
          <Link href={item.href} className="text-white text-xl">
            {item.name}
          </Link>
        </Button>
      )
    )}
  </div>

  <Button asChild className="hidden sm:flex">
    <Link href="/contactus" className="text-xl">
      تواصل معنا
    </Link>
  </Button>

  <MobileNav />
</div>

      </div>
    </nav>
  );
};



const Footer = () => {
  return (
    <footer>
      <section className=" fade-in-10 mt-6 bg-[#198754] text-white">
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            {/* <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="dark:invert hover:opacity-75 transition-all"
              ></Image>
            </Link> */}
            <Link
      className="flex items-center gap-2 transition-all duration-300 hover:opacity-80 hover:scale-105 transform"
      href="/"
    >
      <h2 className="text-2xl text-white font-bold text-primary-500 tracking-wide">
        مصحتي
      </h2>
    </Link>
    <div className="flex flex-col gap-2 text-sm">
             {/* <h5 className="font-medium text-base">Website</h5> */}
            {mainMenu.map((item) => (
            <Link key={item.name} href={item.href} className="hover:underline underline-offset-4">
            {item.name}
            </Link>
        ))}
          </div>
            <p>
              {/* <Balancer>{metadata.description}</Balancer> */}
            </p>
          </div> 
          <div className="flex flex-col gap-2   text-sm">
    <div>
      <h5 className="font-bold  pb-4  text-base">تواصل معنا</h5>
      <p>الايميل: <a href="mailto:example@example.com" className="hover:underline">masahtyeg@gmail.com</a></p>
      <p>الهاتف: <a href="tel:+01090731111" className="hover:underline">+01090731111</a></p>
      <p>الهاتف: <a href="tel:+01096281111" className="hover:underline">+01096281111</a></p>

      <p>العنوان:81 شارع حوض الروض - فيلا بالحديقة - قسم تان شبرانيت - الجيزة</p>
    </div>
  </div>
          {/* <div className="flex flex-col gap-2 text-sm"> */}
            {/* <h5 className="font-medium text-base">Blog</h5>
            {contentMenu.map((item) => (
            <Link key={item.name} href={item.href} className="hover:underline underline-offset-4">
              {item.name}
            </Link>
        ))} */}
          {/* <LazyYouTube videoId="T3mgD-mJZVI" width="400px" height="350px" /> */}
          {/* </div> */}
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <ThemeToggle />
          <p className="text-muted-foreground text-white">
          جميع الحقوق محفوظه لمركز 

            © <a href="https://9d8.dev">Mashty</a>. 
          </p>
        </Container>
      </section>
    </footer>
  );
};
