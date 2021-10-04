import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import'./Contact.css'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";



const Contact = () => {
    return (
        <div>
            <div className='contact-color'>
            <Container>
         <Row className='contact-banner' >
       <Col md={6}>
       <div>
           <h5>Home//Contact Us</h5>
           <h1>Contact Us</h1>
       </div>
       </Col>

         <Col md={6}>
         <div>
             <img src="./image/contact1.jpg" className='w-100 img-fluid' alt="" />
         </div>
         </Col>
           </Row>
        </Container>
            </div>
            <div className='mt-5 '>
            <Container>
                <Row  className='contact-box border p-5'>
             <Col md={6}>
                 <div className='shadow p-3 mb-5  rounded contact-address'>
                     <div>
                         <p>Phone </p>
                         <h4><FiPhoneCall/> (88) 193 326 867</h4>
                     </div>
                     <hr className='m-5' />
                     <div>
                         <p>Email Address </p>
                         <h4><HiOutlineMail/> edule100@gmail.com</h4>
                     </div>
                     <hr className='m-5' />                    
                     <div>
                         <p>Office Address. </p>
                         <h4><ImLocation2/> Talga, Alabama, USA</h4>
                     </div>
                     
                </div>              
             </Col>
             <Col md={6}> 
             <h2>Get in Touch With Us</h2>
               <div>
               <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <Button variant="primary" className='btn btn-primary px-5' type="submit">
    Submit
  </Button>
</Form>
  </div>
 </Col>
</Row>
</Container> 
 </div>
 </div>
    );
};

export default Contact;