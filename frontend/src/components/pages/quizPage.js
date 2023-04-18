import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

const QuizPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [correctWords, setCorrectWords] = useState({});
    const [timer, setTimer] = useState(90);
    const [showModal, setShowModal] = useState(false);

    const words = [
        ["Argentina", "Bolivia", "Brazil", "Chile"],
        ["Columbia", "Ecuador", "Guyana", "Paraguay"],
        ["Peru", "Suriname", "Uruguay", "Venezuela"],
    ];

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