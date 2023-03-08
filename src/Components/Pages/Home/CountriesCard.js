import { Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function CountriesCard ( { title, text} ) {
    return (
        <>
            <Card style={{ width: '16rem', borderLeft: '10px solid #e7497a' }}>
                <Card.Body>
                    <Card.Title className='cardTitle'>{title}</Card.Title>
                    <Card.Text className='cardText'>
                        {text}
                    </Card.Text>
                    <Dropdown.Divider />
                </Card.Body>
            </Card>
        </>
    );
};

export default CountriesCard;