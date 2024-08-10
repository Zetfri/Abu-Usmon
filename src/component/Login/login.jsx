// import { UserOutlined } from '@ant-design/icons';
// import { Input } from 'antd';
// import axios from 'axios';
// import React, { useState } from 'react';
// const Login = () => {
// 	const [state, setState] = useState({
// 		firstName: '',
// 		lastName: '',
// 		username: '',
// 		password: '',
// 	});
// 	const authLogin = async () => {
// 		try {
// 			const res = await axios.post(
// 				'http://localhost:8084/api/register',
// 				{
// 					firstName: state.firstName,
// 					lastName: state.lastName,
// 					username: state.username,
// 					password: state.password,
// 				},
// 				{
// 					headers: {
// 						'Content-Type': 'application/json',
// 					},
// 				}
// 			);
// 			console.log(res.data);
// 		} catch (error) {
// 			console.log(error);
// 			throw new Error('error: ', error);
// 		}
// 	};
// 	return (
// 		<div className='w-[100%] h-screen flex justify-center items-center'>
// 			<div className={'w-[30%] h-[50%]'}>
// 				<Input
// 					size='large'
// 					type='text'
// 					placeholder='firstName'
// 					onChange={e => setState({ ...state, firstName: e.target.value })}
// 					prefix={<UserOutlined />}
// 				/>
// 				<br />
// 				<br />
// 				<Input
// 					placeholder='lastName'
// 					type='text'
// 					prefix={<UserOutlined />}
// 					onChange={e => setState({ ...state, lastName: e.target.value })}
// 				/>
// 				<br />
// 				<br />
// 				<Input
// 					size='large'
// 					type='text'
// 					placeholder='username'
// 					onChange={e => setState({ ...state, username: e.target.value })}
// 					prefix={<UserOutlined />}
// 				/>
// 				<br />
// 				<br />
// 				<Input
// 					size='large'
// 					type='password'
// 					placeholder='password'
// 					onChange={e => setState({ ...state, password: e.target.value })}
// 					prefix={<UserOutlined />}
// 				/>
// 				<br />
// 				<br />
//
// 				<button
// 					onClick={authLogin}
// 					className={'w-[100%] h-[10%]  text-white   bg bg-amber-700'}
// 				>
// 					kirish
// 				</button>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;

import React from 'react';

function Login(props) {
	return (
		<div></div>
	);
}

export default Login;
