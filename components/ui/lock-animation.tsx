import React from 'react';

interface LockAnimationProps {
  size?: number;
  autoAnimate?: boolean;
  autoAnimateInterval?: number;
}

export const LockAnimation: React.FC<LockAnimationProps> = ({
  size = 1,
  autoAnimate = true,
  autoAnimateInterval = 3000
}) => {
  return (
    <div className="flex items-center justify-center">
      <div style={{ transform: `scale(${size}) translateY(-20px)` }}>
        <img
          src="/Lock.gif"
          alt="Lock Animation"
          style={{
            width: 400,
            height: 400,
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