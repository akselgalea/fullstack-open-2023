import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_URI ?? 'http://localhost:3001/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(res => res.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(res => res.data)
}

const destroy = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, destroy }