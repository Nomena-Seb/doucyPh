import { useEffect, useRef } from "react";

const DEFAULT_LERP = 0.12;
const DEFAULT_WHEEL_MULTIPLIER = 1;
const DEFAULT_TOUCH_INERTIA = 140;
const DEFAULT_SNAP_THRESHOLD = 0.35;

export default function SmoothScroll({
  children,
  lerp = DEFAULT_LERP,
  wheelMultiplier = DEFAULT_WHEEL_MULTIPLIER,
  touchInertia = DEFAULT_TOUCH_INERTIA,
  snapThreshold = DEFAULT_SNAP_THRESHOLD,
}) {
  const animationFrameRef = useRef(0);
  const currentScrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const prefersReducedMotionRef = useRef(false);
  const isTouchingRef = useRef(false);
  const touchSampleRef = useRef({ scrollY: 0, time: 0, velocity: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const clampScroll = (value) => {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      return Math.max(0, Math.min(maxScroll, value));
    };

    const stopAnimation = () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = 0;
      }
    };

    const animateScroll = () => {
      const diff = targetScrollRef.current - currentScrollRef.current;

      currentScrollRef.current += diff * lerp;

      if (Math.abs(diff) < snapThreshold) {
        currentScrollRef.current = targetScrollRef.current;
      }

      window.scrollTo(0, currentScrollRef.current);

      if (Math.abs(targetScrollRef.current - currentScrollRef.current) >= snapThreshold) {
        animationFrameRef.current = window.requestAnimationFrame(animateScroll);
      } else {
        stopAnimation();
      }
    };

    const startAnimation = () => {
      if (prefersReducedMotionRef.current) return;
      if (animationFrameRef.current) return;

      animationFrameRef.current = window.requestAnimationFrame(animateScroll);
    };

    const syncCurrentScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      currentScrollRef.current = scrollY;
      targetScrollRef.current = scrollY;
    };

    const updateReducedMotion = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;

      if (prefersReducedMotionRef.current) {
        stopAnimation();
        syncCurrentScroll();
      }
    };

    const handleWheel = (event) => {
      if (prefersReducedMotionRef.current) return;

      event.preventDefault();
      targetScrollRef.current = clampScroll(
        targetScrollRef.current + event.deltaY * wheelMultiplier
      );
      startAnimation();
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (isTouchingRef.current) {
        const now = performance.now();
        const deltaScroll = scrollY - touchSampleRef.current.scrollY;
        const deltaTime = Math.max(now - touchSampleRef.current.time, 1);

        touchSampleRef.current = {
          scrollY,
          time: now,
          velocity: deltaScroll / deltaTime,
        };
      } else if (!animationFrameRef.current) {
        currentScrollRef.current = scrollY;
        targetScrollRef.current = scrollY;
      }
    };

    const handleTouchStart = () => {
      isTouchingRef.current = true;
      stopAnimation();

      const now = performance.now();
      const scrollY = window.scrollY || window.pageYOffset;

      currentScrollRef.current = scrollY;
      targetScrollRef.current = scrollY;
      touchSampleRef.current = {
        scrollY,
        time: now,
        velocity: 0,
      };
    };

    const handleTouchEnd = () => {
      isTouchingRef.current = false;

      if (prefersReducedMotionRef.current) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const projectedScroll =
        scrollY + touchSampleRef.current.velocity * touchInertia;

      currentScrollRef.current = scrollY;
      targetScrollRef.current = clampScroll(projectedScroll);

      if (Math.abs(targetScrollRef.current - currentScrollRef.current) >= snapThreshold) {
        startAnimation();
      }
    };

    const handleResize = () => {
      targetScrollRef.current = clampScroll(targetScrollRef.current);
      currentScrollRef.current = clampScroll(currentScrollRef.current);
    };

    updateReducedMotion();
    syncCurrentScroll();

    mediaQuery.addEventListener("change", updateReducedMotion);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      stopAnimation();
      mediaQuery.removeEventListener("change", updateReducedMotion);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [lerp, wheelMultiplier, touchInertia, snapThreshold]);

  // Réglages de fluidité:
  // - lerp: douceur du lissage
  // - wheelMultiplier: intensité de la molette
  // - touchInertia: distance supplémentaire après un swipe
  // - snapThreshold: seuil avant l'arrêt total
  return children;
}
