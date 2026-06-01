import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { routes } from "@/shared/lib/routes";
import Image from "next/image";

export function Footer({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) {
  return (
    <footer className="bg-card">
      <div className="bg-background-secondary h-20 border-b border-border"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Link
                href={routes.home()}
                className="flex flex-row items-center gap-2"
              >
                <Image
                  src={imageSrc}
                  alt={title}
                  width={100}
                  height={100}
                  className="w-12 h-12"
                />
                <p className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                  [&lt;/ BraCode&gt;]
                </p>
              </Link>
            </div>
            <p className="text-muted-foreground">
              پلتفرم آموزش برنامه‌نویسی، کامپیوتر و هوش مصنوعی
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">دسترسی سریع</h3>
            <div className="space-y-2">
              <Link
                href={routes.home()}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                صفحه اصلی
              </Link>
              <Link
                href={routes.home()}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                دوره‌ها
              </Link>
              <Link
                href={routes.home()}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                درباره ما
              </Link>
              <Link
                href={routes.home()}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                تماس با ما
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">دسته‌بندی دوره‌ها</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">برنامه‌نویسی</p>
              <p className="text-muted-foreground">هوش مصنوعی</p>
              <p className="text-muted-foreground">علوم کامپیوتر</p>
              <p className="text-muted-foreground">توسعه وب</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">تماس با ما</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>info@bracode.ir</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} className="text-accent" />
                <span>021-12345678</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} className="text-success" />
                <span>تهران، ایران</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2026 براکد. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
