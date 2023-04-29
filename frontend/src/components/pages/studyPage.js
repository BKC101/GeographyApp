import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const StudyPage = () => {
  const { continent } = useParams();

  const images = {
    world: {
      physical: "/images/worldPhysical.png",
      political: "/images/worldPolitical.png",
    },

    europe: {
      physical: "/images/europePhysical.png",
      political: "/images/europePolitical.png",
    },

    asia: {
      physical: "/images/asiaPhysical.png",
      political: "/images/asiaPolitical.png",
    },

    africa: {
      physical: "/images/africaPhysical.png",
      political: "/images/africaPolitical.png",
    },

    northAmerica: {
      physical: "/images/northAmericaPhysical.png",
      political: "/images/northAmericaPolitical.png",
    },

    southAmerica: {
      physical: "/images/southAmericaPhysical.png",
      political: "/images/southAmericaPolitical.png",
    },

    oceania: {
      physical: "/images/oceaniaPhysical.png",
      political: "/images/oceaniaPolitical.png",
    }
  };

  const [currentImage, setCurrentImage] = useState(null);

  const handleClickImage1 = () => {
    setCurrentImage(images[continent].physical);
  };

  const handleClickImage2 = () => {
    setCurrentImage(images[continent].political);
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
