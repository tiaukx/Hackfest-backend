import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";

const Ratings = ({ score, user, comment, title }) => {
    return (
        <Card border="info" style={{ width: '18rem' }}>
            <Card.Body>
                <p>{score}</p>
                <p>{user}</p>
                <p>{comment}</p>
                <p>{title}</p>
            </Card.Body>
        </Card>
    )
}

export default Ratings;

Ratings.propTypes = {
    score: PropTypes.number, 
    user: PropTypes.string, 
    comment: PropTypes.string,
    title: PropTypes.string
}

