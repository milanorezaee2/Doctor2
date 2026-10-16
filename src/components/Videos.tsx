import { CirclePlay } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const videoSlots = [
  { id: 1, title: 'ویدیو اول', youtubeId: '' },
  { id: 2, title: 'ویدیو دوم', youtubeId: '' },
  { id: 3, title: 'ویدیو سوم', youtubeId: '' },
  { id: 4, title: 'ویدیو چهارم', youtubeId: '' },
  { id: 5, title: 'ویدیو پنجم', youtubeId: '' },
  { id: 6, title: 'ویدیو ششم', youtubeId: '' },
];

export default function Videos() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="videos" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute inset-0 medical-pattern opacity-20" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>

          {/* Header */}
          <div className="mb-12 text-center">
            <span className="section-label tag-cyan mb-4">ویدیوهای آموزشی</span>
            <h2 className="mb-3 mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              محتوای <span className="gradient-text">ویدیویی</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
              آخرین ویدیوهای آموزشی منتشر‌شده در کانال یوتیوب کلینیک
            </p>
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoSlots.map((v) => (
              <div
                key={v.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {v.youtubeId ? (
                  /* ── Live YouTube embed ── */
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  /* ── Placeholder ── */
                  <div className="relative flex aspect-video w-full items-center justify-center bg-slate-100">
                    <div className="flex flex-col items-center gap-2 text-slate-400">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-slate-300 transition-colors group-hover:border-cyan-400 group-hover:text-cyan-500">
                        <CirclePlay className="h-7 w-7" />
                      </div>
                      <span className="text-xs">به‌زودی</span>
                    </div>
                    {/* Slot number badge */}
                    <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2 py-0.5 text-xs font-bold text-slate-400 shadow-sm backdrop-blur-sm">
                      {String(v.id).padStart(2, '0')}
                    </span>
                  </div>
                )}

                {/* Card footer */}
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-slate-700">{v.title}</p>
                  {!v.youtubeId && (
                    <p className="mt-0.5 text-xs text-slate-400">لینک یوتیوب اضافه نشده</p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
