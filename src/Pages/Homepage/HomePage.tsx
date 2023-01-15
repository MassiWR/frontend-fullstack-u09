import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="pictureHome">
            <img src="images/bookRimage.png" alt="bookRimage" />
          </div>
          <div className="home-card">
            <h1>Welcome to BookR!</h1>
            <p>Click on the links below to get started:</p>
            <button className="home-card" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="home-card" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
