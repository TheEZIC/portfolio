import { useCallback, useLayoutEffect, useRef } from "react";

type UseEventCallback = (...args: any[]) => any;

export const useEvent = <
  T extends UseEventCallback = UseEventCallback,
  K extends any[] = Parameters<T>
>(cb: T): T => {
  const ref = useRef<UseEventCallback>();

  useLayoutEffect(() => {
    ref.current = cb;
  });

  return useCallback((...args: K) => {
    return ref.current!(...args);
  }, []) as T;
};
