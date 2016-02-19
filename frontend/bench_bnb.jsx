var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var BenchStore = require("./stores/benchStore");
var ApiUtil = require("./util/api_util.js");
// var BenchIndex = require("./components/BenchIndex.jsx");
var App = require('./components/App');
var Search = require("./components/Search.jsx");

// window.Dispatcher = require("./dispatcher/Dispatcher");

// var routes = (
//   <Route component={App} path="/" >
//   </Route>
// );

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Search />,
    // <Router>{routes}<Router/>,
    document.getElementById('root')
  );
});
