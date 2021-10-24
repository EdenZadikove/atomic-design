import moment from "moment";

export const humanizeDatetime = (datetime: number, suffix: boolean) => {
  /**
   * date format- "dd/mm/yyyy, hh,mm,ss"
   */
  return moment.duration(datetime, "millisecond").humanize(suffix);
};

export const datetimeToMilliseconds = (datetime: Date) => {
  const years = +datetime.getFullYear() * 365 * 12 * 24 * 60 * 60;
  const months = (+datetime.getMonth() + 1) * 12 * 30 * 24 * 60 * 60;
  const days = +datetime.getDay() * 24 * 60 * 60;

  const hours = +datetime.getHours() * 60 * 60;
  const minutes = +datetime.getMinutes() * 60;
  const seconds = +datetime.getSeconds();

  return (years + months + days + hours + minutes + seconds) / 1000;
   ;
};
