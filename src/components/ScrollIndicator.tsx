import { ArrowDown } from "lucide-react";

/**
 * Minimal vertical scroll indicator inspired by high-end architectural interaction design.
 * Features a slow, continuous vertical line pulse animation.
 * Hidden on mobile/tablet and respects prefers-reduced-motion.
 */
export function ScrollIndicator({ className = "" }: { className?: string }) {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleScroll}
      aria-label="Scroll down to content"
      className={`group hidden items-center gap-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:flex ${className}`}
    >
      <span className="[writing-mode:vertical-lr] rotate-180 select-none">SCROLL</span>
      <div className="relative h-12 w-px overflow-hidden bg-border">
        <div className="absolute top-0 left-0 h-1/2 w-full bg-primary animate-scroll-pulse motion-reduce:animate-none" />
      </div>
      <ArrowDown
        className="size-3.5 text-primary transition-transform duration-300 group-hover:translate-y-1"
        aria-hidden="true"
      />
    </button>
  );
}
