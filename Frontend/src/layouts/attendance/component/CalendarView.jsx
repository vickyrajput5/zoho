import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";

const localizer = momentLocalizer(moment);

// Set app element for accessibility (for screen readers)
// Modal.setAppElement("#root"); // or '#app' if your root element has an id of 'app'

const CalendarView = () => {
  const [events, setEvents] = useState([
    // Sample events, replace with real data fetch
    {
      title: "Present",
      start: new Date(2023, 6, 4),
      end: new Date(2023, 6, 4),
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
    },
    {
      title: "Absent",
      start: new Date(2023, 6, 5),
      end: new Date(2023, 6, 5),
      status: "Absent",
    },
    // More events...
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onRequestClose={closeModal}
          contentLabel="Event Details"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "500px",
              width: "100%",
            },
          }}
        >
          <h2>{selectedEvent.title}</h2>
          {selectedEvent.status === "Present" ? (
            <div>
              <p>Check In: {selectedEvent.checkIn}</p>
              <p>Check Out: {selectedEvent.checkOut}</p>
            </div>
          ) : (
            <p>Status: {selectedEvent.status}</p>
          )}
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default CalendarView;
