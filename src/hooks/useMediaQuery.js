import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

// Usage example:
// const isMobile = useMediaQuery('(max-width: 768px)');
// const isTablet = useMediaQuery('(max-width: 1024px)');
// const isDesktop = useMediaQuery('(min-width: 1025px)');
