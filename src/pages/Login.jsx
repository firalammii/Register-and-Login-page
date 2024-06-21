import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import './Reg-Log.css';
import { authUrl } from '../api/urls';

const Login = () => {
	const usernameRef = useRef(null);
	const pwdRef = useRef(null);
	const btnRef = useRef(null);

	const [errMsg, setErrMsg] = useState('');
	const [username, setUsername] = useState('');
	const [validUsername, setValidUsername] = useState(true);
	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(true);

	useEffect(() => {
		usernameRef.current.focus();
	}, []);

	const handleLogin = async(e) => {
		e.preventDefault();
		setValidUsername(Boolean(username));
		setValidPwd(Boolean(pwd));
		if(!username || !pwd)
			setErrMsg("No Credentials !!!");
		try {
			const {data} = await axios.post(`${authUrl}/login`, {username, pwd});
			console.log(data)
			
		} catch (error) {
			console.error(error?.respn)
		}

	}

	return (
		<div className='Login'>
			<h2 className='title'>Login Form</h2>
			<form className='form' onSubmit={handleLogin}>
				<input
					className={validUsername ? 'input' : "input err_border"}
					type='text'
					placeholder='Username'
					ref={usernameRef}
					value={username}
					onChange={(e)=>setUsername(e.target.value)}
					onFocus={()=> {setValidUsername(true); setErrMsg('')}}
				/>
				<input
					className={validPwd ? 'input' : "input err_border"}
					type='password'
					placeholder='Password'
					ref={pwdRef}
					value={pwd}
					onChange={(e)=>setPwd(e.target.value)}
					onFocus={() => { setValidPwd(true); setErrMsg(''); }}
				/>
				<input
					className='input submit__btn'
					type='submit'
					value="Login"
					ref={btnRef}
				/>
			</form>
			<p className='para__error'>{errMsg}</p>
			{/* <p className='para__footer'>Haven't registered? 
				<Link to="/register" className='link'>Register</Link>
			</p> */}
		</div>
	)
}

export default Login