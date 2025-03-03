import { View, Text, Image } from 'react-native'
import React from 'react'

const CarComponent = () => {
    const priceOfCar = 200000
    const imageOfthePic = require("../assets/image.jpg")
  return (
    <View>
      <Text>{priceOfCar}</Text>
      <Image source={imageOfthePic} style={{width:200,height:200}}></Image>
    </View>
  )
}

export default CarComponent