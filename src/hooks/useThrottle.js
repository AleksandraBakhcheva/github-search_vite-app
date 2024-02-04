import { useLayoutEffect, useRef } from "react";

export const useThrottle = (value) => {
  const latestValue = useRef(value);

  useLayoutEffect(() => {
    latestValue.current = value;
  });

  return latestValue;
};
