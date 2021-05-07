import React from 'react';
import { Typography, Space } from 'antd';

const { Text } = Typography;
interface UserProfileProps {
    referralCode: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
}
const UserProfile: React.FC<{ user?: UserProfileProps }> = ({ user }) => {
    const fullName = `${user?.firstName} ${user?.lastName}`;
    return (
        <div>
            <Space size="large" style={{ marginBottom: 10 }}>
                <div>
                    <Text style={{ fontSize: 12 }} type="secondary">
                        Refferal code:
                    </Text>
                    <Text strong> {user?.referralCode}</Text>
                </div>
                <div>
                    <Text style={{ fontSize: 12 }} type="secondary">
                        Full Name:
                    </Text>
                    <Text strong> {user?.firstName ? fullName : 'n/a'}</Text>
                </div>
                <div>
                    <Text style={{ fontSize: 12 }} type="secondary">
                        Mobile
                    </Text>
                    <Text strong> {user?.mobileNumber || 'n/a'}</Text>
                </div>
            </Space>
        </div>
    );
};

export default UserProfile;
