"use client";

import * as React from "react";
import { useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function CountUp({ value, suffix = "", duration = 1.8 }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(reduceMotion ? value : 0);

  React.useEffect(() => {
    if (!isInView || reduceMotion) {
      if (reduceMotion) setDisplay(value);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, isInView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
