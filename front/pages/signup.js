import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Input, Form, Button, Checkbox } from 'antd';

const Signup = () => {
	const [id, setId] = useState('');
	const [nick, setNick] = useState('');
	const [password, setPassword] = useState('');
	const [passwordCheck, setPasswordCheck] = useState('');
	const [term, setTerm] = useState(false);
	const [PasswordError, setPasswordError] = useState(false);
	const [termError, setTermError] = useState(false);

	const onSubmit = (e) => {
		// e.preventDefault();
		if (password !== passwordCheck) {
			return setPasswordError(true);
		}
		if (!term) {
			return setTermError(true);
        }
        
		console.log({
			id,
			nick,
			password,
			passwordCheck,
			term,
		});
	};
	const onChangeId = (e) => {
		setId(e.target.value);
	};
	const onChangeNick = (e) => {
		setNick(e.target.value);
	};
	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const onChangePasswordCheck = (e) => {
		setPasswordCheck(e.target.value);
	};
	const onChangeTerm = (e) => {
		setTerm(e.target.checked);
	};

	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
				/>
			</Head>
			<AppLayout>
				<Form onFinish={onSubmit} style={{ padding: 10 }}>
					<div>
						<label htmlFor="user-id">아이디</label>
						<br />
						<Input name="user-id" value={id} required onChange={onChangeId} />
					</div>
					<div>
						<label htmlFor="user-nick">닉네임</label>
						<br />
						<Input name="user-nick" value={nick} required onChange={onChangeNick} />
					</div>
					<div>
						<label htmlFor="user-pass">비밀번호</label>
						<br />
						<Input
							name="user-password"
							type="password"
							value={password}
							required
							onChange={onChangePassword}
						/>
					</div>
					<div>
						<label htmlFor="user-password-check">비밀번호체크</label>
						<br />
						<Input
							name="user-password-check"
							type="password"
							value={passwordCheck}
							required
							onChange={onChangePasswordCheck}
						/>
					</div>
					<div>
						<Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
							약관동의
						</Checkbox>
                        {termError && <div style={{color:'red'}}>약관에 동의하셔야 합니다.</div>}
					</div>
					<div>
						<Button type="primary" htmlType="submit">
							가입하기
						</Button>
					</div>
				</Form>
			</AppLayout>
		</>
	);
};

export default Signup;
