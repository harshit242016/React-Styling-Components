import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`

  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input
{
    border-color : red;
    background : #ffd7d7;
}
&.invalid label
{
    color:red;
}
`;

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl className={!isValid && 'invalid'}>
                {/*Here we can see that dynamically we are adding a string to another string, based on the condition 
                 isValid*/}
                <label>
                    Course Goal</label>
                <input
                    type="text"
                    onChange={goalInputChangeHandler}
                />
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
{/*style={{ color: !isValid ? 'red' : 'black' }}*/ }


{/*style={{*/ }
{/*    borderColor: !isValid ? 'red' : '#ccc',*/ }
{/*    background: !isValid ? 'salmon' : 'transparent'*/ }
{/*}}*/ }

//} //it is going to handle the given event, but the user wont get any feedback, as a result the input would be valid.
      // inline styling is given in the below Label tag. Inline styles always have the highest priority in Html.

      //} //it is going to handle the given event, but the user wont get any feedback, as a result the input would be valid.
      // inline styling is given in the below Label tag. Inline styles always have the highest priority in Html.
