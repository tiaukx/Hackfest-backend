//all current movies being shown at the cinema
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";

import Ratings from "./Ratings";

const Movie = ({ title, runTime, releaseDate, description, director, cast, ratings }) => {
    return (
        <Card border="info" style={{ width: '18rem' }}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <p>{runTime}</p>
                <p>{releaseDate}</p>
                <p>{description}</p>
                <p>{director}</p>
                <p>{cast}</p>
                <p>{ratings}</p>
            </Card.Body>
        </Card>
    )
}

export default Movie;

Movie.propTypes = {
    title: PropTypes.string,
    runTime: PropTypes.number, 
    releaseDate: PropTypes.string,
    description: PropTypes.string, 
    director: PropTypes.string,
    cast: PropTypes.string,
    ratings: PropTypes.array
}