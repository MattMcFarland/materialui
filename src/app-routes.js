var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./components/App');
var Home = require('./components/pages/home');
var GetStarted = require('./components/pages/getstarted');

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <Route name="home" handler={Home} />
    <Route name="get-started" handler={GetStarted} />
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = AppRoutes;
