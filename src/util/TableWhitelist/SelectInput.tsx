import React from 'react';
import { Select } from 'antd';
import countryCode from '../countryCode';

const SelectInput: React.FC<{ value: string | any; onChange: (e: any) => void }> = ({ value, onChange }) => (
    <div>
        <Select style={{ width: `100%` }} onChange={onChange} defaultValue="885" value={value} showSearch>
            {countryCode.map((item) => (
                <Select.Option key={item.dial_code} value={item.dial_code}>
                    {`${item.dial_code} (${item.code})`}
                </Select.Option>
            ))}
        </Select>
        <div style={{ marginTop: 5, fontSize: 12, color: 'red' }}>{value ? '' : 'Country code is required'}</div>
    </div>
);

export default SelectInput;
