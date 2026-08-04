export function Sparkle({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 1.5c.55 5.28 4.72 9.45 10 10-5.28.55-9.45 4.72-10 10-.55-5.28-4.72-9.45-10-10 5.28-.55 9.45-4.72 10-10Z" />
    </svg>
  );
}

export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="brand-gradient absolute inset-0 opacity-[0.07] dark:opacity-[0.3]" />
      <div className="grid-mesh absolute inset-0" />

      <svg
        className="absolute -left-[10%] top-0 h-full w-[95%]"
        viewBox="0 0 1200 620"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ribbon-fill" x1="0" y1="0.2" x2="1" y2="0.7">
            <stop offset="0%" stopColor="var(--ribbon-edge)" stopOpacity="0" />
            <stop offset="28%" stopColor="var(--ribbon-edge)" stopOpacity="0.75" />
            <stop offset="58%" stopColor="var(--ribbon-core)" stopOpacity="0.95" />
            <stop offset="88%" stopColor="var(--ribbon-edge)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--ribbon-edge)" stopOpacity="0" />
          </linearGradient>
          <filter id="ribbon-soft" x="-25%" y="-60%" width="150%" height="240%">
            <feGaussianBlur stdDeviation="26" />
          </filter>
          <filter id="ribbon-softer" x="-25%" y="-60%" width="150%" height="240%">
            <feGaussianBlur stdDeviation="52" />
          </filter>
        </defs>
        <path
          d="M-60 250 C 190 120 430 430 700 330 S 1080 130 1280 210 L1280 300 C 1060 230 820 400 660 405 S 240 300 -60 400 Z"
          fill="url(#ribbon-fill)"
          filter="url(#ribbon-soft)"
        />
        <path
          d="M-60 340 C 220 250 420 500 720 420 S 1090 250 1280 320 L1280 360 C 1060 310 800 470 640 470 S 260 390 -60 470 Z"
          fill="url(#ribbon-fill)"
          filter="url(#ribbon-softer)"
          opacity="0.5"
        />
      </svg>
      <div
        className="absolute left-[14%] top-[18%] size-[26rem] rounded-full blur-[110px]"
        style={{ backgroundColor: "var(--iris-warm)" }}
      />
      <div
        className="absolute left-[4%] top-[42%] size-[20rem] rounded-full blur-[110px]"
        style={{ backgroundColor: "var(--iris-teal)" }}
      />
      <div className="glow-radial absolute -top-52 right-[8%] size-[44rem]" />
      <div className="absolute -bottom-56 -right-32 size-[32rem] rounded-full bg-glow-indigo blur-[130px]" />

      <Sparkle className="absolute left-[46%] top-[16%] size-5 text-accent/45" />
      <Sparkle className="absolute right-[16%] top-[34%] size-3 text-accent/35" />
      <Sparkle className="absolute left-[62%] bottom-[22%] size-4 text-accent/30" />
      <Sparkle className="absolute right-[30%] top-[8%] size-2.5 text-accent/40" />
    </div>
  );
}
