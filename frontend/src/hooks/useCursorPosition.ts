import { useState } from "react";
import { Vector2D } from "../types/Vector2D";
import { useEvent } from "@hooks/useEvent";

type UserCursorPositionEvents = {
  onMouseMove: (e: React.MouseEvent<any>) => void;
};

export type UseCursorPositionReturnType = [Vector2D, UserCursorPositionEvents];

export const useCursorPosition = (): UseCursorPositionReturnType => {
  const [position, setPosition] = useState<Vector2D>([0, 0]);

  const onMouseMove = useEvent((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition([x, y]);
  });

  return [position, {
    onMouseMove,
  }];
};
