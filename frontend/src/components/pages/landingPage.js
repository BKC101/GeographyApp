import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Landingpage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '92.8vh', backgroundColor: '#00009a' }}>
      <Card style={{ backgroundColor: '#009a00', width: '50%', height: '50vh', fontSize: '1.5rem' }} className="mx-2 my-2">
        <Card.Body className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
          <Card.Title className="d-flex align-items-center justify-content-center" style={{ fontSize: '2.5rem' }}>
            GeograBee
          </Card.Title>
          <Card.Subtitle className="mb-2 d-flex align-items-center justify-content-center" style={{ fontSize: '1.75rem' }}>
            Discover Our World
          </Card.Subtitle>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <Button variant="light" href="/signup" className="mx-2" style={{ fontSize: '1.5rem', padding: '0.5rem 1rem' }}>Register</Button>
            <Button variant="light" href="/login" className="mx-2" style={{ fontSize: '1.5rem', padding: '0.5rem 1rem' }}>Login</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Landingpage;
