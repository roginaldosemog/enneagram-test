import React from "react";
import Question from "../Question";
import { QuestionsService } from "../../services";

const Questions = ({ answers, setAnswers, setShowResults }) => {
  const questions = QuestionsService.fetchQuestions();

  const isButtonDisabled = Object.keys(answers).length < questions.length;

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="mb-4">
        {questions.map((question) => {
          return (
            <Question
              key={`question-${question.id}`}
              id={question.id}
              type={question.type}
              affirmation={question.affirmation}
              answers={answers}
              setAnswers={setAnswers}
            />
          );
        })}
      </div>
      <button
        className="btn btn-lg btn-primary btn-block w-50"
        onClick={() => setShowResults(true)}
        disabled={isButtonDisabled}
      >
        Ver resultado
      </button>
    </div>
  );
};

export default Questions;
