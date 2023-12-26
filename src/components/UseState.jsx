import { useState } from "react";

// function UseState() {
//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(1);

//   const handleAge = () => {
//     setAge(currAge + 1);
//   };

//   const handleSib = () => {
//     setSib(currSib + 1);
//   };

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={handleAge}>Get Older</button>
//       <button onClick={handleSib}>Get more Sib</button>
//     </div>
//   );
// }

// export default UseState;

function UseState() {
  const [state, setState] = useState({ age: 19, siblings: 3 });

  const handleState = (val) => {
    setState({
      ...state,
      [val]: state[val] + 1,
    });
  };

  const { age, siblings } = state;

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="font-bold text-3xl">My Current Age is {age}</h3>
      <h4 className="font-bold text-3xl">My siblings {siblings}</h4>
      <button
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        type="button"
        onClick={() => {
          handleState("age");
        }}
      >
        age
      </button>
      <button
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        type="button"
        onClick={() => {
          handleState("siblings");
        }}
      >
        sib
      </button>
    </div>
  );
}

export default UseState;
