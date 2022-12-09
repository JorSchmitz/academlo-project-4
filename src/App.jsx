import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const baseURL = `https://users-crud.academlo.tech/`

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  const getAllUsers = () => {
    const URL = `${baseURL}users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const URL = `${baseURL}users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const URL = `${baseURL}users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `${baseURL}users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className='form__container'>
        <FormUsers createNewUser={createNewUser} updateInfo={updateInfo} updateUserById={updateUserById} setUpdateInfo={setUpdateInfo} />
      </div>
      <div className='users__container'>
        {
          users?.map(user => (
            <UserCard key={user.id} user={user} deleteUserById={deleteUserById} setUpdateInfo={setUpdateInfo} />
          ))
        }
      </div>
    </div>
  )
}

export default App
