//information on how to get to the cinema locations, could include an image of the cinema
//address, parking, directions, map
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import CardGroup from 'react-bootstrap/CardGroup';


const About = () => {
    return (
        <>
            <br/>
            <h1>QA Cinema</h1>
            <br />
            <Container id="contactInfo">
                <CardGroup>
                    <Card>
                        <Card.Header>
                            <h4>Contact Information</h4>
                        </Card.Header>
                        <Card.Body>
                            <p>Phone: 020 8905 0025</p>
                            <p>Email: qa-cinemas@qa.com</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h4>Address</h4>
                        </Card.Header>
                        <Card.Body>
                            <p>QA,</p>
                            <p>27 Albion St,</p>
                            <p>Leeds,</p>
                            <p>LS1 5ES,</p>
                            <p>United Kingdom,</p>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            <Container id="map" >
                <Card.Header>
                    <h4>Where to Find Us:</h4>
                </Card.Header>
                <Card.Body>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1238504.1219510962!2d-3.305511583034634!3d52.67887995495078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1dd6ad9a69%3A0x9129201ce06d49bd!2sQA!5e0!3m2!1sen!2suk!4v1656072558475!5m2!1sen!2suk" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Card.Body>
            </Container>
        </>
    )
}

export default About;