import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'

const defaultValues = {
    email: ``,
    password: ``,
    first_name: ``,
    last_name: ``,
    birthday: ``
}

const FormUsers = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo }) => {

    const { handleSubmit, reset, register } = useForm()

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const submit = data => {
        if (!updateInfo) {
            createNewUser(data)
        } else {
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }
        reset(defaultValues)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>{!updateInfo ? 'New User' : 'Edit User'}</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' minLength={1} maxLength={150} {...register(`email`)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' minLength={1} maxLength={128} {...register(`password`)} />
            </div>
            <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id='first_name' minLength={1} maxLength={25} {...register(`first_name`)} />
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id='last_name' minLength={1} maxLength={25} {...register(`last_name`)} />
            </div>
            <div>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id='birthday' {...register(`birthday`)} />
            </div>
            <button className={updateInfo ? 'edit__button' : ''}>{!updateInfo ? 'Create' : 'Edit'}</button>
        </form>
    )
}

export default FormUsers