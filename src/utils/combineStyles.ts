export const combineStyles = (classes: (string | undefined)[]) => {
  return classes.filter((c) => c).join(" ");
}
