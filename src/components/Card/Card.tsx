"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ArrowLeft } from "lucide-react";
import { CardProps } from "./card.types";
import { routes } from "@/shared/lib/routes";
import { formatAmount } from "@/shared/utils/helpers";

export default function Card(props: CardProps) {
  const {
    id,
    imageSrc,
    title,
    subtitle,
    courseName,
    teacher,
    rating,
    price,
    isFree = false,
    studentsCount,
    lessonCount,
    duration,
    isForCourse = false,
  } = props;
  return (
    <Link
      href={routes.courseDetail(id)}
      className="flex flex-col hover:-translate-y-4 transition-all duration-300 gap-3 bg-card border border-border hover:border-accent-hover group rounded-3xl relative"
    >
      {isFree && (
        <p className="absolute left-5 top-5 bg-success text-foreground p-1 px-2 rounded-xl">
          رایگان
        </p>
      )}
      <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={100}
        className="w-full h-50 rounded-t-3xl"
      />
      <div className="p-3 pb-6 flex flex-col gap-3">
        <h3 className="text-xs text-primary font-bold">{subtitle}</h3>
        <p className="font-bold text-foreground text-xl group-hover:text-accent-hover">
          {courseName}
        </p>
        <p className="text-foreground-secondary text-sm">{teacher}</p>
        {isForCourse && (
          <div className="flex flex-row gap-2 text-foreground-secondary ">
            <p>{formatAmount(lessonCount)} درس</p>
            <p className="font-bold">.</p>
            <p>{formatAmount(duration)} ساعت</p>
          </div>
        )}
        <div className="flex flex-row gap-2 ">
          <div className="flex flex-row gap-1">
            <Star className="text-accent-hover fill-accent-hover w-5" />
            <p className="text-foreground">{formatAmount(rating)}</p>
          </div>
          <p className="text-foreground-secondary font-bold">.</p>
          <p className="text-foreground-secondary">
            {formatAmount(studentsCount)} دانشجو
          </p>
        </div>
        <div className="flex justify-between flex-row">
          <p className="text-accent-hover font-extrabold text-l">
            {!isFree && <span>{formatAmount(price)} تومان</span>}{" "}
            {isFree && <span>رایگان</span>}
          </p>
          {isForCourse && (
            <Link
              href={routes.courseDetail(id)}
              className="text-primary flex flex-row gap-2 font-extrabold"
            >
              مشاهده دوره
              <ArrowLeft />
            </Link>
          )}
        </div>
      </div>
    </Link>
  );
}
