import { MyInput } from '@/components/ui/myInput/MyInput';
import style from './AuthBody.module.css'
import MyButton from '@/components/ui/myButton/MyButton';
import { useForm } from 'react-hook-form';

type RegisterForm = {
    username: string
    email: string
    password: string
}

const AuthBody = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<RegisterForm>({
        mode: 'onChange',
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    })

    const onSubmit = (data: RegisterForm) => {
        console.log("форма отправленна:", data)
        reset()
    }

    return (
        <form className={style.myForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.title}>Регистрация</div>
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
            <div className={style.buttonSection}>
                <MyButton content='войти' onClick={() => console.log('Переход на логин')}/>
                <MyButton content='зарегистрироваться' type="submit" />
            </div>
        </form>);
}

export default AuthBody;