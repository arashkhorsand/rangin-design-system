import React from 'react';

// Exact path data lifted from the inline SVGs in the source previews (24px grid, 1.75 stroke, round caps/joins, currentColor).
export const ICON_PATHS = {
  "home": "<path d=\"M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z\"/>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"6.5\"/><path d=\"M16 16l4 4\"/>",
  "bag": "<path d=\"M6 8h12l1 12H5z\"/><path d=\"M9 8V7a3 3 0 0 1 6 0v1\"/>",
  "user": "<circle cx=\"12\" cy=\"8\" r=\"3.5\"/><path d=\"M5 20a7 7 0 0 1 14 0\"/>",
  "check": "<path d=\"M5 12.5l4.5 4.5L19 7.5\"/>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M12 8v4l3 2\"/>",
  "alert": "<circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M12 8v5M12 16v.5\"/>",
  "plus": "<path d=\"M12 5v14M5 12h14\"/>",
  "arrow-left": "<path d=\"M19 12H5M11 6l-6 6 6 6\"/>",
  "star": "<path d=\"M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.8z\" fill=\"currentColor\"/>",
  "bowl": "<path d=\"M4 12h16a8 8 0 0 1-16 0zM12 4v4M8 5v3M16 5v3\"/>",
  "car": "<path d=\"M4 17v-5l2-5h12l2 5v5M4 12h16M7 17v2M17 17v2\"/>",
  "box": "<path d=\"M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8\"/>",
  "card": "<rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"2.5\"/><path d=\"M3 10.5h18M7 15h3\"/>",
  "send": "<path d=\"M3 13l18-8-6 16-3-7z\"/>",
  "medical": "<circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M12 8.5v7M8.5 12h7\"/>",
  "grid": "<rect x=\"4\" y=\"4\" width=\"6.5\" height=\"6.5\" rx=\"1.5\"/><rect x=\"13.5\" y=\"4\" width=\"6.5\" height=\"6.5\" rx=\"1.5\"/><rect x=\"4\" y=\"13.5\" width=\"6.5\" height=\"6.5\" rx=\"1.5\"/><rect x=\"13.5\" y=\"13.5\" width=\"6.5\" height=\"6.5\" rx=\"1.5\"/>"
};

export function Icon({ name, size = 24, label, style, ...rest }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return React.createElement('svg', {
    viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: 'currentColor',
    strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': label ? undefined : true, 'aria-label': label, role: label ? 'img' : undefined,
    style, ...rest,
    dangerouslySetInnerHTML: { __html: d }
  });
}
