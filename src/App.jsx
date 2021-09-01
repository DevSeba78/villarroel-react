import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./components/ItemListContainer"

const name = prompt('Ingrese su nombre')
function App() {
  
  return (
      <>
      <NavBar />
      <ItemListContainer name={name} />
      </>
  );
}

export default App;
