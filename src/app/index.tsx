import { View, StyleSheet } from 'react-native'
import React from 'react'
import HugeList from '../components/HugeList'

const index = () => {
  return (
    <View style={styles.container}>
      <HugeList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the entire screen height and width
    flexGrow: 1,
  },
});
export default index
