//all current movies being shown at the cinema
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";

import Ratings from "./Ratings";

const Movie = ({ title, runTime, releaseDate, description, director, cast, ratings }) => {
    return (
        <Card border="dark" style={{ width: '25rem' }}>
            <Card.Header><h4>{title}</h4></Card.Header>
            <Card.Body>
                <p><b>Runtime:</b> {runTime} minutes</p>
                <p><b>Release Date:</b> {releaseDate}</p>
                <p>{description}</p>
                <p><b>Director:</b> {director}</p>
                <p><b>Cast:</b> {cast}</p>
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