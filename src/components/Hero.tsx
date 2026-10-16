import { useEffect, useState } from 'react';
import {
  Phone, ShieldCheck, Star, Sparkles, ArrowLeft,
  Zap, Activity, Brain, Heart, Images
} from 'lucide-react';

/* ─── Images ───────────────────────────────────────── */
const IMG_DOCTOR = `${import.meta.env.BASE_URL}images/doctor-hashtroodi.jpg`;
const IMG_ACUP = 'https://images.pexels.com/photos/8313172/pexels-photo-8313172.jpeg?auto=compress&cs=tinysrgb&w=700&h=700';
const IMG_LASER = 'https://images.pexels.com/photos/5069508/pexels-photo-5069508.jpeg?auto=compress&cs=tinysrgb&w=700&h=700';
const IMG_CLINIC = 'https://images.pexels.com/photos/8312859/pexels-photo-8312859.jpeg?auto=compress&cs=tinysrgb&w=700&h=700';
const IMG_HERO_ACUP = `${import.meta.env.BASE_URL}images/hero-acupuncture.jpg`;
const IMG_HERO_LASER = `${import.meta.env.BASE_URL}images/hero-laser-therapy.jpg`;
const IMG_HERO_CONSULTATION = `${import.meta.env.BASE_URL}images/hero-consultation.jpg`;
const IMG_HERO_REHAB = `${import.meta.env.BASE_URL}images/hero-neuro-rehab.jpg`;

const heroBackgroundPhotos = [
  { src: IMG_HERO_ACUP, alt: 'درمان طب سوزنی' },
  { src: IMG_HERO_LASER, alt: 'لیزر درمانی' },
  { src: IMG_HERO_CONSULTATION, alt: 'مشاوره پزشکی در کلینیک' },
  { src: IMG_HERO_REHAB, alt: 'توانبخشی عصبی' },
];

const previewPhotos = [
  { src: IMG_DOCTOR, title: 'دکتر محمدرضا هشترودی', caption: 'تصویر پزشک', alt: 'تصویر دکتر محمدرضا هشترودی' },
  { src: IMG_ACUP, title: 'طب سوزنی', caption: 'تصویر مفهومی', alt: 'تصویر مفهومی مرتبط با طب سوزنی' },
  { src: IMG_LASER, title: 'لیزر درمانی', caption: 'تصویر مفهومی', alt: 'تصویر مفهومی مرتبط با لیزر درمانی' },
  { src: IMG_CLINIC, title: 'مراقبت درمانی', caption: 'تصویر مفهومی', alt: 'تصویر مفهومی از مراقبت درمانی' },
];

/* ─── Data ─────────────────────────────────────────── */
const careNotes = [
  { value: 'ارزیابی', label: 'پیش از هر تصمیم' },
  { value: 'آگاهی', label: 'از گزینه‌ها و محدودیت‌ها' },
  { value: 'هماهنگی', label: 'با پزشک معالج' },
  { value: 'اورژانس', label: 'برای وضعیت حاد' },
];

const treatments = [
  { icon: Brain,    label: 'مراقبت‌های عصبی', color: '#06b6d4' },
  { icon: Zap,      label: 'لیزر درمانی', color: '#0d9488' },
  { icon: Activity, label: 'طب سوزنی', color: '#0891b2' },
  { icon: Heart,    label: 'روش‌های مکمل', color: '#14b8a6' },
];

const ticker = ['طب سوزنی', 'لیزر درمانی', 'اکوپانکچر', 'مراقبت فردمحور', 'گزینه‌های مکمل', 'هماهنگی با پزشک', 'گفت‌وگوی آگاهانه', 'ارزیابی شرایط'];

/* ─── Inline SVG medical icons ────────────────────── */
function CrossIcon({ size = 20, opacity = 0.18 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ opacity }}>
      <rect x="9" y="2" width="6" height="20" rx="2" fill="#06b6d4" />
      <rect x="2" y="9" width="20" height="6" rx="2" fill="#06b6d4" />
    </svg>
  );
}
/* ─── Ticker ────────────────────────────────────────── */
function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden w-full">
      <div className="flex items-center gap-8 hero-ticker" style={{ width: 'max-content' }}>
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-2.5 text-slate-500 text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
            <CrossIcon size={10} opacity={0.5} />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main ─────────────────────────────────────────── */
