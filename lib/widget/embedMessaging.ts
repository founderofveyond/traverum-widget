"use client";

export function initAutoResize() {
  if (typeof window === "undefined") return () => {};
  
  let lastSentHeight = 0;
  let debounceTimer: NodeJS.Timeout | null = null;
  const MAX_HEIGHT = 5000; // Cap to prevent infinite growth
  const HEIGHT_THRESHOLD = 5; // Only send if height changed by more than 5px
  
  const updateHeight = () => {
    // Get the actual widget content container
    const widgetContainer = document.querySelector('.max-w-5xl') || 
                            document.querySelector('.trv-container');
    
    if (!widgetContainer) {
      // Fallback to body if widget container not found
      const body = document.body;
      const calculatedHeight = Math.min(
        Math.max(body.scrollHeight, body.offsetHeight),
        MAX_HEIGHT
      );
      const roundedHeight = Math.ceil(calculatedHeight);
      
      if (Math.abs(roundedHeight - lastSentHeight) > HEIGHT_THRESHOLD) {
        lastSentHeight = roundedHeight;
        // Legacy message type used by existing demo pages
        window.parent?.postMessage({ type: "traverum.height", height: roundedHeight }, "*");
        // New generic message type for host pages that treat widget as a section
        window.parent?.postMessage({ type: "widget-resize", height: roundedHeight }, "*");
      }
      return;
    }
    
    // Measure only the widget container, not the entire document
    const containerHeight = (widgetContainer as HTMLElement).offsetHeight || 
                           (widgetContainer as HTMLElement).scrollHeight;
    
    // Cap the height to prevent infinite growth
    const height = Math.min(containerHeight, MAX_HEIGHT);
    const roundedHeight = Math.ceil(height);
    
    // Only send if height changed significantly
    if (Math.abs(roundedHeight - lastSentHeight) > HEIGHT_THRESHOLD) {
      lastSentHeight = roundedHeight;
      // Legacy message type used by existing demo pages
      window.parent?.postMessage({ type: "traverum.height", height: roundedHeight }, "*");
      // New generic message type for host pages that treat widget as a section
      window.parent?.postMessage({ type: "widget-resize", height: roundedHeight }, "*");
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

  // Find the actual widget content container to observe
  // Look for the main widget div with max-w-5xl class
  const widgetContainer = document.querySelector('.max-w-5xl') || 
                          document.querySelector('.trv-container') || 
                          document.body;
  
  // Use ResizeObserver on widget container
  const ro = new ResizeObserver((entries) => {
    // Only update if the observed element actually changed
    for (const entry of entries) {
      if (entry.contentRect.height > 0) {
        debouncedUpdate();
      }
    }
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
