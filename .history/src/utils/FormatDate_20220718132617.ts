export const FormatDate = (date: string): string => {

  const dateFormatted = new Date(date);

  const day = dateFormatted.getDate() > 9 ;
  const month = dateFormatted.getMonth() + 1;
  const year = dateFormatted.getFullYear();

  return `${day}/${month}/${year}`


}