import axios from 'axios';
import React, { useState } from 'react'
import { authUrl } from '../api/urls';

const useAuth = async() => {
	const [user, setUser] = useState('');

	const {data} = await axios.post(`${authUrl}/login`, payload);
}

export default useAuth