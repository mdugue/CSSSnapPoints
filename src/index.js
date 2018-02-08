import React from 'react'
import { render } from 'react-dom'
import Polyfilled from './Polyfilled'
import NoPolyfill from './NoPolyfill'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

const App = () => (
  <Router>
    <div style={styles}>
      <h1>CSS Snap Points Playground 🎲</h1>
      <ul>
        <li>
          <Link to="/auto-polyfilled">Auto PolyFill</Link>
        </li>
        <li>
          <Link to="/">Manual PolyFill</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/auto-polyfilled" component={Polyfilled} />
        <Route path="/" component={NoPolyfill} />
      </Switch>
    </div>
  </Router>
)

render(<App />, document.getElementById('root'))
