import React from "react";
import QuizLogo from "../assets/quiz-logo.png";
const Header = () => {
  return (
    <header>
      <img src={QuizLogo} alt="" />
      <h1>QuizApp</h1>
    </header>
  );
};

export default Header;
