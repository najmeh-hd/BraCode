"use client";

import Image from "next/image";
import Link from "next/link";
import { routes } from "@/shared/lib/routes";
import { BookOpen, Play } from "lucide-react";
import { motion } from "motion/react";
import { images } from "@/shared/lib/images";

export default function Hero() {
  return (
    <div className="w-full bg-background-secondary flex justify-center py-10 ">
      <div className="grid grig-cols-1 md:grid-cols-3 max-w-7xl w-full md:gap-10 justify-between bg-background-secondary p-4">
        <div className="flex flex-col md:col-span-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-row gap-5">
              <Image
                src={images.robo3.src}
                alt={images.robo3.alt}
                width={100}
                height={100}
                className="w-35 h-35 hidden md:block hover:rotate-15 transition-all duration-500 ease-in"
              />
              <h1 className="text-5xl md:text-7xl font-bold">
                یادگیری برنامه‌نویسی را با {""}
                <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                  براکد {""}
                </span>
                شروع کنید.
              </h1>
            </div>
            <p className="text-foreground-secondary text-xl py-5">
              دوره‌های جامع و کاربردی در زمینه برنامه‌نویسی، هوش مصنوعی و علوم
              کامپیوتر با بهترین اساتید!
            </p>
            <div className="hidden gap-2 md:flex flex-row h-fit py-5">
              <Link
                href={routes.courses()}
                className="text-black hover:bg-accent-hover border border-accent bg-accent p-5 items-center  flex gap-2 font-extrabold flex-row rounded-2xl"
              >
                <BookOpen />
                <p>مشاهده دوره‌ها</p>
              </Link>
              <Link
                href={routes.home()}
                className="text-primary hover:bg-primary hover:text-white border-2 border-primary p-5 items-center  flex gap-2 font-extrabold flex-row rounded-2xl"
              >
                <Play />
                تماشای معرفی
              </Link>
            </div>
            <div className="md:hidden flex justify-center md:col-span-1">
              <div className="gap-2 flex flex-col sm:flex-row h-fit pt-15">
                <Link
                  href={routes.home()}
                  className="text-black hover:bg-accent-hover border border-accent bg-accent p-3 items-center text-xs flex gap-2 font-extrabold flex-row rounded-2xl"
                >
                  <BookOpen />
                  <p>مشاهده دوره‌ها</p>
                </Link>
                <Link
                  href={routes.home()}
                  className="text-primary hover:bg-primary hover:text-white border-2 border-primary p-3 items-center text-xs flex gap-2 font-extrabold flex-row rounded-2xl"
                >
                  <Play />
                  تماشای معرفی
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-row justify-center items-center mt-10 md:mt-0">
            <Image
              src={images.robo1.src}
              alt={images.robo1.alt}
              width={100}
              height={100}
              className="w-40 md:w-60 h-60 md:h-90 hover:-rotate-15 transition-all duration-500 ease-in"
            />
            <Image
              src={images.robo2.src}
              alt={images.robo2.alt}
              width={100}
              height={100}
              className="md:hidden w-30 h-40 hover:-rotate-24 transition-all duration-500 ease-in"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
