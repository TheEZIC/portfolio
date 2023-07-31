import {useCallback, useState} from "react";
import {isMobile} from "../utils/isMobile";

type UseHoverEvents = {
  onMouseOver: () => void;
  onMouseOut: () => void;
  onClick: () => void;
};

export type UseHoverReturnType = [boolean, UseHoverEvents];

export const useHover = (): UseHoverReturnType => {
  const [hover, setHover] = useState<boolean>(false);

  const onMouseOver = useCallback(() => {
    if (!hover) {
      setHover(true);
    }
  }, [hover]);

  const onMouseOut = useCallback(() => {
    if (hover) {
      setHover(false);
    }
  }, [hover]);

  const onClick = useCallback(() => {
    if (!isMobile()) {
      return;
    }

    setHover((v) => !v)
  }, []);

  return [hover, {
    onMouseOver,
    onMouseOut,
    onClick,
  }];
};
