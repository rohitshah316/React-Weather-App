import React from 'react'

const WeatherCard = ({data}) => {
    if(!data) return null;

    const icon=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  return (
    <div className='bg-gray-900 p-10 rounded-4xl flex flex-col items-center m-5 gap-2'>
        <h2 className='font-bold text-2xl mb-5'>{data.name}</h2>

        <div className='bg-gray-800 p-5 rounded-2xl w-50 flex flex-col items-center'>
        <p>{data.weather[0].description}</p>
        <img src={icon} alt="weather icon" />
        </div>
        <h1 className='text-xl font-bold'>{data.main.temp}&deg;C</h1>
        
        <p>Humidity: <span className='font-bold'>{data.main.humidity}%</span> </p>
    </div>
  )
}

export default WeatherCard