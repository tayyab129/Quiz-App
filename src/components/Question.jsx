import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  skipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={skipAnswer} />
      <h2>{}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
