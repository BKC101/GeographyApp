import React, {} from 'react'
import { Card, Container, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const ContinentPage = () => {
    const { continent } = useParams();

    const continentInfo = {
        world: {
            title: "The World",
            image: "/images/world.png",
            countries: "200",
            population: "8 Billion",
            landArea: "148.94 Million km^2",
        },

        europe: {
            title: "Europe",
            image: "/images/europe.png",
            countries: "46",
            population: "745.17 Million",
            landArea: "10.18 Million km^2",
        },

        asia: {
            title: "Asia",
            image: "/images/asia.png",
            countries: "48",
            population: "4.69 Billion",
            landArea: "44.579 Million km^2",
        },

        africa: {
            title: "Africa",
            image: "/images/africa.png",
            countries: "55",
            population: "1.39 Billion",
            landArea: "30.37 Million km^2",
        },

        northAmerica: {
            title: "North America",
            image: "/images/northAmerica.png",
            countries: "23",
            population: "592.296 Million",
            landArea: "24.709 Million km^2",
        },

        southAmerica: {
            title: "South America",
            image: "/images/southAmerica.png",
            countries: "12",
            population: "434.25 Million",
            landArea: "17.84 Million km^2",
        },

        oceania: {
            title: "Oceania",
            image: "/images/oceania.png",
            countries: "16",
            population: "44.49 Million",
            landArea: "8.526 Million km^2",
        }
    }

    const selectedContinentInfo = continentInfo[continent];

    const containerStyle = {
        backgroundColor: '#00009a',
        width: '100%',
        height: '92.8vh', 
        display: 'flex', 
        justifyContent: 'space-around', 
    };

    const worldTypeCard = {
        backgroundColor: '#009a00',
        width: '60vh',
        height: '70vh',
        alignSelf: 'center',
    };
    
    const fixedCardStyle = {
        width: '22vh',
        height: '22vh',
        marginBottom: '5%',
    };
      
    const flexContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    };
    
    const titleStyle = {
        fontSize: '4vh',
        textAlign: 'center',
        marginBottom: '5vh',
    };

    const imageStyle = {
        width: '30vh',
        height: '30vh',
        alignSelf: 'center',
        marginBottom: '3vh',
    };

    const textStyle = {
        fontSize: '3vh',
        textAlign: 'center',
    };

    const buttonStyle = {
        fontSize: '2vw',
        width: '21vh',
        height: '10vh',
        background: '#FFFFFF',
        alignSelf: 'center',
    };

    return(
        <Container fluid style={containerStyle}>
            <Card style={worldTypeCard}>
                <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title style={titleStyle}>{selectedContinentInfo.title}</Card.Title>
                <Card.Img style={imageStyle} variant="bottom" src={selectedContinentInfo.image} />
                <Card.Text style={textStyle}>Countries: {selectedContinentInfo.countries}</Card.Text>
                <Card.Text style={textStyle}>Population: {selectedContinentInfo.population}</Card.Text>
                <Card.Text style={textStyle}>Land Area: {selectedContinentInfo.landArea}</Card.Text>
                </Card.Body>
            </Card>

            <Card style={worldTypeCard}>
                <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title style={titleStyle}>Challenge Yourself</Card.Title>
                <div style={flexContainerStyle}>
                    <Card style={fixedCardStyle}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                            <Button style={buttonStyle} variant="light" href={`/study/${continent}`}>Study</Button>
                        </Card.Body>
                    </Card>
                    <Card style={fixedCardStyle}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                            <Button style={buttonStyle} variant="light" href={`/quiz/${continent}`}>Practice</Button>
                        </Card.Body>
                    </Card>
                    <Card style={fixedCardStyle}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                            <Button style={buttonStyle} variant="light">Review</Button>
                        </Card.Body>
                    </Card>
                    <Card style={fixedCardStyle}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                            <Button style={buttonStyle} variant="light" href={`/challenge/${continent}`}>Challenge</Button>
                        </Card.Body>
                    </Card>
                </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ContinentPage;