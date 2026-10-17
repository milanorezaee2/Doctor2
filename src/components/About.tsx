import { useEffect, useRef, useState } from 'react';
import {
  GraduationCap, Award, Stethoscope, BookOpen, ArrowLeft,
  BadgeCheck, FlaskConical, Microscope, Globe, Quote, Users,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';

/* ─── Images (local, so the section never depends on stock hosts) ─── */
const IMG_MAIN = `${import.meta.env.BASE_URL}images/doctor-hashtroodi.jpg`;
const IMG_CONSULT = `${import.meta.env.BASE_URL}images/hero-consultation.jpg`;
const IMG_ACUP = `${import.meta.env.BASE_URL}images/hero-acupuncture.jpg`;

/* ─── Timeline ────────────────────────────────── */
const timeline = [
  {
    year: '۱۳۸۰',
    title: 'فارغ‌التحصیلی پزشکی',
    event: 'فارغ‌التحصیلی از دانشکده پزشکی دانشگاه تهران با رتبه ممتاز',
    icon: GraduationCap,
    tag: 'تحصیل',
  },
  {
    year: '۱۳۸۵',
    title: 'فلوشیپ بین‌المللی',
    event: 'دریافت فلوشیپ تخصصی طب سوزنی از دانشگاه پکن، چین',
    icon: Globe,
    tag: 'بین‌المللی',
  },
  {
    year: '۱۳۹۰',
    title: 'تأسیس کلینیک',
    event: 'راه‌اندازی کلینیک تخصصی طب سوزنی و لیزر درمانی در تهران',
    icon: Stethoscope,
    tag: 'کلینیک',
  },
  {
    year: '۱۳۹۵',
    title: 'بورد بین‌المللی',
    event: 'دریافت بورد بین‌المللی لیزر درمانی پزشکی',
    icon: Award,
    tag: 'تخصص',
  },
  {
    year: '۱۴۰۰',
    title: 'پیشگام اکوپانکچر',
    event: 'معرفی تکنیک اکوپانکچر در ایران — بیش از ۳۰ مقاله ISI',
    icon: Microscope,
    tag: 'پژوهش',
  },
];

/* ─── Credentials ─────────────────────────────── */
const creds = [
  {
    icon: GraduationCap,
    label: 'دکترای پزشکی',
    sub: 'دانشگاه تهران',
    detail: 'دکترای عمومی پزشکی با رتبه ممتاز از معتبرترین دانشگاه ایران',
    num: '۰۱',
    grad: 'linear-gradient(135deg,#0e7490,#0891b2)',
    glow: 'rgba(8,145,178,0.22)',
    accent: '#0891b2',
  },
  {
    icon: FlaskConical,
    label: 'فلوشیپ طب سوزنی',
    sub: 'پکن، چین',
    detail: 'آموزش پیشرفته طب سوزنی در مرکز بین‌المللی پزشکی سنتی پکن',
    num: '۰۲',
    grad: 'linear-gradient(135deg,#0f766e,#14b8a6)',
    glow: 'rgba(13,148,136,0.22)',
    accent: '#0d9488',
  },
  {
    icon: BadgeCheck,
    label: 'بورد لیزر درمانی',
    sub: 'بین‌المللی',
    detail: 'گواهینامه بین‌المللی لیزر درمانی پزشکی از انجمن اروپایی',
    num: '۰۳',
    grad: 'linear-gradient(135deg,#0369a1,#06b6d4)',
    glow: 'rgba(2,132,199,0.2)',
    accent: '#0284c7',
  },
  {
    icon: BookOpen,
    label: '+۳۰ مقاله ISI',
    sub: 'ژورنال‌های معتبر',
    detail: 'انتشار بیش از سی مقاله علمی در معتبرترین ژورنال‌های بین‌المللی',
    num: '۰۴',
    grad: 'linear-gradient(135deg,#155e75,#0d9488)',
    glow: 'rgba(15,118,110,0.2)',
    accent: '#0f766e',
  },
];

/* ─── Reveal an element once, when it actually enters the viewport ─── */
function useInViewOnce<T extends HTMLElement = HTMLDivElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -6% 0px' }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ─── Animated stat pill (Persian digits, eased count-up) ─── */
function StatPill({
  value,
  label,
  icon: Icon,
  delay,
}: {
  value: number;
  label: string;
  icon: typeof Users;
  delay: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.4);
  const [prefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const count = useCountUp(value, 1600, inView && !prefersReducedMotion);
  const shown = prefersReducedMotion && inView ? value : count;

  return (
    <div
      ref={ref}
      className="about-stat-pill"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? undefined : 'translateY(14px)',
        transition: `opacity 0.6s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.6s cubic-bezier(.16,1,.3,1) ${delay}s, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
      }}
    >
      <span className="about-stat-icon">
        <Icon className="h-4 w-4 text-white" />
      </span>
      <span className="flex flex-col">
        <span className="about-stat-num">+{shown.toLocaleString('fa-IR')}</span>
        <span className="about-stat-label">{label}</span>
      </span>
    </div>
  );
}

/* ─── One timeline row, revealed individually on scroll ─── */
function TimelineRow({
  item,
  index,
}: {
  item: (typeof timeline)[number];
  index: number;
}) {
  const Icon = item.icon;
  const isRight = index % 2 === 0;
  const { ref, inView } = useInViewOnce<HTMLLIElement>(0.25);

  return (
    <li
      ref={ref}
      className={`lux-timeline-row ${isRight ? 'lux-timeline-row--right' : 'lux-timeline-row--left'}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1)',
      }}
    >
      {/* Card */}
      <div className="lux-timeline-card group">
        <div className="lux-tl-shimmer" />
        <div className="lux-tl-top-accent" />
        <div className="lux-tl-card-inner">
          <div className="lux-tl-year">{item.year}</div>
          <span className="lux-tl-tag">{item.tag}</span>
          <h4 className="lux-tl-title">{item.title}</h4>
          <p className="lux-tl-desc">{item.event}</p>
        </div>
      </div>

      {/* Center node */}
      <div className="lux-timeline-node-wrap">
        <div className={`lux-tl-node ${inView ? 'is-active' : ''}`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div className="lux-tl-node-ring" />
      </div>

      {/* Spacer for opposite side */}
      <div className="lux-timeline-spacer" />
    </li>
  );
}

