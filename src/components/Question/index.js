import React from "react";

const Question = ({ id, type, affirmation, answers, setAnswers }) => {
  return (
    <div className="question-card">
      <p className="pb-2">{id + ". " + affirmation}</p>
      <div
        className="d-flex justify-content-center align-items-center"
        onChange={(e) =>
          setAnswers({
            ...answers,
            ["answer-" + id]: { type, answer: Number(e.target.value) },
          })
        }
      >
        <p className="answer-caption">Não me identifico</p>
        <input
          className="answer-radio"
          type="radio"
          value={0}
          name={"answer" + id}
        />
        <input
          className="answer-radio"
          type="radio"
          value={1}
          name={"answer" + id}
        />
        <input
          className="answer-radio"
          type="radio"
          value={2}
          name={"answer" + id}
        />
        <input
          className="answer-radio"
          type="radio"
          value={3}
          name={"answer" + id}
        />
        <input
          className="answer-radio"
          type="radio"
          value={4}
          name={"answer" + id}
        />
        <input
          className="answer-radio"
          type="radio"
          value={5}
          name={"answer" + id}
        />
        <p className="answer-caption">Me identifico totalmente</p>
      </div>
    </div>
  );
};

export default Question;
