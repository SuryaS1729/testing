import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface SeaFoodItem {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }

const SeaFood = () => {
    const [data,setData]=useState<SeaFoodItem[]>([])

    useEffect(()=>{
       const fetchData = async()=>{
        try {
          const response = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
          ) ;
          setData(response.data.meals)
        } catch (error) {
            console.error("error fetching meals")
        }
       };
       fetchData()
    },[])

  return (
    <View>
      <FlatList
      data={data}
      keyExtractor={(item)=>item.idMeal}
      renderItem={({item})=>(
        <View style={styles.item}>
          <Image src={item.strMealThumb} style={styles.image}/>
          <Text style={styles.title}>{item.strMeal}</Text>

        </View>
      )}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
      backgroundColor: "#2B9EB3",
      padding: 12,
      borderRadius: 4,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 1,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 12,
      marginRight: 12,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#DBD5B5",
      flexWrap: "wrap",
      flex: 1,
    },
    text: {
      textAlign: "center",
      marginTop: 20,
      fontSize: 18,
    },
  });
export default SeaFood