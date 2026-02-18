"use client";

import { cloneElement, useEffect, useRef, type ReactElement, type Ref } from "react";

interface IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface AnimatedIconLoopProps {
  children: ReactElement<{ ref?: Ref<IconHandle> }>;
  interval?: number;
}

export default function AnimatedIconLoop({ children, interval = 3000 }: AnimatedIconLoopProps) {
  const ref = useRef<IconHandle>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.startAnimation();

    const timer = setInterval(() => {
      ref.current?.startAnimation();
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return cloneElement(children, { ref } as Record<string, unknown>);
}
