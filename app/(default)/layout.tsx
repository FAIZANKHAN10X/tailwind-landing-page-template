"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rubik:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <div className="font-sans">
        <Header />
        <main className="grow">{children}</main>
        <Footer border={true} />
      </div>
    </>
  );
}