import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import DateInput from "./dateInput";
import moment from "moment";

describe("dateInput", () => {
  test("should render correctly", () => {
    const selectedDateMock = moment("2022-12-23");
    const onDateChangeMock = jest.fn();

    render(
      <DateInput
        selectedDate={selectedDateMock}
        onDateChange={onDateChangeMock}
      />
    );

    expect(screen.getByTestId("input-date")).toHaveValue("2022-12-23");
  });

  test("should call callback onChange", () => {
    const selectedDateMock = moment("2022-12-23");
    const onDateChangeMock = jest.fn();

    render(
      <DateInput
        selectedDate={selectedDateMock}
        onDateChange={onDateChangeMock}
      />
    );

    const input = screen.getByTestId("input-date");
    fireEvent.change(input, { target: { value: "2000-02-02" } });

    expect(onDateChangeMock).lastCalledWith(moment("2000-02-02"));
  });

  test("should limit available year to 5000", () => {
    const selectedDateMock = moment("2022-12-23");
    const onDateChangeMock = jest.fn();

    render(
      <DateInput
        selectedDate={selectedDateMock}
        onDateChange={onDateChangeMock}
      />
    );

    const input = screen.getByTestId("input-date");
    fireEvent.change(input, { target: { value: "6000-02-02" } });

    expect(onDateChangeMock).lastCalledWith(moment("6000-02-02").year(5000));
  });
});
