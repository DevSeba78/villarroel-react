import {BrowserRouter,Switch, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./components/ItemListContainer"
//import { useState } from "react";
import ItemDetailsContainer from "./components/Containers/ItemDetailsContainer";
import Cart from './components/Cart/Cart';
//import {createContext} from "react"
import CartContextProvider from './Context/cartContext';



function App() {


  console.log(CartContextProvider);
  return (
      <CartContextProvider>
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
      </CartContextProvider>
  );
}

export default App;

