import { useEffect } from "react";
import { useEvent } from "./useEvent";

type WindowEvent<T extends string> = T extends keyof WindowEventMap
  ? WindowEventMap[T]
  : Event;

type UseWindowEvent<T extends string = string> = {
  (type: T, cb: (e: WindowEvent<T>) => void): void;
  (type: string, cb: (e: Event) => void): void;
};

export const useWindowEvent: UseWindowEvent = (type, cb) => {
  const callback = useEvent(cb);

  useEffect(() => {
    window.addEventListener(type, callback);

    return () => {
      window.removeEventListener(type, callback);
    };
  }, []);
};
