import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const MyEffect = () => {
    const [value,setValue]=useState(0)

    useEffect(()=>{
            console.warn("use effect called broski")
    },[value])
  return (
    <View>
      <Text>{value}</Text>
      <Button title='increment' onPress={()=>setValue(value+1)}/>
    </View>
  )
}

export default MyEffect