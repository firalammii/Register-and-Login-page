import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';

const NAME_REGEX = /^[a-z_&#@][a-z0-9]{3,20}/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
	const usernameRef = useRef(null);
	const pwdRef = useRef(null);
	const cfrmPwdRef = useRef(null);
	const btnRef = useRef(null);

	const [username, setUsername] = useState('');
	const [usernameFocus, setUsernameFocus] = useState(false);
	const [validUsername, setValidUsername] = useState(false);

	const [password, setPassword] = useState('');
	const [passwordFocus, setPasswordFocus] = useState(false);
	const [validPassword, setValidPassword] = useState(false);

	const [cfrmPassword, setCfrmPassword] = useState('');
	const [cfrmPasswordFocus, setCfrmPasswordFocus] = useState(false);
	const [validCfrmPassword, setValidCfrmPassword] = useState(false);

	useEffect(()=> {
		setValidUsername(usernameFocus? NAME_REGEX.test(username) : true);
	},[username, usernameFocus]);

	useEffect(()=> {
		setValidPassword(passwordFocus ? PWD_REGEX.test(password) : true);
	},[password, passwordFocus]);

	useEffect(()=> {
		setValidCfrmPassword(cfrmPasswordFocus? PWD_REGEX.test(password) && password === cfrmPassword: true);
	},[cfrmPassword, cfrmPasswordFocus]);



	return (
		<div className='Register'>
			<h2 className='title'>Register Form</h2>
			<form className='form'>
				<input 
					className={validUsername ? "input" : "input error"}
				  type='text'
					placeholder='Username'
					value={username}
					onChange={(e)=>setUsername(e.target.value)}
					onFocus={()=>setUsernameFocus(true)}
					onBlur={()=>setUsernameFocus(false)}
					aria-invalid={validUsername ? "false" : "true"}
					aria-describedby='username-note'
					ref={usernameRef}
				/>
				<input 
					className={validPassword ? "input" : "input error"}
				  type='password'
					placeholder='Create Password'
					value={password}
					onChange={(e)=>setPassword(e.target.value)}
					onFocus={()=>setPasswordFocus(true)}
					onBlur={()=>setPasswordFocus(false)}
					aria-invalid = {validPassword? "false": "true"}
					aria-describedby='password-note'
					ref={pwdRef}
				/>
				<input 
					className={validCfrmPassword ? "input" : "input error"}
				  type='password'
					placeholder='Confirm Password'
					value={cfrmPassword}
					onChange={(e)=>setCfrmPassword(e.target.value)}
					onFocus={()=>setCfrmPasswordFocus(true)}
					onBlur={()=>setCfrmPasswordFocus(false)}
					aria-invalid={validCfrmPassword ? "false" : "true"}
					aria-describedby='cfrmpassword-note'
					ref={cfrmPwdRef}
				/>
				<input 
					className='input submit__btn'
				  type='submit'
					value="Register"
					ref={btnRef}
				/>
			</form>
			<p className='para__error'>Registration Error</p>
			<p className='para__footer'>Already registered? 
				<Link to="/login" className='link'>Login</Link>
			</p>
		</div>
	)
}

export default Register