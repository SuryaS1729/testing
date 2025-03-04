import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayOfObjects = () => {
    const bowlers = [
        {id:1,
            name:"bumrah"
        },
        {
            id:2,
            name:"shami"
        },
        {
            id:3,
            name:"chahal"
        },
        {
            id:4,
            name:"zampa"
        },
        {
            id:5,
            name:"hardik"
        }
    ]
  return (
    <View>
        
        <FlatList 
        data = {bowlers} 
        keyExtractor={(item) => item.id.toString()} //react expects a string so gotta do to strig 
        renderItem={({item}) => <Text>{item.name}</Text>}
        />
        
    </View>
  )
}

export default ArrayOfObjects