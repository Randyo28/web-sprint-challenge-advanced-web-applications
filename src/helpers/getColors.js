import { axiosWithAuth } from './axiosWithAuth'

export const getColors = () => {
    axiosWithAuth()
    .get(`/colors`)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log('Error ', err.response)
    })
  }