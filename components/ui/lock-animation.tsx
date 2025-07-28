import React from 'react';

const getImagePath = (path: string) => {
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const isGitHubPages = window.location.pathname.includes('/darkmodeknownvisitors');
    return isGitHubPages ? `/darkmodeknownvisitors${path}` : path;
  }
  // Server-side: use environment check
  return process.env.NODE_ENV === 'production' ? `/darkmodeknownvisitors${path}` : path;
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