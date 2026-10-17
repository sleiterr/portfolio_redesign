import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component listens for changes in the URL hash and scrolls to the corresponding element
const ScrollToHash = () => {
  const location = useLocation();

  // When the component mounts or when the location changes, check for a hash and scroll to it
  useEffect(() => {
    if (!location.hash) return;

    // id is the hash without the '#' character, decoded to handle URL encoding
    const id = decodeURIComponent(location.hash.replace("#", ""));
    // headerOffset accounts for fixed header height to prevent content from being hidden behind it
    const headerOffset = 96;
    let attempts = 0;
    // maxAttempts and timers are used to retry scrolling if the target element is not immediately available (e.g., due to async content loading)
    const maxAttempts = 20;
    // timers array will hold the IDs of the timeouts so they can be cleared if the component unmounts before they execute
    const timers = [];

    // scrollToElement scrolls the page to the target element with the specified behavior (smooth or auto)
    const scrollToElement = (el, behavior = "smooth") => {
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(top, 0), behavior });
    };

    // stabilizeAfterScroll checks if the element is correctly positioned after scrolling and retries if it's not, up to a maximum number of attempts
    const stabilizeAfterScroll = (el) => {
      let stabilizeTries = 0;
      const maxStabilizeTries = 8;

      // stabilize checks the distance from the target element to the top of the viewport and retries scrolling if it's not within a small threshold, which can happen if images or other content load after the initial scroll
      const stabilize = () => {
        const distance = el.getBoundingClientRect().top - headerOffset;
        if (Math.abs(distance) < 4 || stabilizeTries >= maxStabilizeTries)
          return;

        scrollToElement(el, "auto");
        stabilizeTries += 1;
        timers.push(window.setTimeout(stabilize, 180));
      };

      // Start the stabilization process after the initial scroll
      timers.push(window.setTimeout(stabilize, 260));
    };

    // tryScroll attempts to find the target element and scroll to it. If the element is not found, it retries after a short delay, up to a maximum number of attempts. This is useful for cases where the content is loaded asynchronously and the target element may not be in the DOM immediately.
    const tryScroll = () => {
      const el = document.getElementById(id);

      if (el) {
        scrollToElement(el, "smooth");
        stabilizeAfterScroll(el);
        return;
      }

      if (attempts < maxAttempts) {
        attempts += 1;
        timers.push(window.setTimeout(tryScroll, 100));
      }
    };

    timers.push(window.setTimeout(tryScroll, 0));

    return () => {
      // Clear all pending timeouts when the component unmounts to prevent memory leaks and unintended behavior if the user navigates away before the scrolling is complete
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [location.pathname, location.hash, location.key]);

  return null;
};

export default ScrollToHash;
