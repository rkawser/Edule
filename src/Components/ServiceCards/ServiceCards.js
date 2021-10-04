import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceCards = (props) => {
    const{name,course,fidback,img,image}=props.card
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
             {course}
            </Card.Text>
            <Card.Text>
             <h6>{fidback} </h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ServiceCards;