import React from "react";
import "../css/ComponentsCSS/Schedule.css";

function Schedule({ schedules, selectedDate }) {
  // Filter schedules based on selected date
  const filteredSchedules = schedules.filter(
    (schedule) => schedule.date === selectedDate
  );

  // Function to extract unique keys from schedule objects
  const extractColumns = () => {
    const columns = new Set();
    schedules.forEach((schedule) => {
      Object.keys(schedule).forEach((key) => {
        if (key !== "date") {
          columns.add(key);
        }
      });
    });
    return Array.from(columns);
  };

  const columns = extractColumns();

  return (
    <div>
      {filteredSchedules.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredSchedules.map((schedule, index) => (
              <tr key={index}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>
                    {schedule[column].name ? (
                      <>
                        <img
                          src={schedule[column].logo}
                          alt="Logo"
                          width="30px"
                          style={{ marginRight: "5px" }}
                        />
                        {schedule[column].name}
                      </>
                    ) : (
                      schedule[column]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5 className="text-center mt-3 fw-bold">No games on this date.</h5>
      )}
    </div>
  );
}

export default Schedule;
