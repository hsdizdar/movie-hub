export const formatMovieReleaseDate = (date: string) => {
  const [year, month, day] = date.split("-");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[parseInt(month) - 1]} ${day}, ${year}`;
};

export const formatDateWithUS = (date?: string) => {
  if (!date) return "";

  const formattedDate = new Date(date).toLocaleDateString("en-US");
  return formattedDate;
};

export const getYearFromDate = (date?: string) => {
  if (!date) return "";

  const year = new Date(date).getFullYear();
  return year;
};
