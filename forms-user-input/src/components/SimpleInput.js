import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameInputIsValid, setNameInputIsValid] = useState(true);
  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setNameInputIsValid(false);
      return;
    }

    setNameInputIsValid(true);



    console.log(enteredName);

    console.log(nameInputRef.current.value);
  };

  const nameInputClasses = nameInputIsValid 
  ? "form-control" 
  : "form-control invalid";

  return (
    <form on onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} />
      </div>
      {!nameInputIsValid && <p className='error-text'>Name must not be empty !</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
