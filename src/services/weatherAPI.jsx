const API_KEY= import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather= async(city)=>{
    const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    if(res.ok){
        return res.json();
    }else{
        throw new Error(res.message);
    }
}