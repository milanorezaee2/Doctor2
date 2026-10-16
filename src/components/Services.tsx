import { Syringe, Zap, Waves, HeartPulse, Brain, Shield, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    icon: Syringe,
    title: 'طب سوزنی',
    subtitle: 'Acupuncture',
    desc: 'به‌کارگیری سوزن‌های ظریف برای تحریک نقاط منتخب بدن؛ تناسب این روش پس از ارزیابی و گفت‌وگو با پزشک بررسی می‌شود.',
    image: 'https://images.pexels.com/photos/8312859/pexels-photo-8312859.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    features: ['ارزیابی اولیه', 'روش مکمل', 'برنامه فردی'],
    accent: '#0891b2',
    accentLight: 'rgba(8,145,178,0.12)',
    grad: 'linear-gradient(135deg,#0891b2 0%,#0e7490 100%)',
    num: '01',
  },
  {
    icon: Zap,
    title: 'لیزر درمانی',
    subtitle: 'Laser Therapy',
    desc: 'به‌کارگیری لیزر کم‌توان در چارچوب برنامه مراقبتی و متناسب با شرایط هر فرد؛ پاسخ درمانی می‌تواند متفاوت باشد.',
    image: 'https://images.pexels.com/photos/5069508/pexels-photo-5069508.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    features: ['کاربرد موضعی', 'انتخاب موردی', 'پیگیری روند'],
    accent: '#0284c7',
    accentLight: 'rgba(2,132,199,0.12)',
    grad: 'linear-gradient(135deg,#0284c7 0%,#0369a1 100%)',
    num: '02',
  },
  {
    icon: Waves,
    title: 'اکوپانکچر',
    subtitle: 'Acu-Puncture',
    desc: 'ترکیب امواج صوتی با طب سوزنی برای تحریک نقاط منتخب؛ انتخاب روش پس از بررسی شرایط مراجعه‌کننده انجام می‌شود.',
    image: 'https://images.pexels.com/photos/8313172/pexels-photo-8313172.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    features: ['روش مکمل', 'ارزیابی تناسب', 'توضیح پیش از شروع'],
    accent: '#0d9488',
    accentLight: 'rgba(13,148,136,0.12)',
    grad: 'linear-gradient(135deg,#0d9488 0%,#0f766e 100%)',
    num: '03',
  },
  {
    icon: Brain,
    title: 'بیماری‌های عصبی',
    subtitle: 'Neurological',
    desc: 'ارزیابی و همراهی در مدیریت علائم عصبی، در کنار مراقبت پزشک معالج؛ این خدمات جایگزین درمان استاندارد نیستند.',
    image: 'https://images.pexels.com/photos/6010927/pexels-photo-6010927.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    features: ['ارزیابی علائم', 'هماهنگی با پزشک', 'پیگیری'],
    accent: '#7c3aed',
    accentLight: 'rgba(124,58,237,0.12)',
    grad: 'linear-gradient(135deg,#7c3aed 0%,#6d28d9 100%)',
    num: '04',
  },
  {
    icon: Shield,
    title: 'بیماری‌های خودایمنی',
    subtitle: 'Autoimmune',
    desc: 'بررسی روش‌های مکمل در کنار درمان اصلی؛ هر تصمیم درمانی باید با پزشک معالج هماهنگ شود.',
    image: 'https://images.pexels.com/photos/8313427/pexels-photo-8313427.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    features: ['روش مکمل', 'ارزیابی فردی', 'هماهنگی با پزشک'],
    accent: '#ea580c',
    accentLight: 'rgba(234,88,12,0.12)',
    grad: 'linear-gradient(135deg,#ea580c 0%,#c2410c 100%)',
    num: '05',
  },
  {
    icon: HeartPulse,
    title: 'برنامه مراقبتی فردی',
    subtitle: 'Personalized Plan',
    desc: 'تنظیم برنامه مراقبتی با توجه به سابقه، شرایط و اولویت‌های هر مراجعه‌کننده، پس از ارزیابی.',
    image: 'https://images.pexels.com/photos/38407788/pexels-photo-38407788.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    features: ['برنامه اختصاصی', 'پیگیری مستمر', 'بازبینی برنامه'],
    accent: '#db2777',
    accentLight: 'rgba(219,39,119,0.12)',
    grad: 'linear-gradient(135deg,#db2777 0%,#be185d 100%)',
    num: '06',
  },
];

export default function Services() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="svc-section relative overflow-hidden">

      {/* ── Deep dark background layer ── */}
      <div className="svc-bg-base" />
      <div className="svc-bg-grid" />
      <div className="svc-bg-orb svc-bg-orb--1" />
      <div className="svc-bg-orb svc-bg-orb--2" />
      <div className="svc-bg-orb svc-bg-orb--3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>

          {/* ── Header ── */}
          <div className="text-center mb-16">
            <div className="svc-pill">
              <span className="svc-pill-dot" />
              خدمات و روش‌ها
            </div>

            <h2 className="svc-heading mt-5 mb-4">
              <span className="svc-heading-em">خدمات درمانی</span>
              <span className="svc-heading-plain"> کلینیک</span>
            </h2>

            <p className="svc-sub">
              با خدمات و روش‌های قابل بررسی در هر مراجعه آشنا شوید؛ انتخاب روش به شرایط فرد و نظر پزشک معالج بستگی دارد.
            </p>

            {/* Luxe divider */}
            <div className="svc-divider-wrap" aria-hidden="true">
              <span className="svc-divider-line" />
              <span className="svc-divider-diamond" />
              <span className="svc-divider-line" />
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="svc-grid">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={i}
                  className="svc-card"
                  style={{ '--svc-accent': s.accent, '--svc-accent-light': s.accentLight, '--svc-grad': s.grad, transitionDelay: `${i * 70}ms` } as React.CSSProperties}
                >
                  {/* Shimmer sweep on hover */}
                  <span className="svc-card-shimmer" aria-hidden="true" />

                  {/* Accent top border */}
                  <span className="svc-card-top-border" aria-hidden="true" />

                  {/* Ghost large number */}
                  <span className="svc-card-num" aria-hidden="true">{s.num}</span>

                  {/* Image */}
                  <div className="svc-card-img-wrap">
                    <img
                      src={s.image}
                      alt={`تصویر مفهومی مرتبط با ${s.title}`}
                      className="svc-card-img"
                      loading="lazy"
                    />
                    <div className="svc-card-img-overlay" />

                    {/* Icon badge */}
                    <div className="svc-card-icon-badge">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="svc-card-body">
                    {/* Subtitle & title */}
                    <p className="svc-card-subtitle">{s.subtitle}</p>
                    <h3 className="svc-card-title">{s.title}</h3>

                    {/* Thin accent rule */}
                    <span className="svc-card-rule" aria-hidden="true" />

                    {/* Description */}
                    <p className="svc-card-desc">{s.desc}</p>

                    {/* Features */}
                    <ul className="svc-card-features">
                      {s.features.map((f) => (
                        <li key={f} className="svc-card-feat-item">
                          <CheckCircle2 className="svc-feat-icon" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover glow ring */}
                  <span className="svc-card-glow" aria-hidden="true" />
                </article>
              );
            })}
          </div>

          {/* ── CTA ── */}
          <div className="mt-14 text-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="svc-cta-btn"
            >
              <span className="svc-cta-btn-bg" aria-hidden="true" />
              <span className="relative z-10 flex items-center gap-2">
                مشاهده راه‌های ارتباطی
                <ArrowLeft className="w-4 h-4" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
