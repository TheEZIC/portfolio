export const isMobile = () => (('ontouchstart' in window) ||
  ((navigator as any).maxTouchPoints > 0) ||
  ((navigator as any).msMaxTouchPoints > 0));
