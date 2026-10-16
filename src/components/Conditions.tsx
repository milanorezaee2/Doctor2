import { Brain, Activity, Zap, Heart, Shield, Waves, Network, Bone, ArrowLeft } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const conditions = [
  {
    icon: Brain,
    name: 'آسیب‌های مغزی و اختلالات هوشیاری',
    desc: 'این موارد به ارزیابی فوری و مراقبت بیمارستانی نیاز دارند؛ خدمات مکمل جایگزین اورژانس یا درمان استاندارد نیستند.',
    grad: 'linear-gradient(135deg,#7c3aed 0%,#6d28d9 100%)',
    accent: '#7c3aed',
    accentRgb: '124,58,237',
    num: '01',
  },
  {
    icon: Activity,
    name: 'اختلالات عصبی پیچیده',
    desc: 'بررسی شرایط و هماهنگی مراقبت با متخصص مغز و اعصاب و تیم درمان.',
    grad: 'linear-gradient(135deg,#0284c7 0%,#0369a1 100%)',
    accent: '#0284c7',
    accentRgb: '2,132,199',
    num: '02',
  },
  {
    icon: Shield,
    name: 'ام‌اس (MS)',
    desc: 'بررسی مراقبت‌های مکمل برای مدیریت علائم در کنار درمان استاندارد پزشک معالج.',
    grad: 'linear-gradient(135deg,#0891b2 0%,#0e7490 100%)',
    accent: '#0891b2',
    accentRgb: '8,145,178',
    num: '03',
  },
  {
    icon: Zap,
    name: 'گیلن‌باره (GBS)',
    desc: 'برنامه بازتوانی و پیگیری باید با نظر متخصص مغز و اعصاب و تیم درمان انجام شود.',
    grad: 'linear-gradient(135deg,#0d9488 0%,#0f766e 100%)',
    accent: '#0d9488',
    accentRgb: '13,148,136',
    num: '04',
  },
  {
    icon: Heart,
    name: 'بیماری‌های خودایمنی',
    desc: 'هر روش مکمل باید با توجه به تشخیص و درمان اصلی فرد، با پزشک معالج هماهنگ شود.',
    grad: 'linear-gradient(135deg,#db2777 0%,#be185d 100%)',
    accent: '#db2777',
    accentRgb: '219,39,119',
    num: '05',
  },
  {
    icon: Network,
    name: 'نوروپاتی (Neuropathy)',
    desc: 'ارزیابی درد، بی‌حسی یا گزگز برای تعیین نیاز به بررسی تخصصی و انتخاب مراقبت مناسب.',
    grad: 'linear-gradient(135deg,#ea580c 0%,#c2410c 100%)',
    accent: '#ea580c',
    accentRgb: '234,88,12',
    num: '06',
  },
  {
    icon: Bone,
    name: 'درد مزمن و مفصلی',
    desc: 'گفت‌وگو درباره علت درد و گزینه‌های مراقبتی، از جمله روش‌های مکمل مانند طب سوزنی.',
    grad: 'linear-gradient(135deg,#0d9488 0%,#0891b2 100%)',
    accent: '#0d9488',
    accentRgb: '13,148,136',
    num: '07',
  },
  {
    icon: Waves,
    name: 'سکته مغزی',
    desc: 'بازتوانی پس از سکته باید بر اساس برنامه پزشک معالج و تیم توانبخشی باشد.',
    grad: 'linear-gradient(135deg,#1d4ed8 0%,#1e40af 100%)',
    accent: '#1d4ed8',
    accentRgb: '29,78,216',
    num: '08',
  },
];

export default function Conditions() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="conditions" className="cond-section relative overflow-hidden">

      {/* ── Background layers ── */}
      <div className="cond-bg-base" />
      <div className="cond-bg-grid" />
      <div className="cond-bg-orb cond-bg-orb--1" />
      <div className="cond-bg-orb cond-bg-orb--2" />
      <div className="cond-bg-orb cond-bg-orb--3" />

      {/* ── Top edge line ── */}
      <div className="cond-edge-top" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>

          {/* ── Header ── */}
          <div className="text-center mb-16">
            <div className="cond-pill">
              <span className="cond-pill-dot" />
              حوزه‌های تخصصی
            </div>

            <h2 className="cond-heading mt-5 mb-4">
              حوزه‌های <span className="cond-heading-em">ارزیابی و مراقبت</span>
            </h2>

            <p className="cond-sub">
              در این بخش، زمینه‌هایی معرفی شده‌اند که می‌توان درباره مراقبت‌های مکمل آن‌ها مشورت گرفت. انتخاب روش به تشخیص پزشک و شرایط هر فرد بستگی دارد.
            </p>

            {/* Divider */}
            <div className="cond-divider-wrap" aria-hidden="true">
              <span className="cond-divider-line" />
              <span className="cond-divider-diamond" />
              <span className="cond-divider-line" />
            </div>
          </div>

          {/* ── Cards grid ── */}
          <div className="cond-grid">
            {conditions.map((c, i) => {
              const Icon = c.icon;
              return (
                <article
                  key={i}
                  className="cond-card"
                  style={{
                    '--cond-accent': c.accent,
                    '--cond-accent-rgb': c.accentRgb,
                    '--cond-grad': c.grad,
                    transitionDelay: `${i * 60}ms`,
                  } as React.CSSProperties}
                >
                  {/* Shimmer sweep */}
                  <span className="cond-card-shimmer" aria-hidden="true" />
                  {/* Top accent border */}
                  <span className="cond-card-top-border" aria-hidden="true" />
                  {/* Ghost number */}
                  <span className="cond-card-num" aria-hidden="true">{c.num}</span>

                  {/* Icon badge */}
                  <div className="cond-card-icon">
                    <Icon className="w-6 h-6 text-white" />
                    <span className="cond-icon-glow" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="cond-card-body">
                    <h3 className="cond-card-title">{c.name}</h3>
                    <span className="cond-card-rule" aria-hidden="true" />
                    <p className="cond-card-desc">{c.desc}</p>
                  </div>

                  {/* Hover glow ring */}
                  <span className="cond-card-glow" aria-hidden="true" />
                </article>
              );
            })}
          </div>

          {/* ── Disclaimer ── */}
          <p className="cond-disclaimer">
            این اطلاعات جایگزین تشخیص یا درمان پزشک معالج نیست. در وضعیت حاد یا اورژانسی، فوراً از خدمات اورژانس کمک بگیرید.
          </p>

          {/* ── CTA ── */}
          <div className="mt-10 text-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="svc-cta-btn"
            >
              <span className="svc-cta-btn-bg" aria-hidden="true" />
              <span className="relative z-10 flex items-center gap-2">
                برای مشاوره تماس بگیرید
                <ArrowLeft className="w-4 h-4" />
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* ── Bottom edge line ── */}
      <div className="cond-edge-bottom" />
    </section>
  );
}
