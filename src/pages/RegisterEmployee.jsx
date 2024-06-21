import React from 'react'

const RegisterEmployee = ({ backHandler }) => {
	return (
		<div>
			<h2>RegisterEmployee</h2>
			<input
				className='input back__btn'
				type='button'
				value="Back"
				onClick={backHandler}
			/>
		</div>
	)
}

export default RegisterEmployee