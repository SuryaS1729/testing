import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
    const [friends, setFriends] = useState(['sahithi','abhilash', 'naga'])
    function addOne(){
        setFriends([...friends,'new friend'])
    }

    function removeOne(){
        setFriends(friends.filter(f=>f !== "abhilash"))
    }

    function updateOne(){
        setFriends(friends.map(f=>f==="naga"?"naga vamsi": f))
    }
  return (
    <View>
        <FlatList 
        data= {friends}
        keyExtractor={(friend) =>friend}
        renderItem={({item})=>
            <Text>{item}</Text>
        }/>

        <Button title='add one'  onPress={addOne}/>
        <Button title='remove one'  onPress={removeOne}/>
        <Button title='update one'  onPress={updateOne}/>
    </View>
  )
}

export default UpdateArray