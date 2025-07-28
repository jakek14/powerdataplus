import React from 'react';
import Image from 'next/image';

interface LockAnimationProps {
  size?: number;
}

export const LockAnimation: React.FC<LockAnimationProps> = ({
  size = 1
}) => {
  return (
    <div className="flex items-center justify-center">
      <div style={{ transform: `scale(${size}) translateY(-20px)` }}>
        <Image
          src="/Lock.gif"
          alt="Lock Animation"
          width={400}
          height={400}
          style={{
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