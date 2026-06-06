"use client";

import { images } from "@/shared/lib/images";
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import type { CardProps } from "@/components/Card/card.types";
import Card from "@/components/Card/Card";
import { motion } from "motion/react";


const coursesData: CardProps[] = [
  {
    id: "python-basics",
    imageSrc: images.python.src,
    title: images.python.alt,
    subtitle: "برنامه‌نویسی",
    courseName: "مبانی Python",
    teacher: "دکتر احمد محمدی",
    rating: 4.3,
    price: 0,
    isFree: true,
    studentsCount: 1250,
    lessonCount: 45,
    duration: 12,
    isForCourse: true,
  },
  {
    id: "ai-intro",
    imageSrc: images.ai.src,
    title: images.ai.alt,
    subtitle: "هوش مصنوعی",
    courseName: "مقدمه ای بر هوش مصنوعی",
    teacher: "دکتر سارا احمدی",
    rating: 4.9,
    price: 1200000,
    isFree: false,
    studentsCount: 890,
    lessonCount: 60,
    duration: 20,
    isForCourse: true,
  },
  {
    id: "react-js",
    imageSrc: images.react.src,
    title: images.react.alt,
    subtitle: "توسعه وب",
    courseName: "توسعه وب با react",
    teacher: "مهندس علی رضایی",
    rating: 4.7,
    price: 900000,
    isFree: false,
    studentsCount: 2100,
    lessonCount: 55,
    duration: 18,
    isForCourse: true,
  },
  {
    id: "data-structures",
    imageSrc: images.algorithm.src,
    title: images.algorithm.alt,
    subtitle: "علوم کامپیوتر",
    courseName: "ساختمان داده و الگوریتم",
    teacher: "دکتر رضا کریمی",
    rating: 4.6,
    price: 0,
    isFree: true,
    studentsCount: 3200,
    lessonCount: 50,
    duration: 15,
    isForCourse: true,
  },
  {
    id: "nodejs",
    imageSrc: images.algorithm.src,
    title: images.algorithm.alt,
    subtitle: "توسعه وب",
    courseName: "توسعه Backend با Node.js",
    teacher: "مهندس علی رضایی",
    rating: 4.7,
    price: 1100000,
    isFree: false,
    studentsCount: 1400,
    lessonCount: 65,
    duration: 22,
    isForCourse: true,
  },
  {
    id: "machine-learning",
    imageSrc: images.algorithm.src,
    title: images.algorithm.alt,
    subtitle: "هوش مصنوعی",
    courseName: "یادگیری ماشین",
    teacher: "دکتر سارا احمدی",
    rating: 4.9,
    price: 1500000,
    isFree: false,
    studentsCount: 650,
    lessonCount: 70,
    duration: 25,
    isForCourse: true,
  },
  {
    id: "javascript",
    imageSrc: images.algorithm.src,
    title: images.algorithm.alt,
    subtitle: "برنامه نویسی",
    courseName: "جاوااسکریپت پیشرفته",
    teacher: "مهندس علی رضایی",
    rating: 4.8,
    price: 800000,
    isFree: false,
    studentsCount: 1800,
    lessonCount: 48,
    duration: 16,
    isForCourse: true,
  },
  {
    id: "linux",
    imageSrc: images.algorithm.src,
    title: images.algorithm.alt,
    subtitle: "علوم کامپیوتر",
    courseName: "لینوکس برای برنامه‌نویسان",
    teacher: "مهندس حسین موسوی",
    rating: 4.5,
    price: 0,
    isFree: true,
    studentsCount: 3200,
    lessonCount: 35,
    duration: 10,
    isForCourse: true,
  },
];

export default function CoursesPage() {
  const [filter, setFilter] = useState<"all" | "free" | "paid">("all");
  const [search, setSearch] = useState("");

  const filteredCourses = coursesData.filter((course) => {
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "free"
          ? course.isFree
          : !course.isFree;

    const matchesSearch =
      course.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      course.courseName.toLowerCase().includes(search.toLowerCase()) ||
      course.teacher.toLowerCase().includes(search.toLowerCase()) ||
      course.id.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });
  return (
    <div className="py-12 flex justify-center w-full">
      <div className="flex max-w-7xl w-full px-4 flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-foreground text-4xl font-bold">
            دوره‌های آموزشی
          </h1>
          <p className="text-foreground-secondary text-lg">
            دوره مورد نظر خود را پیدا کنید و یادگیری را شروع کنید.
          </p>
        </div>

        <div className="flex w-full flex-col md:flex-row gap-4">
          <div className="relative w-full">
            <Search
              className="absolute text-foreground-secondary right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <input
              type="text"
              placeholder="جستجو در دوره‌ها..."
              className="w-full bg-card border border-border rounded-2xl pr-10 pl-4 py-3 focus:outline-none focus:border-accent transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl transition-colors ${
                filter === "all"
                  ? "bg-accent text-background-primary"
                  : "bg-card border border-border hover:border-accent"
              }`}
            >
              <Filter size={18} />
              همه
            </button>

            <button
              onClick={() => setFilter("free")}
              className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl transition-colors ${
                filter === "free"
                  ? "bg-success text-background-primary"
                  : "bg-card border border-border hover:border-success"
              }`}
            >
              رایگان
            </button>
            <button
              onClick={() => setFilter("paid")}
              className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl transition-colors ${
                filter === "paid"
                  ? "bg-primary text-background-primary"
                  : "bg-card border border-border hover:border-primary"
              }`}
            >
              پولی
            </button>
          </div>
        </div>
        <div>
          <p className="text-foreground-secondary">
            {filteredCourses.length} دوره یافت شد
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card key={index} {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
