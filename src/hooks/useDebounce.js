import { useMemo, useEffect } from "react";
import { useThrottle } from "./useThrottle";

export const makeDebounceHook = (debounceFn) => {
  return function useDebounce(cb, ms) {
    const latestCb = useThrottle(cb);

    const debouncedFn = useMemo(
      () =>
        debounceFn((...args) => {
          latestCb.current(...args);
        }, ms),
      [ms, latestCb]
    );

    useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);

    return debouncedFn;
  };
};
