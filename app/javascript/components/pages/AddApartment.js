import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, NavItem, NavLink } from 'reactstrap';
import { Redirect } from 'react-router-dom'


class AddApartment extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        street: '',
        city: '',
        state: '',
        manager: '',
        email: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        pets: '',
        user_id: this.props.current_user.id
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewApartment(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <h1>AddApartment</h1>

          <Form>
            <FormGroup>
              <Label for="street">Street Address</Label>
              <Input
                type="text"
                name="street"
                value={this.state.form.street}
                onChange={this.handleChange}
                placeholder="123 Main St." />
            </FormGroup>
            <Row form>
              <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  type="string"
                  name="city" value={this.state.form.city}
                  onChange={this.handleChange}
                  placeholder="city" />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="state">State</Label>
                <Input
                  type="string"
                  name="state" value={this.state.form.state}
                  onChange={this.handleChange} placeholder="State"/>
              </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="manager">Manager</Label>
              <Input
                type="string"
                name="manager" value={this.state.form.manager}
                onChange={this.handleChange} placeholder="Manager"/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email" value={this.state.form.email}
                onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                type="string"
                name="price" value={this.state.form.price}
                onChange={this.handleChange}/>
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="bedrooms">Bedrooms</Label>
                  <Input
                    type="string" name="bedrooms" value={this.state.form.bedrooms}
                    onChange={this.handleChange}/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="bathrooms">Bathrooms</Label>
                  <Input
                    type="string" name="bathrooms" value={this.state.form.bathrooms}
                    onChange={this.handleChange}/>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="pets">Pets</Label>
                  <Input
                    type="string" name="pets" value={this.state.form.pets}
                    onChange={this.handleChange}/>
                </FormGroup>
              </Col>
            </Row>
            <Button onClick= {
              this.handleSubmit
            }>Submit</Button>
          </Form>
          {this.state.submitted &&
          <Redirect to="/findapartments"/>}
      </>
    );
  }
}
export default AddApartment;
