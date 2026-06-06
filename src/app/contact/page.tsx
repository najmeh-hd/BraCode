"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };
 const contactInfo = [
   {
     icon: Mail,
     title: "ایمیل",
     value: "info@bracode.ir",
     link: "mailto:info@bracode.ir",
     color: "text-primary",
     hoverClass: "hover:text-primary-hover", // ← تغییر
   },
   {
     icon: Phone,
     title: "تلفن",
     value: "021-12345678",
     link: "tel:02112345678",
     color: "text-accent",
     hoverClass: "hover:text-accent-hover", // ← تغییر
   },
   {
     icon: MapPin,
     title: "آدرس",
     value: "تهران، خیابان ولیعصر، پلاک 123",
     link: "https://www.google.com/maps?q=تهران،+ایران",
     color: "text-success",
     hoverClass: "hover:text-success-hover", // ← تغییر
   },
 ];

  return (
    <div className="w-full flex justify-center py-12 px-4">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center pb-10 flex flex-col justify-center items-center gap-6"
        >
          <h1 className="text-5xl font-bold">
            تماس با{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
              ما
            </span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-2xl">
            سوال، پیشنهاد یا انتقادی دارید؟ خوشحال می‌شویم از شما بشنویم
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card border border-border flex flex-col gap-6 rounded-3xl p-8">
              <h2 className="text-2xl font-bold">اطلاعات تماس</h2>

              <div className="flex flex-col gap-6 pb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className={item.color} size={24} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold">{item.title}</p>
                      <Link
                        href={item.link}
                        className={`text-foreground-secondary ${item.hoverClass} transition-colors`}
                      >
                        {item.value}
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border pt-8 flex flex-col gap-4">
                <h3 className="font-bold text-xl">ساعات پاسخگویی</h3>
                <div className="text-foreground-secondary flex flex-col gap-2">
                  <p>شنبه تا چهارشنبه: 9:00 - 18:00</p>
                  <p>پنج‌شنبه: 9:00 - 13:00</p>
                  <p className="text-primary font-bold">جمعه: تعطیل</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-brain via-code to-users border border-primary/40 rounded-2xl">
                <p className="text-sm">
                  💡 برای دریافت پاسخ سریع‌تر، می‌توانید از طریق ایمیل با ما در
                  ارتباط باشید.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-3xl p-8">
              <h2 className="text-2xl font-bold pb-6">فرم تماس</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-success" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">پیام شما ارسال شد!</h3>
                  <p className="text-muted-foreground">
                    به زودی با شما تماس خواهیم گرفت.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2">نام و نام خانوادگی</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">ایمیل</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">موضوع</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="موضوع پیام خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">پیام</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="پیام خود را اینجا بنویسید..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-2xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    ارسال پیام
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center pb-12">
            <h2 className="text-4xl font-bold pb-4">سوالات متداول</h2>
            <p className="text-foreground-secondary text-lg">
              شاید پاسخ سوال شما اینجا باشد
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "آیا دوره‌های شما گواهینامه دارند؟",
                a: "بله، پس از اتمام هر دوره و قبولی در آزمون پایانی، گواهینامه معتبر دریافت می‌کنید.",
              },
              {
                q: "چگونه می‌توانم دوره‌ها را خریداری کنم؟",
                a: "از طریق صفحه هر دوره می‌توانید به راحتی اقدام به خرید کنید. روش‌های پرداخت متنوعی در دسترس است.",
              },
              {
                q: "آیا امکان بازپرداخت وجود دارد؟",
                a: "بله، تا ۷ روز پس از خرید اگر از دوره راضی نبودید، می‌توانید درخواست بازپرداخت دهید.",
              },
              {
                q: "آیا پشتیبانی دارید؟",
                a: "بله، تیم پشتیبانی ما در ساعات اداری آماده پاسخگویی به سوالات شماست.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-extrabold text-lg mb-2">{faq.q}</h3>
                <p className="text-foreground-secondary">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
