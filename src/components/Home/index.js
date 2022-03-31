import Header from '../Header'
import Logout from '../LogoutButton'
import './index.css'

const Home = () => {
  console.log('Home')

  return (
    <div className="container">
      <Header />
      <h2>Home Route</h2>
      <Logout />
    </div>
  )
}

export default Home
