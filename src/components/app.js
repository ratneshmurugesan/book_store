import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Search from './search/search.js'
import { Sections } from './bookShelve/bookShelve.js'

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Book Shelve</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Sections} />
          <Route path="/search" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;