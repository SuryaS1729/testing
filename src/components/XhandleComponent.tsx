import { View, Text } from 'react-native'
import React from 'react'
import st from '../utils/style'

const XhandleComponent = () => {
    const herHandle = "shait"
  return (
    <View style={st.shadowStyle}>
    <Text >Her X handle is @ {herHandle}</Text>
    </View>
  )
}

export default XhandleComponent