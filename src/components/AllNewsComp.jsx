import React from "react";

const AllNewsComp = () => {
  // Create a new Date object for today
  const today = new Date();

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month, day, and year from the today object
  const month = monthNames[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();

  // Format the date in the desired format
  const formattedDate = `${month} ${day}, ${year}`;

  // Create a new Date object for the current time
  const currentTime = new Date();

  // Get the hours, minutes, and time zone offset from the currentTime object
  let hours = currentTime.getUTCHours();
  let minutes = currentTime.getUTCMinutes();
  const timeZoneOffset = 5.3; // GMT+5:30

  // Adjust hours and minutes for the time zone offset
  hours += Math.floor(timeZoneOffset);
  minutes += Math.floor((timeZoneOffset % 1) * 60);

  // Handle overflow and underflow of hours and minutes
  if (minutes >= 60) {
    minutes %= 60;
    hours += 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours >= 24) {
    hours %= 24;
  }
  if (hours < 0) {
    hours += 24;
  }

  // Convert hours to 12-hour format and determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12

  // Format the time in the desired format
  const formattedTime = `${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm} GMT+${timeZoneOffset}`;

  return (
    <div>
      <section className="m-3">
        <div className="d-flex justify-content-between align-items-center border-bottom">
          <div>
            <span>
              <b>Thursday</b>
            </span>{" "}
            <br />
            <small>{formattedDate}</small>
          </div>
          <div>
            <small>{formattedTime + `0`}</small>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllNewsComp;
