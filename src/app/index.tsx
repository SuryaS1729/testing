import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../components/TextComponent'
import ViewComponent from '../components/ViewComponent'
import ButtonComponent from '../components/ButtonComponent'
import ImageComponent from '../components/ImageComponent'
import CardComponent from '../components/CardComponent'

const index = () => {
  return (
    <View>
      <TextComponent/>
      <ViewComponent/>
      <ButtonComponent/>
      <ImageComponent/>
      <CardComponent/>
    </View>
  )
}

export default index