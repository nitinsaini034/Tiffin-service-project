import RegImage from '../../assets/reg-img.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {
    const [selectedRole, setSelectedRole] = useState('customer')

    const handleSubmit = (event) =>{
        event.preventDefault();
    }
  return (
     <main className='login-page'>
          <div className='d-flex mx-auto login-cont signup-cont'>
            <div className='login-img'>
                <img src={RegImage} alt="Sign Up" />
            </div>
            <div className='login-form-wrapper signup-form-wrapper'>
                <p className='login-eyebrow mb-2'>Create an account</p>
                <h1 className='login-title mb-2'>Sign up</h1>
                <p className='text-secondary mb-4'>
                    Enter your details to continue ordering fresh meals.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className='login-btns d-flex justify-content-center align-items-center gap-2 mb-4' role='group' aria-label='Choose account type'>
                        <button
                            className={`role-btn ${selectedRole === 'customer' ? 'active' : ''}`}
                            type='button'
                            aria-pressed={selectedRole === 'customer'}
                            onClick={() => setSelectedRole('customer')}
                        >
                            <svg className='role-icon' viewBox='0 0 24 24' aria-hidden='true'>
                                <path d='M7 3v7M10 3v7M4 3v4.5A2.5 2.5 0 0 0 6.5 10H7v11M17 3v18M17 3c-2 2.1-3 4.3-3 6.5 0 1.4 1.1 2.5 2.5 2.5h.5' />
                            </svg>
                            <span>Customer</span>
                        </button>
                        <button
                            className={`role-btn ${selectedRole === 'home-cook' ? 'active' : ''}`}
                            type='button'
                            aria-pressed={selectedRole === 'home-cook'}
                            onClick={() => setSelectedRole('home-cook')}
                        >
                            <svg className='role-icon' viewBox='0 0 24 24' aria-hidden='true'>
                                <path d='M5 12h14l-1 6H6l-1-6ZM8 8c0-1-1-1-1-2s1-1 1-2M12 8c0-1-1-1-1-2s1-1 1-2M16 8c0-1-1-1-1-2s1-1 1-2M19 14h2' />
                            </svg>
                            <span>Home Cook</span>
                        </button>
                        <input type='hidden' name='role' value={selectedRole} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='text'>Full Name</label>
                        <input
                            className='form-control'
                            id='text'
                            name='text'
                            type='text'
                            placeholder='Enter your full name'
                            autoComplete='name'
                            required
                        />
                    </div>

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
                        <label className='form-label' htmlFor='phone'>Phone Number</label>
                        <input
                            className='form-control'
                            id='phone'
                            name='phone'
                            type='tel'
                            placeholder='Enter your phone number'
                            autoComplete='tel'
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

                    <div className='d-flex justify-content-between align-items-center gap-3 mb-4'>
                        <div className='form-check'>
                            <input className='form-check-input' id='remember' name='remember' type='checkbox' />
                            <label className='form-check-label' htmlFor='remember'>Remember me</label>
                        </div>
                    </div>

                    <button className='btn login-button w-100' type='submit'>Sign up</button>
                </form>

                <p className='text-center text-secondary mt-4 mb-0'>
                    Already have an account? <NavLink className='login-link' to='/login'>Log in</NavLink>
                </p>
            </div>
          </div>
        </main>
  )
}

export default SignUp
