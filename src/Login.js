import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
	//dispatching; pulling info from data layer
	const [ state, dispatch ] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					//pushing data into the data layer

					type: actionTypes.SET_USER,
					user: result.user
				});

				// console.log(result)
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			
			<Button type="submit" onClick={signIn}>
				Sign In
			</Button>
		</div>
	);
}

export default Login;
