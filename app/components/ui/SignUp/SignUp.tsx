'use client'

import type { FC, FormEvent } from 'react'
import React, { useState, useEffect, useContext } from 'react'
import { Session } from '@supabase/supabase-js'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { DataContext } from '../../../context/DataProvider'
import supabase from '../../../../supabase/supabase'
import { toast } from 'react-toastify'

const SignUp: FC = () => {
  const { User, setUser } = useContext(DataContext)
  const [Email, setEmail] = useState('')
  const [Name, setName] = useState('')
  const [Phone, setPhone] = useState('')
  const [Password, setPassword] = useState('')
  const router = useRouter()

  const session = await supabase.auth.getSession()

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
      options: {
        data: {
          name: Name,
          phone: Phone,
        },
      },
    });
  
    if (error) {
      toast.error(error.message, { position: 'bottom-right' });
    } else if (data && data.user) {
      const { error: insertError } = await supabase
        .from('AI24')
        .insert({ userid: data.user.id, history: [], watch_list: [] });
  
      console.error(insertError);
      localStorage.setItem('user', JSON.stringify(data.user.id));
  
      // Assuming setUser expects a Session object
      setUser({ id: data.user.id } as Session);
      setPassword('');
      toast.info('Successfully signed up!', { position: 'bottom-right' });
    }
  }

  useEffect(() => {
  }, [User])
  
  useEffect(() => {
    (async () => {
      const session = await supabase.auth.getSession()
      if (User) router.push('/')
    })()
  }, [])

  return (
    <div className='Login reg'>
      <form className='left' data-aos='fade-left'>
        <div className='info'>
          Login or <span style={{ fontWeight: '800' }}>Sign up</span> to
          continue...
        </div>
        <div className='input-container'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            className='input input-misc'
            type='text'
            value={Name}
            onChange={(e) => setName(e.target.value)} // Changed here
            placeholder='Enter name'
          />
        </div>
        <div className='input-container'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            className='input input-misc'
            type='email'
            value={Email}
            onChange={(e) => setEmail(e.target.value)} // Changed here
            placeholder='Enter email'
          />
        </div>
        <div className='input-container'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            id='phone'
            className='input input-misc'
            type='number'
            value={Phone}
            onChange={(e) => setPhone(e.target.value)} // Changed here
            placeholder='Enter phone number'
          />
        </div>
        <div className='input-container'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            className='input input-misc'
            type='password'
            value={Password}
            onChange={(e) => setPassword(e.target.value)} // Changed here
            placeholder='Enter password'
          />
        </div>
        <div className='button-container'>
          <button onClick={handleSignup} className='signup' type='submit'>
            Sign Up
          </button>
          <div className='action'>
            Already have an account?
            <Link className='action-button' href='/signin'>
              Sign In
            </Link>
          </div>
        </div>
      </form>
      <div className='right' data-aos='zoom-in' data-aos-duration='600'>
        <div className='logo'>AI24</div>
        <div className='container-text'>
          Unlimited AI movies, AI TV shows and more. <br />
          Watch anywhere.
        </div>
        <div className='container'/>
      </div>
    </div>
  )
}

export default SignUp
