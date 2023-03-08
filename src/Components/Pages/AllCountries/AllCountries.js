import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountriesCard from "./CountriesCard";


function AllCountries () {
    const [ allCountries, setAllCountries ] = useState( [] );

    useEffect( () => {
        axios.get( 'https://api.covid19api.com/summary' )
            .then( res => {
                setAllCountries( res.data.Countries );
            } )
            .catch( err => {
                console.log( err );
            } );
    }, [] );
    return (
        <Container
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: '50vh' }}
        >
            <h1 className="allcountries-title">COVID19 statistics for All countries</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                {allCountries?.length > 0 ? allCountries.map( ( country, index ) => {
                    return (
                        <Col key={index}>
                            <CountriesCard
                                key={index}
                                title={`Country: ${country.Country}, ${country.CountryCode}`}
                                text={
                                    `Total Confirmed Cases: ${country.TotalConfirmed}
                                Total Deaths Cases: ${country.TotalDeaths} 
                                Total Recovered Cases: ${country.TotalRecovered}
                                Date: ${country.Date}`
                                }
                                country={country.Country}
                                date={country.Date}
                            />
                        </Col>
                    );
                } ) : null}
            </Row>
        </Container>
    );
}

export default AllCountries;