import React, {} from 'react'
import { Card, Container, Button } from 'react-bootstrap';

const ContinentSelectionPage = () => {
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
        width: '20vh',
        height: '20vh',
        marginBottom: '5%',
    };
      
    const flexContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    };
      
    const middleCardStyle = {
        width: '40vh',
        alignSelf: 'center',
    };

    const titleStyle = {
        fontSize: '4vh',
        textAlign: 'center',
        marginBottom: '5vh',
    };

    const buttonStyle = {
        fontSize: '1vw',
        marginBottom: '5px',
        width: '16vh',
        height: '5vh',
        background: '#FFFFFF',
        alignSelf: 'center',
    };

    const imageStyle = {
        width: '10vh',
        height: '10vh',
        alignSelf: 'center',
    };

    const middleImageStyle = {
        width: '95%',
        height: '95%',
        alignSelf: 'center',
    };

    return(
        <Container fluid style={containerStyle}>
            <Card style={worldTypeCard}>
                <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title style={titleStyle}>Old World</Card.Title>
                <div style={flexContainerStyle}>
                <Card style={fixedCardStyle}>
                    <Card.Body className="d-flex flex-column justify-content-center">
                        <Button style={buttonStyle} variant="light" href='/continent/europe'>Europe</Button>
                        <Card.Img style={imageStyle} variant="bottom" src="/images/europe.png" />
                    </Card.Body>
                    </Card>
                    <Card style={fixedCardStyle}>
                    <Card.Body className="d-flex flex-column justify-content-center">
                        <Button style={buttonStyle} variant="light" href='/continent/asia'>Asia</Button>
                        <Card.Img style={imageStyle} variant="bottom" src="/images/asia.png" />
                    </Card.Body>
                    </Card>
                    <Card style={fixedCardStyle}>
                    <Card.Body className="d-flex flex-column justify-content-center">
                        <Button style={buttonStyle} variant="light" href='/continent/africa'>Africa</Button>
                        <Card.Img style={imageStyle} variant="bottom" src="/images/africa.png" />
                    </Card.Body>
                    </Card>
                </div>
                </Card.Body>
            </Card>

            <Card style={middleCardStyle}>
                <Card.Body className="d-flex flex-column justify-content-center">
                    <Button style={buttonStyle} variant="light" href='/continent/world'>The World</Button>
                    <Card.Img style={middleImageStyle} variant="bottom" src="/images/world.png" />
                </Card.Body>
            </Card>

            <Card style={worldTypeCard}>
                <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title style={titleStyle}>New World</Card.Title>
                <div style={flexContainerStyle}>
                <Card style={fixedCardStyle}>
                    <Card.Body className="d-flex flex-column justify-content-center">
                        <Button style={buttonStyle} variant="light" href='/continent/northAmerica'>North America</Button>
                        <Card.Img style={imageStyle} variant="bottom" src="/images/northAmerica.png" />
                    </Card.Body>
                    </Card>
                    <Card style={fixedCardStyle}>
                    <Card.Body className="d-flex flex-column justify-content-center">
                        <Button style={buttonStyle} variant="light" href='/continent/southAmerica'>South America</Button>
                        <Card.Img style={imageStyle} variant="bottom" src="/images/southAmerica.png" />
                    </Card.Body>
                    </Card>
                    <Card style={fixedCardStyle}>
                    <Card.Body className="d-flex flex-column justify-content-center">
                        <Button style={buttonStyle} variant="light" href='/continent/oceania'>Oceania</Button>
                        <Card.Img style={imageStyle} variant="bottom" src="/images/oceania.png" />
                    </Card.Body>
                    </Card>
                </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ContinentSelectionPage;