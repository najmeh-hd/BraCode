import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { routes } from "@/shared/lib/routes";
import Image from "next/image";
import { toPersianDigit } from "@/shared/utils/helpers";


const navItems = [
  { title: "صفحه اصلی", link: routes.home() },
  { title: "دوره ها", link: routes.courses() },
  { title: "درباره ما", link: routes.about() },
  { title: "تماس با ما", link: routes.contact() },
];

export function Footer({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) {
  return (
    <footer className="bg-card bottom-0 border-t border-border">
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
            <div className="space-y-2 flex flex-col">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.title}
                    href={item.link}
                    color="neutral"
                    className="hover:text-primary"
                  >
                    {item.title}
                  </Link>
                );
              })}
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
                <a
                  href="mailto:info@bracode.ir"
                  className="hover:text-primary transition-colors"
                >
                  info@bracode.ir
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} className="text-accent" />
                <a
                  href="tel:02112345678"
                  className="hover:text-accent transition-colors"
                >
                  {toPersianDigit("021-12345678")}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} className="text-success" />
                <a
                  href="https://www.google.com/maps?q=تهران،+ایران"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-success transition-colors"
                >
                  تهران، ایران
                </a>
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
