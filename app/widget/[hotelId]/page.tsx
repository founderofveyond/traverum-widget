"use client";

import { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const WidgetRoot = dynamic(() => import("@/components/widget/WidgetRoot"), { ssr: false });

function useThemeFromQuery() {
  const params = useSearchParams();
  const theme = params.get("theme") ?? "light";
  const primary = params.get("primary") ?? "#0ea5e9";
  return useMemo(() => ({ theme, primary }), [theme, primary]);
}

export default function Page({ params }: { params: { hotelId: string } }) {
  const { theme, primary } = useThemeFromQuery();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.setProperty("--trv-primary", primary);
  }, [theme, primary]);

  return (
    <div className="trv-container min-h-screen">
      <WidgetRoot hotelId={params.hotelId} />
    </div>
  );
}
