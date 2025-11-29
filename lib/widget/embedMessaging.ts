"use client";

export function initAutoResize() {
  if (typeof window === "undefined") return () => {};
  
  let lastSentHeight = 0;
  let debounceTimer: NodeJS.Timeout | null = null;
  const MAX_HEIGHT = 5000; // Cap to prevent infinite growth
  const HEIGHT_THRESHOLD = 5; // Only send if height changed by more than 5px
  
  const updateHeight = () => {
    // Get the actual content height
    const body = document.body;
    const html = document.documentElement;
    
    // Calculate height using the maximum of scroll/offset heights
    const calculatedHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    
    // Cap the height to prevent infinite growth
    const height = Math.min(calculatedHeight, MAX_HEIGHT);
    const roundedHeight = Math.ceil(height);
    
    // Only send if height changed significantly
    if (Math.abs(roundedHeight - lastSentHeight) > HEIGHT_THRESHOLD) {
      lastSentHeight = roundedHeight;
      window.parent?.postMessage({ type: "traverum.height", height: roundedHeight }, "*");
    }
  };

  // Debounced update function
  const debouncedUpdate = () => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(updateHeight, 200);
  };

  // Initial height calculation after a short delay
  setTimeout(updateHeight, 100);

  // Find the widget container to observe instead of entire body
  const widgetContainer = document.querySelector('.trv-container') || document.body;
  
  // Use ResizeObserver on widget container
  const ro = new ResizeObserver(() => {
    debouncedUpdate();
  });
  
  ro.observe(widgetContainer);
  
  // Also update on window resize (debounced)
  window.addEventListener('resize', debouncedUpdate);
  
  return () => {
    ro.disconnect();
    window.removeEventListener('resize', debouncedUpdate);
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
  };
}
