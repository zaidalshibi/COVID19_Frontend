import axios from 'axios';
import { Button, Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';

function CountriesCard ( { title, text, id, handleDeleteFilter } ) {
    const handleDelete = () => {
        axios.delete( `${process.env.REACT_APP_BACKEND_URL}/records/${id}` )
            .then( res => {
                handleDeleteFilter( id );
                Swal.fire( {
                    icon: 'success',
                    title: 'Deleted from your records',
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
    };
    const handleClick = () => {
        Swal.fire( {
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        } ).then( ( result ) => {
            if ( result.isConfirmed ) {
                handleDelete();
                Swal.fire(
                    'Deleted!',
                    'Your record has been deleted.',
                    'success'
                );
            }
        }
        );
    };
    return (
        <>
            <Card style={{ width: '20rem', borderLeft: '10px solid #e7497a' }}>
                <Card.Body>
                    <Card.Title className='cardTitle'>{title}</Card.Title>
                    <Card.Text className='cardText'>
                        {text}
                    </Card.Text>
                    <Dropdown.Divider />
                    <Button
                        variant='outline-danger'
                        size='xxl'
                        onClick={handleClick}
                    >Delete Record</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default CountriesCard;