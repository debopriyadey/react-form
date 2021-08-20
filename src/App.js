import React, { useState } from 'react';
import './App.css';

function App() {

  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  const [loginData, setData] = useState({
    name: '',
    phoneNumber: '',
    emailId: '',
    password: '',
    confirmPassword: '',
    tnc: false,
  })

  const validatePassword = (e) => {
    setData({ ...loginData, confirmPassword: e.target.value })
    if(loginData.password != e.target.value) {
      setErrorMsg('Password did not match')
    } else {
      setErrorMsg('')
    }
  }

  const handeleSubmit = () => {
    if (loginData.name == '' || loginData.phoneNumber== '' || loginData.emailId == '' || loginData.password == '') {
      alert('Please enter all field')
    } else if ( loginData.password != loginData.confirmPassword ) {
      alert('Recheck your confirm password')
    }
    else if(loginData.tnc == false) {
      alert('Please accept out Terms and Conditions and Privacy Policy')
    } else {
      alert('Thank You ' + loginData.name + ' for using our service')
    }
  }
  return (
    <div className="login">
      <div className="row login-card">
        <div className="col-sm-12 col-md-5 card-visual">
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
                        name="name"
                        variant="outlined"
                        autoComplete="name"
                        required
                        fullWidth
                        id="name"
                        placeholder="Enter name"
                        value={loginData.name}
                        onChange={(e) => setData({ ...loginData, name: e.target.value })}
                      />
                    </div>
                    <div className="col-xs-12  text-start">
                      <input
                        className="input-field"
                        name="email"
                        variant="outlined"
                        autoComplete="email"
                        required
                        fullWidth
                        placeholder="EmailId"
                        type="email"
                        id="password"
                        value={loginData.emailId}
                        onChange={(e) => setData({ ...loginData, emailId: e.target.value })}
                      />
                    </div>
                    <div className="col-xs-12  text-start">
                      <input
                        className="input-field"
                        name="number"
                        variant="outlined"
                        autoComplete="phone number"
                        required="required"
                        fullWidth
                        placeholder="Phone Number"
                        id="number"
                        value={loginData.phoneNumber}
                        onChange={(e) => setData({ ...loginData, phoneNumber: e.target.value })}
                      />
                    </div>
                    <div className="col-xs-12  text-start">
                      <input
                        className="input-field"
                        name="password"
                        variant="outlined"
                        required="required"
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
                        name="confirm password"
                        variant="outlined"
                        required="required"
                        fullWidth
                        placeholder="Confirm Password"
                        type="password"
                        id="confirm password"
                        value={loginData.confirmPassword}
                        onChange={(e) => validatePassword(e)}
                      />
                      <p className="confirm-pass-error">{errorMsg}</p>
                    </div>
                    <div className="col-xs-12 text-checkbox mt-3">
                      <input className="checkbox-field mb-4 mx-2" type="checkbox" onChange={(e) => setData({ ...loginData, tnc: e.target.checked })} />
                      <p className="checkbox-label">
                        I agree to the <span className="link">Terms and Conditions </span>and <span className="link">Privacy Policy </span>
                      </p>
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
                    <hr style={{ color: 'grey' }} />
                    {/* <div className="line"></div> */}
                    <p className="line-text">or</p>
                    <div className="footer mt-2">
                      <div className="col-sm-12 col-md-6">
                        <a href="#">
                          <div className="option-btn">
                            <p className="option-text m-auto py-2">
                              <svg className="mx-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlinkXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25" height="25" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                <path style={{ fill: '#167EE6' }} d="M492.668,211.489l-208.84-0.01c-9.222,0-16.697,7.474-16.697,16.696v66.715
	c0,9.22,7.475,16.696,16.696,16.696h117.606c-12.878,33.421-36.914,61.41-67.58,79.194L384,477.589
	c80.442-46.523,128-128.152,128-219.53c0-13.011-0.959-22.312-2.877-32.785C507.665,217.317,500.757,211.489,492.668,211.489z" />
                                <path style={{ fill: '#12B347' }} d="M256,411.826c-57.554,0-107.798-31.446-134.783-77.979l-86.806,50.034
	C78.586,460.443,161.34,512,256,512c46.437,0,90.254-12.503,128-34.292v-0.119l-50.147-86.81
	C310.915,404.083,284.371,411.826,256,411.826z" />
                                <path style={{ fill: '#0F993E' }} d="M384,477.708v-0.119l-50.147-86.81c-22.938,13.303-49.48,21.047-77.853,21.047V512
	C302.437,512,346.256,499.497,384,477.708z" />
                                <path style={{ fill: '#FFD500' }} d="M100.174,256c0-28.369,7.742-54.91,21.043-77.847l-86.806-50.034C12.502,165.746,0,209.444,0,256
	s12.502,90.254,34.411,127.881l86.806-50.034C107.916,310.91,100.174,284.369,100.174,256z" />
                                <path style={{ fill: '#FF4B26' }} d="M256,100.174c37.531,0,72.005,13.336,98.932,35.519c6.643,5.472,16.298,5.077,22.383-1.008
	l47.27-47.27c6.904-6.904,6.412-18.205-0.963-24.603C378.507,23.673,319.807,0,256,0C161.34,0,78.586,51.557,34.411,128.119
	l86.806,50.034C148.202,131.62,198.446,100.174,256,100.174z" />
                                <path style={{ fill: '#D93F21' }} d="M354.932,135.693c6.643,5.472,16.299,5.077,22.383-1.008l47.27-47.27
	c6.903-6.904,6.411-18.205-0.963-24.603C378.507,23.672,319.807,0,256,0v100.174C293.53,100.174,328.005,113.51,354.932,135.693z" />
                              </svg>
                              Sign Up with Google
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <a href="#">
                          <div className="option-btn">
                            <p className="option-text m-auto py-2">
                              <svg className="mx-1" width="26" height="26" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                              </svg>
                              Sign Up with GitHub
                            </p>
                          </div>
                        </a>
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
  );
}

export default App;
