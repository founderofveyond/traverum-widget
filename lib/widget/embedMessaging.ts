"use client";

export function initAutoResize() {
  if (typeof window === "undefined") return () => {};
  const ro = new ResizeObserver(entries => {
    for (const entry of entries) {
      const height = Math.ceil(entry.contentRect.height);
      window.parent?.postMessage({ type: "traverum.height", height }, "*");
    }
  });
  const el = document.documentElement;
  ro.observe(el);
  return () => ro.disconnect();
}
