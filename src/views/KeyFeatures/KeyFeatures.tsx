import { Code, Brain, Users } from "lucide-react";

export default function KeyFeatures() {
  return (
    <div className="bg-surface flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full px-5 py-20 max-w-7xl">
        <div className="flex flex-col gap-3 p-8 bg-card border border-border hover:border-accent rounded-2xl">
          <span className="bg-code w-fit p-3 rounded-2xl">
            <Code className="text-accent w-7 h-7" />
          </span>
          <h2 className="text-2xl font-bold">برنامه‌نویسی حرفه‌ای</h2>
          <p className="text-foreground-secondary">
            از مبانی تا پیشرفته با پروژه‌های واقعی
          </p>
        </div>
        <div className="flex flex-col gap-3 p-8 bg-card border border-border hover:border-primary rounded-2xl">
          <span className="bg-brain w-fit p-3 rounded-2xl">
            <Brain className="text-primary w-7 h-7" />
          </span>
          <h2 className="text-2xl font-bold">هوش مصنوعی</h2>
          <p className="text-foreground-secondary">
            یادگیری عمیق و یادگیری ماشین از صفر
          </p>
        </div>
        <div className="flex flex-col gap-3 p-8 bg-card border border-border hover:border-success rounded-2xl">
          <span className="bg-users w-fit p-3 rounded-2xl">
            <Users className="text-success w-7 h-7" />
          </span>
          <h2 className="text-2xl font-bold">پشتیبانی مستمر</h2>
          <p className="text-foreground-secondary">
            همراهی اساتید و جامعه فعال دانشجویان
          </p>
        </div>
      </div>
    </div>
  );
}
