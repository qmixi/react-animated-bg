export const getRandomFromRange = len => Math.floor(Math.random() * len);

export const getPositionIndex = (currentIndex, colors, isRandom) => {
  if (isRandom) return getRandomFromRange(colors.length);
  return currentIndex === colors.length - 1 ? 0 : currentIndex + 1;
};
