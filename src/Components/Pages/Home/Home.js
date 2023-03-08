import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountriesCard from './CountriesCard';
import Form from './Form';
import WorldTotal from './WorldTotal';


function Home () {
    const [ cardData, setCardData ] = useState( [] );
    const moveData = data => {
        setCardData( data );
    };

    return (
        <div className="App">
            <WorldTotal />
            <Form countriesData={moveData} />
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: '50vh' }}
            >
                <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                    {cardData.length > 0 ? cardData.map( ( data, index ) => {
                        return (
                            <Col key={index}>
                                <CountriesCard key={index} title={`Date: ${data.Date}`} text={`Number of Confirmed Cases: ${data.Cases}`} />
                            </Col>
                        );
                    } ) : <CountriesCard title='No Data yet' text='No Data yet' />}
                </Row>
            </Container>
        </div>
    );
}

export default Home;
