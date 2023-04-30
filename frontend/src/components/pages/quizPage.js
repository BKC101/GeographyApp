import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";

const QuizPage = () => {
    const { continent } = useParams();
    const [inputValue, setInputValue] = useState("");
    const [correctWords, setCorrectWords] = useState({});
    const [timer, setTimer] = useState(90);
    const [showModal, setShowModal] = useState(false);

    const continentQuizzes = {
        world: [
            ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan"],
            ["Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi"],
            ["Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Columbia", "Comoros", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia"],
            ["Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia"],
            ["Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guyana", "Guinea-Bissau", "Hati", "Hungary"],
            ["Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isreal", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kosovo", "Kuwait", "Kyrgyzstan"],
            ["Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg", "Lybia", "Malaysia", "Maldives", "Malta", "Marshall Islands", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Morocco", "Montenegro","Mozambique", "Myanmar"],
            ["Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Niger", "Nicaragua", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"],
            ["Qatar", "Republic of the Congo", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Serbia", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Soloman Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria"],
            ["Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkiye", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
        ],

        europe: [
            ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"],
            ["Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria"],
            ["Croatia", "Cyprus", "Czechia", "Denmark", "Estonia"],
            ["Finland", "France", "Georgia", "Germany", "Greece"],
            ["Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Kosovo"],
            ["Latvia", "Liechtenstein", "Lithuania", "Luxembourg"],
            ["Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway"],
            ["Poland", "Portugal", "Romania", "Russia"],
            ["San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland"],
            ["Turkiye", "Ukraine", "United Kingdom", "Vatican City"]
        ],

        asia: [
            ["Afghanistan", "Armenia", "Azerbaijan"],
            ["Bahrain", "Bangladesh", "Bhutan", "Brunei"],
            ["Cambodia", "China", "Cyprus", "Egypt", "Georgia"],
            ["India", "Indonesia", "Iran", "Iraq", "Isreal"],
            ["Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan"],
            ["Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar"],
            ["Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar"],
            ["Russia", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria"],
            ["Tajikistan", "Thailand", "Timor-Leste", "Turkiye", "Turkmenistan"],
            ["United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"]

        ],

        africa: [
            ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi"],
            ["Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Cote d'Ivoire"],
            ["Democratic Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia"],
            ["Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya"],
            ["Lesotho", "Liberia", "Lybia", "Madagascar", "Malawi", "Mali", "Mauritania"],
            ["Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rwanda"],
            ["Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone"],
            ["Somalia", "South Africa", "South Sudan", "Sudan"],
            ["Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"]
        ],

        northAmerica: [
            ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize"],
            ["Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic"],
            ["El Salvador", "Grenada", "Guatemala", "Hati", "Honduras"],
            ["Jamaica", "Mexico", "Nicaragua", "Panama"],
            ["Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines"],
            ["Trinidad and Tobago", "United States of America"]
            
        ],

        southAmerica: [
            ["Argentina", "Bolivia", "Brazil", "Chile"],
            ["Columbia", "Ecuador", "Guyana", "Paraguay"],
            ["Peru", "Suriname", "Uruguay", "Venezuela"],
        ],

        oceania: [
            ["Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia"],
            ["Nauru", "New Zealand", "Palau", "Papua New Guinea"],
            ["Samoa", "Soloman Islands", "Tonga", "Tuvalu", "Vanuatu"]
        ]
    };

    const words = continentQuizzes[continent];

    useEffect(() => {
        if (timer > 0) {
            const timeout = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(timeout);
        } else {
            setShowModal(true);
        }
    }, [timer]);

    const handleSubmit = (e) => {
        e.preventDefault();

        for (let row = 0; row < words.length; row++) {
            const wordIndex = words[row].indexOf(inputValue);
            if (wordIndex !== -1) {
                setCorrectWords({ ...correctWords, [`${row}-${wordIndex}`]: inputValue });
                setInputValue("");
                break;
            }
        }

        if (Object.keys(correctWords).length === words.flat().length) {
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setTimer(60);
        setCorrectWords({});
    };

    return (
        <Container>
            <h1>Timed Quiz</h1>
            <h2>Time Remaining: {timer}s</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Type a word"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Container className="mt-5">
                {words.map((rowWords, rowIndex) => (
                    <Row key={rowIndex} className="mb-3">
                        {rowWords.map((_, colIndex) => (
                            <Col key={colIndex}>
                                <div
                                    className="border rounded text-center p-2"
                                    style={{ width: "100px", height: "50px" }}
                                >
                                    {correctWords[`${rowIndex}-${colIndex}`]}
                                </div>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Quiz Results</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You got {Object.keys(correctWords).length} out of {words.flat().length} words correct!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Retry
                    </Button>
                    <Button variant="primary" onClick={() => window.history.back()}>
                        Go Back
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default QuizPage;