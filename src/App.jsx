import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AuthCode from './component/AutentikasiTest'

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/api/guest")
        setData(result.data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])
  
  return (
    <div>
      {
        data.map((e, index) => (
          <h1 key={index} >{e.name}</h1>
        ))
      }
    </div>
  )
}

export default App