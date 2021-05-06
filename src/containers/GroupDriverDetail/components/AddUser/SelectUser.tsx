import React from 'react';
import { Select, Form } from 'antd';
import debounce from 'lodash/debounce';

import Users from './Users';
import { useGetDriver } from '../../api';

const SelectUser: React.FC = () => {
    const { records, loading, onScroll, searchUser } = useGetDriver();
    return (
        <Form.Item
            label="User"
            name="userIds"
            rules={[
                {
                    required: true,
                },
            ]}
            help="*Note: User can search by mobile number and scroll to request more"
        >
            <Select
                mode="multiple"
                placeholder="-- Select user --"
                onPopupScroll={(e) => onScroll(e.currentTarget)}
                filterOption={false}
                onSearch={debounce(searchUser, 800)}
                loading={loading}
            >
                {records?.map((rec: any, idx) => (
                    <Select.Option value={rec.id} key={rec.id + idx}>
                        <Users dataObj={rec} />
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default SelectUser;
