import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateObjects = () => {

   const [movie,setMovie]= useState({
        'title':"jalsa",
        'rating':7

    })

    const handleClick =()=>{
        setMovie({...movie, rating:10})
    }

  return (
    <View>
      <Text>{movie.title}</Text>
      <Text>{movie.rating}</Text>
      <Button title='change ratings' onPress={handleClick}/>
    </View>
  )
}

export default UpdateObjects