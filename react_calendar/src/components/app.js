import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import './page.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;