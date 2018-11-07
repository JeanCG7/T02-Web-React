import React from 'react';
import Card from '../template/card'
import { Row, Col } from 'react-bootstrap'

export default props => (
    <section id='blog'>
        <Row>
        <Col lg={4} md={4} sm={12} xs={12}>
                <Card
                    className='card blog'
                    src={require('../imgs/eu.jpg')}
                    imgWidth='70%'
                    alt='Imagem'
                    title='Título'
                    subTitle='Subtítulo'
                    text='TESTE TESTE TESTE'>
                </Card>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card
                    className='card blog'
                    src={require('../imgs/eu.jpg')}
                    imgWidth='70%'
                    alt='Imagem'
                    title='Título'
                    subTitle='Subtítulo'
                    text='TESTE TESTE TESTE'>
                </Card>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card
                    className='card blog'
                    src={require('../imgs/eu.jpg')}
                    imgWidth='70%'
                    alt='Imagem'
                    title='Título'
                    subTitle='Subtítulo'
                    text='TESTE TESTE TESTE'>
                </Card>
            </Col>
        </Row>
    </section>
);