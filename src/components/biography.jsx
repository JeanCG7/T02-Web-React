import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from '../template/card'

export default props => (
    <section id='biography'>
        <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
                <h2>Sobre mim</h2>
                <p>Lorem ipsum</p>
            </Col>
        </Row>
        <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card className='card biography'
                title='VSM'
                text='AAAAAAAAAAAA'>
                </Card>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card className='card biography'
                title='VSM'
                text='AAAAAAAAAAAA'>
                </Card>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card className='card biography'
                title='VSM'
                text='AAAAAAAAAAAA'>
                </Card>
            </Col>
        </Row>
    </section>
);
