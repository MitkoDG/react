import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [userYears, setuserYears] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type='text' name="username" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type='text' name="age" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;