import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AppContact() {
  return (
    <section id='contact' className='block contact-block'>
      <Container fluid>
           <div className='title-holder'>
                   <h2>CONTACT US</h2>
                   <div className='subtitle'>get connected with us</div>
            </div>
            <Form className='contact-form'>
           <Row>
               <Col  sm={4}>
                    <Form.Control type="text" placeholder="Enter your full name" required />
                </Col>
                <Col  sm={4}>
                   <Form.Control type="email" placeholder="Enter your email address" required/>
                </Col>
                <Col  sm={4}>
                <Form.Control type="tel" placeholder="Enter your contact number" required />
                </Col>
           </Row>
           <Row>
                <Col  sm={12}>
                      <Form.Control as="textarea" placeholder="Enter your contact message" required/>
                </Col>
           </Row>
           <div className='btn-holder'>
                    <Button type='submit'>SUBMIT</Button>
                  
                </div>
           </Form>
      </Container>
      <div className='google-map'>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292356.675435891!2d36.176884119072625!3d26.81700990308043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2z2YXYtdix!5e0!3m2!1sar!2seg!4v1699268001215!5m2!1sar!2seg" 
      allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Container fluid>
         <div className='contact-info'>
            <ul>
               <li>
                   <i className="fas fa-envelope"></i>
                    hello@domain.com
               </li>
               <li>
                  <i className="fas fa-phone"></i>
                      000-000-0000
               </li>
               <li>
                   <i className="fas fa-map-marker-alt"></i>
                      Cairo, Egypt
            </li>
            </ul>
         </div>

      </Container>
    </section>
  )
}

export default AppContact