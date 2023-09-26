'use client';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import classes from './login.module.css';
import Link from 'next/link';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.error('Fill all fields');
      return;
    }

    if (password < 6) {
      toast.error('Password must be atleast 6 characters');
      return;
    }

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.error === null) {
        router.push('/');
      } else {
        toast.error('Error occured while logging in');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={classes.submitButton}>Log In</button>
          <Link href="/register" className={classes.loginNow}>
            Don&apos;t have an account? <br /> Register now.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
