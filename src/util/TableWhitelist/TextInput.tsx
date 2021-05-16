import React from 'react';
import { Input, InputProps } from 'antd';

const TextInput: React.FC<InputProps> = ({ value, onChange, placeholder }) => (
    <div>
        <Input onChange={onChange} value={value} placeholder={placeholder} />
        <div style={{ marginTop: 5, fontSize: 12, color: 'red' }}>{value ? '' : `${placeholder} is required`}</div>
    </div>
);

export default TextInput;
