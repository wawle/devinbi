import React from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";
const isRenderingOnServer = typeof window === "undefined";

export default function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(
    () => (isRenderingOnServer ? null : !window.matchMedia(QUERY).matches)
  );

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);

    // Set the initial state on the client if it was null during SSR
    if (prefersReducedMotion === null) {
      setPrefersReducedMotion(!mediaQueryList.matches);
    }

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [prefersReducedMotion]);

  return prefersReducedMotion;
}
