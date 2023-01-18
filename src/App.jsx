import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [mensage, setMensage] = useState("");

  function calculate() {
    const heig = height / 100;
    const imc = weight / (heig * heig);

    if (imc < 18.6) {
      setMensage("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensage("Peso ideal! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensage(
        "Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2)
      );
    } else if (imc >= 34.9) {
      setMensage("Cuidado obesidade! Seu IMC: " + imc.toFixed(2));
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 87"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="text"
          placeholder="Altura em (cm) Ex: 182"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculate}>Calcular</button>
      </div>

      <h2>{mensage}</h2>
    </div>
  );
}

export default App;
