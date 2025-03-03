import { View, Text } from 'react-native'
import React, { startTransition } from 'react'
import st from '../utils/style'

const NameComponent = () => {
    const herName = "sahithi"
  return (
    <View style={st.shadowStyle}>
      <Text>{herName}</Text>
    </View>
  )
}

export default NameComponent