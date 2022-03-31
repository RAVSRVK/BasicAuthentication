import {withRouter} from 'react-router-dom'
import cookies from 'js-cookie'

const Logout = props => {
  const {history} = props
  const logout = () => {
    cookies.remove('jwt_token')
    history.replace('/login')
  }

  return <button onClick={logout}>Logout</button>
}

export default withRouter(Logout)
