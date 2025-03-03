import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Text>Let's explore images</Text>
      <Image source={require("../assets/image.jpg")} style={{width: 200, height: 200}}/>

      <Image source={{uri:"https://legacy.reactjs.org/logo-og.png"}} style={{width: 200, height: 200}}/>
    </View>
  )
}

export default ImageComponent