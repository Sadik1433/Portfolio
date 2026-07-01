import { useEffect, useState, useRef } from "react";

const ProgressBar = ({name,value}) => {
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
      {
        threshold: 0.4,
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

    return (
        <div className="flex flex-col items-center gap-5"  ref={progressRef}>
            <div className="relative w-[60px] h-[60px] md:w-[80px] h-[80px]">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="text-white"
                        strokeWidth="10"
                        fill="none"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="dark:stroke-[#334155]"
                        stroke="cyan"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="282.6"
                        strokeDashoffset={value}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="text-gray-200"
                        strokeWidth="10"
                        fill="none"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="cyan"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="282.6"
                        strokeDashoffset={(1 - progress / 100) * 282.6}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />
                </svg>

                <p className="absolute top-[18px] right-[30px] md:top-[20px] md:right-[40px] translate-x-1/2 transform translate-y-1/2">{progress}%</p>
            </div>

            <button
                    className={`bg-transparent border border-cyan-500 w-full rounded-md font-bold  text-[0.8rem] px-2 py-1 mx-auto hover:bg-cyan-500 hover:text-white hover:shadow-lg transition-shadow duration-500 transition-transform duration-500 hover:scale-105 `}>{name}
            </button>
        </div>
    );
};

export default ProgressBar;
                                