import { notFound } from "next/navigation";

// Qualquer rota desconhecida dentro de /pt ou /en cai no not-found localizado.
export const dynamicParams = true;

export default function CatchAll() {
  notFound();
}
