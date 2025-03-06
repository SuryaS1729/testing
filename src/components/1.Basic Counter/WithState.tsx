import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const WithState = () => {
   const [count,setCount]= useState(0)
  return (
    <View>
      <Text>count: {count}</Text>
      <Button title='increase count' onPress={()=>{
        setCount(c=> c+1)
      }}/>
    </View>
  )
}

export default WithState