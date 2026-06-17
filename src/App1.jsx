import React, {useState} from 'react';

function App(){
	//create a state variable  named "messge" and a function to update it

	const [message, setMessage] = useState('Hello World');

	//Define what happens when the button is clicked 
	const handleClick = ()  => {
		setMessage('Welcome to React Development');
	}

	return (
		<div style = {
				{ 
					textAlign: 'center',
				        marginTop: '50px', 
					fontFamily: 'Arial'
				}
			     }
		>
		<h1> {message} </h1>
		<button 
			onClick = {handleClick}
			style = {
				{ 
					padding: '10px 20px', 
					fontSize: '16px', 
					cursor: 'pointer', 
					borderRadius: '5px'	
				}
			}>
			Click Me
		</button>
		</div>
	);
}
export default App;