var React = require('react');
// var BenchStore = require('../stores/benchStore');
var Map = require('./Map');
var BenchIndex = require('./BenchIndex');

var Search = React.createClass({
  render: function () {
    return (
      <div>
        <BenchIndex />
        <Map />
      </div>
    );
  }
});

module.exports = Search;