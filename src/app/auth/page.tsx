"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  CheckCircle,
  Eye,
  EyeOff,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { routes } from "@/shared/lib/routes";
import { images } from "@/shared/lib/images";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("ورود با موفقیت انجام شد!");
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    }, 3000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("رمز عبور و تکرار آن مطابقت ندارند!");
      return;
    }

    setSuccessMessage("ثبت‌نام با موفقیت انجام شد!");
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <Image
            src={images.robo4.src}
            alt={images.robo4.alt}
            width={300}
            height={400}
            className="w-72 h-96 hover:-rotate-6 transition-all duration-500 ease-in"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="mb-6">

              <Link
                href={routes.home()}
                className="inline-flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors pb-6"
              >
                <ArrowRight size={20} />
                بازگشت به صفحه اصلی
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold pb-2">
                {isLogin ? "خوش آمدید" : "ثبت‌نام در براکد"}
              </h1>
              <p className="text-foreground-secondary">
                {isLogin
                  ? "برای ادامه وارد حساب کاربری خود شوید"
                  : "برای شروع یادگیری، حساب کاربری بسازید"}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-success" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{successMessage}</h3>
                  <p className="text-foreground-secondary">
                    {isLogin
                      ? "در حال انتقال به پنل کاربری..."
                      : "به خانواده براکد خوش آمدید!"}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <form
                    onSubmit={isLogin ? handleLogin : handleRegister}
                    className="space-y-4"
                  >
                    {!isLogin && (
                      <div>
                        <label className="block mb-2 text-sm font-medium">
                          نام و نام خانوادگی
                        </label>
                        <div className="relative">
                          <User
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary"
                            size={18}
                          />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full bg-background border border-border rounded-2xl pr-10 pl-4 py-2.5 focus:outline-none focus:border-accent transition-colors"
                            placeholder="نام خود را وارد کنید"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        ایمیل
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary"
                          size={18}
                        />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-background border border-border rounded-2xl pr-10 pl-4 py-2.5 focus:outline-none focus:border-accent transition-colors"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        رمز عبور
                      </label>
                      <div className="relative">
                        <Lock
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary"
                          size={18}
                        />
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                          className="w-full bg-background border border-border rounded-2xl pr-10 pl-10 py-2.5 focus:outline-none focus:border-accent transition-colors"
                          placeholder="رمز عبور خود را وارد کنید"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-secondary hover:text-primary transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </div>

                    {!isLogin && (
                      <div>
                        <label className="block mb-2 text-sm font-medium">
                          تکرار رمز عبور
                        </label>
                        <div className="relative">
                          <Lock
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary"
                            size={18}
                          />
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            value={formData.confirmPassword}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                confirmPassword: e.target.value,
                              })
                            }
                            className="w-full bg-background border border-border rounded-2xl pr-10 pl-10 py-2.5 focus:outline-none focus:border-accent transition-colors"
                            placeholder="رمز عبور را دوباره وارد کنید"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-secondary hover:text-primary transition-colors"
                          >
                            {showConfirmPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    {isLogin && (
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded border-border"
                          />
                          <span className="text-sm text-foreground-secondary">
                            مرا به خاطر بسپار
                          </span>
                        </label>
                        <button
                          type="button"
                          className="text-sm text-accent hover:text-accent-hover transition-colors"
                        >
                          فراموشی رمز عبور؟
                        </button>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-success cursor-pointer text-white py-2.5 rounded-2xl font-bold hover:bg-success-hover transition-colors"
                    >
                      {isLogin ? "ورود" : "ثبت‌نام"}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 text-center">
              <p className="text-foreground-secondary">
                {isLogin ? "حساب کاربری ندارید؟" : "قبلاً ثبت‌نام کرده‌اید؟"}{" "}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setShowSuccess(false);
                    setShowPassword(false);
                    setShowConfirmPassword(false);
                    setFormData({
                      name: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                    });
                  }}
                  className="text-accent cursor-pointer hover:text-accent-hover font-bold transition-colors"
                >
                  {isLogin ? "ثبت‌نام کنید" : "وارد شوید"}
                </button>
              </p>
            </div>

            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-foreground-secondary">
                  یا ادامه دهید با
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex cursor-pointer items-center justify-center gap-2 bg-background border border-border rounded-2xl py-2.5 hover:border-primary transition-colors text-foreground-secondary hover:text-primary">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button className="flex cursor-pointer items-center justify-center gap-2 bg-background border border-border rounded-2xl py-2.5 hover:border-primary transition-colors text-foreground-secondary hover:text-primary">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Github
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
