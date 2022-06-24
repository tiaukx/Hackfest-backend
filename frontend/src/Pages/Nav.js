import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Navi = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">QA-Cinema</Navbar.Brand>

                <Nav variant="pills" className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Movies">What's On</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/About">About Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navi;