"use client";

import TopTeachersCard from "@/components/TopTeachersCard/TopTeachersCard";
import { TopTeachersCardProps } from "@/components/TopTeachersCard/TopTeachersCard.types";
import { images } from "@/shared/lib/images";
import { routes } from "@/shared/lib/routes";
import Link from "next/link";

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
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
        {TopTeacherData.map((TopTeacher, index) => (
          <TopTeachersCard key={index} {...TopTeacher} />
        ))}
      </div>
    </div>
  );
}
