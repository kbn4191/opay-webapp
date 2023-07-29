// src/components/DateRangePicker.js
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangePickerComponent = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
  };

  return (
    <div>
      <h2>Date Range Picker</h2>
      <DateRangePicker
        ranges={[dateRange]}
        onChange={handleSelect}
      />
      <div>
        <p>Start Date: {dateRange.startDate.toLocaleDateString()}</p>
        <p>End Date: {dateRange.endDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default DateRangePickerComponent;
