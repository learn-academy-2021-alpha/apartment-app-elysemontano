import React, { Component } from "react";
import Header from "./components/Header"
import FindApartments from "./pages/FindApartments"
import AddApartment from "./pages/AddApartment"
import ShowApartment from "./pages/ShowApartment"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
 // import apartments from "./mockApartments.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.findApartment();
  }

findApartment = () => {
  fetch("http://localhost:3000/apartments")
  .then(response => {
    return response.json()
  })
  .then(apartment => {
    this.setState({ apartment: apartment })
  })
  .catch(errors => {
    console.log("index errors", errors);
  })
}

createNewApartment = (newApartment) => {
  fetch("http://localhost:3000/apartments", {
    body: JSON.stringify(newApartment),
    headers: {
      "Content-Type" : "application/json"
    },
    method: "POST"
  })
  .then (response => {
    response.status === 422 ? alert("something is wrong with your submission") : response.json()
  })
  .then(payload => {
    this.findApartment()
  })
  .catch(errors => {
    console.log("create errors", errors);
  })
}

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <Router>
      <Header logged_in= { logged_in }
              sign_in_route={ sign_in_route }
              sign_out_route={ sign_out_route }
              // sign_up_route={ sign_up_route }
      />
      <Switch>
      { logged_in &&
        <Route path="/addapartment"
        render={(props) => {
          return <AddApartment createNewApartment =
          { this.createNewApartment } current_user= { current_user }/>
        }} />
      }
        <Route path="/findapartments" render= { () => <FindApartments apartments = {this.state.apartments } />}
        />
        <Route path="/showapartment/:id" render = {(props) => {
          const id = +props.match.params.id;
          const foundapartment = this.state.apartments.find(apartment => apartment.id === id);
          return <ShowApartment apartment = { foundapartment } /> }} />

        <Route exact path="/" component={ Home } />
        <Route component={ NotFound}/>
      </Switch>
      </Router>
    )
  }
}

export default App
