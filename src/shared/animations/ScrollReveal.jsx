import { useEffect, useRef, useState } from "react";
import { revealPresets } from "./scrollRevealPresets";

export default function ScrollReveal({
  children,
  className = "",
  variant = "fadeUp",
  delay = "delay-0",
  duration = "duration-1000",
  threshold = 0.2,
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, once]);

  const hiddenClass = revealPresets[variant];
  const visibleClass = revealPresets[`${variant}Visible`];

  return (
    <div
      ref={ref}
      className={`
        transform-gpu transition-all ease-out
        motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:blur-0
        ${duration}
        ${delay}
        ${isVisible ? "scroll-reveal-visible" : "scroll-reveal-hidden"}
        ${isVisible ? visibleClass : hiddenClass}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
