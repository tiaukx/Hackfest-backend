//all current movies being shown at the cinema
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";

import Ratings from "./Ratings";

const Movie = ({ title, runTime, releaseDate, description, director, cast, ratings }) => {
    return (
        <Card border="info" style={{ width: '18rem' }}>
            <Card.Header><h4>{title}</h4></Card.Header>
            <Card.Body>
                <p>Runtime: {runTime} minutes</p>
                <p>Release Date: {releaseDate}</p>
                <p>{description}</p>
                <p>Director: {director}</p>
                <p>Cast: {cast}</p>
            </Card.Body>
            <Card.Footer>
                <h5>Reviews</h5>
                <p>{ratings}</p>
            </Card.Footer>
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
    ratings: PropTypes.array,
    _id: PropTypes.string
}