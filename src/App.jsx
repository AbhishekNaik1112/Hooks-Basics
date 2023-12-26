import React, { useState } from "react";
import UseState from "./components/UseState";
import UseContext from "./components/useContext";

export const ToggleTheme = React.createContext();

export default function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <div>
      <UseState />

      <ToggleTheme.Provider value={state}>
        <button
          onClick={handleToggle}
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Toggle
        </button>
        <UseContext />
      </ToggleTheme.Provider>
    </div>
  );
}
