"use client";

import { useEffect, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import { getHotelTheme } from "@/lib/widget/hotelThemes";

const WidgetRoot = dynamic(() => import("@/components/widget/WidgetRoot"), { ssr: false });

export default function Page({ params }: { params: { hotelId: string } }) {
  const theme = useMemo(() => getHotelTheme(params.hotelId), [params.hotelId]);
  const fontsLoaded = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Apply color CSS variables
    document.documentElement.style.setProperty("--trv-primary", theme.colors.primary);
    document.documentElement.style.setProperty("--trv-primary-hover", theme.colors.primaryHover);
    document.documentElement.style.setProperty("--trv-secondary", theme.colors.secondary);
    document.documentElement.style.setProperty("--trv-secondary-hover", theme.colors.secondaryHover);
    document.documentElement.style.setProperty("--trv-bg", theme.colors.background);
    document.documentElement.style.setProperty("--trv-bg-light", theme.colors.backgroundLight);
    document.documentElement.style.setProperty("--trv-fg", theme.colors.text);
    document.documentElement.style.setProperty("--trv-text-gray", theme.colors.textGray);
    document.documentElement.style.setProperty("--trv-text-dark-gray", theme.colors.textDarkGray);
    document.documentElement.style.setProperty("--trv-text-darker-gray", theme.colors.textDarkerGray);
    document.documentElement.style.setProperty("--trv-text-tan", theme.colors.textTan || theme.colors.secondary);
    document.documentElement.style.setProperty("--trv-border-light", theme.colors.border);
    document.documentElement.style.setProperty("--trv-form-bg", theme.colors.formBg);
    
    // Apply fonts
    document.documentElement.style.setProperty("--trv-font-body", theme.fonts.body);
    document.documentElement.style.setProperty("--trv-font-heading", theme.fonts.heading);
    
    // Apply sizing CSS variables
    document.documentElement.style.setProperty("--trv-base-font-size", `${theme.sizing.baseFontSize}px`);
    document.documentElement.style.setProperty("--trv-base-line-height", `${theme.sizing.baseLineHeight}px`);
    document.documentElement.style.setProperty("--trv-heading-size", `${theme.sizing.headingSize}px`);
    document.documentElement.style.setProperty("--trv-card-title-size", `${theme.sizing.cardTitleSize}px`);
    document.documentElement.style.setProperty("--trv-card-image-height", `${theme.sizing.cardImageHeight}px`);
    document.documentElement.style.setProperty("--trv-container-radius", `${theme.sizing.containerRadius}px`);
    document.documentElement.style.setProperty("--trv-card-radius", `${theme.sizing.cardRadius}px`);
    document.documentElement.style.setProperty("--trv-small-radius", `${theme.sizing.smallRadius}px`);
    
    // Load Google Fonts if provided and not already loaded
    if (theme.fonts.bodyUrl && !fontsLoaded.current.has(theme.fonts.bodyUrl)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = theme.fonts.bodyUrl;
      document.head.appendChild(link);
      fontsLoaded.current.add(theme.fonts.bodyUrl);
    }
    if (theme.fonts.headingUrl && !fontsLoaded.current.has(theme.fonts.headingUrl)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = theme.fonts.headingUrl;
      document.head.appendChild(link);
      fontsLoaded.current.add(theme.fonts.headingUrl);
    }
  }, [theme]);

  return (
    <div className="trv-container min-h-screen">
      <WidgetRoot hotelId={params.hotelId} />
    </div>
  );
}
