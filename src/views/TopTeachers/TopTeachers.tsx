"use client";

import TopTeachersCard from "@/components/TopTeachersCard/TopTeachersCard";
import { TopTeachersCardProps } from "@/components/TopTeachersCard/TopTeachersCard.types";
import { images } from "@/shared/lib/images";
import { motion } from "motion/react";


const TopTeacherData: TopTeachersCardProps[] = [
  {
    imageSrc: images.master1.src,
    title: images.master1.alt,
    name: "دکتر سارا احمدی",
    speciality: "استاد برنامه‌نویسی",
    coursesCount: 12,
    studentCount: 5000,
  },
  {
    imageSrc: images.master2.src,
    title: images.master2.alt,
    name: "دکتر سارا احمدی",
    speciality: "استاد برنامه‌نویسی",
    coursesCount: 12,
    studentCount: 5000,
  },
  {
    imageSrc: images.master3.src,
    title: images.master3.alt,
    name: "دکتر سارا احمدی",
    speciality: "استاد برنامه‌نویسی",
    coursesCount: 12,
    studentCount: 5000,
  },
];

export default function TopTeacher() {
  return (
    <div className="bg-surface px-5 py-20 w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col gap-3 justify-center text-center">
          <h2 className="text-4xl font-bold">اساتید برتر</h2>
          <p className="text-foreground-secondary">یاد بگیرید از بهترین‌ها.</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
          {TopTeacherData.map((TopTeacher, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TopTeachersCard key={index} {...TopTeacher} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
