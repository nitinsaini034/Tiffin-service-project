import loginImage from '../../assets/log-img.jpg'
import { NavLink } from 'react-router-dom'

const LogIn = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <main className='login-page'>
          <div className='d-flex mx-auto login-cont user-login-cont'>
            <div className='login-img'>
                <img src={loginImage} alt="Login" />
            </div>
            <div className='login-form-wrapper user-login-form'>
                <p className='login-eyebrow mb-2'>Welcome back</p>
                <h1 className='login-title mb-2'>Log in</h1>
                <p className='text-secondary mb-4'>
                    Enter your details to continue ordering fresh meals.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='email'>Email address</label>
                        <input
                            className='form-control'
                            id='email'
                            name='email'
                            type='email'
                            placeholder='name@example.com'
                            autoComplete='email'
                            required
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor='password'>Password</label>
                        <input
                            className='form-control'
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Enter your password'
                            autoComplete='current-password'
                            required
                        />
                    </div>

                    <div className='login-options d-flex justify-content-between align-items-center gap-3 mb-4'>
                        <div className='form-check'>
                            <input className='form-check-input' id='remember' name='remember' type='checkbox' />
                            <label className='form-check-label' htmlFor='remember'>Remember me</label>
                        </div>
                        <NavLink className='login-link' to='/forgot-password'>
                            Forgot password?
                        </NavLink>
                    </div>

                    <button className='btn login-button w-100' type='submit'>Log in</button>
                </form>

                <p className='text-center text-secondary mt-4 mb-0'>
                    Don&apos;t have an account? <NavLink className='login-link' to='/sign-up'>Sign up</NavLink>
                </p>
            </div>
          </div>
        </main>
    )
}

export default LogIn
