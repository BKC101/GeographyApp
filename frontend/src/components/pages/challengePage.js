import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Modal, ButtonGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ChallengePage = () => {
    const { continent } = useParams();
    const [inputValue, setInputValue] = useState("");
    const [correctCountries, setCorrectCountries] = useState({});
    const [showModal, setShowModal] = useState(true);
    const [quizType, setQuizType] = useState("political");
    const handleQuizTypeChange = (newQuizType) => setQuizType(newQuizType);

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

            mountains: [
                ["Adamawa Plateau", "Ahaggar", "Air Massif", "Alaska Range", "Alborz", "Aleutian Range", "Alps"],
                ["Altay", "Andes", "Annamite", "Appalachian", "Apennines", "Atlas", "Australian Alps"],
                ["Balkan", "Barisan", "Brooks Range", "Carpathians", "Caucasus", "Chapada Diamantina", "Coast Ranges"],
                ["Cordillera Central", "Cordillera de Merida", "Cordillera Occidental", "Cordillerra Oriental", "Da Hinggan Range", "Danan", "Darling Range"],
                ["Drakensberg", "Dinaric Alps", "Eastern Ghats", "Ethiopian Plateau", "Fliners Range", "Great Dividing Range", "Hamersley Range"],
                ["Hijaz", "Himalayas", "Hindu Kush", "Jabal Marrah", "Jos Plateau", "Jugjur", "Kilimanjaro"],
                ["Kolen", "Kolyma", "Koryaksky", "Kunlun", "La Gran Sabana", "Macdonnell Ranges", "Mackenzie"],
                ["Maoke", "Massif Central", "Monts Mitumba", "Mount Kenya", "Mufumbiro", "Musgrave Ranges", "Pennine Chain"],
                ["Pindus", "Pontic", "Putorana Plateau", "Pyrenees", "Rhodope", "Rocky", "Ruwenzori Range"],
                ["Sayan", "Scotish Highlands", "Sierra de Cordoba", "Sierra de la Ventana", "Sierra Madre del Sur", "Sierra Madre Occidental", "Sierra Madre Oriental"],
                ["Sierra Nevada", "Sierra Nevada de Santa Marta", "Serra de Maracaju", "Serra do Cachimbo", "Serra do Espinaco", "Serra do Mar", "Serra do Roncador"],
                ["Serra dos Parecis", "Serra Dourada", "Serra Formosa", "Serra Geral", "Serrania de Perija", "Southern Alps", "Stanovoy Range"],
                ["Taurus", "Tian Shan", "Tibesti", "Ural", "Verkhoyansk Range", "Western Ghats", "Zagros"]
            ],

            rivers: [
                ["Amazon", "Amur", "Arkansas", "Ashburton", "Awash Wenz", "Brahmaputra", "Blackwood"],
                ["Brazos", "Chari", "Colorado", "Columbia", "Congo", "Cunene", "Danube"],
                ["Daugava", "DeGray", "Dnieper", "Dniester", "Don", "Dordogne", "Douro"],
                ["Ebro", "Elbe", "Euphrates", "Fitzroy", "Flinders", "Fortescue", "Fraser"],
                ["Gambie", "Ganges", "Garonne", "Gascoyne", "Guadalquivir", "Indus", "Irrawaddy"],
                ["Lena", "Limpopo", "Loire", "Mackenzie", "Mekong", "Mitchell", "Mississippi"],
                ["Missouri", "Murchison", "Murray", "Nemunas", "Niger", "Nile", "Ob"],
                ["Oder", "Ogooue", "Ohio", "Orange", "Ord", "Ottawa", "Pearl"],
                ["Po", "Red", "Rhine", "Rhone", "Rio Balsas", "Rio Desaguadero", "Rio Grande"],
                ["Rio Grande de Santiago", "Rio Magdalena", "Rio Orinoco", "Rio Parana", "Rio Parnaiba", "Rio Sao Francisco de Norte", "Rio Tocantins"],
                ["Rio Xingu", "Salween", "Seine", "Senegal", "Shebele Shet", "Snake", "Saint Lawrence"],
                ["Suttor", "Tagus", "Tana", "Tennessee", "Thames", "Tigris", "Uruguay"],
                ["Ural", "Victoria", "Volga", "Volta", "Vistula", "Wooramel", "Yangtze"], 
                ["Yellow", "Yenisey", "Yukon", "Zambezi"]
            ],

            timer: 1800
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

            mountains: [
                ["Alps", "Apennines", "Balkan", "Carpathians", "Caucasus", "Dinaric Alps", "Kolen"],
                ["Massif Central", "Pennine Chain", "Pindus", "Pyrenees", "Rhodope", "Scotish Highlands", "Sierra Nevada"],
                ["Ural"]
            ],

            rivers: [
                ["Danube", "Daugava", "Dnieper", "Dniester", "Don", "Dordogne", "Ebro"],
                ["Elbe", "Garonne", "Loire", "Nemunas", "Oder", "Po", "Rhine"],
                ["Rhone", "Douro", "Guadalquivir", "Seine", "Tagus", "Thames", "Ural"],
                ["Vistula", "Volga"]
            ],

            timer: 600
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

            mountains: [
                ["Alborz", "Altay", "Annamite", "Barisan", "Caucasus", "Da Hinggan Range", "Danan"],
                ["Eastern Ghats", "Hijaz", "Himalayas", "Hindu Kush", "Jugjur", "Kolyma", "Koryaksky"],
                ["Kunlun", "Maoke", "Pontic", "Putorana Plateau", "Sayan", "Stanovoy Range", "Taurus"],
                ["Tian Shan", "Ural", "Verkhoyansk Range", "Western Ghats", "Zagros"]
            ],

            rivers: [
                ["Amur", "Brahmaputra", "Euphrates", "Ganges", "Indus", "Irrawaddy", "Lena"],
                ["Mekong", "Ob", "Pearl", "Salween", "Tigris", "Yangtze", "Yellow"],
                ["Yenisey"]
            ],

            timer: 600
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

            mountains: [
                ["Adamawa Plateau", "Ahaggar", "Air Massif", "Atlas", "Drakensberg", "Ethiopian Plateau", "Jabal Marrah"],
                ["Jos Plateau", "Kilimanjaro", "Monts Mitumba", "Mount Kenya", "Mufumbiro", "Ruwenzori Range", "Tibesti"]
            ],

            rivers: [
                ["Awash Wenz", "Chari", "Congo", "Cunene", "Gambie", "Limpopo", "Niger"],
                ["Nile", "Ogooue", "Orange", "Senegal", "Shebele Shet", "Tana", "Volta"],
                ["Zambezi"]
            ],

            timer: 720
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

            mountains: [
                ["Alaska Range", "Aleutian Range", "Appalachian", "Brooks Range", "Coast Ranges", "Mackenzie", "Rocky"],
                ["Sierra Madre del Sur", "Sierra Madre Occidental", "Sierra Madre Oriental", "Sierra Nevada"]
            ],

            rivers: [
                ["Arkansas", "Brazos", "Colorado", "Columbia", "Fraser", "Mackenzie", "Mississippi"],
                ["Missouri", "Ohio", "Ottawa", "Red", "Rio Balsas", "Rio Grande", "Rio Grande de Santiago"],
                ["Saint Lawrence", "Snake", "Tennessee", "Yukon"]
            ],

            timer: 600
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

            mountains: [
                ["Andes", "Chapada Diamantina", "Cordillera Central", "Cordillera de Merida", "Cordillera Occidental", "Cordillerra Oriental", "La Gran Sabana"],
                ["Serra de Maracaju", "Serra do Cachimbo", "Serra do Espinaco", "Serra do Mar", "Serra do Roncador", "Serra dos Parecis", "Serra Dourada"],
                ["Serra Formosa", "Serra Geral", "Serrania de Perija", "Sierra de Cordoba", "Sierra de la Ventana", "Sierra Nevada de Santa Marta"]
            ],

            rivers: [
                ["Amazon", "Rio Desaguadero", "Rio Magdalena", "Rio Orinoco", "Rio Parana", "Rio Parnaiba", "Rio Sao Francisco de Norte"],
                ["Rio Tocantins", "Rio Xingu", "Uruguay"]
            ],

            timer: 480
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

            mountains: [
                ["Australian Alps", "Darling Range", "Fliners Range", "Great Dividing Range", "Hamersley Range", "Macdonnell Ranges", "Maoke"],
                ["Musgrave Ranges", "Southern Alps"]
            ],

            rivers: [
                ["Ashburton", "Blackwood", "DeGray", "Fitzroy", "Flinders", "Fortescue", "Gascoyne"],
                ["Mitchell", "Murchison", "Murray", "Ord", "Suttor", "Victoria", "Wooramel"]
            ],
            
            timer: 480
        }
    };

    const political = {
        countries: continentQuizzes[continent].countries,
        capitals: continentQuizzes[continent].capitals,
    };

    const physical = {
        mountains: continentQuizzes[continent].mountains,
        rivers: continentQuizzes[continent].rivers,
    };

    let dataset;
    let inputPlaceholder;
    switch (quizType) {
        case "political":
            dataset = [...political.countries, ...political.capitals];
            inputPlaceholder = "Enter a Country or Capital";
            break;
        case "physical":
            dataset = [...physical.mountains, ...physical.rivers];
            inputPlaceholder = "Enter a Mountain or River";
            break;
        default:
            dataset = [...political.countries, ...political.capitals];
            inputPlaceholder = "Enter a Country or Capital";
    }
    
    const [timer, setTimer] = useState(continentQuizzes[continent].timer);
    const handleEndQuiz = () => setTimer(0);
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const openModal = () => {
        setCorrectCountries({});
        setTimer(continentQuizzes[continent].timer);
        setShowModal(true);
    };

    useEffect(() => {
        if (!showModal && timer > 0) {
            const timeout = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(timeout);
        }

    }, [timer, showModal]);

    const handleSubmit = (e, quizData) => {
        e.preventDefault();
    
        for (let row = 0; row < quizData.length; row++) {
            const dataIndex = quizData[row].indexOf(inputValue);
            if (dataIndex !== -1) {
                setCorrectCountries({ ...correctCountries, [`${row}-${dataIndex}`]: inputValue });
                setInputValue("");
                break;
            }
        }
    
        if (Object.keys(correctCountries).length === quizData.flat().length) {
            setShowModal(true);
        }
    };
    

    const closeModal = () => {
        setShowModal(false);
        setTimer(continentQuizzes[continent].timer);
        setCorrectCountries({});
    };

    const formatContinentName = (name) => {
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1');
        return formattedName;
    };

    const quizTitle = `${formatContinentName(continent)} ${quizType[0].toUpperCase() + quizType.slice(1)} Quiz`;

    const getHeaderIndex = () => {
        if (quizType === "political") {
          return political.countries.length;
        } else if (quizType === "physical") {
          return physical.mountains.length;
        }
    };      

    const rowStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        paddingLeft: "8px",
        paddingRight: "8px", 
    };

    return (
        <Container style={{ backgroundColor: "#87ceeb", minHeight: "92.8vh" }}>
            <h1>{quizTitle}</h1>
            <h2>Time Remaining: {minutes}m {seconds}s</h2>
            <h3>Correct: {Object.keys(correctCountries).length}/{dataset.flat().length}</h3>
            <Form onSubmit={(e) => handleSubmit(e, dataset)}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder={inputPlaceholder}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="danger" className="ml-2" onClick={handleEndQuiz}>
                    End Quiz
                </Button>
                <Button variant="secondary" className="ml-2" onClick={openModal}>
                    Quiz Options
                </Button>
            </Form>

            <Container className="mt-5">
            {dataset.map((rowWords, rowIndex) => (
  <React.Fragment key={rowIndex}>
    {rowIndex === 0 && <h4>{quizType === "political" ? "Countries" : "Mountains"}</h4>}
    {rowIndex === getHeaderIndex() && <h4>{quizType === "political" ? "Capitals" : "Rivers"}</h4>}
    <Row className="mb-3">
      <div style={rowStyle}>
        {rowWords.map((word, colIndex) => {
          const wordKey = `${rowIndex}-${colIndex}`;
          const isCorrect = correctCountries[wordKey];
          const isGameOver = timer === 0;
          const boxColor = isCorrect ? "green" : isGameOver ? "red" : "white";

          return (
            <div
              key={colIndex}
              className="border rounded text-center p-2"
              style={{
                width: "150px",
                height: "65px",
                backgroundColor: boxColor,
                flex: "0 0 auto",
              }}
            >
              {isCorrect || isGameOver ? word : ""}
            </div>
          );
        })}
      </div>
    </Row>
  </React.Fragment>
))}
            </Container>

            <Modal show={showModal} onHide={closeModal} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Challenge Test</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <p>Please choose a test type:</p>
                        <ButtonGroup>
                            <Button
                                variant={quizType === "political" ? "primary" : "outline-primary"}
                                onClick={() => handleQuizTypeChange("political")}
                            >
                                Political
                            </Button>
                            <Button
                                variant={quizType === "physical" ? "primary" : "outline-primary"}
                                onClick={() => handleQuizTypeChange("physical")}
                            >
                                Physical
                            </Button>
                        </ButtonGroup>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Start
                    </Button>
                    <Button variant="secondary" onClick={() => window.history.back()}>
                        Go Back
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ChallengePage;