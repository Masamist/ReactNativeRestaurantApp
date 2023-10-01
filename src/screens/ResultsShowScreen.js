import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null)
  const id = route.params.id
 
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if(!result){
    return null
  }

  console.log(id)
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) =>{
          return <Image style={styles.image} source={{ uri: item }} />
        }} 
      />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    height: 200,
    width: 300,
    marginBottom: 15
  }
})