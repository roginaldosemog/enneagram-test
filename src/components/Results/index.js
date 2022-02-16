import React from "react";
import CanvasJSReact from "../../assets/canvasjs/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Results = ({ answers }) => {
  const getTypeTotal = (type) => {
    var total = 0;
    Object.keys(answers).forEach((index) => {
      if (answers[index].type === type) total += answers[index].answer;
    });
    return total;
  };

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    axisY: {
      valueFormatString: " ",
      tickLength: 0,
    },
    title: {
      text: "Teste do Eneagrama - Resultado",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Tipo 1", y: getTypeTotal(1) },
          { label: "Tipo 2", y: getTypeTotal(2) },
          { label: "Tipo 3", y: getTypeTotal(3) },
          { label: "Tipo 4", y: getTypeTotal(4) },
          { label: "Tipo 5", y: getTypeTotal(5) },
          { label: "Tipo 6", y: getTypeTotal(6) },
          { label: "Tipo 7", y: getTypeTotal(7) },
          { label: "Tipo 8", y: getTypeTotal(8) },
          { label: "Tipo 9", y: getTypeTotal(9) },
        ],
      },
    ],
  };

  return (
    <div className="container">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Results;
