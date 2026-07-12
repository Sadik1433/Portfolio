import { useEffect, useState, useRef } from "react";

const ProgressBar = ({ name, value }) => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const timer = setInterval(() => {
            start += 1;
            if (start >= value) {
              start = value;
              clearInterval(timer);
            }
            setProgress(start);
          }, 15);
          observer.unobserve(progressRef.current);
        }
      },
      { threshold: 0.4 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const circumference = 2 * Math.PI * 45; // ~282.74

  return (
    <div className="flex flex-col items-center gap-3" ref={progressRef}>
      {/* SVG circular progress */}
      <div className="relative w-[64px] h-[64px] md:w-[80px] md:h-[80px]">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Track ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="var(--color-card-border)"
            strokeWidth="9"
            fill="none"
          />
          {/* Progress ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="var(--color-primary)"
            strokeWidth="9"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress / 100)}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.4s ease" }}
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center text-[11px] font-extrabold"
          style={{ color: "var(--color-primary)" }}
        >
          {progress}%
        </span>
      </div>

      {/* Skill name pill */}
      <span
        className="w-full text-center text-[0.7rem] font-bold px-2 py-1 rounded-lg border transition-all duration-300 hover:scale-105 cursor-default"
        style={{
          color: "var(--color-primary)",
          borderColor: "var(--color-card-border)",
          backgroundColor: "var(--color-link-bg)",
        }}
      >
        {name}
      </span>
    </div>
  );
};

export default ProgressBar;