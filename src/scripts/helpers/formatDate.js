export const formatDate = (integer) => {
  const date = new Date(integer);
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getUTCFullYear();
  const formattedDate = month + "/" + day + "/" + year;
  return formattedDate; // returns the date with desired format
};
