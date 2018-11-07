import React, { Component } from 'react'
import { Image, Row, Col } from 'react-bootstrap'

export default class About extends Component {

    render() {
        return (
            <section id='about' className='container-about'>
                <Row>
                    <Col lg={7} md={7} sm={12} xs={12}>
                        <Image src={require('../imgs/eu.jpg')} circle width={200}></Image>
                        <p className='about'>
                            Meu nome é Jean Carlos Gonçalves, atualmente trabalho com desenvolvimento WEB
                            no Grupo Forlogic e curso o 6º período de Engenharia de Software. Sou natural de Tarumã- SP
                            e atualmente moro em Cornélio Procópio - PR
                        </p>
                    </Col>
                    <Col lg={5} md={5} sm={12} xs={12}>
                        <p>Sempre gostei de enfrentrar desafios e descobrir coisas novas, aqui estão algumas tecnologias que aprendi saciando tal desejo!</p>
                        <Image src={require('../imgs/html.png')}></Image>
                        <Image src={require('../imgs/css.png')}></Image>
                        <Image src={require('../imgs/node.png')}></Image>
                        <Image src={require('../imgs/angular.png')}></Image>
                        <Image src={require('../imgs/react.png')}></Image>
                        <Image src={require('../imgs/java.png')}></Image>
                        <Image src={require('../imgs/cSharp.png')}></Image>
                        <Image src={require('../imgs/dotNet.png')}></Image>
                        <Image src={require('../imgs/mySql.png')}></Image>
                        <Image src={require('../imgs/sqlServer.png')}></Image>

                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h2>
                            Interesses
                        </h2>
                        <ul>
                            <li>Gestão de projetos</li>
                            <li>Liderança de times</li>
                            <li>Desenvolvimento Web</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h2>
                            Idiomas
                        </h2>
                        <ul>
                            <li>Português Nativo</li>
                            <li>Inglês Avançado</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h2>
                            Formação
                        </h2>
                        <ul>
                            <li>Engenharia de Software - UTFPR - Cornélio/PR</li>
                            <li>Técnico em Informática - ETEC - Assis/SP</li>
                            <li>Ensino Médio- ETEC - Assis/SP</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h2>
                            Atividades Desenvolvidas & Experiência
                        </h2>
                        <ul>
                            <li>1 ano e 6 meses - Estagiário - Universidade Aberta do Brasil - Tarumã/SP</li>
                            <li>9 meses - Analista de Suporte - VSM Ouro&Farma - Assis/SP</li>
                            <li>4 meses - Desenvolvimento WEB - Grupo Forlogic - Cornélio/PR (atual)</li>
                            <li>2016 - 2º lugar no Hackathon AETA - Tarumã/SP</li>
                            <li>2017 - 6º lugar no Hackathon INOVA - Presidente Prudente/SP</li>
                        </ul>
                    </Col>
                </Row>

            </section>
        )
    }
}