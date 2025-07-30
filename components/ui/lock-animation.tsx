import React from 'react';

const getImagePath = (path: string) => {
  // Simple approach: just return the path as-is for local development
  // For production, check if we need to add a base path
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const isGitHubPages = window.location.pathname.includes('/darkmodeknownvisitors');
    return isGitHubPages ? `/darkmodeknownvisitors${path}` : path;
  }
  // Server-side: for local development, just return the path
  return path;
};

interface LockAnimationProps {
  size?: number;
}

export const LockAnimation: React.FC<LockAnimationProps> = ({
  size = 1
}) => {
  return (
    <div className="flex items-center justify-center">
      <div style={{ transform: `scale(${size}) translateY(-20px)` }}>
        <img
          src={getImagePath('/Lock.gif')}
          alt="Lock Animation"
          style={{
            width: '400px',
            height: '400px',
            border: 'none',
            background: 'transparent',
            objectFit: 'contain',
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
          }}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}; 