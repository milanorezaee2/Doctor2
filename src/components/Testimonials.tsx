import { MessageCircleHeart } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 dots-pattern opacity-30" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>
          <div className="mb-12 text-center">
            <span className="section-label tag-teal mb-4">تجربه مراجعه‌کنندگان</span>
            <h2 className="mb-3 mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              نظرهای <span className="gradient-text">تأییدشده</span>
            </h2>
          </div>
          <div className="mx-auto flex max-w-2xl items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <MessageCircleHeart className="h-5 w-5" />
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              نظرها فقط با رضایت صاحبان آن‌ها و پس از تأیید منتشر می‌شوند. در حال حاضر محتوای تأییدشده‌ای برای نمایش در دسترس نیست.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
