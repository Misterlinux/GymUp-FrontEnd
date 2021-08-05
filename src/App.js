import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Container, Nav } from 'react-bootstrap'

import Home from "./components/Home.js"
import Sign from "./components/Signin.js"
import Log from "./components/Login.js"
import Signout from "./components/Out.js"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (

    <div>
      <Navbar bg="warning" variant="light">
        <Container>
        <Navbar.Brand href="/"> GymUp </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Router >

      <Switch>

        <Route
                path='/'
                exact >
                <Home/>  
        </Route>

        <Route
                path='/signin'
                exact >
                <Sign/>  
        </Route>

        <Route
                path='/login'
                exact >
                <Log/>  
        </Route>

        <Route
                path='/out'
                exact >
                <Signout/>  
        </Route>

        </Switch>

        </Router>

        <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row ">

                    <div class="col-sm-12 col-md-6 item">
                        <h3>About this project</h3>
                        
                        <p>
                          This project was made for the Migracode Barcelona organitation
                          to help students study React, NodeJs ad SQL databases by Angelo Zarate
                        </p>
                    </div>


                    <div class="col-md-6 col-sm-12 item social ">
                      <a href="https://github.com/Misterlinux">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://www.linkedin.com/feed/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://migracode.openculturalcenter.org/">
                        <i className="fas fa-laptop-code"></i>
                      </a>
                        <p className="copyright"> Migracode Barcelona 2021</p>
                    </div>

                </div>
            </div>
        </footer>

    </div>

    </div>

  );
}

export default App;
