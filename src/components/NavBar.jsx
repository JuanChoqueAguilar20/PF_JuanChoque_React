import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"
export const NavBar = () => {
    return (
    <Navbar bg="dark" data-bs-theme="dark">a
        <Container>
          <Navbar.Brand href="Tittle">Shangeci</Navbar.Brand>
        
          <Nav className="me-auto">
            <Nav.Link href="#home">Menú</Nav.Link>
            <Nav.Link href="Offers">Ofertas</Nav.Link>
            <Nav.Link href="Sign up">Registrate</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
    </Navbar>

    
    )
        
    
}