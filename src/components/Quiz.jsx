import React, { useCallback, useRef, useState } from "react";
import QUESTIONS from "../question";
import quizComplteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;
  const quizIsCompelte = activeQuestionIndex === QUESTIONS.length;

  // handleSelectAnswere function

  const handleSelectAnswere = useCallback(function handleSelectAnswere(
    selectedAnswer
  ) {
    setUserAnswer((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswere(null),
    [handleSelectAnswere]
  );

  if (quizIsCompelte) {
    return (
      <div id="summary">
        <img src={quizComplteImg} alt="Trophy icon" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }
  // this code is execute after the quizIsComplete is done!

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswere}
        skipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
