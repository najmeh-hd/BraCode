"use client";

import { images } from "@/shared/lib/images";
import Header from "../views/Header/Header";
import Hero from "../views/Hero/Hero";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import KeyFeatures from "@/views/KeyFeatures/KeyFeatures";
import PopularCourses from "@/views/PopularCourses/PopularCourses";
import TopTeacher from "@/views/TopTeachers/TopTeachers";
import LatestNews from "@/views/LatestNews/LatestNews";
import { Footer } from "@/views/Footer/Footer";

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
      <Hero
        imageSrc1={images.robo1.src}
        title1={images.robo1.alt}
        imageSrc2={images.robo2.src}
        title2={images.robo2.alt}
        imageSrc3={images.robo3.src}
        title3={images.robo3.alt}
        imageSrc4={images.robo4.src}
        title4={images.robo4.alt}
        imageSrc5={images.robo5.src}
        title5={images.robo5.alt}
        imageSrc6={images.robo6.src}
        title6={images.robo6.alt}
      />
      <KeyFeatures />
      <PopularCourses />
      <TopTeacher />
      <LatestNews />
      <Footer imageSrc={images.logo.src} title={images.logo.src} />
    </>
  );
}
