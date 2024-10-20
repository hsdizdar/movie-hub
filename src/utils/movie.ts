export const getRoundVote = (vote: number) => {
  const roundedVote = Math.round(vote * 10) / 10;
  return roundedVote % 1 === 0 ? roundedVote.toFixed(1) : roundedVote;
};

export const getFormattedPopularity = (popularity: number) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(popularity);
};
