import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Home1 from './components/Home1';

const nav = [
  {
    name: 'Home',
    slug: '/home',
  },
 {
    name: 'Home1',
    slug: '/home1',
  },
 
];

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/home1",
    component: Home1,
  }
 
];


function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          {nav.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.slug}
              key={item.slug}
              >{item.name}
            </Link>
          </li>
          ))}
        </ul>
        
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
      </div>
    </Router>
  );
}

export default RouteConfigExample;