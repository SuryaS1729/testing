import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Component1 = () => {
    const [toggle,setToggle]= useState(true)
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>{toggle? "On":"Off"}</Text>
      <Button title='toggle' onPress={()=>{
        setToggle(!toggle)
      }}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Component1