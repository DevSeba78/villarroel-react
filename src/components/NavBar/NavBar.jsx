
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import CartWidget from "./CartWidget";



function NavBar(props) { //recibo count desde APP.jsx
    const {count} = props; //destructuring saco count de props
    return(
      <>
      <Navbar bg="ligth" expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><i className="fab fa-pagelines"> Ruca Home&Design</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Manteleria</Nav.Link>
            <Nav.Link href="#link">Deco</Nav.Link>
            <Nav.Link href="#link">Bazar</Nav.Link>
            <Nav.Link href="#link">Dormitorio</Nav.Link>
            <Nav.Link href="#link">Baño</Nav.Link>
            <Nav.Link href="#link">Ofertas</Nav.Link>
            <Nav.Link href="#link">Ofertas 2</Nav.Link>
          </Nav>
          
          <Form className="d-flex">
           
            {/* <FormControl type="submit" placeholder="Login" className="mr-2" aria-label="Search"/> */}
            <Button variant="btn btn-success">Login</Button>
           
          </Form>
        </Navbar.Collapse>
        
      </Container>
      <CartWidget count={count} />
    </Navbar>
    
    </>
    
    );
}

export default NavBar;