import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const AnimatedElement = ({
  children,
  className = "",
  animationType = "fade-up",
  delay = 0,
  ...props
}) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const getAnimationClasses = () => {
    const baseClasses = "animate-on-scroll";
    const delayClasses = delay > 0 ? `delay-${delay * 100}` : "";

    let animationClasses = "";
    switch (animationType) {
      case "fade-up":
        animationClasses = "";
        break;
      case "slide-left":
        animationClasses = "slide-left";
        break;
      case "slide-right":
        animationClasses = "slide-right";
        break;
      case "scale":
        animationClasses = "scale";
        break;
      case "rotate":
        animationClasses = "rotate";
        break;
      default:
        animationClasses = "";
    }

    return `${baseClasses} ${animationClasses} ${delayClasses} ${
      isIntersecting ? "animate-in" : ""
    }`.trim();
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;


