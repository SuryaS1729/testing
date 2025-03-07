import { View, Text, Button } from 'react-native'
import React from 'react'

interface ComponentPropTypes{
    count:number;
    onClickHandler:()=>void;
}
const Component1 = ({count, onClickHandler}:ComponentPropTypes) => {
  return (
    <View>
      <Text>Component1</Text>
      <Text>{count  }</Text>
      <Button title='increment count' onPress={onClickHandler}></Button>
    </View>
  )
}

export default Component1