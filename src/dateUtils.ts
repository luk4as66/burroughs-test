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

const getBonusPayDay = (
  startDate: Moment,
  bonusPayDayNumber: number
): Moment => {
  let payDay = moment(startDate).date(bonusPayDayNumber);
  if (isSunday(payDay)) {
    payDay = moment(payDay).add(3, "day");
  } else if (isSaturday(payDay)) {
    payDay = moment(payDay).add(4, "day");
  }

  return payDay;
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

export const calculateBonusesDates = (
  startDate: Moment,
  numberOfMonths: number,
  bonusPayDayNumber: number
): Array<Moment> => {
  const bonusesDates: Array<Moment> = [];
  let tmpStartOfMonth = moment(startDate);
  let iterations = numberOfMonths;

  while (iterations > 0) {
    bonusesDates.push(getBonusPayDay(tmpStartOfMonth, bonusPayDayNumber));
    tmpStartOfMonth = tmpStartOfMonth.add("1", "month");
    iterations = iterations - 1;
  }

  return bonusesDates;
};