export default function Hero() {
  const [activePreview, setActivePreview] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const selectedPhoto = previewPhotos[activePreview];

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroBackgroundPhotos.length);
    }, 4000);

    return () => window.clearInterval(slideTimer);
  }, []);

  return (
    <>
      <section id="home" className="relative min-h-[85vh] flex flex-col overflow-hidden bg-white">

        {/* ══ BG: four-photo cinematic slideshow and soft gradients ══ */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
          {/* Base gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(8,145,178,0.10)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(13,148,136,0.07)_0%,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,255,255,0.72)_0%,transparent_70%)]" />

          {/* Full-bleed cinematic background slideshow: one image changes every four seconds */}
          <div className="hero-slideshow" aria-hidden="true">
            {heroBackgroundPhotos.map((photo, index) => (
              <div key={photo.src} className={`hero-slide ${activeHeroSlide === index ? 'is-active' : ''}`}>
                <img src={photo.src} alt="" loading="eager" decoding="async" />
              </div>
            ))}
            <div className="hero-slideshow-wash" />
          </div>

          {/* Dot grid */}
          <div className="absolute inset-0 hero-dots opacity-12" />

          {/* Thin accent lines */}
          <div className="absolute top-[30%] left-0 w-[35%] h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
          <div className="absolute bottom-[25%] left-0 w-[50%] h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />

        </div>

        {/* ══ MAIN GRID ══ */}
        <div className="relative z-10 flex-1 flex flex-col">

          {/* ── top ID bar ── */}
          <div
            className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 animate-textReveal"
            style={{ animationDelay: '0.05s' }}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex w-2 h-2 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-teal-400/70 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-teal-400" />
              </span>
              <span className="text-[10px] text-cyan-700 font-bold tracking-[0.28em] uppercase">
                Acupuncture · Laser Therapy · Acu-Puncture
              </span>
            </div>
          </div>

          {/* ── two-column body ── */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
            <div className="w-full grid lg:grid-cols-2 gap-8 xl:gap-12 items-center py-6">

              {/* ════════════════ LEFT COLUMN ════════════════ */}
              <div className="flex flex-col">

                {/* Specialty accent */}
                <div className="flex items-center gap-3 mb-3 animate-textReveal" style={{ animationDelay: '0.1s' }}>
                  <div className="w-5 h-[2px] bg-cyan-400 flex-shrink-0" />
                  <span className="text-[11px] text-cyan-700 font-bold tracking-[0.28em] uppercase">
                    طب سوزنی، لیزر درمانی و اکوپانکچر
                  </span>
                </div>

                {/* ─── Doctor name — ONE line ─── */}
                <div className="animate-textReveal mb-2" style={{ animationDelay: '0.18s' }}>
                  <h1 className="flex items-baseline gap-3 flex-wrap leading-none">
                    <span className="text-slate-500 text-2xl sm:text-3xl font-semibold tracking-wide">دکتر</span>
                    <span className="text-slate-900 text-3xl sm:text-4xl font-black tracking-tight">محمد رضا</span>
                    <span className="text-3xl sm:text-4xl font-black tracking-tight hero-name-gradient">هشترودی</span>
                  </h1>
                </div>

                {/* Underline accent */}
                <div className="animate-textReveal mb-4" style={{ animationDelay: '0.24s' }}>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-[2px] w-16 bg-gradient-to-l from-cyan-400 to-transparent" />
                    <div className="h-[2px] w-6 bg-teal-500/40" />
                    <div className="h-[2px] w-2 bg-teal-500/20" />
                  </div>
                </div>

                {/* ─── One-line tagline ─── */}
                <div className="animate-textReveal mb-4" style={{ animationDelay: '0.32s' }}>
                  <p className="hero-tagline-one-line font-black text-slate-900 leading-tight tracking-tight">
                    درمان نوین <span className="hero-name-gradient">بیماری‌های عصبی و خودایمنی</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed max-w-md mb-5 animate-textReveal" style={{ animationDelay: '0.42s' }}>
                  گفت‌وگو درباره مراقبت‌های مکمل باید با توجه به شرایط هر فرد و در هماهنگی با پزشک معالج انجام شود. پاسخ به روش‌های درمانی در افراد مختلف می‌تواند متفاوت باشد.
                </p>

                {/* Treatment pills */}
                <div className="flex flex-wrap gap-2.5 mb-5 animate-textReveal" style={{ animationDelay: '0.5s' }}>
                  {treatments.map((t, i) => {
                    const Icon = t.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/65 border border-slate-200/70 hover:border-cyan-500/30 hover:bg-white/90 transition-all duration-300 cursor-default"
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: t.color }} />
                        <span className="text-[11px] text-slate-700 font-semibold">{t.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 mb-5 animate-textReveal" style={{ animationDelay: '0.58s' }}>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative flex items-center gap-2.5 text-white font-bold text-sm px-6 py-3.5 rounded-xl overflow-hidden transition-all duration-300
                      bg-gradient-to-l from-cyan-500 to-teal-500
                      shadow-[0_6px_24px_rgba(6,182,212,0.3)]
                      hover:shadow-[0_10px_36px_rgba(6,182,212,0.45)]
                      hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    راه‌های ارتباطی
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>

                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group flex items-center gap-2 text-slate-600 hover:text-cyan-700 text-sm font-semibold transition-colors duration-200"
                  >
                    <ArrowLeft className="w-4 h-4 text-cyan-700 transition-transform duration-200 group-hover:-translate-x-1" />
                    مشاهده خدمات
                  </button>
                </div>

                {/* Trust chips */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 animate-textReveal" style={{ animationDelay: '0.66s' }}>
                  {[
                    { icon: ShieldCheck, text: 'ارزیابی شرایط فردی' },
                    { icon: Star,        text: 'بررسی گزینه‌های مراقبتی' },
                    { icon: Sparkles,    text: 'هماهنگی با پزشک معالج' },
                  ].map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <div key={i} className="flex items-center gap-1.5 text-slate-600">
                        <Icon className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0" />
                        <span className="text-[10px] font-medium">{b.text}</span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* ════════════════ RIGHT COLUMN ════════════════ */}
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[420px] mx-auto animate-scaleIn" style={{ animationDelay: '0.3s', opacity: 0 }}>

                {/* ── Doctor photo preview frame ── */}
                <div className="hero-doctor-frame rounded-[30px] p-[1px]">
                  <div className="relative h-[260px] sm:h-[320px] lg:h-[370px] overflow-hidden rounded-[29px] bg-slate-900">
                    <img
                      key={selectedPhoto.src}
                      src={selectedPhoto.src}
                      alt={selectedPhoto.alt}
                      loading={activePreview === 0 ? 'eager' : 'lazy'}
                      className={`w-full h-full object-cover hero-bg-zoom ${activePreview === 0 ? 'hero-doctor-photo' : 'object-center'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02060f]/90 via-[#02060f]/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#02060f]/25 via-transparent to-transparent" />

                    <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#02060f]/55 px-3 py-2 text-[10px] font-bold text-white/85 backdrop-blur-lg sm:text-xs">
                        <Images className="h-3.5 w-3.5 text-cyan-300" />
                        پیش‌نمایش گالری
                      </span>
                      <span className="rounded-full border border-white/10 bg-[#02060f]/50 px-3 py-2 text-[10px] font-bold tracking-widest text-white/75 backdrop-blur-lg" dir="ltr">
                        0{activePreview + 1} / 04
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-[#02060f]/70 px-4 py-3.5 backdrop-blur-xl sm:px-5 sm:py-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg shadow-cyan-950/40">
                            <Activity className="h-5 w-5 text-white" />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-black leading-tight text-white sm:text-base">{selectedPhoto.title}</p>
                            <p className="mt-1 truncate text-[10px] font-medium text-cyan-200/80 sm:text-[11px]">{selectedPhoto.caption}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Four-image preview selector ── */}
                <div className="mt-3 grid grid-cols-4 gap-2.5" role="group" aria-label="انتخاب تصویر پیش‌نمایش">
                  {previewPhotos.map((photo, index) => (
                    <button
                      key={photo.title}
                      type="button"
                      onClick={() => setActivePreview(index)}
                      aria-label={`نمایش تصویر ${photo.title}`}
                      aria-pressed={activePreview === index}
                      className={`hero-preview-thumb group relative aspect-[1.6/1] overflow-hidden rounded-xl border text-right transition-all duration-300 ${
                        activePreview === index ? 'is-active border-cyan-300/90 ring-2 ring-cyan-400/30' : 'border-white/10 hover:border-white/35'
                      }`}
                    >
                      <img src={photo.src} alt="" loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${index === 0 ? 'object-left' : 'object-center'}`} />
                      <span className="absolute inset-0 bg-gradient-to-t from-[#02060f]/90 via-[#02060f]/10 to-transparent" />
                      <span className="absolute bottom-1.5 right-1 left-1 truncate text-center text-[8px] font-bold text-white sm:bottom-2 sm:text-[10px]">{['دکتر', 'طب سوزنی', 'لیزر', 'مفهومی'][index]}</span>
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* ── Scroll cue ── */}
          <div className="hidden lg:flex flex-col items-center gap-1.5 pb-6 text-slate-400 animate-textReveal" style={{ animationDelay: '1.1s' }}>
            <span className="text-[9px] tracking-[0.3em] uppercase font-bold">اسکرول کنید</span>
            <ArrowLeft className="w-3 h-3 rotate-[-90deg] animate-bounce" />
          </div>
        </div>

        {/* ══ CARE NOTES STRIP ══ */}
        <div className="relative z-10 border-t border-slate-200 bg-white/90 backdrop-blur-sm animate-textReveal" style={{ animationDelay: '0.85s' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {careNotes.map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center py-5 gap-0.5 relative
                    ${i > 0 ? 'border-r border-slate-200' : ''}
                    ${i >= 2 ? 'border-t border-slate-200 sm:border-t-0' : ''}
                  `}
                >
                  <span className="text-lg sm:text-xl font-black leading-none text-cyan-700">{s.value}</span>
                  <span className="text-slate-500 text-[10px] font-bold tracking-wide mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ TICKER STRIP ══ */}
        <div className="relative z-10 border-t border-slate-200 py-3 overflow-hidden bg-white animate-fadeIn" style={{ animationDelay: '1.3s', opacity: 0 }}>
          <Ticker />
        </div>

      </section>

    </>
  );
}
