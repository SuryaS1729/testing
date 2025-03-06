import { View, Text } from 'react-native'
import React from 'react'
import WithoutState from '../components/1.Basic Counter/WithoutState'
import WithState from '../components/1.Basic Counter/WithState'

const index = () => {
  
  return (
    <View>
        <WithoutState/>
        <WithState/>
    </View>
  )
}

export default index