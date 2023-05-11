import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-main-container">
    <div className="home-bg-container">
      <Header />
      <div className="body-container">
        <div className="details-container">
          <h1 className="heading">Clothes That Get YOU Noticed</h1>
          <img
            className="main-img-sm"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
          <p className="description">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button className="shop-now-btn" type="button">
            Shop Now
          </button>
        </div>
        <img
          className="main-img-lg"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
