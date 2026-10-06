import { brandIcon } from "@/lib/og";

export const dynamic = "force-static";

/** Ícone PWA 192×192 referenciado no manifest. */
export function GET() {
  return brandIcon(192);
}
