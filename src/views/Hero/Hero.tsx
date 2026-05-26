"use client";

import Image from "next/image";

export default function Hero({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) {
  return (
    <div className="flex flex-col bg-background-secondary gap-8 p-5 pt-20">
      <h1 className="text-5xl font-bold">
        یادگیری برنامه‌نویسی را با{" "}
        <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
          {" "}
          براکد
        </span>{" "}
        شروع کنید
      </h1>
      <div className="w-full flex">
        <p className="text-foreground-secondary text-xl">
          دوره‌های جامع و کاربردی در زمینه برنامه‌نویسی، هوش مصنوعی و علوم
          کامپیوتر با بهترین اساتید
        </p>
        <Image
          src={imageSrc}
          alt={title}
          width={100}
          height={100}
          className="left-5 pr-15 w-40"
        ></Image>
      </div>
    </div>
  );
}
