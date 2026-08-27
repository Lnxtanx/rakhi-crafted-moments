import type { ThemeId } from "@/lib/rakhi-content";

const deco = { "aria-hidden": true, focusable: false } as const;

/** Small ornamental separator: a paisley flanked by tapering rules. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <svg
      {...deco}
      viewBox="0 0 240 24"
      className={`h-5 w-full max-w-[15rem] text-[color:var(--t-accent-2,var(--antique-gold))] ${className}`}
    >
      <path
        d="M6 12h84M150 12h84"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M120 3c9 4 13 9 13 13 0 5-4 8-8 8-5 0-8-4-8-8 0-6 5-9 11-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="120" cy="17" r="1.6" fill="currentColor" />
      <circle cx="98" cy="12" r="1.4" fill="currentColor" opacity="0.8" />
      <circle cx="142" cy="12" r="1.4" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

/** Corner floral vine. Rotate with CSS for the other three corners. */
export function CornerVine({ className = "" }: { className?: string }) {
  return (
    <svg
      {...deco}
      viewBox="0 0 160 160"
      className={`w-[clamp(4.5rem,14vw,9rem)] text-[color:var(--t-accent-2,var(--antique-gold))] ${className}`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.85">
        <path d="M4 4c0 46 12 76 42 96s60 26 110 26" opacity="0.55" />
        <path d="M12 30c24 6 40 20 48 42" />
        <path d="M30 12c8 24 22 40 44 48" />
        <path d="M70 96c14 8 28 12 46 12" opacity="0.7" />
      </g>
      <g fill="currentColor">
        {[
          [60, 72, 7],
          [86, 92, 5],
          [40, 44, 5],
          [108, 106, 4],
        ].map(([cx, cy, r], i) => (
          <g key={i} opacity={0.9}>
            {Array.from({ length: 8 }).map((_, p) => (
              <ellipse
                key={p}
                cx={cx}
                cy={cy - r}
                rx={r * 0.34}
                ry={r * 0.8}
                transform={`rotate(${p * 45} ${cx} ${cy})`}
                opacity="0.55"
              />
            ))}
            <circle cx={cx} cy={cy} r={r * 0.35} />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Decorative border drawn as a single scalable frame. */
export function OrnateFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      {...deco}
      viewBox="0 0 400 560"
      preserveAspectRatio="none"
      className={`absolute inset-0 h-full w-full text-[color:var(--t-accent-2,var(--antique-gold))] ${className}`}
    >
      <rect x="10" y="10" width="380" height="540" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      <rect
        x="18"
        y="18"
        width="364"
        height="524"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="3 5"
        opacity="0.6"
      />
    </svg>
  );
}

/** Per-theme rakhi: thread + central medallion, all vector. */
export function Rakhi({
  theme,
  className = "",
  animate = true,
}: {
  theme: ThemeId;
  className?: string;
  animate?: boolean;
}) {
  const petals = theme === "minimal" ? 6 : theme === "festive" ? 16 : 12;
  const r = 26;
  return (
    <svg
      {...deco}
      viewBox="0 0 200 200"
      className={`${animate ? "rakhi-sway" : ""} ${className}`}
    >
      {/* thread */}
      <path
        d="M2 118c34-18 52-18 66-6M198 118c-34-18-52-18-66-6"
        fill="none"
        stroke="var(--t-accent, var(--vermillion))"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M2 128c34-16 52-16 66-6M198 128c-34-16-52-16-66-6"
        fill="none"
        stroke="var(--t-accent-2, var(--antique-gold))"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* outer petals */}
      <g transform="translate(100 96)">
        {Array.from({ length: petals }).map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy={-r - 12}
            rx={theme === "heritage" ? 5 : 7}
            ry={theme === "heritage" ? 16 : 14}
            transform={`rotate(${(360 / petals) * i})`}
            fill="var(--t-accent, var(--vermillion))"
            opacity={i % 2 ? 0.55 : 0.85}
          />
        ))}
        <circle r={r + 2} fill="none" stroke="var(--t-accent-2, var(--antique-gold))" strokeWidth="1.5" />
        <circle r={r - 4} fill="var(--t-accent-2, var(--antique-gold))" opacity="0.22" />
        {theme === "festive" ? (
          <g>
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d="M0 -20 L5 0 L0 20 L-5 0 Z"
                transform={`rotate(${i * 45})`}
                fill="var(--t-accent-2, var(--antique-gold))"
                opacity="0.65"
              />
            ))}
          </g>
        ) : theme === "heritage" ? (
          <g stroke="var(--t-accent-2, var(--antique-gold))" fill="none" strokeWidth="1.2">
            <rect x="-13" y="-13" width="26" height="26" transform="rotate(45)" />
            <rect x="-13" y="-13" width="26" height="26" />
          </g>
        ) : (
          <g>
            {Array.from({ length: 6 }).map((_, i) => (
              <ellipse
                key={i}
                cy={-11}
                rx="4.5"
                ry="9"
                transform={`rotate(${i * 60})`}
                fill="var(--t-accent-2, var(--antique-gold))"
                opacity="0.7"
              />
            ))}
          </g>
        )}
        <circle r="6" fill="var(--t-accent, var(--vermillion))" />
        <circle r="2.4" fill="var(--t-accent-2, var(--antique-gold))" />
      </g>
    </svg>
  );
}

/** Ornamental photo frame: oval miniature-painting style with a vine ring. */
export function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative mx-auto w-[min(15rem,60%)]">
      <svg {...deco} viewBox="0 0 200 240" className="absolute -inset-[7%] h-[114%] w-[114%] text-[color:var(--t-accent-2,var(--antique-gold))]">
        <ellipse cx="100" cy="120" rx="92" ry="112" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <ellipse cx="100" cy="120" rx="86" ry="106" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
        {Array.from({ length: 14 }).map((_, i) => {
          const a = (i / 14) * Math.PI * 2;
          return (
            <circle
              key={i}
              cx={100 + Math.sin(a) * 92}
              cy={120 - Math.cos(a) * 112}
              r="3"
              fill="currentColor"
              opacity="0.55"
            />
          );
        })}
      </svg>
      <div className="relative overflow-hidden rounded-[50%/42%] border border-[color:color-mix(in_oklab,var(--antique-gold)_60%,transparent)] shadow-[0_10px_24px_-16px_rgba(60,30,10,0.6)]">
        <img src={src} alt={alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      </div>
    </figure>
  );
}
