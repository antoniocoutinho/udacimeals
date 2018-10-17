import React, { Component } from 'react';
import '../App.css';  
import { connect } from 'react-redux'

class App extends Component {
  
    render() {
      console.log('Props: ', this.props)
      return (
        <div>
          Hello World
        </div>
      )
  }
}

function mapStateToProps (calendar) {
  return {
    name: 'Tyler'
  }
}

export default connect(mapStateToProps)(App);
