import { View, Text, Button } from 'react-native'
import React from 'react'
import ImageComponent from './ImageComponent'

const CardComponent = () => {
  return (
    <View style={{width: 400, height:400, backgroundColor:'red'}}>
        
      <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:'grey'}}>
          <ImageComponent/>
          <Text>CARD</Text>
          <Text>Hi im a card component</Text>
          <Button title='click me'></Button>
      </View>
    </View>
  )
}

export default CardComponent