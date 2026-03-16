import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {

    const [city,setCity]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(city.trim()){
        onSearch(city);
        setCity("");
        }
    }

  return (
    <form className='flex' onSubmit={handleSubmit} >
    <input
    placeholder='Enter City or Country'
    value={city}
    onChange={(e)=>setCity(e.target.value)}
    className='bg-gray-800 py-2 rounded-l-2xl px-2 outline-none'
    />
    <button 
    className='bg-blue-500 rounded-r-2xl px-2 cursor-pointer hover:bg-blue-400' 
    type='submit'>Search</button>
    </form>
  )
}

export default SearchBar