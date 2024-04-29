import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const username = useRef('');
  const email = useRef('');
  const password = useRef('');
  const [btnDisabled, setBtnDisabled] = useState(false);


  useEffect(() => {
    const justLoggedIn = JSON.parse(localStorage.getItem("logged"))
    if (!justLoggedIn) {
      localStorage.setItem("logged", JSON.stringify(true));
      window.location.reload();
    }
  }, []);

  function handleSave(e) {
    e.preventDefault();
    const enteredUsername = username.current.value.trim();
    const enteredEmail = email.current.value.trim();
    const enteredPassword = password.current.value.trim();
    if (enteredUsername === '' || enteredEmail === '' || enteredPassword === '') {
      alert('Iltimos, barcha maydonlarni to\'ldiring.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(enteredEmail)) {
      alert('Iltimos, to\'g\'ri elektron pochta manzili kiriting.');
      return;
    }
    const user = {
      name: enteredUsername,
      email: enteredEmail,
      password: enteredPassword
    };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/login');

    setBtnDisabled(false);
  }

  return (
        <div className='card w-96 m-auto mt-20 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
          <h2 className='text-center text-3xl font-bold'>Register</h2>
          <form>
            <div className="mb-4 flex flex-col">
              <label htmlFor="name" className="label-text capitalize">Username</label>
              <input ref={username} type="text" className="input input-sm  mt-2 input-bordered undefined" id="name" placeholder='Name' />
            </div>

            <div className="mb-4 flex flex-col">
              <label htmlFor="email" className="label-text capitalize">Email</label>
              <input ref={email} type="email" className="input input-sm  mt-2 input-bordered undefined" id="email" aria-describedby="emailHelp" placeholder='User@gmail.com' />
            </div>

            <div className="mb-4 flex flex-col">
              <label htmlFor="password" className="label-text capitalize">Password</label>
              <input ref={password} type="password" className="input input-sm  mt-2 input-bordered undefined" id="password" placeholder='***' />
            </div>

            <div className='text-center mb-3'>
              <button disabled={btnDisabled} onClick={handleSave} class="btn btn-primary btn-block">{btnDisabled ? 'Save...' : 'SAVE'}</button>
            </div>

            <div className='text-center'>
              <Link to='/login'>Login Page</Link>
            </div>
          </form>
        </div>
  );
}

export default Register;
