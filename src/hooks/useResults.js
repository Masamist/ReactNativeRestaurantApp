import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResult] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async(searchTerm) => {
    try{
      const response = await yelp.get('/search', {
        params:{
          limit: 50,
          term: searchTerm,
          location: 'auckland'
        }
      })
      setResult(response.data.businesses)
    }catch(err){
      setErrorMessage('Something went wrong')
    }  
  }

  // Call searchApi when component is first renderd
  useEffect(() => {
    searchApi('cafe')
  }, [])

  return [searchApi, results, errorMessage]
}
