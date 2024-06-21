import React from 'react'
import './Button.css';
const Button = ({btnData, clickHandler}) => {
	return (
		<button 
			className={btnData.selected? "Button selected-btn": "Button"}
			onClick={() => clickHandler(btnData.id)}
		>
			{btnData.btnValue}
		</button>
	)
}

export default Button