"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { routes } from "@/shared/lib/routes";
import { Star, ArrowRight } from "lucide-react";
import { images } from "@/shared/lib/images";
import { motion } from "motion/react";
import { formatAmount } from "@/shared/utils/helpers";

const coursesData = {
  "python-basics": {
    imageSrc1: images.master2.src,
    title1: images.master2.alt,
    imageSrc2: images.python.src,
    title2: images.python.alt,
    subtitle: "برنامه‌نویسی",
    courseName: "مبانی Python",
    descriptions:
      "این دوره شما را از مبانی پایتون تا سطح پیشرفته همراهی می‌کند. با پروژه‌های عملی و کاربردی، مهارت‌های لازم برای برنامه‌نویسی حرفه‌ای را کسب خواهید کرد.",
    teacher: "دکتر احمد محمدی",
    rating: 4.3,
    price: 0,
    isFree: true,
    studentsCount: 1250,
  },
  "ai-intro": {
    imageSrc1: images.master1.src,
    title1: images.master1.alt,
    imageSrc2: images.ai.src,
    title2: images.ai.alt,
    subtitle: "هوش مصنوعی",
    courseName: "مقدمه‌ای بر هوش مصنوعی",
    descriptions:
      "دوره جامع آشنایی با هوش مصنوعی، یادگیری ماشین و شبکه‌های عصبی. از مفاهیم پایه تا پیاده‌سازی الگوریتم‌های عملی.",
    teacher: "دکتر سارا احمدی",
    rating: 4.9,
    price: 1200000,
    isFree: false,
    studentsCount: 890,
  },
  "react-js": {
    imageSrc1: images.master3.src,
    title1: images.master3.alt,
    imageSrc2: images.react.src,
    title2: images.react.alt,
    subtitle: "توسعه وب",
    courseName: "توسعه وب با React",
    descriptions:
      "دوره تخصصی React.js با رویکرد پروژه‌محور. یادگیری اصولی هوک‌ها، مدیریت state، روتینگ، ارتباط با API و ساخت اپلیکیشن‌های واقعی.",
    teacher: "مهندس علی رضایی",
    rating: 4.7,
    price: 900000,
    isFree: false,
    studentsCount: 2100,
  },
  "data-structures": {
    imageSrc1: images.master2.src,
    title1: images.master2.alt,
    imageSrc2: images.algorithm.src,
    title2: images.algorithm.alt,
    subtitle: "علوم کامپیوتر",
    courseName: "ساختمان داده و الگوریتم",
    descriptions:
      "آموزش جامع ساختمان داده‌ها و الگوریتم‌ها به زبان ساده. مناسب برای مصاحبه‌های کاری و المپیادهای برنامه‌نویسی.",
    teacher: "دکتر رضا کریمی",
    rating: 4.6,
    price: 0,
    isFree: true,
    studentsCount: 3200,
  },
  nodejs: {
    imageSrc1: images.master3.src,
    title1: images.master3.alt,
    imageSrc2: images.algorithm.src,
    title2: images.algorithm.alt,
    subtitle: "توسعه وب",
    courseName: "توسعه Backend با Node.js",
    descriptions:
      "دوره حرفه‌ای توسعه بک‌اند با Node.js و Express. ساخت API، احراز هویت، دیتابیس و استقرار پروژه.",
    teacher: "مهندس علی رضایی",
    rating: 4.7,
    price: 1100000,
    isFree: false,
    studentsCount: 1400,
  },
  "machine-learning": {
    imageSrc1: images.master1.src,
    title1: images.master1.alt,
    imageSrc2: images.algorithm.src,
    title2: images.algorithm.alt,
    subtitle: "هوش مصنوعی",
    courseName: "یادگیری ماشین",
    descriptions:
      "دوره تخصصی یادگیری ماشین با Python. از صفر تا ساخت مدل‌های پیش‌بینی کننده و هوشمند.",
    teacher: "دکتر سارا احمدی",
    rating: 4.9,
    price: 1500000,
    isFree: false,
    studentsCount: 650,
  },
  javascript: {
    imageSrc1: images.master3.src,
    title1: images.master3.alt,
    imageSrc2: images.algorithm.src,
    title2: images.algorithm.alt,
    subtitle: "برنامه‌نویسی",
    courseName: "جاوااسکریپت پیشرفته",
    descriptions:
      "دوره پیشرفته جاوااسکریپت شامل Hoisting، Closure، Prototype، Async/Await و Fetch API",
    teacher: "مهندس علی رضایی",
    rating: 4.8,
    price: 800000,
    isFree: false,
    studentsCount: 1800,
  },
  linux: {
    imageSrc1: images.master2.src,
    title1: images.master2.alt,
    imageSrc2: images.algorithm.src,
    title2: images.algorithm.alt,
    subtitle: "علوم کامپیوتر",
    courseName: "لینوکس برای برنامه‌نویسان",
    descriptions:
      "آموزش لینوکس برای برنامه‌نویسان، خط فرمان، مدیریت فایل‌ها و سیستم‌عامل لینوکس",
    teacher: "مهندس حسین موسوی",
    rating: 4.5,
    price: 0,
    isFree: true,
    studentsCount: 3200,
  },
};

export default function CourseHeader() {
  const { id } = useParams();
  const course = coursesData[id as keyof typeof coursesData];
  if (!course) {
    return <div className="text-center py-20">دوره یافت نشد</div>;
  }

  return (
    <div className="py-12 w-full flex justify-center bg-background border-b border-border">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-6 w-full">
            <Link
              href={routes.courses()}
              className="text-primary flex font-bold"
            >
              <ArrowRight />
              بازگشت به دوره‌ها
            </Link>
            <h3 className="text-xs text-primary font-bold">
              {course.subtitle}
            </h3>
            <p className="font-bold text-foreground text-4xl">
              {course.courseName}
            </p>
            <p className="text-foreground-secondary">{course.descriptions}</p>
            <div className="flex flex-row gap-2">
              <Star className="text-accent fill-accent" />
              <p className="font-bold text-foreground">
                {formatAmount(course.rating)}
              </p>
              <p className="text-foreground-secondary">
                ({formatAmount(course.studentsCount)} دانشجو)
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Image
                src={course.imageSrc1}
                alt={course.title1}
                width={60}
                height={60}
                className="rounded-full border-2 border-accent"
              />
              <div className="flex flex-col">
                <p className="text-foreground-secondary text-sm">مدرس دوره</p>
                <p>{course.teacher}</p>
              </div>
            </div>
            {course.isFree && (
              <Link
                href={routes.courses()}
                className="py-3 w-50 px-5 rounded-2xl text-center text-surface font-bold bg-success hover:bg-success-hover"
              >
                شروع دوره رایگان
              </Link>
            )}
            {!course.isFree && (
              <Link
                href={routes.courses()}
                className="py-3 px-5 w-50 rounded-2xl text-center text-surface font-bold bg-accent-hover hover:bg-accent"
              >
                {formatAmount(course.price)} تومان
              </Link>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={course.imageSrc2}
            alt={course.title2}
            width={200}
            height={200}
            className="rounded-3xl w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
