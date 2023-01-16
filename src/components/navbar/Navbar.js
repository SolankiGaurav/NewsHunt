import React, { Component } from 'react'
import Home from '../home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
      <>
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
              <div className="container-fluid">
                <h4 className='mx-5'>NewsHunt</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/NewsHunt">General</Link>
                    <Link className="nav-link active" aria-current="page" to="/NewsHunt/business">Business</Link>
                    <Link className="nav-link active" aria-current="page" to="/NewsHunt/entertainment">Entertainment</Link>
                    <Link className="nav-link active" aria-current="page" to="/NewsHunt/health">Health</Link>
                    <Link className="nav-link active" aria-current="page" to="/NewsHunt/science">Science</Link>
                    <Link className="nav-link active" aria-current="page" to="/NewsHunt/sports">Sports</Link>
                    <Link className="nav-link active" aria-current="page" to="/NewsHunt/technology">Technology</Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <Routes>
            <Route exact path="/NewsHunt" element={<Home key="general" country="in" category="general" />}></Route>
            <Route exact path="/NewsHunt/business" element={<Home key="business" country="in" category="business" />}></Route>
            <Route exact path="/NewsHunt/entertainment" element={<Home key="entertainment" country="in" category="entertainment" />}></Route>
            <Route exact path="/NewsHunt/health" element={<Home key="health" country="in" category="health" />}></Route>
            <Route exact path="/NewsHunt/science" element={<Home key="science" country="in" category="science" />}></Route>
            <Route exact path="/NewsHunt/sports" element={<Home key="sports" country="in" category="sports" />}></Route>
            <Route exact path="/NewsHunt/technology" element={<Home key="technology" country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}
