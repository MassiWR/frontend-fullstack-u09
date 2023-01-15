import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProfileComponent = () => {
  const userId = localStorage.getItem("userId");
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    function getUserDetails() {
      if (userId) {
        fetch(`http://localhost:5100/users/${userId}/schedule`)
          .then((res) => res.json())
          .then((data) => {
            setUsername(data.firstName);
            setSchedules(data.schedule);
            setTimezone(data.timezone.value);
            setLoading(false);
          })
          .catch((err) => console.error(err));
      }
    }
    getUserDetails();
  }, [userId]);

  return (
    <main className="profile">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Hey, {username}</h2>
          <p>Here is your schedule: - {timezone}</p>
          <table>
            <tbody>
              {schedules.map((sch) => (
                <tr key={sch.day}>
                  <td style={{ fontWeight: "bold" }}>
                    {sch.day.toUpperCase()}
                  </td>
                  <td>{sch.startTime || "Unavailable"}</td>
                  <td>{sch.endTime || "Unavailable"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};
