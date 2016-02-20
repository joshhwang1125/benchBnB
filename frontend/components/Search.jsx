var React = require('react');
// var BenchStore = require('../stores/benchStore');
var BenchMap = require('./Map');
var BenchIndex = require('./BenchIndex');

var Search = React.createClass({
  render: function () {
    return (
      <div>
        <BenchIndex />
        <BenchMap />
      </div>
    );
  }
});

module.exports = Search;