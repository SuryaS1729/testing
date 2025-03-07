import { View, Text } from 'react-native'
import React from 'react'
import Component1 from '../components/Toggle'
import Weather from '../components/Weather'
import ColorPicker from '../components/ColorPicker'

const index = () => {
  
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
{/* <Component1></Component1> */}
{/* <Weather></Weather> */}
<ColorPicker/>
    </View>
  )
}

export default index