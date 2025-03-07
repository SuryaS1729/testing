import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const weatherData: Record<string, string> = {
  London: "20°C, Sunny",
  Paris: "19°C, Cloudy",
  NewYork: "25°C, Rainy",
  Tokyo: "28°C, Sunny",
  Sydney: "22°C, Cloudy",
  Dubai: "35°C, Sunny",
  Mumbai: "30°C, Rainy",
};

const Weather = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<string>('');

  function getWeather() {
    const formattedCity = city.trim(); // Trim to remove unnecessary spaces
    setWeather(weatherData[formattedCity] || "City not found");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weather Today!!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter City"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={getWeather} />
      {weather ? <Text style={styles.result}>{weather}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Weather;