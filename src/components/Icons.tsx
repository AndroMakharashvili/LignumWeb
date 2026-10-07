import React from 'react';

// Custom TikTok Icon SVG component
export const TiktokIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Custom Wood Saw Icon SVG component
export const SawIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="M18 4L4 18M7 7l-2 2M10 10l-2 2M13 13l-2 2M16 16l-2 2" />
    <path d="M19.5 7.5L16.5 4.5C15.7 3.7 14.3 3.7 13.5 4.5L12 6L18 12L19.5 10.5C20.3 9.7 20.3 8.3 19.5 7.5Z" />
  </svg>
);