/* ─── One credential card, revealed individually on scroll ─── */
function CredentialCard({
  cred,
  index,
}: {
  cred: (typeof creds)[number];
  index: number;
}) {
  const Icon = cred.icon;
  const { ref, inView } = useInViewOnce<HTMLElement>(0.2);
  const [settled, setSettled] = useState(false);

  /* Drop the inline reveal styles once the entrance finishes,
     so the CSS hover lift responds instantly afterwards */
  useEffect(() => {
    if (!inView) return;
    const timer = window.setTimeout(() => setSettled(true), 800 + index * 100);
    return () => window.clearTimeout(timer);
  }, [inView, index]);

  return (
    <article
      ref={ref}
      className="lux-cred-card group"
      style={
        settled
          ? undefined
          : {
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.96)',
              transition: `opacity 0.65s cubic-bezier(.16,1,.3,1) ${index * 0.1}s, transform 0.65s cubic-bezier(.16,1,.3,1) ${index * 0.1}s`,
            }
      }
    >
      <div className="lux-cred-border-glow" style={{ background: cred.grad }} />
      <div className="lux-cred-shimmer" />
      <div
        className="lux-cred-num"
        style={{ WebkitTextStroke: `1px ${cred.accent}`, color: 'transparent' }}
        aria-hidden="true"
      >
        {cred.num}
      </div>
      <div className="lux-cred-icon-wrap" style={{ background: cred.grad }}>
        <div className="lux-cred-icon-glow" style={{ background: cred.glow }} />
        <Icon className="w-6 h-6 text-white relative z-10" />
      </div>
      <div className="lux-cred-body">
        <h4 className="lux-cred-label">{cred.label}</h4>
        <p className="lux-cred-sub" style={{ color: cred.accent }}>{cred.sub}</p>
        <p className="lux-cred-detail">{cred.detail}</p>
      </div>
      <div className="lux-cred-bottom-line" style={{ background: cred.grad }} />
    </article>
  );
}

