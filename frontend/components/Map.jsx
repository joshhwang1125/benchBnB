var React = require('react');
var BenchStore = require('../stores/benchStore');
var ApiUtil = require('../util/api_util.js');

var BenchMap = React.createClass({

  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
    var that = this;
    this.state.benches.forEach(function (bench) {
      var marker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        map: that.map,
        title: 'Hello World!'
      });
    });
  },

  componentDidMount: function(){
    this.benchListener = BenchStore.addListener(this._onChange);
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', function () {
      ApiUtil.fetchBenches();
    })
  },

  compomentWillUnmount: function () {
    this.benchListener.remove();
  },

  render: function () {
    return (
      <div className="map" ref="map" >

      </div>
    );
  }
});

window.BenchMap = BenchMap;
module.exports = BenchMap;
