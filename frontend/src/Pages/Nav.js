import { Nav } from 'react-bootstrap';

const Navi = () => {
    return (
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
    )
}

export default Navi;