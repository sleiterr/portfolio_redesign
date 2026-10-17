import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  // state to track if the media query matches
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  // effect to handle media query changes
  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);

    // Set the initial match state and add the event listener for changes
    setMatches(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);

  // return the current match state
  return matches;
};
