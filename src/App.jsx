import { useState } from 'react';

import './App.css';

function App() {
	// Checkbox
	const [checked, setChecked] = useState(false);

	function handleCheckboxChange() {
		// Toggle
		setChecked(!checked);
	}

	// Select Options
	const [selectOption, setSelectOption] = useState('');

	function handleSelectChange(event) {
		setSelectOption(event.target.value);
	}

	// Text Input
	const [nickName, setNickName] = useState('');

	function handleNickNameChange(event) {
		setNickName(event.target.value);
	}

	// Forms
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		zip: '',
		email: '',
		password: '',
	});

	function handleSubmit(event) {
		event.preventDefault();
		console.log(user);
		resetForm();
	}

	function handleTextChange(event) {
		setUser({
			...user,
			[event.target.id]: event.target.value,
		});
	}

	function resetForm() {
		setUser({
			firstName: '',
			lastName: '',
			zip: '',
			email: '',
			password: '',
		});
	}

	return (
		<div>
			<h2>React Forms | Readme</h2>

			{/* Checkbox */}

			<label htmlFor='first-element'>
				Checkbox{' '}
				<input
					type='checkbox'
					name='first'
					id='first-element'
					checked={checked}
					onChange={handleCheckboxChange}
				/>
			</label>
			<br />
			<br />

			{/* Select Options */}

			<label htmlFor='second-element'>
				Select Options{' '}
				<select name='second' id='second-element' onChange={handleSelectChange}>
					<option value=''>-- Please make a selection --</option>
					<option value='cats'>Cats!</option>
					<option value='dogs'>Dogs!</option>
				</select>
			</label>

			<h3>{selectOption && `You selected ${selectOption}`}</h3>

			{/* Text Input */}

			<label htmlFor='third-element'>
				Name:{' '}
				<input
					type='text'
					name='third'
					id='third-element'
					onChange={handleNickNameChange}
				/>
			</label>

			<h3>{nickName && `${nickName} selected ${selectOption}`}</h3>

			{/* Forms */}

			<h3>Forms</h3>

			<form onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name: </label>
				<input
					type='text'
					value={user.firstName}
					onChange={handleTextChange}
					id='firstName'
				/>
				<br />
				<br />
				<label htmlFor='lastName'>Last Name: </label>
				<input
					type='text'
					value={user.lastName}
					onChange={handleTextChange}
					id='lastName'
				/>
				<br />
				<br />
				<label htmlFor='zip'>Zip Code: </label>
				<input
					type='number'
					value={user.zip}
					onChange={handleTextChange}
					id='zip'
				/>
				<br />
				<br />
				<label htmlFor='email'>Email: </label>
				<input
					type='email'
					value={user.email}
					onChange={handleTextChange}
					id='email'
				/>
				<br />
				<br />
				<label htmlFor='password'>Password: </label>
				<input
					type='password'
					value={user.password}
					onChange={handleTextChange}
					id='password'
				/>
				<br />
				<br />

				<input type='submit' />
			</form>
		</div>
	);
}

export default App;
