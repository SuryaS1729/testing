
import { View, Text } from 'react-native'
import React from 'react'
import st from '../utils/style'

const FavSubjectComponent = () => {
    const favSubject = "fashion"
  return (
    <View style={st.shadowStyle}>
      <Text>Her favourite subject is {favSubject}</Text>
    </View>
  )
}

export default FavSubjectComponent