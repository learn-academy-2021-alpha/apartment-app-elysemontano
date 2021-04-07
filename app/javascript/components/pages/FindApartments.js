import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, NavLink } from 'reactstrap';


class FindApartments extends Component {

  render() {

    console.log(this.props.apartments)
    return (
      <>
        <h1>Find Apartments</h1>
        <ul>
              { this.props.apartments.map(apartment => {
                  return (
                    <li key = {apartment.id}>
                        <NavLink href= {`/showapartment/${apartment.id}`}>
                        {apartment.street}
                        </NavLink>
                    </li>
                  )
                })}
            </ul>
      </>
    );
  }
}

export default FindApartments;
