import React from 'react'
import Register from './pages/Register';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Login from './pages/Login';
const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
			 <Routes>
				<Route path='/'>
					<Route index element={<Register />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Route>
			 </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App