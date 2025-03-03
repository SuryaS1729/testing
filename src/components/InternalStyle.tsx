import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InternalStyle = () => {
  return (
    <View >
      <Text style={styles.textStyle}>Condescending</Text>
      <Text style={styles.textStyle}>Condescending</Text>
      <Text style={styles.textStyle}>Condescending</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        color:'red',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        margin:20,
        padding:10,
        borderRadius:10,
        backgroundColor:"yellow"

    }
})

export default InternalStyle