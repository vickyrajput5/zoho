import React from "react";
import moment from "moment";
import "./style.css";

const ListView = () => {
  // Sample data, replace with real data fetch
  const data = [
    {
      date: "2023-07-03",
      day: "Monday",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
      totalHours: 8,
    },
    {
      date: "2023-07-04",
      day: "Tuesday",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
      totalHours: 8,
    },
    {
      date: "2023-07-05",
      day: "Wednesday",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
      totalHours: 8,
    },
    {
      date: "2023-07-06",
      day: "Thursday",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
      totalHours: 8,
    },
    {
      date: "2023-07-07",
      day: "Friday",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
      totalHours: 8,
    },
    {
      date: "2023-07-08",
      day: "Saturday",
      checkIn: "10:00 AM",
      checkOut: "04:00 PM",
      totalHours: 6,
    },
    {
      date: "2023-07-09",
      day: "Sunday",
      checkIn: "OFF",
      checkOut: "OFF",
      totalHours: 0,
    },
  ];

  return (
    <div className="list-view-container">
      <h2>List View</h2>
      <ul className="list-view">
        <li className="list-heading">
          <div>Date</div>
          <div>Check In</div>
          <div>Check Out</div>
          <div>Total Hours</div>
        </li>
        {data.map((item, index) => (
          <li key={index} className="list-item">
            <div>
              {moment(item.date).format("YYYY-MM-DD")} ({item.day})
            </div>
            <div>{item.checkIn}</div>
            <div>{item.checkOut}</div>
            <div>{item.totalHours} hours</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
