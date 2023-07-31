import {useCallback, useState} from "react";
import {Vector2D} from "../types/Vector2D";

type UserCursorPositionEvents = {
  onMouseMove: (e: React.MouseEvent<any>) => void;
};

export type UseCursorPositionReturnType = [Vector2D, UserCursorPositionEvents];

export const useCursorPosition = (): UseCursorPositionReturnType => {
  const [position, setPosition] = useState<Vector2D>([0, 0]);

  const onMouseMove = useCallback((e: React.MouseEvent<any>) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;

    setPosition([x, y]);
  }, []);

  return [position, {
    onMouseMove,
  }];
};
