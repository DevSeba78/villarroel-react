import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./components/ItemListContainer"
import { useState } from "react";

const name = prompt('Ingrese su nombre: ')

function App() {

  const [count, setCount] = useState(0) //seteo aca el contador

  const onAdd = (cant) => {//declaro aca la funcion onadd aca para luego pasar los estados (props) a los hijos
    setCount(cant)
    console.log(cant);
    console.log(count);
}
  
  return (
      <>
      <NavBar count={count}/>
      <ItemListContainer name={name} onAdd={onAdd} />
        
    
      </>
  );
}

export default App;

// import React, { useState } from 'react';
// import './style.css';

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [date, setDate] = useState(Date());
//   const handleCount = () => {
//     setCount(count+1);
//     setDate(Date())
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <h1>{date}</h1>
//       <button onClick={handleCount}>Contar</button>
//     </div>
//   );
// }