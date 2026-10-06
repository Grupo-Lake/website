import { brandIcon } from "@/lib/og";

export const dynamic = "force-static";

/** Ícone PWA 512×512 referenciado no manifest. */
export function GET() {
  return brandIcon(512);
}
