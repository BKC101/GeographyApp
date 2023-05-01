import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal, ButtonGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const QuizPage = () => {
    const { continent } = useParams();
    const [inputValue, setInputValue] = useState("");
    const [correctCountries, setCorrectCountries] = useState({});
    const [showModal1, setShowModal1] = useState(true);
    const [showModal2, setShowModal2] = useState(false);
    const [quizType, setQuizType] = useState("countries");
    const handleClose = () => setShowModal1(false);
    const handleQuizTypeChange = (newQuizType) => setQuizType(newQuizType);
    const endQuizEarly = () => setShowModal2(true);
    

    const continentQuizzes = {
        world: {
            countries: [
                ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina"],
                ["Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh"],
                ["Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia"],
                ["Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi"],
                ["Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile"],
                ["China", "Columbia", "Comoros", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba"],
                ["Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic"],
                ["Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini"],
                ["Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia"],
                ["Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana"],
                ["Guinea-Bissau", "Hati", "Honduras", "Hungary", "Iceland", "India", "Indonesia"],
                ["Iran", "Iraq", "Ireland", "Isreal", "Italy", "Jamaica", "Japan"],
                ["Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan"],
                ["Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Liechtenstein", "Lithuania"],
                ["Luxembourg", "Lybia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali"],
                ["Mauritania", "Malta", "Marshall Islands", "Mauritius", "Mexico", "Micronesia", "Moldova"],
                ["Monaco", "Mongolia", "Morocco", "Montenegro", "Mozambique", "Myanmar", "Namibia"],
                ["Nauru", "Nepal", "Netherlands", "New Zealand", "Niger", "Nicaragua", "Nigeria"],
                ["North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine"],
                ["Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"],
                ["Qatar", "Republic of the Congo", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia"],
                ["Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles"],
                ["Serbia", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Soloman Islands", "Somalia"],
                ["South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname"],
                ["Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand"],
                ["Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkiye", "Turkmenistan"],
                ["Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay"],
                ["Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia"],
                ["Zimbabwe"]
            ],

            capitals: [
                ["Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Algiers", "Amman", "Amsterdam"],
                ["Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Ashgabat", "Asmara", "Astana"],
                ["Asuncion", "Athens", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok"],
                ["Bangui", "Banjul", "Basseterre", "Beijing", "Beirut", "Belgrade", "Belmopan"],
                ["Berlin", "Bern", "Bishkek", "Bissau", "Bogota", "Brasilia", "Bratislava"],
                ["Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Cairo"],
                ["Canberra", "Caracas", "Castries", "Chisinau", "Colombo", "Conakry", "Copenhagen"],
                ["Dakar", "Damascus", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha"],
                ["Dublin", "Dushanbe", "Freetown", "Funafuti", "Gaborone", "Georgetown", "Gitega"],
                ["Guatemala City", "Hanoi", "Harare", "Havana", "Helsinki", "Honiara", "Islamabad"],
                ["Jakarta", "Jerusalem", "Juba", "Kabul", "Kampala", "Kathmandu", "Khartoum"],
                ["Kigali", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur", "Kuwait City", "Kyiv"],
                ["Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lome", "London"],
                ["Luanda", "Lusaka", "Luxembourg", "Madrid", "Majuro", "Malabo", "Male"],
                ["Managua", "Manama", "Manila", "Maputo", "Maseru", "Mbabane", "Mexico City"],
                ["Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Moroni", "Moscow"],
                ["Muscat", "N'Djamena", "Nairobi", "Nassau", "Naypyidaw", "New Delhi", "Ngerulmud"],
                ["Niamey", "Nicosia", "Niger", "Nouakchott", "Nuku'alofa", "Oslo", "Ottawa"],
                ["Ouagadougou", "Palikir", "Panama City", "Paramaribo", "Paris", "Phnom Penh", "Podgorica"],
                ["Port-au-Prince", "Port Louis", "Port Moresby", "Port Vila", "Port of Spain", "Porto-Novo", "Prague"],
                ["Praia", "Pretoria", "Pristina", "Pyongyang", "Quito", "Rabat", "Ramallah"],
                ["Reykjavik", "Riga", "Riyadh", "Rome", "Roseau", "San Jose", "San Salvador"],
                ["Sana'a", "Santiago", "Santo Domingo", "Sao Tome", "Sarajevo", "Seoul", "Singapore"],
                ["Skopje", "Sofia", "South Tarawa", "Saint George's", "Saint John's", "Stockholm", "Sucre"],
                ["Suva", "Taipei", "Tallinn", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran"],
                ["Thimphu", "Tirana", "Tokyo", "Tripoli", "Tunis", "Ulaanbaatar", "Vaduz"],
                ["Valletta", "Vatican City", "Vienna", "Victoria", "Vientiane", "Vilnius", "Warsaw"],
                ["Washington D.C.", "Wellington", "Windhoek", "Yaounde", "Yamoussoukro", "Yaren", "Yerevan"],
                ["Zagreb"]
            ],

            timer: 900
        },

        europe: {
            countries: [
                ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium"],
                ["Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czechia", "Denmark", "Estonia"],
                ["Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland"],
                ["Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia", "Liechtenstein", "Lithuania"],
                ["Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia"],
                ["Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia"],
                ["Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkiye", "Ukraine"],
                ["United Kingdom", "Vatican City"]
            ],

            capitals: [
                ["Amsterdam", "Andorra la Vella", "Ankara", "Astana", "Athens", "Baku", "Belgrade"],
                ["Berlin", "Bern", "Bratislava", "Brussels", "Bucharest", "Budapest", "Chisinau"],
                ["Copenhagen", "Dublin", "Helsinki", "Kyiv", "Lisbon", "Ljubljana", "London"],
                ["Luxembourg", "Madrid", "Minsk", "Monaco", "Moscow", "Nicosia", "Oslo"],
                ["Paris", "Podgorica", "Prague", "Pristina", "Reykjavik", "Riga", "Rome"],
                ["San Marino", "Sarajevo", "Skopje", "Sofia", "Stockholm", "Tbilisi", "Tallinn"],
                ["Tirana", "Vaduz", "Valletta", "Vatican City", "Vienna", "Vilnius", "Warsaw"],
                ["Yerevan", "Zagreb"]
            ],

            timer: 300
        },

        asia: {
            countries: [
                ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei"],
                ["Cambodia", "China", "Cyprus", "Egypt", "Georgia", "India", "Indonesia"],
                ["Iran", "Iraq", "Isreal", "Japan", "Jordan", "Kazakhstan", "Kuwait"],
                ["Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar"],
                ["Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar"],
                ["Russia", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Tajikistan"],
                ["Thailand", "Taiwan", "Timor-Leste", "Turkiye", "Turkmenistan", "United Arab Emirates", "Uzbekistan"],
                ["Vietnam", "Yemen"]
            ],

            capitals: [
                ["Abu Dhabi", "Amman", "Ankara", "Ashgabat", "Astana", "Baghdad", "Baku"],
                ["Bandar Seri Begawan", "Bangkok", "Beijing", "Beirut", "Bishkek", "Phnom Penh", "Cairo"],
                ["Colombo", "Damascus", "Dhaka", "Dili", "Doha", "Dushanbe", "Hanoi"],
                ["Islamabad", "Jakarta", "Jerusalem", "Kabul", "Kathmandu", "Kuala Lumpur", "Kuwait City"],
                ["Male", "Manama", "Manila", "Moscow", "Muscat", "Naypyidaw", "New Delhi"],
                ["Nicosia", "Pyongyang", "Ramallah", "Riyadh", "Sana'a", "Seoul", "Singapore"],
                ["Taipei", "Tashkent", "Tbilisi", "Tehran", "Thimphu", "Tokyo", "Ulaanbaatar"],
                ["Vientiane", "Yerevan"]
            ],

            timer: 300
        },

        africa: {
            countries: [
                ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde"],
                ["Cameroon", "Central African Republic", "Chad", "Comoros", "Cote d'Ivoire", "Democratic Republic of the Congo", "Djibouti"],
                ["Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia"],
                ["Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Lybia"],
                ["Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique"],
                ["Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rwanda", "Sao Tome and Principe", "Senegal"],
                ["Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania"],
                ["Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"]
            ],

            capitals: [
                ["Abuja", "Accra", "Addis Ababa", "Algiers", "Antananarivo", "Asmara", "Bamako"],
                ["Bangui", "Banjul", "Bissau", "Brazzaville", "Cairo", "Conakry", "Dakar"],
                ["Djibouti", "Dodoma", "Freetown", "Gaborone", "Gitega", "Harare", "Juba"],
                ["Kampala", "Khartoum", "Kigali", "Kinshasa", "Libreville", "Lilongwe", "Lome"],
                ["Luanda", "Lusaka", "Malabo", "Maputo", "Maseru", "Mbabane", "Mogadishu"],
                ["Monrovia", "Moroni", "Nairobi", "N'Djamena", "Niamey", "Nouakchott", "Ouagadougou"],
                ["Port Louis", "Porto-Novo", "Praia", "Pretoria", "Rabat", "Sao Tome", "Tripoli"],
                ["Tunis", "Victoria", "Windhoek", "Yamoussoukro", "Yaounde"]
            ],

            timer: 360
        },

        northAmerica: {
            countries: [
                ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada"],
                ["Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador"],
                ["Grenada", "Guatemala", "Hati", "Honduras", "Jamaica"],
                ["Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia"],
                ["Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States of America"]
            ],

            capitals: [
                ["Basseterre", "Belmopan", "Bridgetown", "Castries", "Guatemala City"],
                ["Havana", "Kingston", "Kingstown", "Managua", "Mexico City"],
                ["Nassau", "Ottawa", "Panama City", "Port-au-Prince", "Port of Spain"],
                ["Roseau", "San Jose", "San Salvador", "Santo Domingo", "Saint George's"],
                ["Saint John's", "Tegucigalpa", "Washington D.C."]
            ],

            timer: 300
        },

        southAmerica: {
            countries: [
                ["Argentina", "Bolivia", "Brazil", "Chile"],
                ["Columbia", "Ecuador", "Guyana", "Paraguay"],
                ["Peru", "Suriname", "Uruguay", "Venezuela"],
            ],

            capitals: [
                ["Asuncion", "Bogota", "Brasilia", "Buenos Aires"],
                ["Caracas", "Georgetown", "Lima", "Montevideo"],
                ["Paramaribo", "Quito", "Santiago", "Sucre"]
            ],

            timer: 240
        },

        oceania: {
            countries: [
                ["Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia"],
                ["Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa"],
                ["Soloman Islands", "Tonga", "Tuvalu", "Vanuatu"]
            ],

            capitals: [
                ["Apia", "Canberra", "Funafuti", "Honiara", "Majuro"],
                ["Ngerulmud", "Nuku'alofa", "Palikir", "Port Moresby", "Port Vila"],
                ["South Tarawa", "Suva", "Wellington", "Yaren"],
            ],
            
            timer: 240
        }
    };

    const countries = continentQuizzes[continent].countries;
    const capitals = continentQuizzes[continent].capitals;
    const [timer, setTimer] = useState(continentQuizzes[continent].timer);

    useEffect(() => {
        if (!showModal1 && !showModal2 && timer > 0) {
            const timeout = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(timeout);
        }
    }, [timer, showModal1, showModal2]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const quizData = quizType === "countries" ? countries : capitals;

        for (let row = 0; row < quizData.length; row++) {
            const dataIndex = quizData[row].indexOf(inputValue);
            if (dataIndex !== -1) {
                setCorrectCountries({ ...correctCountries, [`${row}-${dataIndex}`]: inputValue });
                setInputValue("");
                break;
            }
        }

        if (Object.keys(correctCountries).length === quizData.flat().length) {
            setShowModal2(true);
        }
    };

    const closeModal = () => {
        setShowModal2(false);
        setTimer(continentQuizzes[continent].timer);
        setCorrectCountries({});
    };

    return (
        <Container>
            <h1>Timed Quiz</h1>
            <h2>Time Remaining: {timer}s</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Name a Country"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="danger" className="ml-2" onClick={endQuizEarly}>
                    End Quiz
                </Button>
            </Form>

            <Container className="mt-5">
                {countries.map((rowWords, rowIndex) => (
                    <Row key={rowIndex} className="mb-3">
                        {rowWords.map((_, colIndex) => (
                            <Col key={colIndex}>
                                <div
                                    className="border rounded text-center p-2"
                                    style={{ width: "150px", height: "65px" }}
                                >
                                    {correctCountries[`${rowIndex}-${colIndex}`]}
                                </div>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>

            <Modal show={showModal1} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Practice Quiz</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <p>Please choose a quiz type:</p>
                        <ButtonGroup>
                            <Button
                                variant={quizType === "countries" ? "primary" : "outline-primary"}
                                onClick={() => handleQuizTypeChange("countries")}
                            >
                                Countries
                            </Button>
                            <Button
                                variant={quizType === "capitals" ? "primary" : "outline-primary"}
                                onClick={() => handleQuizTypeChange("capitals")}
                            >
                                Capitals
                            </Button>
                        </ButtonGroup>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Start Quiz
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal2} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Quiz Results</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You got {Object.keys(correctCountries).length} out of {countries.flat().length} words correct!
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