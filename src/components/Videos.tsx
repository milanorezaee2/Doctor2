import { useEffect, useRef, useState } from 'react';
import { Play, Clock, X, Loader2, ExternalLink, Info } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

/*
 * ویدیوهای این بخش فعلاً استاک و مفهومی‌اند (Pexels / Pixabay).
 * برای جایگزینی با ویدیوهای اختصاصی دکتر، کافی است برای هر مورد
 * مقدار `src` را با آدرس فایل ویدیو عوض کنید، یا به‌جای آن
 * `youtubeId` ویدیو یوتیوب را قرار دهید (پوستر و عنوان را هم به‌روز کنید).
 */
type VideoItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  /** مدت ویدیو (ثانیه) */
  duration: number;
  poster: string;
  /** آدرس مستقیم فایل MP4 */
  src?: string;
  /** یا: شناسه ویدیو در یوتیوب */
  youtubeId?: string;
  sourceLabel: string;
  sourceUrl: string;
};

const videos: VideoItem[] = [
  {
    id: 'acupuncture-session',
    title: 'جلسه درمانی طب سوزنی',
    description: 'فضای آرام یک جلسه طب سوزنی و نحوه قرارگیری سوزن‌ها در نقاط منتخب بدن.',
    category: 'طب سوزنی',
    duration: 20,
    poster: 'https://images.pexels.com/videos/8313097/acupuncture-acupuncture-point-acupuncturist-adult-8313097.jpeg?auto=compress&w=960',
    src: 'https://videos.pexels.com/video-files/8313097/8313097-hd_1920_1080_30fps.mp4',
    sourceLabel: 'Pexels — RDNE Stock project',
    sourceUrl: 'https://www.pexels.com/video/a-patient-receiving-acupuncture-treatment-8313097/',
  },
  {
    id: 'laser-therapy',
    title: 'لیزر درمانی',
    description: 'نمایی مفهومی از به‌کارگیری فناوری لیزر در محیط درمانی و مراقبتی.',
    category: 'لیزر درمانی',
    duration: 9,
    poster: 'https://cdn.pixabay.com/video/2021/09/10/88091-602895104_tiny.jpg',
    src: 'https://cdn.pixabay.com/video/2021/09/10/88091-602895104_large.mp4',
    sourceLabel: 'Pixabay — Laser Therapy Medicine',
    sourceUrl: 'https://pixabay.com/videos/laser-therapy-medicine-health-88091/',
  },
  {
    id: 'consultation',
    title: 'مشاوره و ارزیابی پیش از درمان',
    description: 'گفت‌وگوی پزشک و مراجعه‌کننده؛ نخستین گام برای ارزیابی شرایط و انتخاب مسیر مراقبت.',
    category: 'ارزیابی',
    duration: 10,
    poster: 'https://images.pexels.com/videos/4352136/doctor-gp-health-patient-4352136.jpeg?auto=compress&w=960',
    src: 'https://videos.pexels.com/video-files/4352136/4352136-hd_1920_1080_25fps.mp4',
    sourceLabel: 'Pexels — olia danilevich',
    sourceUrl: 'https://www.pexels.com/video/a-doctor-talking-to-his-patient-4352136/',
  },
  {
    id: 'acupuncture-closeup',
    title: 'طب سوزنی از نمای نزدیک',
    description: 'جزئیات ظریف کار با سوزن‌های طب سوزنی و تحریک نقاط منتخب، از نمای نزدیک.',
    category: 'طب سوزنی',
    duration: 9,
    poster: 'https://images.pexels.com/videos/8313322/acupuncture-acupuncture-point-acupuncturist-aid-8313322.jpeg?auto=compress&w=960',
    src: 'https://videos.pexels.com/video-files/8313322/8313322-hd_1920_1080_30fps.mp4',
    sourceLabel: 'Pexels — RDNE Stock project',
    sourceUrl: 'https://www.pexels.com/video/a-person-receiving-acupuncture-treatment-8313322/',
  },
  {
    id: 'mri-review',
    title: 'بررسی پرونده و تصویربرداری',
    description: 'بررسی نتایج تصویربرداری (MRI) و پرونده پزشکی؛ بخشی مهم از ارزیابی در مشکلات عصبی.',
    category: 'ارزیابی عصبی',
    duration: 23,
    poster: 'https://images.pexels.com/videos/7089595/pexels-photo-7089595.jpeg?auto=compress&w=960',
    src: 'https://videos.pexels.com/video-files/7089595/7089595-uhd_2560_1440_25fps.mp4',
    sourceLabel: 'Pexels — MART PRODUCTION',
    sourceUrl: 'https://www.pexels.com/video/a-doctor-holding-his-patient-medical-chart-7089595/',
  },
  {
    id: 'muscle-support',
    title: 'حمایت عضلانی و دردهای مزمن',
    description: 'استفاده از نوارهای حمایتی عضلانی (کینزیوتیپ) در مراقبت از درد و عضلات پشت.',
    category: 'مراقبت عضلانی',
    duration: 11,
    poster: 'https://images.pexels.com/videos/5793298/pexels-photo-5793298.jpeg?auto=compress&w=960',
    src: 'https://videos.pexels.com/video-files/5793298/5793298-uhd_2560_1440_25fps.mp4',
    sourceLabel: 'Pexels — Yan Krukau',
    sourceUrl: 'https://www.pexels.com/video/physical-therapy-5793298/',
  },
];

/* ─── Helpers ──────────────────────────────────── */
const FA_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

function toFaDigits(value: string | number): string {
  return String(value).replace(/\d/g, (d) => FA_DIGITS[Number(d)] ?? d);
}

function formatDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return toFaDigits(`${minutes}:${seconds}`);
}

