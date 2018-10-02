import React from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';

class Letters extends React.Component {

    state = {
        letters: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
    };

    render() {
        var letters = this.state.letters.map(ch =>
            <Button size="sm">{ch}</Button>
        );
        return (
            <Container>
                <Row>
                    <Col sm="12">
                        <div id="letters-form">
                            <ButtonGroup size="sm" aria-label="First group">
                                {letters}
                            </ButtonGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Letters;