export default function About() {
  const { ref: heroRef, active: heroActive } = useReveal<HTMLDivElement>();

  /* Timeline progress line fills as the visitor scrolls through it */
  const railRef = useRef<HTMLDivElement>(null);
  const [railProgress, setRailProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = railRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const target = window.innerHeight * 0.72;
      const progress = (target - rect.top) / rect.height;
      setRailProgress(Math.min(1, Math.max(0, progress)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="about" className="relative overflow-hidden about-section-bg">

      {/* ══ Ambient orbs ══ */}
      <div className="about-orb about-orb-1 pointer-events-none" />
      <div className="about-orb about-orb-2 pointer-events-none" />
      <div className="about-grid-overlay pointer-events-none" />

      {/* ══════════════════════════════════════════════
          HERO PART — image + headline
      ══════════════════════════════════════════════ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div ref={heroRef} className={`reveal ${heroActive ? 'active' : ''}`}>

          {/* Section badge */}
          <div className="flex justify-center mb-12">
            <div className="about-badge">
              <span className="about-badge-dot" />
              درباره پزشک
              <span className="about-badge-en" dir="ltr">About The Doctor</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── LEFT: text ── */}
            <div className="order-2 lg:order-1 flex flex-col gap-6">

              {/* Headline */}
              <div>
                <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.18] tracking-tight text-slate-900 mb-4">
                  پیشگام <span className="about-headline-gradient">درمان نوین</span>
                  <br />
                  <span className="text-slate-400 text-3xl sm:text-4xl xl:text-5xl font-bold">در ایران</span>
                </h2>
                <div className="about-headline-line" />
              </div>

              {/* Bio */}
              <p className="text-slate-600 text-base leading-[1.95] max-w-lg">
                دکتر محمدرضا هشترودی با{' '}
                <strong className="font-extrabold text-slate-800">بیش از دو دهه تجربه بالینی</strong>
                ، دانش پزشکی مدرن را با حکمت طب سنتی درآمیخته است؛
                رویکردی فردمحور که هزاران بیمار را در مسیر بهبودی همراهی کرده است.
              </p>

              {/* Quote */}
              <div className="about-quote-block">
                <div className="about-quote-bar" />
                <div>
                  <Quote className="h-5 w-5 -scale-x-100 text-cyan-500 mb-2" aria-hidden="true" />
                  <p className="text-slate-700 text-[15px] leading-[1.9] italic font-medium">
                    «هدف من ترکیب خرد طب سنتی با دستاوردهای پزشکی نوین
                    برای درمان ریشه‌ای بیماری‌های صعب‌العلاج است.»
                  </p>
                  <p className="text-cyan-700 text-xs font-black mt-3">
                    دکتر محمدرضا هشترودی
                  </p>
                </div>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mt-2">
                <StatPill value={5000} label="بیمار" icon={Users} delay={0} />
                <StatPill value={20} label="سال تجربه" icon={Stethoscope} delay={0.1} />
                <StatPill value={30} label="مقاله ISI" icon={BookOpen} delay={0.2} />
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-3 text-sm font-bold text-white btn-primary px-7 py-4 rounded-2xl relative z-10"
                >
                  مشاهده راه‌های ارتباطی
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-cyan-600 transition-colors duration-200"
                >
                  مشاهده خدمات
                  <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                </button>
              </div>

            </div>

            {/* ── RIGHT: photo composition ── */}
            <div className="order-1 lg:order-2 relative">
              <div className="about-photo-wrapper">

                {/* Soft gradient glow behind the portrait */}
                <div className="about-photo-glow" />

                {/* Main photo */}
                <div className="about-main-photo-frame">
                  <img
                    src={IMG_MAIN}
                    alt="پرتره دکتر محمدرضا هشترودی"
                    loading="lazy"
                    decoding="async"
                    className="about-doctor-img w-full h-full object-cover"
                  />
                  <div className="about-photo-overlay" />

                  {/* Name chip at bottom */}
                  <div className="about-name-chip">
                    <div>
                      <p className="text-white font-black text-sm leading-tight">دکتر محمدرضا هشترودی</p>
                      <p className="text-cyan-200 text-[10px] font-semibold mt-1">متخصص طب سوزنی و لیزر درمانی</p>
                    </div>
                    <div className="about-verified-badge" aria-hidden="true">
                      <BadgeCheck className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating mini cards */}
                <div className="about-float-card about-float-card--tl animate-floatY">
                  <img src={IMG_CONSULT} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 to-transparent rounded-xl" />
                  <span className="absolute bottom-2 right-2.5 text-white/85 text-[9px] font-black bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">مشاوره و ارزیابی</span>
                </div>

                <div className="about-float-card about-float-card--br animate-floatY2">
                  <img src={IMG_ACUP} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-900/60 to-transparent rounded-xl" />
                  <span className="absolute bottom-2 right-2.5 text-white/85 text-[9px] font-black bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">طب سوزنی</span>
                </div>

                {/* Experience badge */}
                <div className="about-exp-badge animate-floatY">
                  <div className="about-exp-ring">
                    <span className="text-2xl font-black text-cyan-500 leading-none">+۲۰</span>
                    <span className="text-[9px] text-slate-500 font-bold leading-tight">سال<br/>تجربه</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══ Divider ══ */}
      <div className="about-divider" />

      {/* ══════════════════════════════════════════════
          BOTTOM — Timeline + Credentials
      ══════════════════════════════════════════════ */}
      <div className="lux-bottom-wrap">

        {/* ══════════════════════════
            TIMELINE SECTION
        ══════════════════════════ */}
        <div className="lux-timeline-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="lux-section-header">
              <div className="lux-section-pill lux-section-pill--cyan">
                <span className="lux-pill-dot lux-pill-dot--cyan" />
                مسیر حرفه‌ای
              </div>
              <h3 className="lux-section-title">
                بیش از دو دهه <em className="lux-em-gradient">دانش</em> و تجربه
              </h3>
              <p className="lux-section-sub">
                مسیری که دکتر هشترودی از دانشگاه تا پیشگامی در طب نوین ایران طی کرده است
              </p>
            </div>

            {/* Timeline rail with scroll-progress line */}
            <div ref={railRef} className="lux-timeline-rail">
              <div className="lux-timeline-track" />
              <div
                className="lux-timeline-progress"
                style={{ transform: `scaleY(${railProgress})` }}
                aria-hidden="true"
              />
              <ol>
                {timeline.map((item, i) => (
                  <TimelineRow key={item.year} item={item} index={i} />
                ))}
              </ol>
            </div>

          </div>
        </div>

        {/* ══════════════════════════
            CREDENTIALS SECTION
        ══════════════════════════ */}
        <div className="lux-creds-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="lux-section-header">
              <div className="lux-section-pill lux-section-pill--teal">
                <span className="lux-pill-dot lux-pill-dot--teal" />
                مدارک و تخصص‌ها
              </div>
              <h3 className="lux-section-title">
                تخصص در <em className="lux-em-gradient">چهار</em> حوزه اصلی
              </h3>
              <p className="lux-section-sub">
                ترکیب دانش آکادمیک، تجربه بالینی و گواهینامه‌های بین‌المللی
              </p>
            </div>

            {/* Credential cards */}
            <div className="lux-creds-grid">
              {creds.map((cred, i) => (
                <CredentialCard key={cred.label} cred={cred} index={i} />
              ))}
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
