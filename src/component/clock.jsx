// import React, { useState, useEffect } from "react";
// import "../Clock.css";

// const timeZones = [
//   "Asia/Kolkata",
//   "America/New_York",
//   "Europe/London",
//   "Asia/Tokyo",
//   "Australia/Sydney",
//   "Africa/Nairobi",
// ];

// export default function DigitalClock() {
//   const [time, setTime] = useState("");
//   const [selectedZone, setSelectedZone] = useState("Asia/Kolkata");

//   useEffect(() => {
//     const updateClock = () => {
//       const now = new Date();
//       const options = {
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: true,
//         timeZone: selectedZone,
//       };
//       const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
//         now
//       );
//       setTime(formattedTime);
//     };

//     updateClock();
//     const timer = setInterval(updateClock, 1000);

//     return () => clearInterval(timer);
//   }, [selectedZone]);

//   return (
//     <div className="clock-container">
//       <h2 className="clock-title">Digital Clock</h2>

//       <select
//         value={selectedZone}
//         onChange={(e) => setSelectedZone(e.target.value)}
//         className="timezone-select"
//       >
//         {timeZones.map((zone) => (
//           <option key={zone} value={zone}>
//             {zone}
//           </option>
//         ))}
//       </select>

//       <div className="clock-display">{time}</div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "../Clock.css";
const timeZones = [
  "Asia/Kolkata",
  "Asia/Seoul",
  "Antarctica/Palmer",
  "Australia/Adelaide",
  "America/Sao_Paulo",
  "America/New_York",
  "Europe/Paris",
  "Europe/Moscow",
  "Africa/Nairobi",
  "Africa/Casablanca",
];
const DigitalClock = () => {
  const [time, setTime] = useState("");
  const [selectedZone, setSelectedZone] = useState("Asia/Kolkata");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: selectedZone,
      };

      const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
        now
      );
      setTime(formattedTime);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [selectedZone]);

  return (
    <div className="clock-container">
      <h2 className="clock-title">Digital Clock</h2>
      <select
        value={selectedZone}
        onChange={(e) => {
          setSelectedZone(e.target.value);
        }}
        className="timezone-select"
      >
        {timeZones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
      <div className="clock-display">{time}</div>
    </div>
  );
};

export default DigitalClock;
