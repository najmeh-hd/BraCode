"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { CardProps } from "./card.types";
import { routes } from "@/shared/lib/routes";


export default function Card(props: CardProps) {
  const {
    imageSrc,
    title,
    subtitle,
    descriptions,
    teacher,
    rating,
    price,
    isFree = false,
    studentsCount,
  } = props;
  return (
    <Link
      href={routes.home()}
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
          {descriptions}
        </p>
        <p className="text-foreground-secondary text-sm">{teacher}</p>
        <div className="flex flex-row gap-2 ">
          <div className="flex flex-row gap-1">
            <Star className="text-accent-hover fill-accent-hover w-5" />
            <p className="text-foreground">{rating}</p>
          </div>
          <p className="text-foreground-secondary font-bold">.</p>
          <p className="text-foreground-secondary">{studentsCount} دانشجو</p>
        </div>
        <p className="text-accent-hover font-extrabold text-l">
          {price}
          {!isFree && <span> تومان</span>} {isFree && <span>رایگان</span>}
        </p>
      </div>
    </Link>
  );
}
