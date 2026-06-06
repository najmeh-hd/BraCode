"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { routes } from "@/shared/lib/routes";
import { formatAmount } from "@/shared/utils/helpers";
import { Check, Clock, BookOpen, Users, Play, Lock } from "lucide-react";
import { useState } from "react";
import { toPersianDigit } from "@/shared/utils/helpers";
import { motion } from "motion/react";


const coursesData = {
  "python-basics": {
    duration: "12 ساعت",
    lessonsCount: 45,
    studentsCount: 1250,
    price: 0,
    isFree: true,
    whatYouLearn: [
      "متغیرها، انواع داده‌ها و عملگرها",
      "ساختارهای کنترلی و حلقه‌ها",
      "توابع و ماژول‌ها",
      "برنامه‌نویسی شی‌گرا (OOP)",
      "کار با فایل‌ها و استثناها",
      "کتابخانه‌های محبوب Python (NumPy, Pandas)",
    ],
    curriculum: [
      {
        id: 1,
        title: "مقدمه و نصب",
        lessons: [
          { id: 1, title: "معرفی دوره", duration: "05:30", isFree: true },
          { id: 2, title: "نصب Python و IDE", duration: "12:15", isFree: true },
          {
            id: 3,
            title: "اولین برنامه Python",
            duration: "08:45",
            isFree: true,
          },
        ],
      },
      {
        id: 2,
        title: "مبانی Python",
        lessons: [
          {
            id: 4,
            title: "متغیرها و انواع داده",
            duration: "15:20",
            isFree: false,
          },
          {
            id: 5,
            title: "عملگرها در Python",
            duration: "10:30",
            isFree: false,
          },
          {
            id: 6,
            title: "دریافت ورودی از کاربر",
            duration: "08:15",
            isFree: false,
          },
          {
            id: 7,
            title: "رشته‌ها و متدهای آن",
            duration: "18:45",
            isFree: false,
          },
        ],
      },
      {
        id: 3,
        title: "ساختارهای کنترلی",
        lessons: [
          { id: 8, title: "شرط if-else", duration: "14:45", isFree: false },
          { id: 9, title: "حلقه for", duration: "12:30", isFree: false },
          { id: 10, title: "حلقه while", duration: "11:20", isFree: false },
        ],
      },
    ],
  },
  "ai-intro": {
    duration: "20 ساعت",
    lessonsCount: 60,
    studentsCount: 890,
    price: 1200000,
    isFree: false,
    whatYouLearn: [
      "مفاهیم پایه هوش مصنوعی",
      "الگوریتم‌های جستجو و بهینه‌سازی",
      "یادگیری ماشین (Machine Learning)",
      "شبکه‌های عصبی مصنوعی",
      "یادگیری عمیق (Deep Learning)",
      "پردازش تصویر و زبان طبیعی",
    ],
    curriculum: [
      {
        id: 1,
        title: "مقدمات هوش مصنوعی",
        lessons: [
          {
            id: 1,
            title: "تاریخچه هوش مصنوعی",
            duration: "10:00",
            isFree: true,
          },
          { id: 2, title: "انواع هوش مصنوعی", duration: "15:30", isFree: true },
          {
            id: 3,
            title: "کاربردهای AI در دنیای واقعی",
            duration: "12:45",
            isFree: true,
          },
        ],
      },
      {
        id: 2,
        title: "یادگیری ماشین",
        lessons: [
          { id: 4, title: "مفاهیم پایه ML", duration: "18:20", isFree: false },
          {
            id: 5,
            title: "الگوریتم‌های نظارت شده",
            duration: "20:15",
            isFree: false,
          },
          {
            id: 6,
            title: "الگوریتم‌های نظارت نشده",
            duration: "22:30",
            isFree: false,
          },
          { id: 7, title: "ارزیابی مدل‌ها", duration: "16:45", isFree: false },
        ],
      },
    ],
  },
  "react-js": {
    duration: "18 ساعت",
    lessonsCount: 55,
    studentsCount: 2100,
    price: 900000,
    isFree: false,
    whatYouLearn: [
      "مبانی React و JSX",
      "کامپوننت‌ها و Props",
      "State و生命周期",
      "هوک‌های React (useState, useEffect)",
      "React Router برای روتینگ",
      "مدیریت state با Redux Toolkit",
      "ارتباط با API (fetch, axios)",
    ],
    curriculum: [
      {
        id: 1,
        title: "مبانی React",
        lessons: [
          {
            id: 1,
            title: "معرفی React و Virtual DOM",
            duration: "10:00",
            isFree: true,
          },
          { id: 2, title: "نصب و راه‌اندازی", duration: "15:30", isFree: true },
          { id: 3, title: "JSX چیست؟", duration: "12:00", isFree: true },
          {
            id: 4,
            title: "اولین کامپوننت React",
            duration: "18:00",
            isFree: false,
          },
        ],
      },
      {
        id: 2,
        title: "هوک‌های React",
        lessons: [
          {
            id: 5,
            title: "useState و مدیریت state",
            duration: "20:15",
            isFree: false,
          },
          {
            id: 6,
            title: "useEffect و side effects",
            duration: "22:30",
            isFree: false,
          },
          {
            id: 7,
            title: "useContext و Context API",
            duration: "18:45",
            isFree: false,
          },
          {
            id: 8,
            title: "useRef و useMemo",
            duration: "16:20",
            isFree: false,
          },
        ],
      },
    ],
  },
  "data-structures": {
    duration: "15 ساعت",
    lessonsCount: 50,
    studentsCount: 3200,
    price: 0,
    isFree: true,
    whatYouLearn: [
      "تحلیل الگوریتم‌ها (Big O)",
      "آرایه‌ها و لیست‌های پیوندی",
      "پشته و صف (Stack & Queue)",
      "درخت‌ها (درخت دودویی، BST)",
      "گراف‌ها و الگوریتم‌های مسیریابی",
      "الگوریتم‌های مرتب‌سازی",
      "الگوریتم‌های جستجو",
    ],
    curriculum: [
      {
        id: 1,
        title: "مفاهیم پایه",
        lessons: [
          {
            id: 1,
            title: "تحلیل الگوریتم‌ها (Big O)",
            duration: "18:30",
            isFree: true,
          },
          {
            id: 2,
            title: "پیچیدگی زمانی و مکانی",
            duration: "15:20",
            isFree: true,
          },
          {
            id: 3,
            title: "آرایه‌ها و رشته‌ها",
            duration: "14:45",
            isFree: true,
          },
        ],
      },
      {
        id: 2,
        title: "ساختمان داده‌های خطی",
        lessons: [
          { id: 4, title: "لیست‌های پیوندی", duration: "22:15", isFree: false },
          { id: 5, title: "پشته (Stack)", duration: "16:30", isFree: false },
          { id: 6, title: "صف (Queue)", duration: "14:20", isFree: false },
          { id: 7, title: "دک (Deque)", duration: "12:45", isFree: false },
        ],
      },
    ],
  },
  nodejs: {
    duration: "22 ساعت",
    lessonsCount: 65,
    studentsCount: 1400,
    price: 1100000,
    isFree: false,
    whatYouLearn: [
      "مفاهیم پایه Node.js و NPM",
      "ماژول‌های داخلی Node (fs, path, http)",
      "Express.js و ساخت REST API",
      "Middleware و Error Handling",
      "اتصال به دیتابیس (MongoDB)",
      "احراز هویت (JWT)",
      "تست و دپلوی پروژه",
    ],
    curriculum: [
      {
        id: 1,
        title: "مبانی Node.js",
        lessons: [
          { id: 1, title: "معرفی Node.js", duration: "12:00", isFree: true },
          {
            id: 2,
            title: "مدیریت بسته‌ها با NPM",
            duration: "15:30",
            isFree: true,
          },
          { id: 3, title: "ماژول‌های داخلی", duration: "18:45", isFree: true },
          { id: 4, title: "Event Loop", duration: "22:15", isFree: false },
        ],
      },
      {
        id: 2,
        title: "Express.js",
        lessons: [
          {
            id: 5,
            title: "راه‌اندازی Express",
            duration: "14:20",
            isFree: false,
          },
          {
            id: 6,
            title: "Middleware و Routing",
            duration: "20:30",
            isFree: false,
          },
          { id: 7, title: "ساخت REST API", duration: "28:45", isFree: false },
          { id: 8, title: "مدیریت خطاها", duration: "16:15", isFree: false },
        ],
      },
    ],
  },
  "machine-learning": {
    duration: "25 ساعت",
    lessonsCount: 70,
    studentsCount: 650,
    price: 1500000,
    isFree: false,
    whatYouLearn: [
      "مقدمه‌ای بر یادگیری ماشین",
      "پیش‌پردازش داده‌ها",
      "رگرسیون خطی و لجستیک",
      "درخت تصمیم و جنگل تصادفی",
      "الگوریتم K-Means",
      "ارزیابی مدل‌ها",
      "پروژه عملی پیش‌بینی",
    ],
    curriculum: [
      {
        id: 1,
        title: "مفاهیم پایه ML",
        lessons: [
          {
            id: 1,
            title: "یادگیری ماشین چیست؟",
            duration: "14:00",
            isFree: true,
          },
          { id: 2, title: "انواع یادگیری", duration: "16:30", isFree: true },
          {
            id: 3,
            title: "آماده‌سازی داده‌ها",
            duration: "22:15",
            isFree: true,
          },
        ],
      },
      {
        id: 2,
        title: "الگوریتم‌های نظارت شده",
        lessons: [
          { id: 4, title: "رگرسیون خطی", duration: "25:00", isFree: false },
          { id: 5, title: "رگرسیون لجستیک", duration: "20:30", isFree: false },
          { id: 6, title: "درخت تصمیم", duration: "18:45", isFree: false },
          { id: 7, title: "جنگل تصادفی", duration: "22:15", isFree: false },
        ],
      },
    ],
  },
  javascript: {
    duration: "16 ساعت",
    lessonsCount: 48,
    studentsCount: 1800,
    price: 800000,
    isFree: false,
    whatYouLearn: [
      "Hoisting و Scope",
      "Closure (بستن)",
      "Prototype و Inheritance",
      "Async/Await و Promise",
      "Fetch API",
      "Event Loop",
      "ES6+ (Destructuring, Spread)",
    ],
    curriculum: [
      {
        id: 1,
        title: "مفاهیم پیشرفته",
        lessons: [
          { id: 1, title: "Hoisting و Scope", duration: "15:30", isFree: true },
          { id: 2, title: "Closure عملی", duration: "18:45", isFree: true },
          { id: 3, title: "Prototype Chain", duration: "20:15", isFree: true },
          {
            id: 4,
            title: "this در جاوااسکریپت",
            duration: "16:30",
            isFree: false,
          },
        ],
      },
      {
        id: 2,
        title: "Asynchronous JavaScript",
        lessons: [
          {
            id: 5,
            title: "Promise و Callback",
            duration: "22:00",
            isFree: false,
          },
          { id: 6, title: "Async/Await", duration: "18:30", isFree: false },
          { id: 7, title: "Fetch API", duration: "15:45", isFree: false },
        ],
      },
    ],
  },
  linux: {
    duration: "10 ساعت",
    lessonsCount: 35,
    studentsCount: 3200,
    price: 0,
    isFree: true,
    whatYouLearn: [
      "خط فرمان لینوکس",
      "مدیریت فایل‌ها و دایرکتوری‌ها",
      "مدیریت فرآیندها",
      "دسترسی‌ها و مجوزها",
      "نصب و مدیریت پکیج‌ها",
      "اسکریپت‌نویسی Bash",
      "شبکه در لینوکس",
    ],
    curriculum: [
      {
        id: 1,
        title: "مقدمات لینوکس",
        lessons: [
          {
            id: 1,
            title: "تاریخچه و توزیع‌ها",
            duration: "10:00",
            isFree: true,
          },
          { id: 2, title: "نصب لینوکس", duration: "25:30", isFree: true },
          { id: 3, title: "ساختار دایرکتوری", duration: "14:15", isFree: true },
        ],
      },
      {
        id: 2,
        title: "خط فرمان",
        lessons: [
          { id: 4, title: "دستورات پایه", duration: "12:00", isFree: false },
          { id: 5, title: "مدیریت فایل‌ها", duration: "15:30", isFree: false },
          {
            id: 6,
            title: "دسترسی‌ها (chmod, chown)",
            duration: "18:45",
            isFree: false,
          },
          { id: 7, title: "مدیریت فرآیندها", duration: "16:20", isFree: false },
        ],
      },
    ],
  },
};

