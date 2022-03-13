import moment, { Moment } from "moment";
import { DATE_FORMAT } from "./constants";

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

const isTooLateToMakePaymentAtThisMonth = (startDate: Moment): boolean => {
  const endOfMonth = moment(startDate).endOf("month");
  return (
    (isSunday(startDate) || isSaturday(startDate)) &&
    startDate.date() === endOfMonth.date()
  );
};

const isToLateToPayBonusAtThisMonth = (
  date: Moment,
  bonusPayDayNumber: number
): boolean =>
  (!isSaturday(date) || !isSunday(date)) && date.date() > bonusPayDayNumber;

export const calculateSalaryDates = (
  startDate: Moment,
  numberOfMonths: number
): Array<Moment> => {
  const salaryDates: Array<Moment> = [];
  let tmpEndOfMonth = moment(startDate).endOf("month");

  let iterations = numberOfMonths;

  if (isTooLateToMakePaymentAtThisMonth(startDate)) {
    tmpEndOfMonth = tmpEndOfMonth.add(1, "month");
  }

  while (iterations > 0) {
    salaryDates.push(getLastWorkDayOfMonth(tmpEndOfMonth.endOf("month")));
    tmpEndOfMonth = tmpEndOfMonth.add(1, "month");
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
  let tmpDate = moment(startDate);
  let iterations = numberOfMonths;

  if (isToLateToPayBonusAtThisMonth(startDate, bonusPayDayNumber)) {
    //make sure that we move to next month and not set date grater then next bonusPayDayNumber
    tmpDate = tmpDate.endOf("month").add(1, "day");
  }

  while (iterations > 0) {
    bonusesDates.push(getBonusPayDay(tmpDate, bonusPayDayNumber));
    tmpDate = tmpDate.add(1, "month");
    iterations = iterations - 1;
  }

  return bonusesDates;
};

export const convertToFormattedDateStringArray = (
  dates: ReadonlyArray<Moment>
): ReadonlyArray<string> => {
  return dates.map((date) => date.format(DATE_FORMAT));
};
