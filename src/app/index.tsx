import { View, Text } from 'react-native'
import React from 'react'
import DynamicContent from '../components/DynamicContent'

const index = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     
      <DynamicContent/>
    
    </View>
  )
}

export default index