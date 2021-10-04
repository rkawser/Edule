import React from 'react';
import { Card, Col } from 'react-bootstrap';
import'./Cards.css'
import { BiTime } from "react-icons/bi";
import { IoBook } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
const Cards = (props) => {
    const{name,img,image,time,course,lecture,price,rating}=props.card
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <div className='cards'>
          <Card.Img variant="top" src={image}  className='card-img w-25 rounded-circle me-3'  />
          <Card.Title>{name}</Card.Title>
          </div>
          <Card.Text>
             <h6 className='py-2'>{course}</h6>
          </Card.Text>
          <Card.Text className='d-flex'>          
              <p className='px-2'><BiTime/> {time}</p>
              <p className='px-5'><IoBook/> {lecture}</p>
          </Card.Text>

          <Card.Text className='cart-text'>
            <small>{price} </small>
            <small> <FcRating/> {rating}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Cards;