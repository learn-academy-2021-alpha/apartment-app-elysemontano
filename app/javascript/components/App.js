import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import React from "react"
import Header from "./components/Header"
import FindApartments from "./pages/FindApartments"
import AddApartment from "./pages/AddApartment"
import Home from "./pages/Home"

class App extends React.Component {

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
      />
      <Switch>
      { logged_in &&
        <Route path="/addapartment" component={ AddApartment } />
      }


        <Route path="/findapartments" component={ FindApartments } />
        <Route exact path="/" component={ Home } />
      </Switch>
      </Router>
    )
  }
}

export default App
