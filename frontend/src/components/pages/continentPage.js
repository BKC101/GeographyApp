import React, {} from 'react'
import { Card, Container, Button } from 'react-bootstrap';

const ContinentPage = () => {
    
    const continent = localStorage.getItem("continent");

    if(continent === 'world') {
        var title = "The World";
        var image = "images/world.png";
        var countries = "200";
        var population = "8 Billion";
        var landArea = "148.94 Million km^2";
    } else if(continent === 'europe') {
        title = "Europe";
        image = "images/europe.png";
        countries = "46";
        population = "745.17 Million";
        landArea = "10.18 Million km^2";
    } else if(continent === 'asia') {
        title = "Asia";
        image = "images/asia.png";
        countries = "48";
        population = "4.69 Billion";
        landArea = "44.579 Million km^2";
    } else if(continent === 'africa') {
        title = "Africa";
        image = "images/africa.png";
        countries = "55";
        population = "1.39 Billion";
        landArea = "30.37 Million km^2";
    } else if(continent === 'northAmerica') {
        title = "North America";
        image = "images/northAmerica.png";
        countries = "23";
        population = "592.296 Million";
        landArea = "24.709 Million km^2";
    } else if(continent === 'southAmerica') {
        title = "South America";
        image = "images/southAmerica.png";
        countries = "12";
        population = "434.25 Million";
        landArea = "17.84 Million km^2";
    } else if(continent === 'oceania') {
        title = "Oceania";
        image = "images/oceania.png";
        countries = "16";
        population = "44.49 Million";
        landArea = "8.526 Million km^2";
    }

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
                <Card.Title style={titleStyle}>{title}</Card.Title>
                <Card.Img style={imageStyle} variant="bottom" src={image} />
                <Card.Text style={textStyle}>Countries: {countries}</Card.Text>
                <Card.Text style={textStyle}>Population: {population}</Card.Text>
                <Card.Text style={textStyle}>Land Area: {landArea}</Card.Text>
                </Card.Body>
            </Card>

            <Card style={worldTypeCard}>
                <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title style={titleStyle}>Challenge Yourself</Card.Title>
                <div style={flexContainerStyle}>
                    <Card style={fixedCardStyle}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                            <Button style={buttonStyle} variant="light" href="/study">Study</Button>
                        </Card.Body>
                    </Card>
                    <Card style={fixedCardStyle}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                            <Button style={buttonStyle} variant="light" href="/quiz">Practice</Button>
                        </Card.Body>
                    </Card>
                    <Card style={fixedCardStyle}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                            <Button style={buttonStyle} variant="light">Review</Button>
                        </Card.Body>
                    </Card>
                    <Card style={fixedCardStyle}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                            <Button style={buttonStyle} variant="light">Challenge</Button>
                        </Card.Body>
                    </Card>
                </div>
                </Card.Body>
            </Card>
        </Container>

        /*
        <body class="page">
            <section class="world-section-continent-info">
                <h2 class="world-section-title" id="myHeading" >The World</h2>
                <img class="world-img" id="continentImage" src="images/world.png"></img>
                <h2 class="world-section-title" id="myCountries" >Countries: 200</h2>
                <h2 class="world-section-title" id="myPopulation" >Population: 8 Billion</h2>
                <h2 class="world-section-title" id="myLandArea" >Land Area: 148.94 Million km^2</h2>
            </section>
            <section class="world-section-continent-info">
                <h2 class="world-section-title">Test Yourself</h2>
                <div class="continents">
                    <h2 class="mode">Study</h2>
                    <h2 class="mode">Practice</h2>
                    <h2 class="mode">Review</h2>
                    <h2 class="mode">Challenge</h2>
                </div>
            </section>
        </body>
        */
    )
}

export default ContinentPage;