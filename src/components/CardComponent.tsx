import { View, Text, Button } from 'react-native'
import React from 'react'

const CardComponent = () => {
  return (
    <View style={{width: 200, height:200, backgroundColor:'red'}}>
        
      <Text>CARD</Text>
      <Text>Hi im a card component</Text>
      <Button title='click me'></Button>
    </View>
  )
}

export default CardComponent