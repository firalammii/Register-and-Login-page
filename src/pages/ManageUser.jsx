import React from 'react'

const ManageUser = ({ backHandler }) => {
	return (
		<div>
			<h2>ManageUser</h2>
			<input
				className='input back__btn'
				type='button'
				value="Back"
				onClick={backHandler}
			/>
		</div>
	)
}

export default ManageUser