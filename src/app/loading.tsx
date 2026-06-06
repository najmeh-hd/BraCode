import Image from "next/image";
import { images } from "@/shared/lib/images";
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-32 h-32 animate-swing">
          <Image
            src={images.robo4.src}
            alt={images.robo4.alt}
            width={128}
            height={128}
            className="object-contain"
            priority
          />
        </div>
        <p className="text-lg font-bold text-success animate-pulse pt-20">
          در حال بارگذاری...
        </p>
      </div>
    </div>
  );
}
