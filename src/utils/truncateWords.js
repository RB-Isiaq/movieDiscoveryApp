export const truncateWords = (text) => {
  const words = text?.split(" ");
  if (words?.length <= 80) {
    return words.join(" ");
  }
  return words?.slice(0, 100).join(" ") + " ...";
};
