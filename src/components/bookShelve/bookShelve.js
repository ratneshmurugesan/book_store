import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Current from '../bookShelve/current'
import Wishlist from '../bookShelve/wishlist'
import Completed from '../bookShelve/completed'

export class Sections extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <div>
              <ul>
                <li>
                  <Link to='/current'>Currently reading</Link>
                </li>
                <li>
                  <Link to='/wishlist'>Want to read</Link>
                </li>
                <li>
                  <Link to='/completed'>Done reading</Link>
                </li>
              </ul>
        
              <Route path='/current' component={Current} />
              <Route path='/wishlist' component={Wishlist} />
              <Route path='/completed' component={Completed} />
              </div>
            </BrowserRouter>
          );
    }

  }