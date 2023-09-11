import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(res => res.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(res => res.data)
}

export default { getAll, create, update }