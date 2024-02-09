import React from "react";
import Left from "../component/Leftcomponent/Left";
import Right from "../component/Rightcompoent/Right";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-component">
      <Left />
      <Right />
    </div>
  );
};

export default Home;
