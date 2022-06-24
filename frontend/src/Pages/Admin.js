//allows admins to add new movies or remove old ones

import axios from 'axios';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Admin = ({ getData, fetchData }) => {
    const [title, setTitle] = useState();
    const [runTime, setRunTime] = useState();
    const [releaseDate, setReleaseDate] = useState();
    const [description, setDescription] = useState();
    const [director, setDirector] = useState();
    const [cast, setCast] = useState();

    const [id, setId] = useState();

    const [addRequest, setAddRequest] = useState(false);
    const [deleteRequest, setDeleteRequest] = useState(false);

    const [addConfirmation, setAddConfirmation] = useState(false);
    const [delConfirmation, setDelConfirmation] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:5020/movie", {
            "title": title,
            "runTime": runTime,
            "releaseDate": releaseDate,
            "description": description,
            "director": director,
            "cast": cast,
        })
            .then((res) => {
                console.log(res);
                setTimeout(() => {
                    getData(!fetchData)
                    console.log("loading")
                }, 500)
                console.log("done")
                setAddConfirmation(true);
            })
            .catch((err) => alert(err));
    }

    const loadMovieAdd = () => {
        return setAddRequest(true), setDeleteRequest(false);
    }

    const addMovie = () => {
        if (addRequest) {
            return (
                <>
                    <Container style={{ width: '30rem' }} className="justify-content-end">
                        <h4>Insert Values:</h4>
                        <Form>
                            <Form.Group className="mb-3" id="formBasicTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control id="titleInput" type="text" placeholder="Title" value={title} onChange={(event) => { setTitle(event.target.value) }} required />
                            </Form.Group>
                            <Form.Group className="mb-3" id="formBasicRuntime">
                                <Form.Label>Runtime</Form.Label>
                                <Form.Control id="runTimeInput" type="number" placeholder="Runtime" value={runTime} onChange={(event) => { setRunTime(event.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" id="formBasicReleaseDate">
                                <Form.Label>Release Date</Form.Label>
                                <Form.Control id="releaseDateInput" type="date" placeholder="Release Date" value={releaseDate} onChange={(event) => { setReleaseDate(event.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" id="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control id="descriptionInput" type="text" placeholder="Description" value={description} onChange={(event) => { setDescription(event.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" id="formBasicDirector">
                                <Form.Label>Director</Form.Label>
                                <Form.Control id="directorInput" type="text" placeholder="Director" value={director} onChange={(event) => { setDirector(event.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" id="formBasicCast">
                                <Form.Label>Cast</Form.Label>
                                <Form.Control id="castInput" type="text" placeholder="Cast" value={cast} onChange={(event) => { setCast(event.target.value) }} />
                            </Form.Group>
                            <br/>
                            <Button id="addButton" variant="success" onClick={handleSubmit}>ADD MOVIE</Button>
                        </Form>
                        <br/>
                        {addConf()}
                    </Container>
                </>
            )
        }
    }

    const handleDelete = (event) => {
        event.preventDefault();

        axios.delete("http://localhost:5020/movie/" + id)
            .then((res) => {
                console.log(res);
                setTimeout(() => {
                    getData(!fetchData)
                    console.log("loading")
                }, 500)
                console.log("done")
                setDelConfirmation(true);
            })
            .catch((err) => alert(err));
    }

    const loadMovieDelete = () => {
        return setDeleteRequest(true), setAddRequest(false);
    }

    const deleteMovie = () => {
        if (deleteRequest) {
            return (
                <>
                    <Container style={{ width: '30rem' }} className="justify-content-end">
                        <h4>Insert ID:</h4>
                        <Form>
                            <Form.Group className="mb-3" id="formBasicId">
                                <Form.Label>Insert ID</Form.Label>
                                <Form.Control id="deleteById" type="text" min={0} placeholder="ID" value={id} onChange={(event) => { setId(event.target.value) }} required />
                            </Form.Group>
                            <br/>
                            <Button id="deleteByIdBtn" variant="danger" className="button button1" onClick={handleDelete}>DELETE MOVIE</Button>
                        </Form>
                        <br/>
                        {deleteConf()}
                    </Container>
                </>
            )
        }
    }

    const addConf = () => {
        if (addConfirmation) {
            return (
                <h4>Movie has been added to database.</h4>
            )
        }
    }

    const deleteConf = () => {
        if (delConfirmation) {
            return (
                <h4>Movie has been deleted from database.</h4>
            )
        }
    }

    return (
        <>
            <br/>
            <h1>Admin Controls</h1>
            <h2>Please select whether you would like to add or delete a movie:</h2>

            <Button id="addMovie" onClick={loadMovieAdd} >ADD MOVIE</Button>
            <Button id="deleteMovie" onClick={loadMovieDelete}>DELETE MOVIE</Button>
            <br/><br/>
            {deleteMovie()}
            {addMovie()}
        </>
    )
}

export default Admin;