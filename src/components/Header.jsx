import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Header() {
  const logo = "https://www.linkpicture.com/q/logo_142.png";

  return (
    <Navbar expand="lg" className="bg-transparent border-0">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            height="140"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggler for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible navbar content */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="gap-3 gap-lg-4 align-items-lg-center">
            {/* Menu Links - White & Bold */}
            <Nav.Link href="#home" className="text-white fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-white fw-bold">
              About Us
            </Nav.Link>

            <NavDropdown
              title={<span className="text-white fw-bold">Services</span>}
              id="basic-nav-dropdown"
              className="text-white fw-bold"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link" className="text-white fw-bold">
              Clients
            </Nav.Link>
            <Nav.Link href="#link" className="text-white fw-bold">
              Blogs
            </Nav.Link>
            <Nav.Link href="#link" className="text-white fw-bold">
              Contact Us
            </Nav.Link>

            {/* Custom Rounded Buttons */}
            <Button
              variant="primary"
              size="sm"
              href="tel:+1234567890"
              className="rounded-pill px-3"
              style={{
                backgroundColor: '#FEDDCB',
                borderColor: '#FEDDCB',
                color: '#000',
                fontWeight: 'bold',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FEDDCB')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FEDDCB')}
            >
              Call
            </Button>

            <Button
              variant="primary"
              size="sm"
              href="#experts"
              className="rounded-pill px-3"
              style={{
                backgroundColor: '#D4FF00', // Lime yellow
                borderColor: '#D4FF00',
                color: '#000',
                fontWeight: 'bold',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#D4FF00')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#D4FF00')}
            >
              Talk to Experts
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;