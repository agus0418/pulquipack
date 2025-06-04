import React from "react";
import { LucideIcon } from "lucide-react";

interface InfoBadgeProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export function InfoBadge({ icon: Icon, text, className = "" }: InfoBadgeProps) {
  return (
    <div className={`flex items-center bg-white/15 py-2.5 px-5 rounded-lg backdrop-blur-sm border border-white/20 shadow-sm ${className}`}>
      <Icon className="w-5 h-5 mr-3 text-yellow-300 flex-shrink-0" />
      <span className="font-medium text-white whitespace-nowrap">{text}</span>
    </div>
  );
} 