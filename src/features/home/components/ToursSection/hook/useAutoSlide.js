import { useState, useEffect, useRef } from "react";

// Hook réutilisable pour n'importe quelle liste
export const useAutoSlide = (length, intervalTime = 3000) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, intervalTime);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const goToIndex = (index) => setActiveIndex(index);

  return { activeIndex, goToIndex, startAutoSlide, stopAutoSlide };
};
