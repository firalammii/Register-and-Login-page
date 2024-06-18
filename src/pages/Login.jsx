import React, {useRef} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
	const usernameRef = useRef(null);
	const pwdRef = useRef(null);
	const btnRef = useRef(null);
	return (
		<div className='Login'>
			<h2 className='title'>Login Form</h2>
			<form className='form'>
				<input
					className='input'
					type='text'
					placeholder='Username'
					ref={usernameRef}
				/>
				<input
					className='input'
					type='password'
					placeholder='Password'
					ref={pwdRef}
				/>
				<input
					className='input submit__btn'
					type='submit'
					value="Login"
					ref={btnRef}
				/>
			</form>
			<p className='para__error'>Login Error</p>
			<p className='para__footer'>Haven't registered? 
				<Link to="/register" className='link'>Register</Link>
			</p>
		</div>
	)
}

export default Login