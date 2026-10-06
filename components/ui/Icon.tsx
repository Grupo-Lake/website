import {
  ArrowRight,
  ArrowUpRight,
  CalendarHeart,
  CalendarPlus,
  ChartColumn,
  ChevronRight,
  CirclePlay,
  Clock,
  CodeXml,
  Compass,
  Download,
  FileCheck,
  FileText,
  GraduationCap,
  HeartPulse,
  House,
  Landmark,
  Laptop,
  LayoutTemplate,
  Leaf,
  Mail,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Scale,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  User,
  Users,
  Video,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

const icons = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "calendar-heart": CalendarHeart,
  "calendar-plus": CalendarPlus,
  "chart-column": ChartColumn,
  "chevron-right": ChevronRight,
  clock: Clock,
  "code-xml": CodeXml,
  compass: Compass,
  download: Download,
  "file-check": FileCheck,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse,
  house: House,
  landmark: Landmark,
  laptop: Laptop,
  "layout-template": LayoutTemplate,
  leaf: Leaf,
  mail: Mail,
  "map-pin": MapPin,
  megaphone: Megaphone,
  "monitor-smartphone": MonitorSmartphone,
  "play-circle": CirclePlay,
  scale: Scale,
  "shield-check": ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  "trending-up": TrendingUp,
  user: User,
  users: Users,
  video: Video,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

/** Ícones Lucide referenciados por nome (os dicionários guardam o nome). */
export function Icon({ name, size = 20, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? Sparkles;
  return <Cmp size={size} strokeWidth={2} aria-hidden="true" focusable="false" {...props} />;
}

/* Lucide 1.x removeu ícones de marcas; desenhamos os traços equivalentes. */
export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
