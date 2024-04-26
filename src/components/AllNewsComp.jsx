import React, { useEffect, useState } from "react";

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

  function getDayName() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay(); // Returns a number (0-6) representing the day of the week

    return daysOfWeek[dayIndex];
  }

  const todaysday = getDayName();

  // Format the date in the desired format
  const formattedDate = `${month} ${day}, ${year}`;

  const [currentTime, setCurrentTime] = useState("");
  const [currentTimeZone, setCurrentTimeZone] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      // Create a new Date object for the current time
      const now = new Date();

      // Get the current time in the desired format (12-hour with leading zeros for minutes)
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";

      const formattedTime = `${hours}:${minutes} ${ampm}`;

      // Get the time zone offset in minutes
      const timeZoneOffsetMinutes = now.getTimezoneOffset();

      // Calculate the time zone offset in hours and minutes as positive values
      const timeZoneOffsetHours = Math.abs(
        Math.floor(timeZoneOffsetMinutes / 60)
      );
      const timeZoneOffsetMinutesRemainder =
        Math.abs(timeZoneOffsetMinutes) % 60;

      // Format the time zone offset as GMT+hh:mm
      const timeZoneAbbr = `GMT${timeZoneOffsetMinutes >= 0 ? "-" : "+"}${
        timeZoneOffsetHours - 1
      }:${timeZoneOffsetMinutesRemainder.toString().padStart(2, "0")}`;

      // Update state with the current time and dynamically generated time zone abbreviation
      setCurrentTime(formattedTime);
      setCurrentTimeZone(timeZoneAbbr);
    };

    // Update the date and time initially
    updateDateTime();

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const stories = [
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25165521/marta-brazil-scaled-e1714078575233-1024x684.jpeg",
      name: "ORLANDO PRIDE",
      headline:
        "Brazil legend Marta to retire from international duty this year",
      para: "Brazilian legend Marta will retire from international football this year. The 38-year-old confirmed the news in an interview with CNN Esportes S/A that airs",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25150924/arne-slot-scaled-e1714072188408-1024x684.jpeg",
      name: "LIVERPOOL",
      headline:
        "Arne Slot says it is 'clear' he wants Liverpool job: 'I am confident an agreement will be reached with Feyenoord'",
      para: "Feyenoord head coach Arne Slot says it is “clear” he wants to take over at Liverpool and is “confident” the two sides can reach an agreement to facilitate such a",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/12/26080505/GettyImages-1401579539-scaled-e1714066035215-1024x681.jpg",
      name: "MANCHESTER UNITED",
      headline:
        "Dan Ashworth to take Newcastle to arbitration over Manchester United move",
      para: "Dan Ashworth is set to take Newcastle United to arbitration to help facilitate his move to Manchester United. Ashworth, 53, was placed on gardening leave",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/19044132/GettyImages-2148526748-1-scaled-e1714055797726-1024x683.jpg",
      name: "WREXHAM FC",
      headline:
        "Wrexham finalise tour schedule including Whitecaps, Chelsea and Bournemouth friendlies",
      para: "Wrexham will play in co-owner Ryan Reynolds’ home city of Vancouver on their pre-season tour of the USA and Canada. Phil Parkinson’s newly-",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25104742/kroes-1-1024x683.jpg",
      name: "NETHERLANDS",
      headline:
        "Alex Kroes returns to Ajax as technical director amid suspected insider trading controversy",
      para: "Alex Kroes has been allowed to return to Ajax in an altered role of technical director just over three weeks after his suspension for suspected insider trading. Kroes, 49, formally began work as Ajax CE",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25102810/enzo-fernandez-scaled-e1714055355580-1024x683.jpeg",
      name: "CHELSEA",
      headline:
        "Chelsea's Enzo Fernandez has season-ending surgery, facing race to be fit for Copa America",
      para: "Chelsea midfielder Enzo Fernandez has had groin surgery which will mean he misses their remaining fixtures this season. The Argentina international",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25104143/GettyImages-2136577987-scaled-e1714056116621-1024x686.jpg",
      name: "BRENTFORD",
      headline:
        "Brentford's Ivan Toney making progress in recovery from hip injury, Thomas Frank hopeful of return vs Everton",
      para: "Brentford forward Ivan Toney took part and scored in a small-sided game in training on Thursday as he steps up his recovery from a hip injury. Toney",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25100245/GettyImages-1726767106-e1714053783921-1024x683.jpg",
      name: "NFL",
      headline:
        "London mayor Sadiq Khan pledges to bring Super Bowl to UK's capital if re-elected",
      para: "Mayor of London Sadiq Khan has pledged to bring the Super Bowl to the capital of the United Kingdom if he is re-elected next month. Khan, 53, has held the",
    },
  ];

  const headlines = [
    {
      title: "NETHERLANDS",
      para: "Alex Kroes returns to Ajax as technical director amid suspected insider trading controversy",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25104742/kroes-1-1024x683.jpg",
    },
    {
      title: "CHELSEA",
      para: "Chelsea's Enzo Fernandez has season-ending surgery, facing race to be fit for Copa America",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25102810/enzo-fernandez-scaled-e1714055355580-1024x683.jpeg",
    },
    {
      title: "BRENTFORD",
      para: "Brentford's Ivan Toney making progress in recovery from hip injury, Thomas Frank hopeful of return vs Everton",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25104143/GettyImages-2136577987-scaled-e1714056116621-1024x686.jpg",
    },
    {
      title: "NFL",
      para: "London mayor Sadiq Khan pledges to bring Super Bowl to UK's capital if re-elected",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25100245/GettyImages-1726767106-e1714053783921-1024x683.jpg",
    },
    {
      title: "MANCHESTER UNITED",
      para: "Manchester United keen to ‘strengthen academy to first team pathway’ after landmark Ethan Wheatley debut",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25094551/WheatleyETH-1024x682.jpg",
    },
    {
      title: "REAL MADRID",
      para: "Real Madrid's presidential election process challenged by fans' group",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25064211/GettyImages-1714865195-1024x683.jpg",
    },
    {
      title: "BARCELONA",
      para: "Xavi explains decision to stay as Barcelona head coach: 'This is an unfinished project'",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25080244/GettyImages-2149536217-scaled-e1714046612156-1024x683.jpg",
    },
    {
      title: "LIVERPOOL",
      para: "Arne Slot's 'philosophy' could suit Liverpool - Virgil van Dijk",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25065725/GettyImages-2149958914-scaled-e1714042671238-1024x683.jpg",
    },
    {
      title: "BOURNEMOUTH",
      para: "Bournemouth confirm pre-season tour of United States",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25055716/GettyImages-2125417199-scaled-e1714039066585-1024x684.jpg",
    },
    {
      title: "LIVERPOOL",
      para: "Jurgen Klopp apologises to Liverpool fans for Everton defeat",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/24182459/GettyImages-2149441016-scaled-e1713997521288-1024x701.jpg",
    },
    {
      title: "LIVERPOOL",
      para: "Virgil van Dijk questions whether Liverpool team-mates 'really want to win the league' after latest title setback",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/24175226/GettyImages-2149441258-scaled-e1713995579951-1024x734.jpg",
    },
    {
      title: "BARCELONA",
      para: "Xavi to stay on as Barcelona head coach after talks with Joan Laporta",
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/23064027/GettyImages-2148586370-1024x683.jpg",
    },
  ];

  // Function to chunk the array into groups of size
  function chunkArray(array, size) {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }

  // Chunk the headlines array into groups of 4
  const chunkedHeadlines = chunkArray(headlines, 4);

  return (
    <div>
      <section className="m-3">
        <div className="d-flex justify-content-between align-items-center border-bottom">
          <div>
            <span>
              <b>{todaysday}</b>
            </span>{" "}
            <br />
            <small>{formattedDate}</small>
          </div>
          <div>
            <small>{`${currentTime} ${currentTimeZone}`}</small>
          </div>
        </div>
      </section>

      <section className="m-3">
        <div className="row border-bottom">
          <div className="col-12 col-lg-7">
            <img
              src="https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/25175504/tuchel-kiss-1024x683.jpeg"
              alt="img"
              width="100%"
              style={{ paddingBottom: "10px" }}
            />
          </div>
          <div className="col-12 col-lg-5 d-flex gap-5 justify-content-center align-items-center">
            <div
              className="d-flex flex-column gap-2"
              style={{ padding: "20px" }}
            >
              <small
                style={{
                  fontSize: "0.7rem",
                  margin: "10px 0px",
                }}
              >
                BAYERN MUNICH
              </small>
              <h5>
                <b>
                  Bayern Munich supporters petition club to keep Thomas Tuchel
                  next season: 'Not Rangnick!'
                </b>
              </h5>
              <small>
                Bayern Munich supporters have petitioned the club to retain
                Thomas Tuchel as their head coach for next season, saying other
                candidates “don’t hold a candle” to the 50-year-old. A
                change.org petition entitled ‘We want Juppel (Tuchel) and not
                (Ralf) Rangnick!’ has more than 10,000 signatures, having been
                launched on Tuesday. Austria head coach Rangnick confirmed
                earlier this week that he was in talks with Bayern over
                replacing Tuchel. Bayer...
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="m-3">
        <div className="row border-bottom">
          {stories.map((story) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-4 g-4">
                <div>
                  <img
                    src={story.pic}
                    alt={story.name}
                    width="100%"
                    style={{ aspectRatio: 3 / 2 }}
                  />
                </div>
                <div>
                  <small style={{ fontSize: "0.8rem", padding: "20px 0px" }}>
                    {story.name}
                  </small>
                </div>

                <h6>
                  <b>{story.headline}</b>
                </h6>
                <div>
                  <small>{story.para}</small>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="m-3">
        <div className="row border-bottom">
          {chunkedHeadlines.map((chunk, index) => {
            return (
              <div className="col-12 col-lg-4 p-3">
                <div className={`row ${index <= 1 ? "border-end" : ""}`}>
                  {chunk.map((headline) => {
                    return (
                      <div className="col-12 pb-4">
                        <small
                          style={{
                            fontSize: "0.8rem",
                            color: "gray",
                            fontWeight: "bold",
                          }}
                        >
                          {headline.title}
                        </small>
                        <div className="d-flex justify-content-between align-items-center">
                          <h6>
                            <b>{headline.para}</b>
                          </h6>
                          <div>
                            <img
                              src={headline.pic}
                              alt={headline.title}
                              width="80px"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AllNewsComp;
