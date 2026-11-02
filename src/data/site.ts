export const site = {
  name: "Sri Sarva Lakshmi Vinayaka Engineering Work",
  short: "SSLVEW",
  tagline: "Engineering Work",
  phones: ["+91 8977030222", "+91 8978197123"] as [string, string],
  email: "sslvew@gmail.com",
  whatsapp: "918977030222",
  address: {
    line1: "Industrial Area, Adavipolam",
    line2: "Yanam – 533464",
    line3: "UT of Puducherry",
  },
  hours: "Mon – Sat: 9:00 AM – 6:00 PM",
};

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export const waHref = (
  message = "Hello SSLVEW, I would like to enquire about your palm oil machinery.",
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
