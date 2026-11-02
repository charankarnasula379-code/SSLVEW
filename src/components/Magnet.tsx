import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

function useMagnet(strength: number) {
  const ref = useRef<HTMLElement | null>(null);

  const fine = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !fine()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return { ref, onMove, onLeave };
}

export function MagnetLink({
  children,
  className = "",
  strength = 5,
  ...rest
}: Props & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { ref, onMove, onLeave } = useMagnet(strength);
  return (
    <a
      {...rest}
      ref={ref as React.Ref<HTMLAnchorElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </a>
  );
}

export function MagnetWrap({ children, className = "", strength = 5 }: Props) {
  const { ref, onMove, onLeave } = useMagnet(strength);
  return (
    <span
      ref={ref as React.Ref<HTMLSpanElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </span>
  );
}
