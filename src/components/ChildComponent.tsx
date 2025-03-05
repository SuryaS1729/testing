import { View, Text } from 'react-native'
import React from 'react'

const ChildComponent = (props) => {
    console.log(props)
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
      <Text>{props.hobbies}</Text>
    </View>
  )
}

export default ChildComponent