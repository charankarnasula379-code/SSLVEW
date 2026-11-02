import { useEffect, useRef } from "react";

/**
 * Desktop-only custom cursor with smooth trailing ring animation.
 * Uses requestAnimationFrame for zero-re-render performance.
 * Disabled on touch/mobile devices and when prefers-reduced-motion is active.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if device supports fine hover pointer and user doesn't prefer reduced motion
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isButton = false;
    let isMouseDown = false;
    let isVisible = false;
    let rafId: number;

    const dotEl = dotRef.current;
    const ringEl = ringRef.current;

    if (!dotEl || !ringEl) return;

    // Show elements and enable custom cursor class to hide system cursor
    dotEl.style.display = "block";
    ringEl.style.display = "block";
    document.documentElement.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dotEl.style.opacity = "1";
        ringEl.style.opacity = "1";
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          "a, button, input, select, textarea, [role='button'], [data-cursor-interactive], [data-cursor-target]",
        );
        isHovered = !!interactiveEl;
        isButton = !!target.closest("button, [role='button'], a[class*='bg-primary']");
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };
    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dotEl.style.opacity = "0";
      ringEl.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      dotEl.style.opacity = "1";
      ringEl.style.opacity = "1";
    };

    const animate = () => {
      // Smooth easing (lerp) for the trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      // Dot: snaps immediately, scales on hover/click
      const dotScale = isMouseDown ? 0.6 : isHovered ? 1.4 : 1;
      dotEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;

      // Ring: lags behind, expands on hover
      let ringScale = 1;
      if (isMouseDown) {
        ringScale = 0.75;
      } else if (isButton) {
        ringScale = 1.6;
      } else if (isHovered) {
        ringScale = 1.4;
      }
      ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;

      // Toggle active border color
      if (isHovered) {
        ringEl.setAttribute("data-active", "true");
      } else {
        ringEl.removeAttribute("data-active");
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.body.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.body.addEventListener("mouseenter", onMouseEnter, { passive: true });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Small Central Dot — hidden by default, shown via JS on fine-pointer devices */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-2 rounded-full bg-primary transition-opacity duration-300"
        style={{ display: "none", opacity: 0, willChange: "transform, opacity" }}
      />
      {/* Smooth Trailing Outer Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] size-8 rounded-full border border-primary/45 transition-[border-color,background-color,opacity] duration-200 ease-out data-[active=true]:border-primary data-[active=true]:bg-primary/10"
        style={{ display: "none", opacity: 0, willChange: "transform, opacity" }}
      />
    </>
  );
}
