import React from 'react'

const ManageEmployee = ({ backHandler }) => {
	return (
		<div>
			<h2>ManageEmployee</h2>
			<input
				className='input back__btn'
				type='button'
				value="Back"
				onClick={backHandler}
			/>
		</div>
	)
}

export default ManageEmployee