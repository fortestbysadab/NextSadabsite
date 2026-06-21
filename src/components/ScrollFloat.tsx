"use client";

import { useEffect, useMemo, useRef, type ReactNode, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

type ScrollFloatProps = {
  /** Content to animate. If a string, it is split into individual characters. */
  children: ReactNode;
  /** Optional ref to the scroll container. Defaults to window. */
  scrollContainerRef?: RefObject<HTMLElement>;
  /** Additional classes for the container (<h2>) element. */
  containerClassName?: string;
  /** Additional classes for the inner text span. */
  textClassName?: string;
  /** Duration (seconds) of the animation. */
  animationDuration?: number;
  /** GSAP easing function. */
  ease?: string;
  /** ScrollTrigger start position. */
  scrollStart?: string;
  /** ScrollTrigger end position. */
  scrollEnd?: string;
  /** Delay between each character's animation. */
  stagger?: number;
};

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}: ScrollFloatProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="char" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".char");

    const tween = gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
      },
      {
        duration: animationDuration,
        ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );

    // Clean up the ScrollTrigger instance when props change / unmount.
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
