// import React, { useEffect, useState } from 'react';

// import { useState } from "react"

// export const EffectDemo = () => {
//   //State
//   const [fullName, setFullName] = useState({
//     name: 'name',
//     family: 'family',
//   });

//   const [title, setTitle] = useState('useEffect() in Hooks');

//   //useEffect
//   useEffect(() => {
//     setFullName({ name: 'Tuan HC', family: 'PUBG' });
//   }, []);

//   return (
//     <div>
//       <h1>Title: {title}</h1>
//       <h3>Name: {fullName.name}</h3>
//       <h3>Family Name: {fullName.family}</h3>
//     </div>
//   );
// };
// export default EffectDemo;
// const App = () =>{
//   const [count, setCount] = useState(0)
//   const[todos, setTodos] = useState([])

//   return (
//     <div>

//     </div>
//   )
// }

// import React, { useCallback, useState } from 'react';
// import Todos from './components/Todos';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   console.log('todos: ', todos);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = useCallback(() => {
//     setTodos((t) => [...t, 'New Todo']);
//   }, []);

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// export default App;

// import React, { useCallback, useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(0);

//   const storeSet = new Set();

//   const increment = () => setCount(count + 1);

//   const decrement = () => setCount(count - 1);

//   const upNumber = () => setNumber(number + 1);

//   const downNumber = () => setNumber(number - 1);

//   // const increment = useCallback(() => setCount(count + 1), [count]);
//   // const decrement = useCallback(() => setCount(count - 1), [count]);

//   // const upNumber = useCallback(() => setNumber(number + 1), [number]);

//   // const downNumber = useCallback(() => setNumber(number - 1), [number]);

//   storeSet.add(increment);
//   storeSet.add(decrement);
//   storeSet.add(upNumber);
//   storeSet.add(downNumber);

//   console.log(storeSet);
//   return (
//     <div>
//       <div>Count: {count}</div>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>

//       <div>Number: {number}</div>
//       <button onClick={upNumber}>+</button>
//       <button onClick={downNumber}>-</button>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Form from './page/Form';

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default App;
