/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * FilterInput
 *
 */

import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, InputProps } from 'antd';

interface FilterProps extends InputProps {
    onSearch: () => void;
}
const FilterInput: React.FC<FilterProps> = ({ onSearch, ...props }) => {
    const [timeOut, settimeout] = useState<any>(null);

    function onKeyUp() {
        clearTimeout(timeOut);
        settimeout(
            setTimeout(() => {
                onSearch();
            }, 800),
        );
    }

    return <Input {...props} onKeyUp={onKeyUp} addonAfter={<SearchOutlined />} />;
};

export default FilterInput;
