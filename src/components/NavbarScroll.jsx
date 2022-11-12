import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { FaHome, FaSearch } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';

function NavbarScroll() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Meu Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='d-flex align-items-center gap-1' href="#action1"><FaHome className='homeIcon' />Início</Nav.Link>
            <Nav.Link className="d-flex align-items-center gap-1" href="#action2"><MdExplore />Explorar</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Pesquisar"
            />
            <Button variant="outline-primary"><FaSearch className='d-flex align-items-center' /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;