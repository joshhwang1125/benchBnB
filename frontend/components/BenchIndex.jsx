var React = require('react');
var BenchStore = require('../stores/benchStore');
var ApiUtil = require('../util/api_util.js');

var BenchIndex = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    this.benchListener = BenchStore.addListener(this._onChange);
    // ApiUtil.fetchBenches();
  },

  compomentWillUnmount: function () {
    this.benchListener.remove();
  },

  render: function () {
    return (
      <div>
        { this.state.benches.map(function (bench) {
          return <div key={bench.id}> {bench.description} </div>
          })
        }
      </div>
    );
  }
});

module.exports = BenchIndex;
