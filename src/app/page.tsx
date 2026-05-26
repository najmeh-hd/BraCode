"use client";

import { images } from "@/shared/lib/images";
import Header from "../views/Header/Header";
import Hero from "../views/Hero/Hero";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
   <Header imageSrc={images.logo.src} title={images.logo.alt} />
   <Hero imageSrc={images.slider.src} title={images.slider.alt} />
   </>
  
  );
}
