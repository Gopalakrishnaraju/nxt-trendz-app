import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-logout-container">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <img
        className="logout-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
      <ul className="nav-menu-container">
        <li className="menu-items">Home</li>
        <li className="menu-items">Products</li>
        <li className="menu-items">Cart</li>
        <li>
          <button className="logout-btn" type="button">
            Logout
          </button>
        </li>
      </ul>
    </div>
    <div className="mobile-logos-container">
      <img
        className="tabs-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
      />
      <img
        className="tabs-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
      />
      <img
        className="tabs-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
      />
    </div>
  </nav>
)

export default Header
