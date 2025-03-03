import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'

const CardComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.jpg")} style={styles.imageStyle} />
      <Text style={styles.heading}>Surya</Text>
      <Text style={styles.captionText}>My Name is Surya and I am a developer</Text>
      <Button  title='Click Me' onPress={() => alert('Button Clicked')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       padding:10,
       paddingTop:50,
       margin: 20,
       alignItems:"center",
       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5,


    },
    imageStyle:{
         width:200,
         height:200,
         borderRadius:10,
         marginBottom:20
    },
    heading:{
        fontSize:20,
        marginBottom:10
    },

    captionText:{
        marginBottom:20
    }

})
export default CardComponent