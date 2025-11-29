"use client";

export function initAutoResize() {
  if (typeof window === "undefined") return () => {};
  
  const updateHeight = () => {
    // Get the actual content height, not including potential infinite scroll
    const body = document.body;
    const html = document.documentElement;
    
    // Use the smaller of scrollHeight and offsetHeight to avoid infinite growth
    const height = Math.min(
      Math.max(body.scrollHeight, body.offsetHeight),
      Math.max(html.scrollHeight, html.offsetHeight)
    );
    
    window.parent?.postMessage({ type: "traverum.height", height: Math.ceil(height) }, "*");
  };

  // Initial height calculation
  setTimeout(updateHeight, 100);

  // Use ResizeObserver on body instead of documentElement to avoid infinite loops
  const ro = new ResizeObserver(() => {
    updateHeight();
  });
  
  ro.observe(document.body);
  
  // Also update on window resize
  window.addEventListener('resize', updateHeight);
  
  return () => {
    ro.disconnect();
    window.removeEventListener('resize', updateHeight);
  };
}
