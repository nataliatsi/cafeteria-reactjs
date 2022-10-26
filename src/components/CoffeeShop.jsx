import { Card, Col } from 'react-bootstrap';

function CoffeeShop({coffee}) {
    return (
      <Col sm='6' lg='4' xl='3' className='mb-3'>
        <Card>
          <Card.Header className="card-header text-center font-weight-bold">
            <span>{coffee.name}</span>
          </Card.Header>
          <Card.Body className="card-body p-0">
            <img src={coffee.image} alt={coffee.name} className='w-100' />
          </Card.Body>
        </Card>
      </Col>
    );
  }
  
  export default CoffeeShop;