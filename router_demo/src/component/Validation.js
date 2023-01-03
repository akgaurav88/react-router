import React, { useState } from 'react'

const Validation = () => {
   const [name,setName] = useState();
  return (
    <div>
      <h1>Form Validation Demo</h1>
      <form>
        <label htmlFor="">Enter Name:</label>
        <input type="text" name='name'/>
        <label htmlFor="">Enter Email:</label>
        <input type="text" name='email'/>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Validation
