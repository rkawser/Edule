import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ServiceCards from '../ServiceCards/ServiceCards';
import'./Service.css'
const Service = () => {
  const[course,setCourse]=useState([])
    useEffect(()=>{
        fetch('/ServiceDb.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
return (
        <div>
          <div className='banner-color'>
         <Container >
       <Row className='service-banner'>
      <Col md={6}>
        <div>
        <h4>Course// <span className='text-success'>Service</span></h4>
        <h1>My  <span className='text-success'>Courses</span></h1>
        </div>      
    </Col>
    <Col md={6}>
    <div>
        <img src="./image/service.jpg" className='img-fluid w-100' alt="" />
    </div>
    </Col>
  </Row>
</Container>
          
   </div>
   <div className='py-5'>
     <h2>Edule Course <span className='text-success'>Service</span></h2>
   </div>
   <Row xs={1} md={3} className="g-4 m-5">
    {
      course.map(card=><ServiceCards card={card}></ServiceCards>)
    }
</Row>

        </div>


    );
};

export default Service;