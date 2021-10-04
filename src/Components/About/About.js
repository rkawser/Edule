
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import'./About.css'
const About = () => {
    return (
       <div>
            <div className='banner-color'>
           <Container>
      <Row className='about-banner'>
    <Col md={6}>
    <div>
  <h4>Course//About</h4>
  <h1>About EduLe.</h1>
    </div>
    </Col>  

    <Col md={6}>
      <div>
          <img src="./image/about1.jpg" className='w-100' alt="" />
      </div>
    </Col>
       </Row>
       </Container>
        </div>

        <div className='my-5'>
          <Container>
        <Row className='main-about'>
          <Col md={5}>
          <div>
             <img src="./image/about2.webp" className='img-fluid' alt="" />
          </div>
          </Col>  
         <Col md= {7}>
         <div className='about-text'>
         <div>
            <h4>Welcome to Edule.</h4>
            <h1>You can join with Edule and upgrade your skill for your bright future.</h1>
            <p>Lorem Ipsum has been the industr’s standard dummy text ever since unknown printer took galley type and scmbled make type specimen book. It has survived not only five centuries.</p>
            <Button className='btn btn-Success px-4 py-2'>start A Course</Button>
         </div>
         </div>
         </Col>
       </Row>
          </Container>
        </div>

       </div>
    );
};

export default About;