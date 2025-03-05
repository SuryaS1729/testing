import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <View>
      <Text>Parent Component</Text>

      <ChildComponent name='John' age={30} hobbies={['singing', 'dancing', 'reading']}/>
    </View>
  )
}

export default ParentComponent