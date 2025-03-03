import { View, Text } from 'react-native'
import React from 'react'

const DynamicContent = () => {
    const herName = "sahithi"
    function Multiply  (a:number,b:number){
        let numbered = a*b
        return numbered
    }
  return (
    <View>
      <Text>I love {herName} {Multiply(3,1000)}</Text>
    </View>
  )
}

export default DynamicContent