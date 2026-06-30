import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((scrollTop / height) * 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="progress"
      style={{
        background: `conic-gradient(cyan ${progress * 3.6}deg, #E8F9FF 0deg)`
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="progress-value">
        <FaArrowUp size={30} />
      </div>
    </div>
  );
};
export default ScrollTop;
