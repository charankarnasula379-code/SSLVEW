import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { products } from "@/data/products";
import { site } from "@/data/site";

export function EnquiryForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Product / Requirement: ${data.get("requirement")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    toast.success("Opening your email app to send the enquiry.");
  }

  const field =
    "mt-1.5 block min-h-12 w-full rounded-md border border-border bg-background px-3.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";
  const label = "text-sm font-semibold text-foreground";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className={label}>
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="phone" className={label}>
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          className={field}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="requirement" className={label}>
          Product / Requirement
        </label>
        <input
          id="requirement"
          name="requirement"
          list="product-options"
          defaultValue={defaultProduct}
          className={field}
        />
        <datalist id="product-options">
          {products.map((p) => (
            <option key={p.slug} value={p.name} />
          ))}
        </datalist>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${field} py-3`}
          placeholder="Tell us about your requirement"
        />
      </div>
      <button
        type="submit"
        className="min-h-12 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:col-span-2 sm:w-auto sm:justify-self-start"
      >
        Send Enquiry
      </button>
      <p aria-live="polite" className="text-sm text-muted-foreground sm:col-span-2">
        {sent
          ? "Thanks — your email app should now be open with your enquiry."
          : `Prefer to talk? Call ${site.phones[0]} or message us on WhatsApp.`}
      </p>
    </form>
  );
}
