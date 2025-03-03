import { View, Text } from 'react-native'
import React from 'react'
import NameComponent from '../components/NameComponent'
import AgeComponent from '../components/AgeComponent'
import FavSubjectComponent from '../components/FavSubjectComponent'
import XhandleComponent from '../components/XhandleComponent'


const index = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     

    <NameComponent/>
    <AgeComponent/>
    <FavSubjectComponent/>
    <XhandleComponent/>
    
    
    </View>
  )
}

export default index