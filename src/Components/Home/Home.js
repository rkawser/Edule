import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import'./Home.css'

const Home = () => {
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('/FakeDb.json')
        .then(res=>res.json())
        .then(data=>setCart(data))
    },[])
    return (
       <div>
           <div className='bg-slider'>
            <Container>
         <Row md-xl={2} className='top-bar'>
          <Col md={5}>
         <div >
            <div className='slider'>
       <h5 className='mb-3'>Start your favourite course</h5>
        <h1 className=''>Now learning from <br /> anywhere, and build <br /> your bright career.</h1>
        <h6 className='mt-5'>It has survived not only five centuries but also the leap into electronic typesetting.</h6>
        <button className='btn btn-success px-5 py-3 mt-3'>Start a Course</button>
            </div>
        </div>     
    </Col>
    <Col md={7}>
    <div>
        <img src="./image/slider-1.webp" className='img-fluid' alt="" />
     </div>
     </Col>
     </Row>
    </Container>
       </div>
       <div>
           <h1 className='mt-5'>Our Service</h1>
       </div>
       <Row xs={1} md={3} className="g-4 m-5">
    {
        cart.map(card=><Cards card={card}></Cards>)
    }
       </Row>
       </div>
       
    );
};

export default Home;