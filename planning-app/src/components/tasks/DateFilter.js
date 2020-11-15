import React, { useState } from "react";
import moment from "moment";

const DateFilter = () => {
  const currentDate = moment(new Date()).format("yyyy-MM-DD");
  const [pickedDate, setPickedDate] = useState(currentDate);
  const [pickedDateTwo, setPickedDateTwo] = useState(currentDate);
  return (
    <div>
      <label htmlFor="start">Start date:</label>

      <input
        type="date"
        id="start"
        name="trip-start"
        value={pickedDate}
        min="2018-01-01"
        max="2020-11-16"
        onChange={(e) => setPickedDate(e.target.value)}
      />
      <label htmlFor="end">End date:</label>

      <input
        type="date"
        id="start"
        name="trip-start"
        value={pickedDateTwo}
        min="2018-01-01"
        max="2020-11-16"
        onChange={(e) => setPickedDateTwo(e.target.value)}
      />
    </div>
  );
};

export default DateFilter;
