import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {jwt: ''}

  componentDidMount() {
    this.sendData()
  }

  setData = () => {
    const {jwt} = this.state
    Cookies.set('jwt_token', jwt, {expires: 20})

    this.setState({jwt: ''})
  }

  sendData = async () => {
    const api = `https://apis.ccbp.in/login`
    const content = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      //   mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(content),
    }
    const data = await fetch(api, options)
    const jsonData = await data.json()
    this.setState({jwt: jsonData})
  }

  render() {
    const jwts = Cookies.get('jwt_token')
    if (jwts !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h1>Please Login</h1>
        <button type="submit" onClick={this.setData}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
