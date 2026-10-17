import { Activity, Heart, Mail, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'خانه', id: 'home' },
  { label: 'درباره پزشک', id: 'about' },
  { label: 'خدمات', id: 'services' },
  { label: 'زمینه‌های ارزیابی', id: 'conditions' },
  { label: 'ویدیوها', id: 'videos' },
  { label: 'تماس', id: 'contact' },
];

const serviceLinks = ['طب سوزنی', 'لیزر درمانی', 'اکوپانکچر', 'روش‌های مکمل', 'ارزیابی فردمحور'];

export default function Footer() {
  const persianYear = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(new Date());
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative z-10 overflow-hidden bg-slate-50">
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute inset-0 medical-pattern opacity-8" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-teal-500 shadow-lg">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight text-slate-900">دکتر محمدرضا هشترودی</p>
                <p className="mt-0.5 text-[11px] font-medium text-cyan-700">طب سوزنی و لیزر درمانی</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              آشنایی با روش‌های مراقبتی و بررسی گزینه‌های مکمل؛ هر تصمیم درمانی باید با توجه به شرایط فرد و هماهنگی با پزشک معالج گرفته شود.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold text-slate-900">دسترسی سریع</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="group flex items-center gap-1.5 text-xs text-slate-600 transition-colors duration-200 hover:text-cyan-700"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-400 transition-colors group-hover:bg-cyan-500" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold text-slate-900">خدمات و روش‌ها</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="group flex items-center gap-1.5 text-xs text-slate-600 transition-colors duration-200 hover:text-cyan-700"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-400 transition-colors group-hover:bg-cyan-500" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold text-slate-900">اطلاعات تماس</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-xs leading-relaxed text-slate-600">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-600" />
                <span>شماره تماس: در انتظار تأیید</span>
              </li>
              <li className="flex items-start gap-3 text-xs leading-relaxed text-slate-600">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-600" />
                <span>ایمیل: در انتظار تأیید</span>
              </li>
              <li className="flex items-start gap-3 text-xs leading-relaxed text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-600" />
                <span>نشانی: در انتظار تأیید</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 py-5 sm:flex-row">
          <p className="text-[11px] text-slate-500">
            © {persianYear} — دکتر محمدرضا هشترودی
          </p>
          <p className="flex items-center gap-1 text-[11px] text-slate-500">
            طراحی با
            <Heart className="h-3 w-3 fill-rose-500 text-rose-500" />
            برای سلامتی شما
          </p>
        </div>
      </div>
    </footer>
  );
}
