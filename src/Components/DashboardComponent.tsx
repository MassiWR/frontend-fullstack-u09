import React, { useState, useEffect, FC } from "react";
import TimezoneSelect from "react-timezone-select";
import { useNavigate } from "react-router-dom";

export const DashboardComponent: FC = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(
    TimezoneSelect.prototype
  );

  return (
    <div>
      <main className="dashboard__main">
        <h2 className="dashboard__heading">Select your availability</h2>

        <div className="timezone__wrapper">
          <p>Pick your timezone</p>
          <TimezoneSelect
            value={selectedTimezone}
            onChange={setSelectedTimezone}
          />
        </div>
      </main>
    </div>
  );
};