/* ─── One click-to-play video card ─────────────── */
function VideoCard({
  item,
  index,
  isActive,
  onPlay,
  onClose,
}: {
  item: VideoItem;
  index: number;
  isActive: boolean;
  onPlay: (id: string) => void;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePlay = () => {
    setHasError(false);
    setIsLoading(true);
    onPlay(item.id);
  };

  /* Pause playback when the playing video is scrolled out of view */
  useEffect(() => {
    const video = videoRef.current;
    if (!isActive || !video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !video.paused) video.pause();
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [isActive]);

  return (
    <article className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-[0_24px_50px_-20px_rgba(8,145,178,0.35)]">
      {/* ── Media frame ── */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {isActive ? (
          <>
            {item.youtubeId ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              />
            ) : hasError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                <p className="text-sm font-bold text-white">بارگذاری ویدیو ممکن نشد</p>
                <p className="text-xs leading-6 text-slate-400">
                  اتصال اینترنت خود را بررسی کنید یا ویدیو را در منبع اصلی تماشا کنید.
                </p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-cyan-200 backdrop-blur transition hover:bg-white/20"
                >
                  مشاهده در منبع
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ) : (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={item.src}
                poster={item.poster}
                title={item.title}
                autoPlay
                controls
                playsInline
                preload="auto"
                onCanPlay={() => setIsLoading(false)}
                onPlaying={() => setIsLoading(false)}
                onWaiting={() => setIsLoading(true)}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
              />
            )}

            {/* Loading spinner while the file streams in */}
            {isLoading && !hasError && (
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-slate-900/40">
                <Loader2 className="h-9 w-9 animate-spin text-cyan-300" aria-label="در حال بارگذاری ویدیو" />
              </div>
            )}

            {/* Close / back to poster */}
            <button
              type="button"
              onClick={onClose}
              aria-label="بستن ویدیو"
              className="absolute left-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-slate-950/55 text-white backdrop-blur transition hover:bg-slate-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <X className="h-4 w-4" />
            </button>
          </>
        ) : (
          /* ── Poster facade: the video file is only fetched after a click ── */
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`پخش ویدیو: ${item.title}`}
            className="group/media absolute inset-0 block h-full w-full text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300"
          >
            <img
              src={item.poster}
              alt={`تصویر ویدیو: ${item.title}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/media:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-slate-950/25 transition group-hover/media:from-slate-950/65" />

            {/* Top row: category + duration */}
            <span className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
              <span className="rounded-full border border-white/20 bg-slate-950/50 px-3 py-1 text-[10px] font-extrabold text-cyan-100 backdrop-blur">
                {item.category}
              </span>
              <span
                className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-slate-950/50 px-2.5 py-1 text-[10px] font-bold text-white/85 backdrop-blur"
                dir="ltr"
              >
                <Clock className="h-3 w-3" />
                {formatDuration(item.duration)}
              </span>
            </span>

            {/* Center play button */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="relative flex h-16 w-16 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-cyan-400/25 transition-transform duration-500 group-hover/media:scale-125" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 shadow-[0_12px_30px_rgba(6,182,212,0.45)] ring-1 ring-white/40 transition-transform duration-300 group-hover/media:scale-110">
                  <Play className="h-6 w-6 -scale-x-100 fill-white text-white" />
                </span>
              </span>
            </span>

            {/* Bottom label */}
            <span className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-white/90">تماشای ویدیو</span>
              <span className="text-[10px] font-bold tracking-widest text-white/50" dir="ltr">
                {String(index + 1).padStart(2, '0')}
              </span>
            </span>
          </button>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="px-5 py-4">
        <h3 className="text-[15px] font-extrabold leading-snug text-slate-800">{item.title}</h3>
        <p className="mt-1.5 text-[12.5px] leading-6 text-slate-500">{item.description}</p>
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="text-[10px] font-semibold text-slate-400">ویدیو مفهومی (استاک)</span>
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-bold text-cyan-700 transition hover:text-cyan-500"
            aria-label={`منبع ویدیو: ${item.sourceLabel}`}
          >
            منبع: {item.sourceLabel}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Videos() {
  const { ref, active } = useReveal<HTMLDivElement>();
  const [activeId, setActiveId] = useState<string | null>(null);

  const totalDuration = videos.reduce((sum, v) => sum + v.duration, 0);

  return (
    <section id="videos" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute inset-0 medical-pattern opacity-20" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>

          {/* Header */}
          <div className="mb-12 text-center">
            <span className="section-label tag-cyan mb-4">ویدیوهای مفهومی</span>
            <h2 className="mb-3 mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              نگاهی ویدیویی به <span className="gradient-text">روش‌های درمانی</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              {toFaDigits(videos.length)} ویدیوی کوتاه ({toFaDigits(totalDuration)} ثانیه) برای آشنایی
              بصری با فضای طب سوزنی، لیزر درمانی و روند ارزیابی؛ ویدیوهای اختصاصی کلینیک
              به‌زودی در همین بخش منتشر می‌شوند.
            </p>
          </div>

          {/* Video grid — only one video plays at a time */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((item, i) => (
              <VideoCard
                key={item.id}
                item={item}
                index={i}
                isActive={activeId === item.id}
                onPlay={setActiveId}
                onClose={() => setActiveId(null)}
              />
            ))}
          </div>

          {/* Transparency note */}
          <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-cyan-100 bg-white/80 px-5 py-4">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600" />
            <p className="text-xs leading-6 text-slate-500">
              این ویدیوها استاک و صرفاً برای آشنایی با فضای روش‌ها هستند و جلسه درمان واقعی در
              کلینیک را نشان نمی‌دهند. انتخاب هر روش درمانی تنها پس از ارزیابی پزشک و متناسب با
              شرایط هر فرد انجام می‌شود.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
