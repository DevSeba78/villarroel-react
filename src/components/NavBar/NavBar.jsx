
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import CartWidget from "./CartWidget";
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from "react-router-dom";



function NavBar(props) { //recibo count desde APP.jsx
    const {count} = props; //destructuring saco count de props
    return(
      <>
      <Navbar bg="ligth" expand="lg" >
      <Container>
        <Link to="/"> 
                <Navbar.Brand><i className="fab fa-pagelines"> Ruca Home&Design</i></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to="/"> 
            <Nav.Link >Home</Nav.Link>
            </Link> */}
            <LinkContainer exact to={`/categoria/Manteleria`}> 
            <Nav.Link href="#link">Manteleria</Nav.Link>
            </LinkContainer>
            <LinkContainer  to="/categoria/Deco"> 
            <Nav.Link href="#link">Deco</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/Bazar"> 
              <Nav.Link href="#link">Bazar</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/categoria/Dormitorio"> 
              <Nav.Link href="#link">Dormitorio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/Baño"> 
              <Nav.Link href="#link">Baño</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/Ofertas"> 
              <Nav.Link href="#link">Ofertas</Nav.Link>
            </LinkContainer> */}
          </Nav>
          
          <Form className="d-flex">
           
            {/* <FormControl type="submit" placeholder="Login" className="mr-2" aria-label="Search"/> */}
            <Button variant="btn btn-outline-success">Login</Button>
           
          </Form>
        </Navbar.Collapse>
        
      </Container>
      <Link exact to="/Cart"> 
        <CartWidget count={count} />
      </Link>
      
    </Navbar>
    
    </>
    
    );
}

export default NavBar;