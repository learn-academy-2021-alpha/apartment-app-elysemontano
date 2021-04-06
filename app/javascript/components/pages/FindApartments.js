import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const FindApartments = (props) => {


  return (
    <>
      <h1>FindApartments</h1>
      <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
    </>
  );
}

export default FindApartments;
