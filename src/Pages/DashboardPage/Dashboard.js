import React, { useState, useEffect } from "react";
import TimezoneSelect from "react-timezone-select";
import { useNavigate } from "react-router-dom";
import { time } from "../../services/utils";
import { toast } from "react-toastify";
import "./Dashboard.css";
import axios from "axios";

export const DashboardComponent = () => {
  const userId = localStorage.getItem("userId");
  const [schedule, setSchedule] = useState([
    { day: "Sun", startTime: "", endTime: "" },
    { day: "Mon", startTime: "", endTime: "" },
    { day: "Tue", startTime: "", endTime: "" },
    { day: "Wed", startTime: "", endTime: "" },
    { day: "Thu", startTime: "", endTime: "" },
    { day: "Fri", startTime: "", endTime: "" },
    { day: "Sat", startTime: "", endTime: "" },
  ]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth_jwt")) {
      navigate("/");
    }
  }, [navigate]);

  const [selectedTimezone, setSelectedTimezone] = useState({});
  const handleTimeChange = (e, id) => {
    const { name, value } = e.target;
    if (value === "Select") return;
    const list = [...schedule];
    list[id][name] = value;
    setSchedule(list);
  };
  const handleSaveSchedules = () => {
    if (JSON.stringify(selectedTimezone) !== "{}") {
      axios
        .post(
          `http://localhost:5100/users/${userId}/schedule`,
          {
            timezone: selectedTimezone,
            schedule: schedule,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("auth_jwt")}`,
            },
          }
        )
        .then(() => {
          toast.success("Schedule saved successfully!");
        })
        .catch((err) => {
          toast.error("Error saving schedule. Please try again.");
          console.log(err);
        });
    } else {
      toast.error("Select your timezone");
    }
  };
  return (
    <div className="dashboard-component">
      <main className="dashboard-main">
        <h2 className="dashboard-heading">Select your availability</h2>
        <div className="timezone-wrapper">
          <div class="timezone-select-wrapper">
            <p>Pick your timezone</p>
            <TimezoneSelect
              value={selectedTimezone}
              onChange={setSelectedTimezone}
            />
          </div>

          {schedule.map((sch, id) => (
            <div className="form-card" key={id}>
              <p>{sch.day}</p>
              <div>
                <label htmlFor="startTime">Start Time</label>
                <select
                  name="startTime"
                  id="startTime"
                  onChange={(e) => handleTimeChange(e, id)}
                >
                  {time.map((t) => (
                    <option key={t.id} value={t.t} id={t.id}>
                      {t.t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="endTime">End Time</label>
                <select
                  name="endTime"
                  id="endTime"
                  onChange={(e) => handleTimeChange(e, id)}
                >
                  {time.map((t) => (
                    <option key={t.id} value={t.t} id={t.id}>
                      {t.t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <div className="save-btn-container">
            <button onClick={handleSaveSchedules}>SAVE SCHEDULES</button>
          </div>
        </div>
      </main>
    </div>
  );
};
