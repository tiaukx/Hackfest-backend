import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import Movie from "../PageSupport/Movie";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [fetchData, setFetchData] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5020/movie/all")
            .then(res => setMovies(res.data))
            .catch(err => console.error(err));
    }, [fetchData]);

    return (
        <>
            <h2>List of Movies:</h2>
            <Container id="fullMovieList" className="d-flex vw-100">
                <Row className="m-auto">
                    {
                        movies.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} runTime={movie.runTime}
                            releaseDate={movie.releaseDate} description={movie.description} director={movie.director} cast={movie.cast} 
                            ratings={movie.ratings}/>)
                    }
                </Row>
            </Container>
            {console.log(movies)}
        </>
    );
}

export default Movies;