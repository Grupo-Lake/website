import type { MetadataRoute } from "next";
import { site } from "@/lib/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description:
      "Grupo estratégico que alavanca negócios por meio de casa de software, investimentos e gestão ativa.",
    start_url: "/pt",
    scope: "/",
    display: "standalone",
    lang: "pt-BR",
    background_color: "#FBFBF7",
    theme_color: "#0A4D43",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
