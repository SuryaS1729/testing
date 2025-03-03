import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Image source={{uri:"https://legacy.reactjs.org/logo-og.png"}} style={{width: 200, height: 200}}/>
    </View>
  )
}

export default ImageComponent