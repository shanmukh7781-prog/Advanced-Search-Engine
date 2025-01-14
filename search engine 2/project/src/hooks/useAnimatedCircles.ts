import { useMemo } from 'react';

interface CircleAnimation {
  initial: {
    x: number;
    y: number;
    scale: number;
  };
  animate: {
    x: number;
    y: number;
    scale: number;
  };
  transition: {
    duration: number;
    repeat: number;
    repeatType: "reverse";
  };
  style: {
    width: string;
    height: string;
  };
}

export function useAnimatedCircles(count: number): CircleAnimation[] {
  return useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const size = Math.random() * 200 + 100;
      
      return {
        initial: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
        },
        animate: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
        },
        transition: {
          duration: Math.random() * 10 + 20,
          repeat: Infinity,
          repeatType: "reverse",
        },
        style: {
          width: `${size}px`,
          height: `${size}px`,
        },
      };
    });
  }, [count]);
}