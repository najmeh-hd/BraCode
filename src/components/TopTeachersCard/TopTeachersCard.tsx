import { TopTeachersCardProps } from "./TopTeachersCard.types";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/shared/lib/routes";

export default function TopTeachersCard(props: TopTeachersCardProps) {
    const {
      imageSrc,
      title,
      name,
      speciality,
      coursesCount,
      studentCount,
    } = props;
  return (
    <Link
      href={routes.home()}
      className="flex flex-col p-5 gap-2 bg-card border border-border hover:border-primary rounded-3xl justify-center items-center"
    >
      <Image src={imageSrc} alt={title} width={100} height={100} className="border-4 border-accent rounded-full" />
      <h2 className="text-foreground text-xl font-bold">{name}</h2>
      <p className="text-foreground-secondary">{speciality}</p>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col items-center">
          <p className="text-success">{coursesCount}</p>
          <p className="text-foreground-secondary">دوره</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-primary">{studentCount}</p>
          <p className="text-foreground-secondary">دانشجو</p>
        </div>
      </div>
    </Link>
  );
}
