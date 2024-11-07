import './Login.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { login , signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {

  const [signSate , setSignState] = useState('sign up');
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [laoding , setLoading] = useState(false)

  const user_auth =  async (e) => {
    e.preventDefault();
    setLoading(true)
      if(signSate === 'sign in') {
        await login(email , password)
      } else {
        await signup( name , email , password)
      }
      setLoading(false)
  }

  return (
    laoding ? 
    <div className='login-spinner'><img src={netflix_spinner} alt="netflix spinner" /></div>
    : 
    <div className="login">
        <img className='login-logo' src={logo} alt="netflix logo" />
        <div className='login-form'>
          <h1>{signSate}</h1>
          <form action="">
            {signSate === 'sign up' ? <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your name' /> : null }
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
            <button onClick={user_auth} type='submit' className=''>{signSate}</button>
            <div className='form-help'>
                <div className='remember'>
                  <div className="remember-me-checkbox">
                    <span className="checkbox">
                      <input id='remember-me' type="checkbox" />
                      <svg>
                        <use xlinkHref="#checkbox-30" className="checkbox"></use>
                      </svg>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{display:'none'}}>
                      <symbol id="checkbox-30" viewBox="0 0 22 22">
                        <path fill="none" stroke="currentColor" d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"/>
                      </symbol>
                    </svg>
                  </div>
                  <label htmlFor="remember-me">Remmeber me</label>
                </div>
                <p>Need help?</p>
            </div>
          </form>
          <div className='form-switch'>
            {signSate === 'sign in' ? <p onClick={() => setSignState("sign up")}>New to netflix <span>Sign Up now</span></p> : <p onClick={() => setSignState("sign in")}>Already have an account? <span>Sign in now</span></p> }
          </div>
        </div>
    </div>
  )
}

export default Login;
