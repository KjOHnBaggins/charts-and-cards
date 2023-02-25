import React, { useRef, useState, useEffect } from "react";

const LazyLoadedComponent = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // stop observing the target element
        }
      },
      { rootMargin: "0px 0px -20px 0px" } // set a margin to detect the visibility before it is actually visible
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref}>{isVisible && children}</div>;
};

export default LazyLoadedComponent;
