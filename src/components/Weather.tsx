import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const weatherData = {
    London: "20, sunny",
    Paris:"19,cloudy",
    NewYork:"25,rainy",
    Tokyo:"28,sunny",
    Sydney:"22,cloudy",
    Dubai:"35,sunny",
    Mumbai:"30,rainy",
}
const Weather = () => {
    const [city, setCity] = useState('')
    const [weather,setWeather]= useState('')

    function getWeather(){
        
        setWeather(weatherData[city]||"City not found")
    }
  return (
    <View>
      <Text>Weather Today!!</Text>
      <TextInput placeholder='Enter City' value={city} onChangeText={setCity}/>
      <Button title='get weather' onPress={getWeather}/>
      {weather? <Text>{weather}</Text>:null}
    </View>
  )
}

export default Weather