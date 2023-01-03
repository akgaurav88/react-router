import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
   const userId=useParams(); 
   const id=userId.id // this id is coming form app.js components :- <Route path=':id' element={<UserDetails />} />

  return (
    <div>
      <h1>Users Datails --{id}</h1>
    </div>
  )
}

export default UserDetails

