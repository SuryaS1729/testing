import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ListData = () => {
    const batsmen = ["kohli","rohit","dhawan"]
  return (
    <View>
      <FlatList 
      data = {batsmen} 
      keyExtractor={(item) => item} 
      renderItem={({item}) => <Text>{item}</Text>}
      />
    </View>
  )
}

export default ListData