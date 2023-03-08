import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountriesCard from "./CountriesCard";

function Records () {
    const [ allCountries, setAllCountries ] = useState( [] );
    const getRecords = () => {
        axios.get( `${process.env.REACT_APP_BACKEND_URL}/records` )
            .then( res => {
                setAllCountries( res.data );
            } )
            .catch( err => {
                console.log( err );
            } );
    };
    const handleDeleteFilter = ( id ) => {
        setAllCountries( allCountries.filter( ( country ) => country.id !== id ) );
    }
    useEffect( () => {
        getRecords();
    }, [] );
    return (
        allCountries.length > 0 ? (
            <Container
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: '50vh' }}
            >
                <h1 className="allcountries-title">COVID19 statistics for All countries</h1>
                <Row  className="g-5">
                    {allCountries.map( ( country, index ) => {
                        return (
                            <Col key={index}>
                                <CountriesCard
                                    key={index}
                                    title={`Country: ${country.country}`}
                                    text={
                                        `Date: ${country.date}`
                                    }
                                    id={country.id}
                                    handleDeleteFilter={handleDeleteFilter}
                                />
                            </Col>
                        );
                    } )}
                </Row>
            </Container>
        ) : (
            <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                <h1 style={{ color: "#FD0072" }}>No Available Records ˉ\_(ッ)_/ˉ </h1>
            </Container>
        )
    );
}

export default Records;