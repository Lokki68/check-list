import { useState } from 'react'
import {XMLParser} from 'react-xml-parser'

export default function useConvert({data, type}) {
  const [parseData, setParseData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const parseDataFnc = () => {
    let parsedData
    if (type === 'xml') {
      parsedData = new XMLParser().parseFromString(data)
    } else {
      parsedData = new XMLParser().toString(data)
    }  

    return parsedData
  }

  try {
    setLoading(true)

    setParseData(parseDataFnc())

    setLoading(false)
  } catch (error) {
    setLoading(false)
    setError(error.message)
  }

  

  return {
    parseData,
    loading,
    error
  }
}
  
