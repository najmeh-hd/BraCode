"use client";
import Link from "next/link";
import Image from "next/image";
import CourseHeader from "@/components/course-detail/CourseHeader/CourseHeader";
import CourseMain from "@/components/course-detail/CourseMain/CourseMain";

export default function CourseDetailPage() {
    return (
      <>
        <CourseHeader />
        <CourseMain />
      </>
    );
}
