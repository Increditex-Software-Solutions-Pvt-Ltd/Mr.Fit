import React from "react";

const DateSelector = ({ selectedDate, onDateChange }) => {
  return (
    <div className="date-selector">
      <button className="calendar-icon-btn me-2 fw-bold">{`Jump to :`}</button>
      <input
        type="date"
        id="dateInput"
        value={selectedDate}
        className="px-2"
        onChange={(e) => {
          onDateChange(e.target.value);
        }}
      />
    </div>
  );
};

export default DateSelector;
