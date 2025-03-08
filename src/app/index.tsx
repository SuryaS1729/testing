import { View, Text } from 'react-native'
import React from 'react'
import MyEffect from '../components/MyEffect'
import DataFetching from '../components/DataFetching'
import SeaFood from '../components/SeaFood'

const index = () => {
  
  return (
    <View style={{backgroundColor:"#DBD5B5"}}>
{/* <MyEffect/> */}
<SeaFood/>
{/* <DataFetching/> */}
    </View>
  )
}

export default index