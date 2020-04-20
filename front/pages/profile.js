import React from 'react';
import { Button, List, Card, Form, Input } from 'antd';
import { StopOutlined } from '@ant-design/icons'
// import NickNameEditForm from '../components/NickNameEditForm'

const dummyUser = {
	name: '용이',
};

const Profile = () => {
	return (
		<div>
			{/* <NickNameEditForm /> */}
			<Form style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px' }}>
				<Input value={dummyUser.name} addonBefore="닉네임" />
				<Button type="primary">수정</Button>
			</Form>
			<List
				style={{ marginBottom: '20px' }}
				grid={{ gutter: 4, xs: 2, md: 3 }}
				size="small"
				header={<div>팔로잉 목록</div>}
				loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
				bordered
				dataSource={['용석', '바보', '노드버드오피셜']}
				renderItem={(item) => (
					<List.Item style={{ marginTop: '20px' }}>
						<Card actions={[<StopOutlined key="stop" />]}>
							<Card.Meta description={item} />
						</Card>
					</List.Item>
				)}
			/>
			<List
				style={{ marginBottom: '20px' }}
				grid={{ gutter: 4, xs: 2, md: 3 }}
				size="small"
				header={<div>팔로잉 목록</div>}
				loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
				bordered
				dataSource={['용석', '바보', '노드버드오피셜']}
				renderItem={(item) => (
					<List.Item style={{ marginTop: '20px' }}>
						<Card actions={[<StopOutlined key="stop" />]}>
							<Card.Meta description={item} />
						</Card>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default Profile;
