import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none">
      {/* Track */}
      <div className="absolute inset-0 bg-slate-200/20" />
      {/* Progress */}
      <div
        className="h-full bg-gradient-to-l from-teal-400 via-cyan-500 to-sky-500 transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
      {/* Glow dot at end */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_3px_rgba(6,182,212,0.6)] transition-[right] duration-100"
        style={{ right: `${100 - progress}%` }}
      />
    </div>
  );
}
