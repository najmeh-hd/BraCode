"use client";

import { Target, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { images } from "@/shared/lib/images";
import Link from "next/link";
import { routes } from "@/shared/lib/routes";
import { formatAmount } from "@/shared/utils/helpers";
import Image from "next/image";

const stats = [
  {
    label: "دانشجو فعال",
    value: 10000,
    icon: Users,
    color: "text-accent",
  },
  { label: "دوره آموزشی", value: 50, icon: Award, color: "text-primary" },
  {
    label: "مدرس متخصص",
    value: 15,
    icon: TrendingUp,
    color: "text-success",
  },
  {
    label: "ساعت محتوا",
    value: 500,
    icon: Target,
    color: "text-foreground",
  },
];

const values = [
  {
    title: "کیفیت برتر",
    description: "ارائه بهترین محتوای آموزشی با استانداردهای جهانی",
    icon: Award,
  },
  {
    title: "پشتیبانی مستمر",
    description: "همراهی دانشجویان در تمام مراحل یادگیری",
    icon: Users,
  },
  {
    title: "به‌روز بودن",
    description: "محتوای به‌روز با آخرین فناوری‌های روز دنیا",
    icon: TrendingUp,
  },
  {
    title: "کاربردی بودن",
    description: "تمرکز بر پروژه‌های عملی و کاربردی",
    icon: Target,
  },
];

export default function About() {
  return (
    <div className="flex w-full flex-col justify-center">
      <section className="relative w-full flex justify-center bg-gradient-to-br from-background-secondary via-card to-background-secondary py-12 px-4">
        <div className="max-w-7xl w-full flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center gap-8"
          >
            <h1 className="text-5xl font-bold">
              درباره{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                براکد
              </span>
            </h1>
            <p className="text-xl flex justify-center text-foreground-secondary max-w-3xl">
              ما در براکد با هدف ارائه بهترین و به‌روزترین آموزش‌های
              برنامه‌نویسی، هوش مصنوعی و علوم کامپیوتر به زبان فارسی تاسیس
              شده‌ایم.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-3xl p-6 text-center hover:border-accent transition-all hover:shadow-xl"
              >
                <stat.icon
                  className={`${stat.color} w-8 h-8 mx-auto mb-3`}
                  size={32}
                />
                <p className="text-3xl font-bold mb-1">
                  {formatAmount(stat.value)}+
                </p>
                <p className="text-foreground-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 w-full px-4 bg-card/50">
        <div className="w-full flex justify-center">
          <div className=" max-w-7xl grid md:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-5 flex-col"
            >
              <h2 className="text-4xl font-bold flex flex-row items-center">
                <Image
                  src={images.robo6.src}
                  alt={images.robo6.alt}
                  width={100}
                  height={100}
                  className="w-20 h-20 hover:rotate-15 transition-all duration-500 ease-in"
                />
                ماموریت ما
              </h2>
              <p className="text-foreground-secondary text-lg">
                ماموریت ما در براکد، دموکراتیک کردن آموزش برنامه‌نویسی و فناوری
                در ایران است. ما معتقدیم که همه افراد، صرف‌نظر از پیشینه تحصیلی
                یا موقعیت جغرافیایی، باید به آموزش باکیفیت در زمینه تکنولوژی
                دسترسی داشته باشند.
              </p>
              <p className="text-foreground-secondary text-lg">
                با تیمی از اساتید مجرب و متخصص، ما دوره‌هایی طراحی کرده‌ایم که
                نه تنها مفاهیم نظری را پوشش می‌دهند، بلکه با پروژه‌های عملی و
                واقعی، دانشجویان را برای ورود به بازار کار آماده می‌کنند.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src={images.aboutUs.src}
                alt={images.aboutUs.alt}
                width={300}
                height={300}
                className="rounded-3xl shadow-xl border border-border w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="text-center flex flex-col pb-10">
            <h2 className="text-4xl font-bold mb-4">ارزش‌های ما</h2>
            <p className="text-foreground-secondary text-lg">
              اصولی که ما را هدایت می‌کنند.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-3xl p-6 hover:border-accent transition-all hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="text-success w-6 h-6" size={24} />
                </div>
                <h3 className="font-bold text-lg">{value.title}</h3>
                <p className="text-foreground-secondary">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 flex justify-center bg-card/50">
        <div className="max-w-7xl flex gap-8 flex-col">
          <div className="text-center pb-5">
            <h2 className="text-4xl font-bold">چرا براکد؟</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border flex flex-col gap-4 rounded-3xl p-6 text-center"
            >
              <div className="text-5xl">🎓</div>
              <h3 className="font-bold text-lg">اساتید مجرب</h3>
              <p className="text-foreground-secondary">
                تمام اساتید ما دارای سابقه کاری حرفه‌ای و تجربه تدریس گسترده در
                زمینه‌های مختلف فناوری هستند.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border flex flex-col gap-4 rounded-3xl p-6 text-center"
            >
              <div className="text-5xl">💼</div>
              <h3 className="font-bold text-lg">پروژه‌محور</h3>
              <p className="text-foreground-secondary">
                در هر دوره، چندین پروژه عملی و واقعی پیاده‌سازی می‌کنید که به
                پورتفولیو شما کمک می‌کند.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border flex flex-col gap-4 rounded-3xl p-6 text-center"
            >
              <div className="text-5xl">🤝</div>
              <h3 className="font-bold text-lg">جامعه فعال</h3>
              <p className="text-foreground-secondary">
                به جامعه‌ای از هزاران دانشجو و برنامه‌نویس بپیوندید و از تجربیات
                یکدیگر استفاده کنید.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 flex justify-center">
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brain via-code to-users border border-primary/70 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              آماده شروع یادگیری هستید؟
            </h2>
            <p className="text-foreground-secondary text-lg mb-8">
              همین حالا به جمع هزاران دانشجوی موفق براکد بپیوندید
            </p>
            <Link
              href={routes.courses()}
              className="bg-primary px-8 py-4 rounded-lg font-bold hover:bg-primary-hover"
            >
              مشاهده دوره‌ها
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
