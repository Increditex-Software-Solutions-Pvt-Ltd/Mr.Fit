import React from "react";
import DateSelector from "./DateSelector";

const DateTabs = ({ selectedDate, onDateSelect }) => {
  // Generate list of dates based on selected date
  const generateDates = () => {
    const dates = [];
    const currentDate = new Date(selectedDate);
    for (let i = -2; i <= 2; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push(date.toISOString().slice(0, 10)); // Get only the date part
    }
    return dates;
  };

  const dates = generateDates();

  return (
    <div className="date-tabs">
      <div className="my-3 mt-5">
        <DateSelector selectedDate={selectedDate} onDateChange={onDateSelect} />
      </div>

      <ul className="nav nav-tabs">
        {dates.map((date, index) => {
          const formattedDate = new Date(date).toLocaleDateString(undefined, {
            day: "numeric",
            month: "short",
          });
          return (
            <li className="nav-item" key={index}>
              <button
                className={`nav-link ${
                  date === selectedDate ? "active fw-bold" : ""
                }`}
                onClick={() => onDateSelect(date)}
              >
                {formattedDate}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DateTabs;
