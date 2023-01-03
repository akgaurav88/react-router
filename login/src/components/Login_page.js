import React, { useState } from 'react'

export default function Login_page() {

    const [name, setName] = useState()
    const [email, setemail] = useState()
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const hanldeName = (e) => {
        let enterName = e.target.value;
        if (enterName.length < 3) {
            setNameError(true);
        }
        else {
            setNameError(false);
        }
        setName(enterName)

    }
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const handleEmail = (e) => {
        let email = e.target.value;
        if (!email.match(regex)) {
            setEmailError(true);
        }
        else {
            setEmailError(false);
        }
        setemail(email)


    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // alert(e.target[0].value + '  ' + e.target[1].value)
        let enterName = e.target[0].value;
        if (enterName.length < 3) {
            setNameError(true);
        }
        else {
            setNameError(false);
        }

        let email = e.target[1].value;
        if (!email.match(regex)) {
            setEmailError(true);
        }
        else {
            setEmailError(false);
        }

        if((!enterName.length < 3) &&(email.match(regex))){
            alert("Submited Successfully")
        }
    }

    return (
        <div>
            <h1>Form Validation Demo</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter Name:</label>
                <input type="text" name='name' onChange={hanldeName} value={name} required />
                <br />
                {nameError ? <span style={{ color: 'red' }}>Name length must be greater then 2 charecter </span> : ""}
                <br />
                <label htmlFor="">Enter Email:</label>
                <input type="text" name='email' value={email} required onChange={handleEmail} />
                <br />
                {emailError ? <span style={{ color: 'red' }}>Invalid Email</span> : ''}
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
