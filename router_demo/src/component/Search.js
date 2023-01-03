import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const [searchParams,setSearchParams]=useSearchParams();

    const handleSearch= (e)=>{
        e.preventDefault();
        const data=searchParams.get('q')
        alert(data)
        console.log(data)
    }
  return (
    <div>
      <h2>Tis is search page </h2>

      <form onSubmit={handleSearch}>
        <label htmlFor=''>Search</label>
        <input type="text" placeholder='Search' onChange={(e)=>setSearchParams({q:e.target.value})}/>
        <br /><br />
        <input type="submit" value="Search" />
        <input type="button" value="Reset" onClick={()=>setSearchParams({})}/>
      </form>
    </div>
  )
}

export default Search
