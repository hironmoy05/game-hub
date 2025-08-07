import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

interface Data {
  id: number,
  name: string,
  slug: string,
  image_background: string,
}

interface FetchResponse<T> {
  count: number,
  results: T[]
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
    .then(res => {
      setLoading(false)
      setData(res.data.results)
    })
    .catch(err => {
      setLoading(false)
      if (err instanceof CanceledError) return
      setError(err.message)
    })
    setLoading(false)

    return () => controller.abort()
  }, [endpoint])

  return {
      data,
      error,
      isLoading
    }
}

export default useData