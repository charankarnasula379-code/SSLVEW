import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import hero from "@/assets/hero-machine.jpg";
import workshop from "@/assets/gallery-workshop.jpg";
import installed from "@/assets/gallery-installed.jpg";
import parts from "@/assets/gallery-parts.jpg";
import fabrication from "@/assets/product-fabrication.jpg";
import materialHandling from "@/assets/product-material-handling.jpg";
import kernel from "@/assets/product-kernel.jpg";
import screwPress from "@/assets/product-screw-press.jpg";

const title = "Gallery | SSLVEW Palm Oil Machinery & Fabrication Work";
const description =
  "Photographs of SSLVEW palm oil machinery, fabrication work, workshop operations and installed equipment in Yanam, Puducherry.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const images: { src: string; alt: string }[] = [
  { src: hero, alt: "Palm oil mill digester machine manufactured by SSLVEW" },
  { src: workshop, alt: "Machining and assembly work inside the SSLVEW workshop" },
  { src: fabrication, alt: "Fabrication of a large steel vessel with welding in progress" },
  { src: installed, alt: "Installed palm oil processing plant with conveyors and pipework" },
  { src: materialHandling, alt: "Screw conveyors, elevator and hoppers for material handling" },
  { src: kernel, alt: "Palm kernel plant equipment with cyclones and storage silos" },
  { src: screwPress, alt: "Twin screw press machine for palm oil extraction" },
  { src: parts, alt: "Precision machined gear and shaft components" },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : images[active];

  useEffect(() => {
    if (active === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
      } else if (e.key === "ArrowRight") {
        setActive((prev) => (prev !== null ? (prev + 1) % images.length : null));
      } else if (e.key === "ArrowLeft") {
        setActive((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Gallery</p>
      <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
        Machinery, fabrication and engineering work
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        A look at the equipment we build and the work carried out in our workshop and on customer
        sites.
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden rounded-lg border border-border bg-card"
              aria-label={`Open larger view: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 grid size-12 place-items-center rounded-md bg-card text-foreground transition-colors hover:bg-muted"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85dvh] w-auto max-w-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
