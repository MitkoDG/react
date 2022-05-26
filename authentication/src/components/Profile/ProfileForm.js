import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const passChangeUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDEbQ9OikGSxjdjcBfjG8iUDLKaKNLX0KA'

const ProfileForm = () => {
  const history = useHistory()
  const authCtx = useContext(AuthContext);
  const newPasswordInput = useRef()
  
  const passSubmitHandler = (event) => {
    event.preventDefault();
    const enteredPassword = newPasswordInput.current.value;

    fetch(passChangeUrl,{
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      history.replace('/')
      if (!res.ok) {
        throw new Error('Something went wrong')
      }
    }).catch((err) => {
      console.log(err);
    })

    
  };

  return (
    <form className={classes.form} onSubmit={passSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength={6} ref={newPasswordInput}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
