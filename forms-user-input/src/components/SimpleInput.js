import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const nameInputRef = useRef(); // we wont use it

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) =>{
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('')
    setEnteredNameTouched(false);
    // console.log(nameInputRef.current.value);
  };


  const nameInputClasses = nameInputIsInvalid 
  ? "form-control invalid" 
  : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler} 
        onBlur={nameInputBlurHandler}
        value={enteredName}
        />
      </div>
      {nameInputIsInvalid && <p className='error-text'>Name must not be empty !</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
