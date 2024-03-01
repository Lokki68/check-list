import { useEffect, useState } from "react"

export default function useFetch({url, options}) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url, {...options})
      const data = await response.json()

      if(data) {
        setLoading(false)
        setData(data)
      }

    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    data,
    loading,
    error
  }
}