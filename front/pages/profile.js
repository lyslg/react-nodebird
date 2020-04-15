import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head'

const Profile = () => {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
				/>
			</Head>
			<AppLayout>
				<div>프로필</div>
			</AppLayout>
		</>
	);
};

export default Profile;
