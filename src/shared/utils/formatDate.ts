const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

const formatter = new Intl.DateTimeFormat("pt-BR", options);

export function formatDate(date: string | Date): string {
  let _date = date;

  if (typeof _date === "string") {
    try {
      _date = new Date(date);
    } catch (error) {
      return (
        "Error on format date, please check type of variable date: " +
        typeof date
      );
    }
  }

  return formatter.format(_date);
}
