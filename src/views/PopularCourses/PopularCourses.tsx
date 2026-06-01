"use client";

import Card from "@/components/Card/Card";
import Link from "next/link";
import type { CardProps } from "@/components/Card/card.types";
import { images } from "@/shared/lib/images";
import { routes } from "@/shared/lib/routes";
import { motion } from "motion/react";

const coursesData: CardProps[] = [
  {
    id: "python-basics",
    imageSrc: images.python.src,
    title: images.python.alt,
    subtitle: "برنامه‌نویسی",
    descriptions: "مبانی Python",
    teacher: "دکتر احمد محمدی",
    rating: 4.3,
    isFree: true,
    studentsCount: 1250,
  },
  {
    id: "ai-intro",
    imageSrc: images.ai.src,
    title: images.ai.alt,
    subtitle: "هوش مصنوعی",
    descriptions: "مقدمه ای بر هوش مصنوعی",
    teacher: "دکتر سارا احمدی",
    rating: 4.9,
    price: 1200000,
    isFree: false,
    studentsCount: 890,
  },
  {
    id: "react-js",
    imageSrc: images.react.src,
    title: images.react.alt,
    subtitle: "توسعه وب",
    descriptions: "توسعه وب با react",
    teacher: "مهندس علی رضایی",
    rating: 4.7,
    price: 900000,
    isFree: false,
    studentsCount: 2100,
  },
  {
    id: "data-structures",
    imageSrc: images.algorithm.src,
    title: images.algorithm.alt,
    subtitle: "علوم کامپیوتر",
    descriptions: "ساختمان داده و الگوریتم",
    teacher: "دکتر رضا کریمی",
    rating: 4.6,
    isFree: true,
    studentsCount: 3200,
  },
];

export default function PopularCourses() {
  return (
    <div className="bg-background-secondary w-full flex justify-center py-20">
      <div className="max-w-7xl flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col gap-3 justify-center text-center">
          <h2 className="text-4xl font-bold">دوره‌های محبوب</h2>
          <p className="text-foreground-secondary">
            با محبوب ترین دوره های ما آشنا شوید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
          {coursesData.map((course, index) => (
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
        <Link
          href={routes.home()}
          className="text-white w-fit bg-primary px-8 rounded-xl font-bold hover:bg-primary-hover py-3"
        >
          مشاهده همه دوره‌ها
        </Link>
      </div>
    </div>
  );
}
