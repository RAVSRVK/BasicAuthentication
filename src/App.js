import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import About from './components/About'
import Login from './components/Login'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <ProtectedRoute Exact path="/" component={Home} />
    <ProtectedRoute Exact path="/about" component={About} />
    <ProtectedRoute component={NotFound} />
  </Switch>
)

export default App
