import React, { useState } from "react";
import Header from "../../components/Header";
import Questions from "../../components/Questions";
import Results from "../../components/Results";

const EnneagramTestPage = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({});

  return (
    <div className="full-page bg-secondary text-white pb-4">
      <Header />
      <div className="container text-center">
        <div className="title-container">
          <h1>Teste do Eneagrama</h1>
          {showResults ? (
            <p>Veja os seus resultados abaixo</p>
          ) : (
            <p>Reponda o quanto você se identifica com cada afirmação abaixo</p>
          )}
        </div>
      </div>
      {showResults ? (
        <Results answers={answers} />
      ) : (
        <Questions
          answers={answers}
          setAnswers={setAnswers}
          setShowResults={setShowResults}
        />
      )}
    </div>
  );
};

export default EnneagramTestPage;
