import React from 'react';

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
          src="/Lock.gif"
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