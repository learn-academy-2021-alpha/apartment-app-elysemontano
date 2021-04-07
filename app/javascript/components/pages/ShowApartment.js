import React, { Component } from "react";
// import { Button } from 'reactstrap'
// import { NavLink } from 'react-router-dom'

class ShowApartment extends Component {

    render () {
        const apartment = this.props.apartment;

        return (
            <>
            <h1>Show </h1>
            <div>Street: { apartment.street }</div>
            <div>City: { apartment.city }</div>
            <div>State: { apartment.state }</div>
            <div>Manager: { apartment.manager }</div>
            <div>Email: { apartment.email }</div>
            <div>Price: { apartment.price }</div>
            <div>Bedrooms: { apartment.bedrooms }</div>
            <div>Bathrooms: { apartment.bathrooms }</div>
            <div>pets: { apartment.pets }</div>
           
            </>
        )
    }
}

export default ShowApartment
