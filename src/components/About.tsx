import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Stethoscope, BookOpen, ArrowLeft, Star, ChevronRight, BadgeCheck, FlaskConical, Microscope, Globe } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

/* ─── Images ──────────────────────────────────── */
const IMG_MAIN = `${import.meta.env.BASE_URL}images/doctor-hashtroodi.jpg`;
const IMG_LAB  = 'https://images.pexels.com/photos/8312859/pexels-photo-8312859.jpeg?auto=compress&cs=tinysrgb&h=400&w=600';
const IMG_CONF = 'https://images.pexels.com/photos/6010927/pexels-photo-6010927.jpeg?auto=compress&cs=tinysrgb&h=400&w=600';

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
    accent: '#06b6d4',
  },
  {
    icon: FlaskConical,
    label: 'فلوشیپ طب سوزنی',
    sub: 'پکن، چین',
    detail: 'آموزش پیشرفته طب سوزنی در مرکز بین‌المللی پزشکی سنتی پکن',
    num: '۰۲',
    grad: 'linear-gradient(135deg,#0d9488,#059669)',
    glow: 'rgba(13,148,136,0.22)',
    accent: '#2dd4bf',
  },
  {
    icon: BadgeCheck,
    label: 'بورد لیزر درمانی',
    sub: 'بین‌المللی',
    detail: 'گواهینامه بین‌المللی لیزر درمانی پزشکی از انجمن اروپایی',
    num: '۰۳',
    grad: 'linear-gradient(135deg,#6366f1,#0891b2)',
    glow: 'rgba(99,102,241,0.2)',
    accent: '#818cf8',
  },
  {
    icon: BookOpen,
    label: '+۳۰ مقاله ISI',
    sub: 'ژورنال‌های معتبر',
    detail: 'انتشار بیش از سی مقاله علمی در معتبرترین ژورنال‌های بین‌المللی',
    num: '۰۴',
    grad: 'linear-gradient(135deg,#0891b2,#7c3aed)',
    glow: 'rgba(124,58,237,0.18)',
    accent: '#c084fc',
  },
];

/* ─── Animated counter ────────────────────────── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(to / 60);
        const id = setInterval(() => {
          start += step;
          if (start >= to) { setVal(to); clearInterval(id); }
          else setVal(start);
        }, 24);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Stagger reveal hook ─────────────────────── */
function useStagger(count: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible, count };
}

