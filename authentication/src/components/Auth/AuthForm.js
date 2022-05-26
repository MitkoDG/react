import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false);
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const history = useHistory()

  const authCtx = useContext(AuthContext)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true)
    let url;

    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDEbQ9OikGSxjdjcBfjG8iUDLKaKNLX0KA'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEbQ9OikGSxjdjcBfjG8iUDLKaKNLX0KA'
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setIsLoading(false)
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMsg = 'Authentication failed';
          if (data && data.error && data.error.message) {
            errorMsg = data.error.message;
          }
          // setHasError(errorMsg)
          throw new Error(errorMsg) // this is forward the error to the catch block thats why we dont need the prev line
        })
      }
    }).then((data) => {
      history.replace('/');
      authCtx.login(data.idToken);
    }).catch((err) => {
      setHasError(err.message)
    })
    setHasError(false);
  }


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
          {hasError && <p className={classes.errorMsg}>{hasError}</p>}
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
