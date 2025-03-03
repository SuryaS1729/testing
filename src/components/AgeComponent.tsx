import { View, Text } from 'react-native'
import React from 'react'
import st from '../utils/style'

const AgeComponent = () => {
    const herAge = 23
  return (
    <View style={st.shadowStyle}>
      <Text>She is {herAge} years old</Text>
    </View>
  )
}

export default AgeComponent