export default function CourseMain() {
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const course = coursesData[id as keyof typeof coursesData];

  if (!course) {
    return <div className="text-center py-20">دوره یافت نشد</div>;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl px-4 py-12 w-full">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-card border border-border rounded-3xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  چه چیزی یاد می‌گیرید؟
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.whatYouLearn.map((item: string, index: number) => (
                    <div key={index} className="flex gap-2">
                      <Check
                        className="text-success flex-shrink-0 mt-1"
                        size={18}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-card border border-border rounded-3xl p-6">
                <h2 className="text-2xl font-bold mb-6">محتوای دوره</h2>
                <div className="space-y-4">
                  {course.curriculum.map((section: any) => (
                    <div
                      key={section.id}
                      className="border border-border rounded-3xl overflow-hidden"
                    >
                      <div className="bg-muted p-4">
                        <h3 className="font-bold">{section.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {formatAmount(section.lessons.length)} درس
                        </p>
                      </div>
                      <div className="divide-y divide-border">
                        {section.lessons.map((lesson: any) => (
                          <div
                            key={lesson.id}
                            className={`p-4 flex items-center justify-between ${
                              lesson.isFree || isEnrolled
                                ? "hover:bg-muted cursor-pointer"
                                : "opacity-60"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {lesson.isFree || isEnrolled ? (
                                <Play className="text-accent" size={18} />
                              ) : (
                                <Lock
                                  className="text-foreground-secondary"
                                  size={18}
                                />
                              )}
                              <div>
                                <p className="font-medium">{lesson.title}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground-secondary">
                              <Clock size={14} />
                              <span>{toPersianDigit(lesson.duration)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {!course.isFree && !isEnrolled && (
                  <div className="mt-6 p-4 bg-primary/10 border border-primary rounded-2xl">
                    <p className="text-sm">
                      <span className="font-bold text-primary">توجه:</span> ۳
                      درس اول هر بخش به صورت رایگان در دسترس است. برای دسترسی به
                      تمام محتوای دوره، باید دوره را خریداری کنید.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-6 md:sticky md:col-span-1 top-20"
          >
            <div>
              <h3 className="font-bold mb-4">مشخصات دوره</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-foreground-secondary">
                      مدت زمان
                    </p>
                    <p className="font-bold">
                      {toPersianDigit(course.duration)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="text-accent" size={20} />
                  <div>
                    <p className="text-sm text-foreground-secondary">
                      تعداد درس
                    </p>
                    <p className="font-bold">
                      {formatAmount(course.lessonsCount)} درس
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-success" size={20} />
                  <div>
                    <p className="text-sm text-foreground-secondary">
                      دانشجویان
                    </p>
                    <p className="font-bold">
                      {formatAmount(course.studentsCount)} نفر
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border mt-6 pt-6">
                <div className="text-center mb-4">
                  {!course.isFree && (
                    <p className="text-3xl font-bold text-accent">
                      {formatAmount(course.price)} تومان
                    </p>
                  )}
                </div>
                {course.isFree ? (
                  <button
                    onClick={() => setIsEnrolled(true)}
                    className="w-full bg-success text-white py-3 rounded-2xl font-bold hover:bg-success-hover transition-opacity"
                  >
                    شروع دوره رایگان
                  </button>
                ) : (
                  <button
                    onClick={() => setIsEnrolled(true)}
                    className="w-full bg-accent text-surface py-3 rounded-2xl font-bold hover:bg-accent-hover transition-opacity"
                  >
                    خرید دوره
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
