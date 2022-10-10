import React from 'react'
import './styles/userCard.css'

const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {

    const handleEdit = () => {
        setUpdateInfo(user)
    }

    return (
        <article className='user'>
            <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
            <ul className='user__list'>
                <li className='user__item'><span className='user__span'>Email</span> {user.email}</li>
                <li className='user__item'><span className='user__span'>Birthday</span><div className='user__item-container'><i class="fa-solid fa-gift user__gift"></i> {user.birthday}</div></li>
            </ul>
            <footer className='user__footer'>
                <i className="fa-solid fa-trash-can user__trash" onClick={() => deleteUserById(user.id)}></i>
                <i className="fa-solid fa-pen-to-square user__edit" onClick={handleEdit}></i>
            </footer>
        </article>
    )
}

export default UserCard