import { CalendarDays, Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const contactInfo = [
  {
    icon: MapPin,
    label: 'نشانی کلینیک',
    value: 'در انتظار تأیید نشانی واقعی',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Phone,
    label: 'شماره تماس',
    value: 'در انتظار تأیید شماره تماس',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Mail,
    label: 'ایمیل',
    value: 'در انتظار تأیید ایمیل',
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: Clock,
    label: 'ساعات کاری',
    value: 'پس از تأیید اعلام می‌شود',
    color: 'from-violet-500 to-purple-600',
  },
];

export default function Contact() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 medical-pattern opacity-12" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/7 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-teal-500/7 blur-[120px]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>
          <div className="mb-14 text-center">
            <span className="section-label tag-cyan mb-4">تماس و نوبت‌دهی</span>
            <h2 className="mb-3 mt-4 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              <span className="gradient-text">راه‌های ارتباطی</span>
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600">
              اطلاعات تماس و نشانی پس از تأیید درج می‌شوند تا از انتشار جزئیات نادرست جلوگیری شود.
            </p>
            <div className="section-divider mx-auto mt-5 w-24" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:gap-12">
            <div className="grid gap-3 sm:grid-cols-2">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="flex min-h-32 items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 hover:bg-slate-50"
                  >
                    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${info.color} shadow-md`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold text-cyan-700">{info.label}</p>
                      <p className="text-sm leading-relaxed text-slate-600">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-teal-50 p-7 shadow-sm sm:p-10">
              <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-cyan-200/30 blur-3xl" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-sm ring-1 ring-cyan-100">
                  <CalendarDays className="h-7 w-7" />
                </div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-teal-700">رزرو نوبت</p>
                <h3 className="mb-4 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                  سامانه نوبت‌دهی هنوز فعال نیست
                </h3>
                <p className="mb-7 text-sm leading-relaxed text-slate-600">
                  در حال حاضر ثبت آنلاین درخواست از طریق این صفحه فعال نیست. پس از تأیید اطلاعات تماس و اتصال سامانه، امکان رزرو آنلاین اضافه می‌شود.
                </p>
                <div className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
                  <p className="text-xs leading-relaxed text-slate-600">
                    برای فعال‌سازی تماس یا رزرو آنلاین، شماره تلفن، ایمیل، نشانی و روش واقعی ثبت نوبت باید تأیید شوند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
