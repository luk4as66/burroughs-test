import { calculateBonusesDates, calculateSalaryDates } from "./dateUtils";
import moment, { Moment } from "moment";

describe("dateUtils", () => {
  test("it calculate Salary Dates correctly", () => {
    const expectedDates: ReadonlyArray<string> = [
      "2022-03-31",
      "2022-04-29",
      "2022-05-31",
      "2022-06-30",
    ];

    const actualDates = calculateSalaryDates(moment("2022-03-13"), 4).map(
      (date) => date.format("YYYY-MM-DD")
    );
    expect(actualDates).toEqual(expectedDates);
  });

  test("it calculate Salary Dates correctly when last month day is weekend", () => {
    const expectedDates: ReadonlyArray<string> = [
      "2022-05-31",
      "2022-06-30",
      "2022-07-29",
      "2022-08-31",
    ];

    const actualDates = calculateSalaryDates(moment("2022-04-30"), 4).map(
      (date) => date.format("YYYY-MM-DD")
    );
    expect(actualDates).toEqual(expectedDates);
  });

  test("it calculate Salary Dates correctly when selected day is last workday before last weekend", () => {
    const expectedDates: ReadonlyArray<string> = [
      "2022-04-29",
      "2022-05-31",
      "2022-06-30",
      "2022-07-29",
    ];

    const actualDates = calculateSalaryDates(moment("2022-04-29"), 4).map(
      (date) => date.format("YYYY-MM-DD")
    );
    expect(actualDates).toEqual(expectedDates);
  });

  test("it calculate Bonus Dates correctly", () => {
    const expectedDates: ReadonlyArray<string> = [
      "2022-03-15",
      "2022-04-15",
      "2022-05-18",
      "2022-06-15",
    ];

    const actualDates = calculateBonusesDates(moment("2022-03-13"), 4, 15).map(
      (date) => date.format("YYYY-MM-DD")
    );
    expect(actualDates).toEqual(expectedDates);
  });

  test("it calculate Bonus Dates correctly when selected day is after bonus pay day", () => {
    const expectedDates: ReadonlyArray<string> = [
      "2022-04-15",
      "2022-05-18",
      "2022-06-15",
      "2022-07-15",
    ];

    const actualDates = calculateBonusesDates(moment("2022-03-16"), 4, 15).map(
      (date) => date.format("YYYY-MM-DD")
    );
    expect(actualDates).toEqual(expectedDates);
  });

  test("it calculate Bonus Dates correctly when payday is weekend", () => {
    const expectedDates: ReadonlyArray<string> = [
      "2022-05-18",
      "2022-06-15",
      "2022-07-15",
      "2022-08-15",
    ];

    const actualDates = calculateBonusesDates(moment("2022-05-13"), 4, 15).map(
      (date) => date.format("YYYY-MM-DD")
    );
    expect(actualDates).toEqual(expectedDates);
  });
});
