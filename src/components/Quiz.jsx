import React, { useCallback, useRef, useState } from "react";
import QUESTIONS from "../question";
import quizComplteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
const Quiz = () => {
  const [answerState, setAnswerState] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;
  const quizIsCompelte = activeQuestionIndex === QUESTIONS.length;

  // handleSelectAnswere function

  const handleSelectAnswere = useCallback(
    function handleSelectAnswere(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswer((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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
        questionText={QUESTIONS[activeQuestionIndex].text}
        answerState={answerState}
        selectedAnswer={userAnswer[userAnswer.length - 1]}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswere}
        skipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
