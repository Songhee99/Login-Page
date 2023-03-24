import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const checkEmail = () => {
		let reg =
			/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
		return reg.test(email);
	};

	const onChangeEmail = (event: any) => {
		setEmail(event.target.value);
	};

	const onChangePassword = (event: any) => {
		setPassword(event.target.value);
	};

	const onSubmit = (event: any) => {
		if (!checkEmail()) {
			alert('이메일 형식이 맞지 않습니다.');
		} else {
			localStorage.setItem('email', email);
			localStorage.setItem('password', password);
			localStorage.setItem('isLogin', 'true');
			navigate('/');
		}
	};

	useEffect(() => {
		const isLogin = localStorage.getItem('isLogin');
		if (isLogin) {
			alert('이미 로그인 한 상태입니다.');
			navigate('/');
		}
	});

	return (
		<>
			<h1>💛로그인 페이지💛</h1>
			<form>
				<input
					type="text"
					value={email}
					onChange={onChangeEmail}
					placeholder="아이디"
				></input>
				<input
					type="text"
					value={password}
					onChange={onChangePassword}
					placeholder="비밀번호"
				></input>
				<input type="submit" onClick={onSubmit} value="로그인"></input>
			</form>
		</>
	);
};

export default Login;
