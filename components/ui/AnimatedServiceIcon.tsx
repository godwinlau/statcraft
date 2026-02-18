"use client";

import AnimatedIconLoop from "@/components/ui/AnimatedIconLoop";
import { CompassIcon } from "@/components/ui/compass";
import { ChartLineIcon } from "@/components/ui/chart-line";
import { FileTextIcon } from "@/components/ui/file-text";
import { ClockIcon } from "@/components/ui/clock";
import { HomeIcon } from "@/components/ui/home";
import { SparklesIcon } from "@/components/ui/sparkles";
import { PlusIcon } from "@/components/ui/plus";
import { ActivityIcon } from "@/components/ui/activity";
import { ChartBarIncreasingIcon } from "@/components/ui/chart-bar-increasing";
import { LayersIcon } from "@/components/ui/layers";
import { CircleCheckIcon } from "@/components/ui/circle-check";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  compass: CompassIcon,
  chart: ChartLineIcon,
  table: FileTextIcon,
  clock: ClockIcon,
  house: HomeIcon,
  star: SparklesIcon,
  plus: PlusIcon,
  wave: ActivityIcon,
  bars: ChartBarIncreasingIcon,
  columns: LayersIcon,
  "circle-plus": CircleCheckIcon,
};

export function AnimatedServiceIcon({ icon }: { icon: string }) {
  const Icon = iconMap[icon];
  if (!Icon) return null;

  return (
    <AnimatedIconLoop interval={3000}>
      <Icon size={18} className="text-o" />
    </AnimatedIconLoop>
  );
}
