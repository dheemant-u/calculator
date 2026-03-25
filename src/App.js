import ScientificCalculator from "./ScientificCalculator";
import StringCalculator from "./StringCalculator";
import FactorialComponent from "./FactorialComponent";
import SetOneCalculator from "./SetOneCalculator";
import SumOfDigits from "./SumOfDigits";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>FullStack Frameworks - Lab Experiments</h1>
      <ScientificCalculator />
      <StringCalculator />
      <FactorialComponent />
      <SetOneCalculator />
      <SumOfDigits />
    </div>
  );
}

export default App;
