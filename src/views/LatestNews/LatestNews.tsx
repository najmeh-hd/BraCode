"use client";

import { NewsCardProps } from "@/components/NewsCard/NewsCardProps";
import NewsCard from "@/components/NewsCard/NewsCard";
import { images } from "@/shared/lib/images";
import { motion } from "motion/react";


const LatestNewsData: NewsCardProps[] = [
  {
    imageSrc: images.news1.src,
    title: images.news1.alt,
    time: "2 روز پیش",
    subtitle: "وبینار رایگان: آینده هوش مصنوعی",
  },
  {
    imageSrc: images.news2.src,
    title: images.news2.alt,
    time: "1 هفته پیش",
    subtitle: "دوره جدید Machine Learning منتشر شد",
  },
  {
    imageSrc: images.news1.src,
    title: images.news1.alt,
    time: "2 روز پیش",
    subtitle: "وبینار رایگان: آینده هوش مصنوعی",
  },
];

export default function LatestNews() {
  return (
    <div className="bg-background-primary px-5 py-20 w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col gap-3 justify-center text-center">
          <h2 className="text-4xl font-bold">آخرین اخبار</h2>
          <p className="text-foreground-secondary">
            از جدیدترین رویدادها مطلع شوید.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
          {LatestNewsData.map((LatestNew, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <NewsCard key={index} {...LatestNew} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
