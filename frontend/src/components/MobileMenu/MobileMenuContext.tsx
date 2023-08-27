import { createContext } from "@utils/context";

export type MobileMenuContext = {
  opened: boolean;
  toggle: () => void;
};

export const [MobileMenuProvider, useMobileMenuContext] = createContext<MobileMenuContext>("MobileMenuContext")
