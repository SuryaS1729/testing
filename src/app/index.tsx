import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../components/TextComponent'
import ViewComponent from '../components/ViewComponent'
import ButtonComponent from '../components/ButtonComponent'
import ImageComponent from '../components/ImageComponent'
import CardComponent from '../components/CardComponent'

const index = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
     
      
      <CardComponent/>
    </View>
  )
}

export default index