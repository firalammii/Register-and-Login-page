import React, { useState } from 'react'
import Button from '../components/button/Button';
import './Admin.css';
import Register from './RegisterUser';
import ManageUser from './ManageUser';
import RegisterEmployee from './RegisterEmployee';
import ManageEmployee from './ManageEmployee';
const Admin = () => {
	const [state, setState] = useState([
		{
			id: 1,
			btnValue: "Add User",
			selected: false,
		},
		{
			id: 2,
			btnValue: "Manage User",
			selected: false,
		},
		{
			id: 3,
			btnValue: "Create Employee",
			selected: false,
		},
		{
			id: 4,
			btnValue: "Manage Employee",
			selected: false,
		},
	]);
	const clickHandler = (btnId) => {
		setState(state.map(btn => btn.id === btnId ? { ...btn, selected: true } : { ...btn, selected: false}));
	}
	const backHandler = () => {
		setState(state.map(btn => ({ ...btn, selected: false})));
	}

	const Buttons = () => {
		return state.map(btn => <Button key={btn.id} btnData={btn} clickHandler={clickHandler} />)
	}
	const comp = state.find(st => st.selected);

	return (
		<div className="Admin">
			<div className="Admin__left">
				{comp?.id === 1 ? <Register backHandler={backHandler} />
					: comp?.id === 2 ? <ManageUser backHandler={backHandler} />
						: comp?.id === 3 ? <RegisterEmployee backHandler={backHandler} />
							: comp?.id === 4 ? <ManageEmployee backHandler={backHandler} />
				: <Buttons />}
			</div>
		</div>
	)
}

export default Admin