export default function About() {
  const { ref: heroRef, active: heroActive } = useReveal<HTMLDivElement>();
  const { ref: bottomRef, visible: bottomVisible, count: _ } = useStagger(5);

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
          <div className="flex justify-center mb-16">
            <div className="about-badge">
              <span className="about-badge-dot" />
              About The Doctor
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── LEFT: text ── */}
            <div className="order-2 lg:order-1 flex flex-col gap-6">

              {/* Headline */}
              <div>
                <h2 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.0] tracking-tight text-slate-900 mb-4">
                  پیشگام
                  <br />
                  <span className="about-headline-gradient">درمان نوین</span>
                  <br />
                  <span className="text-slate-400 text-4xl sm:text-5xl xl:text-6xl font-light">ایران</span>
                </h2>
                <div className="about-headline-line" />
              </div>

              {/* Bio */}
              <p className="text-slate-500 text-base leading-[1.9] max-w-lg">
                دکتر محمد رضا هشترودی با بیش از دو دهه تجربه بالینی، ترکیب بی‌نظیری از دانش
                مدرن و حکمت طب سنتی را به ارمغان آورده است — رویکردی که هزاران بیمار را
                در مسیر بهبودی قرار داده.
              </p>

              {/* Quote */}
              <div className="about-quote-block">
                <div className="about-quote-bar" />
                <div>
                  <p className="text-slate-700 text-[15px] leading-[1.85] italic font-medium">
                    «هدف من ترکیب خرد طب سنتی با دستاوردهای پزشکی نوین
                    برای درمان ریشه‌ای بیماری‌های صعب‌العلاج است.»
                  </p>
                  <p className="text-cyan-600 text-xs font-black tracking-wide mt-3 uppercase">
                    — Dr. M.R. Hashtroodi
                  </p>
                </div>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  { n: 5000, s: '+', label: 'بیمار' },
                  { n: 20,   s: '+', label: 'سال تجربه' },
                  { n: 30,   s: '+', label: 'مقاله ISI' },
                ].map((item, i) => (
                  <div key={i} className="about-stat-pill">
                    <span className="about-stat-num">
                      <Counter to={item.n} suffix={item.s} />
                    </span>
                    <span className="about-stat-label">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-3 text-sm font-bold text-white btn-primary px-7 py-4 rounded-2xl relative z-10"
                >
                  مشاوره رایگان رزرو کنید
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-cyan-600 transition-colors duration-200"
                >
                  مشاهده خدمات
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* ── RIGHT: photo composition ── */}
            <div className="order-1 lg:order-2 relative">
              <div className="about-photo-wrapper">

                {/* Spinning ring */}
                <div className="about-spin-ring" />

                {/* Main photo */}
                <div className="about-main-photo-frame">
                  <img src={IMG_MAIN} alt="دکتر هشترودی" className="w-full h-full object-cover object-top" />
                  <div className="about-photo-overlay" />

                  {/* Name chip at bottom */}
                  <div className="about-name-chip">
                    <div>
                      <p className="text-white font-black text-sm leading-tight">Dr. M.R. Hashtroodi</p>
                      <p className="text-cyan-300 text-[10px] font-semibold tracking-wide">Acupuncture & Laser Specialist</p>
                    </div>
                    <div className="about-verified-badge">✓</div>
                  </div>
                </div>

                {/* Floating mini cards */}
                <div className="about-float-card about-float-card--tl animate-floatY">
                  <img src={IMG_LAB} alt="کلینیک" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 to-transparent rounded-xl" />
                  <span className="absolute bottom-2 right-2.5 text-white/80 text-[9px] font-black uppercase tracking-widest bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">کلینیک</span>
                </div>

                <div className="about-float-card about-float-card--br animate-floatY2">
                  <img src={IMG_CONF} alt="تحقیقات" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-900/60 to-transparent rounded-xl" />
                  <span className="absolute bottom-2 right-2.5 text-white/80 text-[9px] font-black uppercase tracking-widest bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">پژوهش</span>
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
      <div ref={bottomRef} className="lux-bottom-wrap">

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
                سه دهه <em className="lux-em-gradient">دانش</em> و تجربه
              </h3>
              <p className="lux-section-sub">
                مسیری که دکتر هشترودی از دانشگاه تا پیشگامی در طب نوین ایران طی کرده است
              </p>
            </div>

            {/* Timeline rail */}
            <div className="lux-timeline-rail">
              {/* Center line */}
              <div className="lux-timeline-track" />

              {timeline.map((t, i) => {
                const Icon = t.icon;
                const isRight = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`lux-timeline-row ${isRight ? 'lux-timeline-row--right' : 'lux-timeline-row--left'}`}
                    style={{
                      opacity: bottomVisible ? 1 : 0,
                      transform: bottomVisible
                        ? 'translateY(0)'
                        : `translateY(28px)`,
                      transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${i * 0.13}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${i * 0.13}s`,
                    }}
                  >
                    {/* Card */}
                    <div className="lux-timeline-card group">
                      {/* Shimmer sweep */}
                      <div className="lux-tl-shimmer" />
                      {/* Top accent */}
                      <div className="lux-tl-top-accent" />

                      <div className="lux-tl-card-inner">
                        {/* Year badge */}
                        <div className="lux-tl-year">{t.year}</div>

                        {/* Tag */}
                        <span className="lux-tl-tag">{t.tag}</span>

                        {/* Title */}
                        <h4 className="lux-tl-title">{t.title}</h4>

                        {/* Description */}
                        <p className="lux-tl-desc">{t.event}</p>
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="lux-timeline-node-wrap">
                      <div className="lux-tl-node">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="lux-tl-node-ring" />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="lux-timeline-spacer" />
                  </div>
                );
              })}
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
              {creds.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={i}
                    className="lux-cred-card group"
                    style={{
                      opacity: bottomVisible ? 1 : 0,
                      transform: bottomVisible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.94)',
                      transition: `opacity 0.65s cubic-bezier(.16,1,.3,1) ${i * 0.12 + 0.1}s, transform 0.65s cubic-bezier(.16,1,.3,1) ${i * 0.12 + 0.1}s`,
                    }}
                  >
                    {/* Gradient border glow on hover */}
                    <div className="lux-cred-border-glow" style={{ background: c.grad }} />

                    {/* Shimmer */}
                    <div className="lux-cred-shimmer" />

                    {/* Number */}
                    <div className="lux-cred-num" style={{ WebkitTextStroke: `1px ${c.accent}`, color: 'transparent' }}>
                      {c.num}
                    </div>

                    {/* Icon */}
                    <div className="lux-cred-icon-wrap" style={{ background: c.grad }}>
                      <div className="lux-cred-icon-glow" style={{ background: c.glow }} />
                      <Icon className="w-6 h-6 text-white relative z-10" />
                    </div>

                    {/* Content */}
                    <div className="lux-cred-body">
                      <h4 className="lux-cred-label">{c.label}</h4>
                      <p className="lux-cred-sub" style={{ color: c.accent }}>{c.sub}</p>
                      <p className="lux-cred-detail">{c.detail}</p>
                    </div>

                    {/* Bottom gradient line */}
                    <div className="lux-cred-bottom-line" style={{ background: c.grad }} />
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
