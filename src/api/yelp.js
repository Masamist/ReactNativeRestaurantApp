import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 
      'Bearer y9AiK5wqMbg5NiGYBZvS-smlWYo0NSmoZSdv13SS7CVe9K-pJj1-SQZA5fFC7wngccdItZ6ZkD97Y5XhpgVJMoWTLsPxbYd4Fa06Qo8T5ADSHIgQrvS3hmrFpF0XZXYx'
  }
})

