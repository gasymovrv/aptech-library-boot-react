import React from 'react';
import { Container, Row, Col } from 'reactstrap';


class Top extends React.Component {

    render() {
        return (
            <div className="section section-breadcrumbs">
                <Container>
                    <Row>
                        <Col md="12">
                            <h1>Заголовок</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Top;
