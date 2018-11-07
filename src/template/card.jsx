import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default props => (
    <Card className={props.className}>
      <a href={props.link}><CardImg top width={props.imgWidth} src={props.src} alt={props.alt}/></a>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.subTitle}</CardSubtitle>
        <CardText>{props.text}</CardText>
      </CardBody>
    </Card>
);