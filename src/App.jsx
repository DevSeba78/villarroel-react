import {BrowserRouter,Switch, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./components/ItemListContainer"
//import { useState } from "react";
import ItemDetailsContainer from "./components/Containers/ItemDetailsContainer";
import Cart from './components/Cart/Cart';
//import {createContext} from "react"
import {cartContextProvider} from './Context/cartContext';

//const name = prompt('Ingrese su nombre: ')
//const name = "Persona"
function App() {

//   const [count, setCount] = useState(0) //seteo aca el contador

//   const onAdd = (cant) => {//declaro aca la funcion onadd aca para luego pasar los estados (props) a los hijos
//     setCount(cant)
//     console.log(cant);
//     console.log(count);
// }
  
  return (
      <cartContextProvider>
      <BrowserRouter>
      <NavBar /> 
      <Switch>
        <Route path="/" exact>
          <ItemListContainer />
        </Route>
        <Route path="/categoria/:idCategoria" exact>
          <ItemListContainer  />
        </Route>
       <Route exact path="/detalle/:id" component={ItemDetailsContainer}  />
       
       <Route exact path="/cart" component={Cart}  />

      {/* <Cart /> */}
      </Switch>
        
    
      </BrowserRouter>
      </cartContextProvider>
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