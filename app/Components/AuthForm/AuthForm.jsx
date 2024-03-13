'use client'
import Styles from './AuthForm.module.css';
import { useEffect, useState } from 'react';
import { authorize, isResponseOk, getMe, setJWT } from '../../api/api-utilits';
import { endpoints } from '../../api/config'

export const AuthForm = (props) => {
  const [authData, setAuthData] = useState({ identifier: '', password: '' })
  const [userData, setUserData] = useState(null)
  const [message, setMessage] = useState({ status: null, text: null })
	const [seconds, setSeconds] = useState(0);
	const [isAuthorized, setIsAuthorized] = useState(false)

  const handleInput = e => {
    const newAuthData = authData
    newAuthData[e.target.name] = e.target.value
    setAuthData(newAuthData)
    console.log(authData)
  } 

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const userData =  await authorize(endpoints.auth, authData)
    if (isResponseOk(userData)) {
      setUserData(userData)
			setJWT(userData.jwt)
      props.setAuth(true)
      setMessage({ status: 'success', text: 'Вы авторизовались!' })
			setIsAuthorized(true)
      console.log(message)
    } else {
      setMessage({ status: 'error', text: 'Неверные почта или пароль' })
      console.log(message)
			setIsAuthorized(false)
    }
  }
	useEffect(() => {
		let timer
		if (userData) {
			timer = setTimeout(() => {
				props.closePopup()
						if (isAuthorized) {
							setMessage({ status: null, text: null })
						}
			}, 1000)
		}
		return () => clearTimeout(timer)
	}, [userData, isAuthorized])

  return (
		<form className={Styles['form']} onSubmit={handleSubmit}>
			<h2 className={Styles['form__title']}>Авторизация</h2>
			<div className={Styles['form__fields']}>
				<label className={Styles['form__field']}>
					<span className={Styles['form__field-title']}>Email</span>
					<input
						className={Styles['form__field-input']}
						onInput={handleInput}
						name='identifier'
						type='email'
						placeholder='hello@world.com'
					/>
				</label>
				<label className={Styles['form__field']}>
					<span className={Styles['form__field-title']}>Пароль</span>
					<input
						className={Styles['form__field-input']}
						onInput={handleInput}
						name='password'
						type='password'
						placeholder='***********'
					/>
				</label>
			</div>
			<p className='form__message'>{message.text}</p>
			<div className={Styles['form__actions']}>
				<button className={Styles['form__reset']} type='reset'>
					Очистить
				</button>
				<button className={Styles['form__submit']} type='submit'>
					Войти
				</button>
			</div>
		</form>
	) 
};
