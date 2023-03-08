import axios from 'axios';
import React, { useState } from 'react';
import { Search } from 'react-bootstrap-icons';


function Form ( { countriesData } ) {
    const [ country, setCountry ] = useState( 'jordan' );
    const [ startDate, setStartDate ] = useState( '' );
    const [ endDate, setEndDate ] = useState( '' );

    const handleSubmit = e => {
        e.preventDefault();
        axios.get( `https://api.covid19api.com/country/${country}/status/confirmed?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z` )
            .then( res => {
                countriesData( res.data );
            }
            ).catch( err => {
                console.log( err );
            }
            );
    };

    return (
        <>
            <h3 className='form-h3'>Statistics for a specific country</h3>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="Search for a country" onChange={e => setCountry( e.target.value )} />
                <input type="date" value={startDate} onChange={e => setStartDate( e.target.value )} required />
                <input type="date" value={endDate} onChange={e => setEndDate( e.target.value )} required />
                <button type="submit">Search <Search /></button>
            </form>
        </>
    );
}

export default Form;
