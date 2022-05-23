import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const registerUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEbQ9OikGSxjdjcBfjG8iUDLKaKNLX0KA'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [hasError, setHasError] = useState(false);
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {

    } else {
      fetch(registerUrl, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=>{
        if (res.ok) {
          
        } else{
          return res.json().then(data => {
            console.log(data.error.message);
            setHasError(data.error.message)
          })
          
        }
      })
    }
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
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
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
