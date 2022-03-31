import Header from '../Header'
import Logout from '../LogoutButton'
import './index.css'

const About = () => {
  console.log('Hello')

  return (
    <div className="container">
      <Header />
      <h2>About Route</h2>
      <Logout />
    </div>
  )
}
export default About
