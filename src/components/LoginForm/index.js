import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: undefined}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      history.replace('/')
      this.setState({errorMsg: undefined})
    } else {
      this.setState({errorMsg: data.error_msg})
    }
    this.setState({username: '', password: ''})
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="login-page-main-container">
        <div className="Login-page-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            className="login-page-img-desktop"
            alt="website login"
          />
          <div className="logo-and-form-container">
            <img
              className="login-page-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
              className="login-page-img-mobile"
              alt="website login"
            />
            <form className="form-container" onSubmit={this.onFormSubmit}>
              <label htmlFor="username" className="form-label">
                USERNAME
              </label>
              <input
                className="input-box"
                id="username"
                placeholder="Username"
                onChange={this.onChangeUsername}
                value={username}
              />
              <label htmlFor="password" className="form-label">
                PASSWORD
              </label>
              <input
                className="input-box"
                id="password"
                placeholder="Password"
                type="password"
                onChange={this.onChangePassword}
                value={password}
              />
              <button className="login-button" type="submit">
                Login
              </button>
              {errorMsg !== undefined ? (
                <p className="error-msg">{errorMsg}</p>
              ) : (
                ''
              )}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
