import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import { usersUrl } from '../api/urls';
import './Reg-Log.css';

const NAME_REGEX = /^[a-z_&#@][a-z0-9]{3,20}/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterUser = ({backHandler}) => {
	const usernameRef = useRef(null);
	const pwdRef = useRef(null);
	const cfrmPwdRef = useRef(null);
	const btnRef = useRef(null);
	const [errorMsg, setErrorMsg] = useState('');

	const [username, setUsername] = useState('');
	const [usernameFocus, setUsernameFocus] = useState(false);
	const [validUsername, setValidUsername] = useState(true);

	const [password, setPassword] = useState('');
	const [passwordFocus, setPasswordFocus] = useState(false);
	const [validPassword, setValidPassword] = useState(true);

	const [cfrmPassword, setCfrmPassword] = useState('');
	const [cfrmPasswordFocus, setCfrmPasswordFocus] = useState(false);
	const [validCfrmPassword, setValidCfrmPassword] = useState(true);

	useEffect(()=> {
		usernameRef.current.focus();
	},[]);

	useEffect(()=> {
		
	},[username, usernameFocus]);

	useEffect(()=> {
		setErrorMsg('');
		if (username)
			setValidUsername(NAME_REGEX.test(username));
		if (password)
			setValidPassword(PWD_REGEX.test(password));
		if(cfrmPasswordFocus)
			setValidCfrmPassword(password === cfrmPassword);
	}, [username, usernameFocus, password, passwordFocus, cfrmPassword, cfrmPasswordFocus]);

	const handleRegister = async(e)=> {
		e.preventDefault();
		const valid = NAME_REGEX.test(username) && PWD_REGEX.test(password);
		if(!valid){
			setErrorMsg("Username or Password is not Valid");
			setValidCfrmPassword(false);
			setValidPassword(false);
			setValidUsername(false);
			return;
		}
		try {
			const {response} = await axios.post(usersUrl, {username, pwd: password});
			console.log(response);
			
		} catch (error) {
			const {response} = error;
			setErrorMsg(`${response?.data || response?.statusText} to Complete` );
		}
	}

	return (
		<div className='Register'>
			<h2 className='title'>Register Form</h2>
			<form className='form' onSubmit={handleRegister}>
				<input 
					className={validUsername ? "input" : "input err_border"}
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
					className={validPassword ? "input" : "input err_border"}
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
					className={validCfrmPassword ? "input" : "input err_border"}
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
				<input 
					className='input back__btn'
				  type='button'
					value="Back"
					onClick={backHandler}
				/>
			</form>
			<p className='para__error'>{errorMsg}</p>
			<p className='para__footer'>Already registered? 
				<Link to="/login" className='link'>Login</Link>
			</p>
		</div>
	)
}

export default RegisterUser