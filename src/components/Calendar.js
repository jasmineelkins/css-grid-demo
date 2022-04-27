import React, { useState } from "react";
import img from "../calendar.png";

function Calendar(props) {
  return (
    <div className="grid-item3 calendar-container">
      <img src={img} alt="calendar" />
    </div>
  );
}

export default Calendar;
