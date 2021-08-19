import React, { useState } from 'react';
import './App.css';

function App() {

  const [open, setOpen] = React.useState(false);

  const [loginData, setData] = useState({
    name: '',
    phoneNumber: '',
    emailId: '',
    password: '',
    confirmPassword: '',
    tnc: false,
  })

  const handeleSubmit = () => {
    alert('Thank You for using our service')
  }
  return (
    <div className="login">
      <div className="login-card">
        <div className="row">
          <div className="col-sm-0 col-md-5 card-visual">

          </div>
          <div className="col-sm-12 col-md-6 card-form">
            <div className="container">
              <div className="form-container">
                <div className="form-logo mb-4">
                  <p className="logo-text mb-0">Get's Started!</p>
                  <small>Already have an account? <span className="link">Sign in</span></small>
                </div>
                <div className="form">
                  <form className="" noValidate onSubmit={handeleSubmit} >
                    <div className="text-center">
                      <div className="col-xs-12  text-start">
                        <input
                          className="input-field"
                          style={{ marginBlock: '10px' }}
                          name="number"
                          variant="outlined"
                          autoComplete="phone number"
                          required
                          fullWidth
                          id="email"
                          placeholder="Enter name"
                          value={loginData.name}
                          onChange={(e) => setData({ ...loginData, name: e.target.value })}
                        />
                      </div>
                      <div className="col-xs-12  text-start">
                        <input
                          className="input-field"
                          name="password"
                          variant="outlined"
                          required
                          fullWidth
                          placeholder="EmailId"
                          type="password"
                          id="password"
                          value={loginData.emailId}
                          onChange={(e) => setData({ ...loginData, emailId: e.target.value })}
                        />
                      </div>
                      <div className="col-xs-12  text-start">
                        <input
                          className="input-field"
                          name="password"
                          variant="outlined"
                          required
                          fullWidth
                          placeholder="Phone Number"
                          type="password"
                          id="password"
                          value={loginData.phoneNumber}
                          onChange={(e) => setData({ ...loginData, phoneNumber: e.target.value })}
                        />
                      </div>
                      <div className="col-xs-12  text-start">
                        <input
                          className="input-field"
                          name="password"
                          variant="outlined"
                          required
                          fullWidth
                          placeholder="Password"
                          type="password"
                          id="password"
                          value={loginData.password}
                          onChange={(e) => setData({ ...loginData, password: e.target.value })}
                        />
                      </div>
                      <div className="col-xs-12  text-start">
                        <input
                          className="input-field"
                          name="password"
                          variant="outlined"
                          required
                          fullWidth
                          placeholder="Confirm Password"
                          type="password"
                          id="password"
                          value={loginData.confirmPassword}
                          onChange={(e) => setData({ ...loginData, confirmPassword: e.target.value })}
                        />
                      </div>
                      <div className="col-xs-12  text-start">
                        <input type="checkbox" onChange={(e) => setData({ ...loginData, tnc: e.target.checked })} /> I agree to the <span className="link">Terms and Conditions</span> and <span className="link">Privacy Policy</span>
                      </div>
                      <button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="submit"
                      >
                        Sign Up
                      </button>
                      <br />
                      <hr />
                      {/* <div className="line"></div> */}
                      <p className="line-text">or</p>
                      <br />
                      <div className="footer">
                        <div className="col-sm-12 col-md-5">
                          <div className="option-btn">Sign Up with Google</div>
                        </div>
                        <div className="col-sm-12 col-md-5">
                          <div className="option-btn">Sign Up with GitHub</div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
