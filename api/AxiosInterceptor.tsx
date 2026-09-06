import { AxiosResponse } from "axios"
import axios from "./"
// import { useRouter } from "next/router"
// import { useAppDispatch } from "../store/hooks"
import { memo, ReactNode } from "react"

type propType = {
  children: ReactNode
}

const AxiosInterceptor: React.FC<propType> = ({ children }) => {
  // const router = useRouter()
  // const dispatch = useAppDispatch()

  const errorHandler = (error: unknown) => {
    // handleError
    return Promise.reject(error)
  }

  const responseHandler = (response: AxiosResponse) => {
    try {
      // axios.defaults.headers.common['X-CSRF-Token'] = response.headers["csrf-token"]
    } catch (error) {
      throw error
    }
    return response
  }

  axios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
  )

  return (
    <>
      {children}
    </>
  )
}

export default memo(AxiosInterceptor)