"use client";

import Link from "next/link";
import Image from "next/image";
import { routes } from "@/shared/lib/routes";
import { NewsCardProps } from "./NewsCardProps";
import {formatAmount} from "@/shared/utils/helpers"

export default function NewsCard(props: NewsCardProps) {
  const { imageSrc, title, subtitle, time, timeCount } = props;
  return (
    <Link
      href={routes.home()}
      className="border border-border hover:border-success group flex flex-col rounded-3xl"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={100}
        className="w-full h-50 rounded-t-3xl"
      />
      <div className="p-5  flex flex-col gap-1">
        <p className="text-xs text-foreground-secondary">
          {formatAmount(timeCount)} {time}
        </p>
        <h3 className="text-xl font-bold group-hover:text-success">
          {subtitle}
        </h3>
      </div>
    </Link>
  );
}
