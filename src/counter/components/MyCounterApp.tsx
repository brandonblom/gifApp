import { useCounter } from "../hooks/useCountert";

export const MyCounterApp = () => {
const {counter, handleAdd, handleSubtract, handleReset} = useCounter()

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>coounter: {counter}</h1>

      <div>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
