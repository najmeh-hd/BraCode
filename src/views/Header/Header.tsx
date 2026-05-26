"use client";

import Link from "next/link";
import Image from "next/image";
import HamburgerButton from "@/components/HamburgerButton/HamburgerButton";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { useState } from "react";
import { routes } from "@/shared/lib/routes";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { title: "صفحه اصلی", link: "./" },
  { title: "دوره ها", link: "" },
  { title: "درباره ما", link: "" },
  { title: "تماس با ما", link: "" },
  // { title: "ورود/ثبت‌نام", link: "" },
];
export default function Header({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full md:flex md:justify-center border-b border-border md:p-2">
      <nav className="flex md:hidden w-full justify-between items-center px-4">
        <Link href={routes.home()} className="flex flex-row items-center gap-2">
          <Image
            src={imageSrc}
            alt={title}
            width={100}
            height={100}
            className="w-12 h-12"
          />
          <p className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
            [&lt;/ BraCode&gt;]
          </p>
        </Link>

        <HamburgerButton
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen((prev) => !prev)}
        />
      </nav>
      <nav className="hidden md:flex flex-row justify-between items-center px-4 max-w-7xl w-full">
        <Link href={routes.home()} className="flex flex-row items-center gap-1">
          <Image
            src={imageSrc}
            alt={title}
            width={100}
            height={100}
            className="w-12 h-12"
          />
          <p className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
            [&lt;/ BraCode&gt;]
          </p>
        </Link>
        <div className="flex flex-row justify-center items-center gap-5 bg-background">
          {navItems.map((item) => {
            return (
              <Link
                key={item.title}
                href={item.link}
                color="neutral"
                className="hover:text-accent-hover font-bold"
              >
                {item.title}
              </Link>
            );
          })}
          <ThemeToggle />

          <Link
            href={routes.home()}
            className="text-white font-bold bg-primary hover:bg-primary-hover p-2 px-5 rounded-xl flex justify-center"
          >
            ورود / ثبت‌نام
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isMenuOpen ? "fit-content" : 0 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex md:hidden flex-col justify-center items-stretch gap-5 bg-background p-4">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.title}
                    href={item.link}
                    color="neutral"
                    className=""
                  >
                    {item.title}
                  </Link>
                );
              })}
              <ThemeToggle />
              <Link
                href={routes.home()}
                className="w-full text-white font-bold bg-primary p-2 rounded-xl flex justify-center"
              >
                ورود / ثبت‌نام
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
