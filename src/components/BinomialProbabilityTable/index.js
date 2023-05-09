import React, { useState } from "react";
import { Table, TableDiv, ResultProb, Prob, InputNumber } from "./styled";

function BinomialProbabilityTable() {
  const [p, setP] = useState(0.5);
  const [x, setX] = useState(0);
  const [n, setN] = useState(10);
  const [probabilities, setProbabilities] = useState([]);
  const [probabilitiesAcc, setProbabilitiesAcc] = useState([]);
  const [prob, setProb] = useState();
  const [probAcc, setProbAcc] = useState();

  function calculateProbabilities() {
    const binomialCoefficient = (n, x) => {
      let result = 1;
      for (let i = 1; i <= x; i++) {
        result *= (n - i + 1) / i;
      }
      return result;
    };
    const AccProbabilities = (table, l) => {
      let result = 0;
      for (let i = 0; i < l; i++) {
        result = Number(result) + Number(table[i]);
      }
      return result;
    };

    const newProbabilities = [];
    const newProbabilitiesAcc = [];
    const ProbabilitiesAcc = [];
    const probabilityValue = (
      binomialCoefficient(n, x) *
      Math.pow(p, x) *
      Math.pow(1 - p, n - x)
    ).toFixed(4);

    for (let i = 0; i <= n; i++) {
      const probability =
        binomialCoefficient(n, i) * Math.pow(p, i) * Math.pow(1 - p, n - i);

      newProbabilities.push({
        x: i,
        probability: probability,
      });
      ProbabilitiesAcc.push(probability);
    }
    for (let i = 0; i < n + 1; i++) {
      const probabilityAcc = AccProbabilities(ProbabilitiesAcc, i + 1);
      newProbabilitiesAcc.push({
        x: i,
        probability: probabilityAcc,
      });
    }
    const probabilityAccValue = AccProbabilities(
      ProbabilitiesAcc,
      ProbabilitiesAcc.length
    );
    setProbabilitiesAcc(newProbabilitiesAcc);
    setProbabilities(newProbabilities);
    setProb(probabilityValue);
    setProbAcc(probabilityAccValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    calculateProbabilities();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="p">p:</label>
          <InputNumber
            id="p"
            min="0"
            step={0.01}
            max="1"
            placeholder={"P || ex: " + p}
            title="Sendo P a probabilidade de sucesso"
            onChange={(event) => setP(parseFloat(event.target.value))}
          />
          {/* <input
            type="number"
            id="p"
            min="0"
            placeholder={"P || ex: " + p}
            title="Sendo P a probabilidade de sucesso"
            onChange={(event) => setP(parseFloat(event.target.value))}
          /> */}
        </div>
        <div>
          <label htmlFor="x">x:</label>
          <InputNumber
            id="x"
            min="0"
            title="Sendo X a número de sucesso em uma amostra"
            placeholder={"X || ex: " + x}
            onChange={(event) => setX(parseInt(event.target.value))}
          />

          {/* <label htmlFor="x">x:</label> */}
          {/* <input
            type="number"
            id="x"
            min="0"
            title="Sendo X a número de sucesso em uma amostra"
            placeholder={"X || ex: " + x}
            onChange={(event) => setX(parseInt(event.target.value))}
          /> */}
        </div>
        <div>
          <label htmlFor="n">n:</label>
          <InputNumber
            min="0"
            placeholder={"N || ex: " + n}
            title="Sendo N a número total de ensaios"
            id="n"
            onChange={(event) => setN(parseInt(event.target.value))}
          />
          {/* <input
            type="number"
            min="0"
            placeholder={"N || ex: " + n}
            title="Sendo N a número total de ensaios"
            id="n"
            onChange={(event) => setN(parseInt(event.target.value))}
          /> */}
        </div>
        <button type="submit">Calcular</button>
      </form>

      <ResultProb>
        <Prob>Probabilidade: {Number(prob ?? 0)?.toFixed(4)}</Prob>
        <Prob>Probabilidade Acumulada: {Number(probAcc ?? 0)?.toFixed(4)}</Prob>
      </ResultProb>
      <TableDiv>
        <Table>
          <thead>
            <tr>
              <th>x</th>

              <th>Probabilidade</th>
            </tr>
          </thead>
          <tbody>
            {probabilities.map((probability) => (
              <tr key={probability.x}>
                <td>{probability.x}</td>
                <td>{probability.probability.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Table>
          <thead>
            <tr>
              <th>x</th>

              <th>Probabilidade acumulada</th>
            </tr>
          </thead>
          <tbody>
            {probabilitiesAcc.map((probability) => (
              <tr key={probability.x}>
                <td>{probability.x}</td>
                <td>{probability.probability.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableDiv>
    </div>
  );
}

export default BinomialProbabilityTable;
