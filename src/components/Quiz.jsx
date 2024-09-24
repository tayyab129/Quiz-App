import React, { useState } from "react";

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswere, setUserAnswere] = useState([]);
  return <p>Currently active Question</p>;
};

export default Quiz;
