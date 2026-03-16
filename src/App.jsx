import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import { getWeather } from './services/weatherAPI';
import WeatherCard from './components/WeatherCard';

const App = () => {

  const [weather,setWeather]=useState(null);
  const [error,setError]=useState(null);

  const handleSearch=async(city)=>{
    try{
      const data=await getWeather(city);
      setWeather(data);
      setError(null);
    }catch(err){
      setError("City not found");
      setWeather(null);
    }
  }

  return (
    <div className='bg-blue-900 min-h-screen text-white flex flex-col items-center'>
      <h1 className='text-3xl font-bold bg-blue-950 py-5 text-center w-full mb-10'>React Weather App</h1>
      <SearchBar onSearch={handleSearch}/>
      {error && <p>{error}</p>}
      
        {weather && <WeatherCard data={weather}/>}
   
    </div>
  )
}

export default App