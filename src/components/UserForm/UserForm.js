import React,{useState} from "react";
import "./UserForm.module.css";
import Button from '../UI/Button';
import ErrorModal from '../Modal/ErrorModal'

const UserForm = (props) => {
  const [userText, setUserText] = useState("");

  const [numberText, setNumberText] = useState("");

  const [open,setOpen] = useState(false)

  const [error,setError] = useState()

  const handleClick = (event) => {
    event.preventDefault();

    if (userText.trim().length === 0 || numberText.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      })
      return;
    }

    if (numberText < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    const submitData={
        id:Math.random().toString(),
        name:userText,
       age:numberText
    }
    // console.log(submitData)
    props.onSaveFormData(submitData)

    setUserText("");
    setNumberText("");

  
  };

  const handleOpen=()=>{
    setOpen(true)
  }

  const handleClose=()=>{
    setOpen(false)
  }

  const userInputTextHandler = (event) => {
    setUserText(event.target.value);
  };

  const userAgeTextHandler = (event) => {
    setNumberText(event.target.value);
  };
  return (
    <div>
    {
      error && (
        <ErrorModal handleClose={handleClose} open={open}/>
      )
    }
    <form onSubmit={handleClick}  onClick={handleOpen}>
      <label htmlFor="username">UserName</label>
      <input type="text" value={userText} onChange={userInputTextHandler} />
      <label htmlFor="age">Age(Years)</label>
      <input type="number" value={numberText} onChange={userAgeTextHandler} />
      <Button type="submit">Add User</Button>
    </form>
    </div>
  );
};

export default UserForm;
