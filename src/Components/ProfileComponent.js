/* import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("_id")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <main className="profile">
      <div style={{ width: "70%" }}>
        <h2>Hey, </h2>
        <p>Here is your schedule: WAT</p>
        <table>
          <tbody>
            <tr>
              <td>MON</td>
              <td>8:00am</td>
              <td>10:00pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Profile;
 */