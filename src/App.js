import './App.css';
import Hero from './components/Hero';
import { BrowserRouter as Router, Link, Route, } from 'react-router-dom';
import NewsDash from './components/NewsDash';
import {NavLink } from "react-router-dom"
// import Navbar from "./Navbar"
// import {Container} from "react-router-dom"
function App() {
  return (
    <Router>
      <div>
        <div>
          
        {/* <Navbar style={{backgroundColor: "#071740", position: "sticky"}} variant="dark" fixed="top"/> */}
        </div>
      <div className="App">
        <Link to="/" style={{textDecoration:'none'}} >
        <div className="navbar">
          <div><div className="mt-3">
            
  <NavLink to="/services" className="styled_button" >  Click to Know more  
  </NavLink> 
  </div></div>
          <div className="logo">
          <img src="./images/icon.png" alt="" width="20%"/>
                    <h5>TechZart</h5>
          </div>
        </div>
        </Link>
        <Route path="/" exact component={Hero} />
        <Route path="/news" exact component={NewsDash} />
      </div>
      </div>
    </Router>
    
  );
}

export default App;
