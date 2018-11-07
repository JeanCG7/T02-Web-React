import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row } from 'react-bootstrap'

export default props => (
    <section id='form'>
        <h2>Entre em contato :) !</h2>
        <Form>
            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <FormGroup>
                        <Label for='lblName'>Nome</Label>
                        <Input type='text' name='name' id='txtName' placeholder='Digite o seu nome' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='lblEmail'>Email</Label>
                        <Input type='email' name='email' id='txtEmail' placeholder='Digite seu e-mail' />
                    </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <FormGroup>
                        <Label for='lblSubject'>Assunto</Label>
                        <Input type='text' name='subject' id='txtSubject' placeholder='Digite o assunto' />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lblContent">Text Area</Label>
                        <Input type="textarea" name="content" id="txtContent" />
                        <Button>Enviar</Button>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    </section>
);