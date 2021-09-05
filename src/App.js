import React, { useState } from 'react';
import './App.css';

function App() {

  const [open, setOpen] = React.useState(false);

  const [loginData, setData] = useState({
      phoneNumber: "",
      password: "",
  })

  const handeleSubmit = () => {
    alert('Thank You for using our service')
  }
  return (
    <div className="login">
      <div className="container">
        <div className="login-card">
          <div className="row">
            <div className="col-sm-0 col-md-6 card-visual">
              <div className="visual-content">
                <div className="visual-logo">
                  <p className="logo">Foodie</p>
                </div>
                <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: "50px", backgroundColor: 'white' }} />
                <div className="visual-text">
                  <p className="visual-tagline mb-2">We are</p>
                  <p className="visual-header mb-3">India's Most Trusted Food Delivery Service</p>
                  <p className="visual-desc">
                    1.5 Lakh+ people have already joined our network
                    <br />
                    Welcoming you to join the tribe
                  </p>
                </div>
                <div className="footer">
                  <p className="visual-question">
                    Don't have an account?
                    <br />
                    <strong><a href="#">Create Account</a></strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 card-form">
              <div className="form-container">
                <div className="form-logo text-center">
                  <p className="logo-text">🔐 login</p>
                </div>
                <div className="form">
                  <form className="" noValidate onSubmit={handeleSubmit} >
                    <div className="text-center">
                      <div className="col-xs-12 mx-3 text-start">
                        <label className="label">Phone Number</label>
                        <br />
                        <input
                          className="input-field"
                          style={{ marginBlock: '10px' }}
                          name="number"
                          variant="outlined"
                          autoComplete="phone number"
                          required
                          fullWidth
                          id="email"
                          placeholder="Enter your number"
                          value={loginData.phoneNumber}
                          onChange={(e) => setData({ ...loginData, phoneNumber: e.target.value })}
                        />
                      </div>
                      <div className="col-xs-12 mx-3 text-start">
                        <label className="label">Password</label>
                        <br />
                        <input
                          className="input-field"
                          name="password"
                          variant="outlined"
                          required
                          fullWidth
                          placeholder="Enter your password"
                          type="password"
                          id="password"
                          value={loginData.password}
                          onChange={(e) => setData({ ...loginData, password: e.target.value })}
                        />
                      </div>
                      <button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="submit"
                      >
                        Log In 🔑
                      </button>
                      <br />
                      <hr />
                      {/* <div className="line"></div> */}
                      <p className="line-text">or</p>
                      <br />
                      <div className="footer">
                        <p className="visual-question text-center">
                          Don't have an account? <strong><a href="#">Create Account</a></strong>
                        </p>
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
