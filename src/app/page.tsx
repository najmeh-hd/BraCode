"use client";

import { images } from "@/shared/lib/images";
import Hero from "../views/Hero/Hero";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import KeyFeatures from "@/views/KeyFeatures/KeyFeatures";
import PopularCourses from "@/views/PopularCourses/PopularCourses";
import TopTeacher from "@/views/TopTeachers/TopTeachers";
import LatestNews from "@/views/LatestNews/LatestNews";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Hero />
      <KeyFeatures />
      <PopularCourses />
      <TopTeacher />
      <LatestNews />
    </>
  );
}
