import { View, Text, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Text>Let's explore buttons</Text>
      <Pressable onPress={()=>console.log("button pressed")}>
        <Text style={{color:"teal"}}>Press me</Text>
      </Pressable>

      <Pressable onPressIn={()=>console.log("button pressed in")}>
        <Text style={{color:"coral"}}>Press me</Text>
      </Pressable>

      <Pressable onPressOut={()=>console.log("button pressed out")}>
        <Text style={{color:"purple"}}>Press me</Text>
      </Pressable>

      <Pressable onLongPress={()=>console.log("button long pressed")}>
        <Text style={{color:"blue"}}>Press me</Text>
      </Pressable>
    </View>
  )
}

export default ButtonComponent