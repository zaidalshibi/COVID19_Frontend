import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <Navbar  expand="sm" variant='dark' style={{
            backgroundColor : '#333333',
        }}>
            <Container fluid style={{paddingLeft : '2rem'}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/allCountries" className="nav-link">All Countries</Link>
                        <Link to="/records" className="nav-link">My Records</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;