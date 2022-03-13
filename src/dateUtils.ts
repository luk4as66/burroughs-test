import moment, { Moment } from "moment";

const isSunday = (date: Moment): boolean => date.day() === 0;
const isSaturday = (date: Moment): boolean => date.day() === 6;

const getLastWorkDayOfMonth = (lastDayOfMonth: Moment): Moment => {
  let lastWorkDay = moment(lastDayOfMonth);
  if (isSunday(lastDayOfMonth)) {
    lastWorkDay = moment(lastDayOfMonth).subtract(2, "day");
  } else if (isSaturday(lastDayOfMonth)) {
    lastWorkDay = moment(lastDayOfMonth).subtract(1, "day");
  }

  return lastWorkDay;
};

export const calculateSalaryDates = (
  startDate: Moment,
  numberOfMonths: number
): Array<Moment> => {
  const salaryDates: Array<Moment> = [];
  let tmpEndOfMonth = moment(startDate).endOf("month");

  let iterations = numberOfMonths;

  while (iterations > 0) {
    salaryDates.push(getLastWorkDayOfMonth(tmpEndOfMonth));
    tmpEndOfMonth = tmpEndOfMonth.add("1", "month");
    iterations = iterations - 1;
  }

  return salaryDates;
};
