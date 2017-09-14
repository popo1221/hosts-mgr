import { connect } from 'react-redux'
import React from 'react'

// @connect()
class App extends React.Component {
  render() {
    console.log(this.props)
    return (<div>
      <h2>Welcome to4 React!</h2>
    </div>);
  }
}

export default connect()(App)
