import { MyInput } from '@/components/ui/myInput/MyInput';
import style from './AuthBody.module.css'
import MyButton from '@/components/ui/myButton/MyButton';
import { useAuthForm } from '../../hooks/auth/useAuthForm';
import { useState } from 'react';

const AuthBody = () => {
    const [action, setAction] = useState<string>('reg')
    const { register, handleSubmit, error, errors, onSubmit } = useAuthForm(action)

    return (
        <form className={style.myForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.title}>{action === 'reg' ? 'Регистрация' : 'Вход'}</div>
            <div className="">{error}</div>
            <div className={style.block}>
                <div className="">Логин</div>
                {errors.username && (
                    <span className={style.error}>{errors.username.message}</span>
                )}
                <MyInput {...register('username', {
                    required: 'Логин обязателен',
                    minLength: { value: 3, message: 'Минимум 3 символа' },
                    maxLength: { value: 20, message: 'Максимум 20 символов' }
                })}
                    placeholder='введите логин' />
            </div>
            <div className={style.block}>
                <div className="">Почта</div>
                {errors.email && (
                    <span className={style.error}>{errors.email.message}</span>
                )}
                <MyInput {...register('email', {
                    required: 'Почта обязательна',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Некорректный email'
                    }
                })} type="email"
                    placeholder="example@mail.com" />
            </div>
            <div className={style.block}>
                <div className="">Пароль</div>
                {errors.password && (
                    <span className={style.error}>{errors.password.message}</span>
                )}
                <MyInput {...register('password', {
                    required: 'Пароль обязателен',
                    minLength: { value: 6, message: 'Минимум 6 символов' }
                })} type="password"
                    placeholder="Минимум 6 символов" />
            </div>
            {action === 'reg' ? <div className={style.buttonSection}>
                <div onClick={() => setAction('login')}>войти</div>
                <MyButton as='button' content='зарегистрироваться' type="submit" />
            </div> : <div className={style.buttonSection}>
                <div content='зарегистрироваться' onClick={() => setAction('reg')}>зарегистрироваться</div>
                <MyButton content='войти' type="submit" />

            </div>}

        </form>);
}

export default AuthBody;