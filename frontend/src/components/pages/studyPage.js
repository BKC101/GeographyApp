import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const StudyPage = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleClickImage1 = () => {
    setCurrentImage("images/southAmericaPhysical.png");
  };

  const handleClickImage2 = () => {
    setCurrentImage("images/southAmericaPolitical.png");
  };

  return (
    <Container fluid>
      <Row className="my-3">
        <Col xs={2}>
          <Button variant="primary" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </Col>
        <Col xs={8} className="text-center">
          <Button variant="success" className="mx-2" onClick={handleClickImage1}>
            Physical
          </Button>
          <Button variant="info" className="mx-2" onClick={handleClickImage2}>
            Political
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {currentImage && (
            <img
              src={currentImage}
              alt="Selected"
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default StudyPage;
