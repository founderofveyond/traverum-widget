"use client";

import { useState, useEffect, useMemo } from "react";
import { getHotelTheme, type HotelTheme } from "@/lib/widget/hotelThemes";
import dynamic from "next/dynamic";

const WidgetRoot = dynamic(() => import("@/components/widget/WidgetRoot"), { ssr: false });

// Popular Google Fonts for selection
const GOOGLE_FONTS = [
  { name: 'Overpass', url: 'https://fonts.googleapis.com/css2?family=Overpass:wght@300;700&display=swap' },
  { name: 'Inter', url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap' },
  { name: 'Roboto', url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap' },
  { name: 'Open Sans', url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap' },
  { name: 'Lato', url: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap' },
  { name: 'Montserrat', url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap' },
  { name: 'Poppins', url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap' },
  { name: 'Nunito', url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;700&display=swap' },
];

const HEADING_FONTS = [
  { name: 'New York', url: null }, // Custom font
  { name: 'Playfair Display', url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap' },
  { name: 'Merriweather', url: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap' },
  { name: 'Lora', url: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap' },
  { name: 'Crimson Text', url: 'https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&display=swap' },
  { name: 'Roboto Slab', url: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap' },
  { name: 'Cormorant Garamond', url: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap' },
];

export default function AdminPage({ params }: { params: { hotelId: string } }) {
  const initialTheme = useMemo(() => getHotelTheme(params.hotelId), [params.hotelId]);
  const [theme, setTheme] = useState<HotelTheme>(initialTheme);
  const [previewTheme, setPreviewTheme] = useState<HotelTheme>(initialTheme);

  // Apply theme to preview
  useEffect(() => {
    const root = document.documentElement;
    
    // Colors
    root.style.setProperty("--trv-primary", previewTheme.colors.primary);
    root.style.setProperty("--trv-primary-hover", previewTheme.colors.primaryHover);
    root.style.setProperty("--trv-secondary", previewTheme.colors.secondary);
    root.style.setProperty("--trv-secondary-hover", previewTheme.colors.secondaryHover);
    root.style.setProperty("--trv-bg", previewTheme.colors.background);
    root.style.setProperty("--trv-bg-light", previewTheme.colors.backgroundLight);
    root.style.setProperty("--trv-fg", previewTheme.colors.text);
    root.style.setProperty("--trv-text-gray", previewTheme.colors.textGray);
    root.style.setProperty("--trv-text-dark-gray", previewTheme.colors.textDarkGray);
    root.style.setProperty("--trv-text-darker-gray", previewTheme.colors.textDarkerGray);
    root.style.setProperty("--trv-text-tan", previewTheme.colors.textTan || previewTheme.colors.secondary);
    root.style.setProperty("--trv-border-light", previewTheme.colors.border);
    root.style.setProperty("--trv-form-bg", previewTheme.colors.formBg);
    
    // Fonts
    root.style.setProperty("--trv-font-body", previewTheme.fonts.body);
    root.style.setProperty("--trv-font-heading", previewTheme.fonts.heading);
    
    // Sizing
    root.style.setProperty("--trv-base-font-size", `${previewTheme.sizing.baseFontSize}px`);
    root.style.setProperty("--trv-base-line-height", `${previewTheme.sizing.baseLineHeight}px`);
    root.style.setProperty("--trv-heading-size", `${previewTheme.sizing.headingSize}px`);
    root.style.setProperty("--trv-card-title-size", `${previewTheme.sizing.cardTitleSize}px`);
    root.style.setProperty("--trv-card-image-height", `${previewTheme.sizing.cardImageHeight}px`);
    root.style.setProperty("--trv-container-radius", `${previewTheme.sizing.containerRadius}px`);
    root.style.setProperty("--trv-small-radius", `${previewTheme.sizing.smallRadius}px`);
    
    // Load fonts
    if (previewTheme.fonts.bodyUrl) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = previewTheme.fonts.bodyUrl;
      link.id = 'trv-body-font';
      const existing = document.getElementById('trv-body-font');
      if (existing) existing.remove();
      document.head.appendChild(link);
    }
    if (previewTheme.fonts.headingUrl) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = previewTheme.fonts.headingUrl;
      link.id = 'trv-heading-font';
      const existing = document.getElementById('trv-heading-font');
      if (existing) existing.remove();
      document.head.appendChild(link);
    }
  }, [previewTheme]);

  const updateTheme = (updates: Partial<HotelTheme>) => {
    setTheme(prev => ({ ...prev, ...updates }));
    setPreviewTheme(prev => ({ ...prev, ...updates }));
  };

  const updateColors = (updates: Partial<HotelTheme['colors']>) => {
    updateTheme({ colors: { ...theme.colors, ...updates } });
  };

  const updateFonts = (updates: Partial<HotelTheme['fonts']>) => {
    updateTheme({ fonts: { ...theme.fonts, ...updates } });
  };

  const updateSizing = (updates: Partial<HotelTheme['sizing']>) => {
    updateTheme({ sizing: { ...theme.sizing, ...updates } });
  };

  const handleSave = () => {
    // Generate the theme code
    const themeCode = JSON.stringify(theme, null, 2);
    const code = `  ${params.hotelId}: ${themeCode},`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(code).then(() => {
      alert('Theme code copied to clipboard! Paste it into lib/widget/hotelThemes.ts');
      console.log('Theme code:', code);
    }).catch(() => {
      // Fallback if clipboard fails
      console.log('Theme code:', code);
      prompt('Copy this theme code:', code);
    });
  };

  const handleReset = () => {
    setTheme(initialTheme);
    setPreviewTheme(initialTheme);
  };

  const handleExport = () => {
    const exportData = {
      ...theme,
      hotelId: params.hotelId,
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${params.hotelId}-theme.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Editor Panel */}
        <div className="w-96 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-6 sticky top-0 bg-white border-b border-gray-200 z-10 shadow-sm">
            <h1 className="text-2xl font-bold mb-2">Widget Editor</h1>
            <p className="text-sm text-gray-600 mb-4">{theme.name} ({params.hotelId})</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Copy Theme Code
              </button>
              <div className="flex gap-2">
                <button
                  onClick={handleExport}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm"
                >
                  Export JSON
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Content */}
            <section>
              <h2 className="text-lg font-semibold mb-3">Content</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    value={theme.content?.title || ''}
                    onChange={(e) => updateTheme({ 
                      content: { 
                        ...theme.content, 
                        title: e.target.value, 
                        description: theme.content?.description || '' 
                      } 
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={theme.content?.description || ''}
                    onChange={(e) => updateTheme({ 
                      content: { 
                        ...theme.content, 
                        description: e.target.value, 
                        title: theme.content?.title || '' 
                      } 
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={2}
                  />
                </div>
              </div>
            </section>

            {/* Colors */}
            <section>
              <h2 className="text-lg font-semibold mb-3">Colors</h2>
              <div className="space-y-3">
                {Object.entries(theme.colors).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium mb-1 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={value}
                        onChange={(e) => updateColors({ [key]: e.target.value })}
                        className="w-16 h-10 border border-gray-300 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => updateColors({ [key]: e.target.value })}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fonts */}
            <section>
              <h2 className="text-lg font-semibold mb-3">Fonts</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Body Font</label>
                  <select
                    value={theme.fonts.body}
                    onChange={(e) => {
                      const font = GOOGLE_FONTS.find(f => f.name === e.target.value);
                      updateFonts({
                        body: e.target.value,
                        bodyUrl: font?.url || undefined
                      });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {GOOGLE_FONTS.map(font => (
                      <option key={font.name} value={font.name}>{font.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Heading Font</label>
                  <select
                    value={theme.fonts.heading}
                    onChange={(e) => {
                      const font = HEADING_FONTS.find(f => f.name === e.target.value);
                      updateFonts({
                        heading: e.target.value,
                        headingUrl: font?.url || undefined
                      });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {HEADING_FONTS.map(font => (
                      <option key={font.name} value={font.name}>{font.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Sizing */}
            <section>
              <h2 className="text-lg font-semibold mb-3">Sizing</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Base Font Size: <span className="font-bold">{theme.sizing.baseFontSize}px</span>
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    step="0.1"
                    value={theme.sizing.baseFontSize}
                    onChange={(e) => updateSizing({ baseFontSize: parseFloat(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Base Line Height: <span className="font-bold">{theme.sizing.baseLineHeight}px</span>
                  </label>
                  <input
                    type="range"
                    min="16"
                    max="40"
                    step="0.1"
                    value={theme.sizing.baseLineHeight}
                    onChange={(e) => updateSizing({ baseLineHeight: parseFloat(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Heading Size: <span className="font-bold">{theme.sizing.headingSize}px</span>
                  </label>
                  <input
                    type="range"
                    min="24"
                    max="72"
                    step="1"
                    value={theme.sizing.headingSize}
                    onChange={(e) => updateSizing({ headingSize: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Card Title Size: <span className="font-bold">{theme.sizing.cardTitleSize}px</span>
                  </label>
                  <input
                    type="range"
                    min="16"
                    max="48"
                    step="1"
                    value={theme.sizing.cardTitleSize}
                    onChange={(e) => updateSizing({ cardTitleSize: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Card Image Height: <span className="font-bold">{theme.sizing.cardImageHeight}px</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="400"
                    step="10"
                    value={theme.sizing.cardImageHeight}
                    onChange={(e) => updateSizing({ cardImageHeight: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Container Radius: <span className="font-bold">{theme.sizing.containerRadius}px</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="32"
                    step="1"
                    value={theme.sizing.containerRadius}
                    onChange={(e) => updateSizing({ containerRadius: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Small Radius: <span className="font-bold">{theme.sizing.smallRadius}px</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="16"
                    step="1"
                    value={theme.sizing.smallRadius}
                    onChange={(e) => updateSizing({ smallRadius: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-4 text-sm text-gray-600 bg-white p-3 rounded-lg shadow-sm">
              <strong>Live Preview</strong> - Changes apply instantly. Use the controls on the left to customize.
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <WidgetRoot hotelId={params.hotelId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

