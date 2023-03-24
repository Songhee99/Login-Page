import React from 'react';

const Main = () => {
	const onLogout = (event: any) => {
		const isLogin = localStorage.getItem('isLogin');
		if (isLogin) {
			localStorage.removeItem('email');
			localStorage.removeItem('password');
			localStorage.removeItem('isLogin');
		} else {
			alert('아직 로그인 하지 않았습니다.');
		}
	};

	return (
		<>
			<h1>❤️홈 화면❤️</h1>
			<a href="./login">로그인 페이지 이동하기</a>
			<br />
			<button onClick={onLogout}>로그아웃</button>
		</>
	);
};

export default Main;
