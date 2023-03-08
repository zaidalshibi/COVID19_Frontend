import axios from 'axios';
import { Button, Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';

function CountriesCard ( { title, text, country, date } ) {
    

    const handleClick = () => {
            axios.post( `${process.env.REACT_APP_BACKEND_URL}/records`, { country, date } )
                .then( res => {
                    Swal.fire( {
                        icon: 'success',
                        title: 'Added to your records',
                        showConfirmButton: true,
                        timer: 1500
                    } );
                } )
                .catch( err => {
                    Swal.fire( {
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    } );
                } );
        }
    return (
        <>
            <style type="text/css">
                {`
    .btn-flat {
        background-color: #3d56c0;
        color: white;
    }

    .btn-flat:hover {
        background-color: #e7497a;
        color: white;
    }
    `}
            </style>
            <Card style={{ width: '16rem', borderLeft: '10px solid #e7497a' }}>
                <Card.Body>
                    <Card.Title className='cardTitle'>{title}</Card.Title>
                    <Card.Text className='cardText'>
                        {text}
                    </Card.Text>
                    <Dropdown.Divider />
                    <Button
                        variant='flat'
                        size='xxl'
                        onClick={handleClick}
                    >ADD TO MY RECORDS</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default CountriesCard;