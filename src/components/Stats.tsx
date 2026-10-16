import { ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Stats() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="stats" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute inset-0 dots-pattern opacity-40" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>
          <div className="mb-12 text-center">
            <span className="section-label tag-cyan mb-4">آمار و دستاوردها</span>
            <h2 className="mb-3 mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              اطلاعات <span className="gradient-text">مستند</span>
            </h2>
          </div>
          <div className="mx-auto flex max-w-2xl items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              آمار قابل‌تأییدی برای انتشار در دسترس نیست. هرگونه عدد یا دستاورد پس از مستندسازی و تأیید اضافه خواهد شد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
