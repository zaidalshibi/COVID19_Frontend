import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountriesCard from "./CountriesCard";

function Records () {
    const [ records, setRecords ] = useState( [] );
    const getRecords = () => {
        axios.get( `${process.env.REACT_APP_BACKEND_URL}/records` )
            .then( res => {
                setRecords( res.data );
            } )
            .catch( err => {
                console.log( err );
            } );
    };
    useEffect( () => {
        getRecords();
    }, [] );
    return (
        <div>
            {records?.length !== 0 && <h1 className="records-title">COVID19 statistics for All countries</h1>}
            <Container
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: '50vh' }}
            >
                <Row className="g-5">
                    {records.map( ( country, index ) => {
                        return (
                            <Col key={index}>
                                <CountriesCard
                                    key={index}
                                    title={`Country: ${country.country}`}
                                    text={
                                        `Date: ${country.date}`
                                    }
                                    id={country.id}
                                    getRecords={getRecords}
                                />
                            </Col>
                        );
                    } )}
                </Row>
            </Container>

            {records?.length === 0 && (
                <h1 style={{ color: "#FD0072" }}>No Available Records ˉ\_(ッ)_/ˉ </h1>
            )}
        </div>
    );
}

export default Records;