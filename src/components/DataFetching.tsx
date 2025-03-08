import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

interface todoTypes{
    id: number,
    title: string,
    completed: boolean
}
const DataFetching = () => {
    const [data,setData] = useState([])

    useEffect(() => {
      const fetchData = async ()=>{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        )


        const result = await response.json()
        setData(result)
      };
     


      try {
        fetchData()
      } catch (error) {
        console.error(error)
      }
    
     
    }, [])
    
  return (
    <View>
        <FlatList 
        data={data}
        renderItem={({item}:{item:todoTypes}) =><View>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.completed.toString()}</Text>
        </View> }
        keyExtractor={(item) => item.id.toString()}
        />
    </View>
  )
}

export default DataFetching