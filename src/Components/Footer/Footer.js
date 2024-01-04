import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Footer() {
  const expand = 'lg';

  return (
    <Navbar expand={expand} className="footer">
      <Container fluid>
     
      
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="/Home">Facebook</Nav.Link>
              <Nav.Link href="/About">Instagram</Nav.Link>
              <Nav.Link href="/Careers">Linkedin</Nav.Link>
              <Nav.Link href="/Contact"> Youtube</Nav.Link>
            
            </Nav>
          
         

      </Container>
    </Navbar>
  );
}

export default Footer;
