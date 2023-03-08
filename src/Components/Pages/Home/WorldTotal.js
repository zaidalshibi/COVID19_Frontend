import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function WorldTotal () {
    const [ confirmed, setConfirmed ] = useState( 0 );
    const [ deaths, setDeaths ] = useState( 0 );
    const [ recovered, setRecovered ] = useState( 0 );
    useEffect( () => {
        axios.get( 'https://api.covid19api.com/world/total' )
            .then( res => {
                setConfirmed( res.data.TotalConfirmed );
                setDeaths( res.data.TotalDeaths );
                setRecovered( res.data.TotalRecovered );
            } )
            .catch( err => console.log( err ) );
    }, [] );
    return (
        <Container>
            <p className="world-total">World Total Statistics</p>
            <Row className="justify-content-around">
                <Col md='auto'><p className='col-par'>
                    Total Confirmed: {confirmed}
                </p></Col>
                <Col md='auto'><p className='col-par'>
                    Total Deaths: {deaths}
                </p></Col>
                <Col md='auto'><p className='col-par'>
                    Total Recovered: {recovered}
                </p></Col>
            </Row>
        </Container>
    );
}

export default WorldTotal;