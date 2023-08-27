import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

type WindowDimension = [number, number];

export const useWindowDimension = (): WindowDimension => {
  const [dimension, setDimension] = useState<WindowDimension>([
    window.innerWidth,
    window.innerHeight,
  ]);

  useWindowEvent("resize", () => {
    setDimension([window.innerWidth, window.innerHeight]);
  });

  return dimension;
};
