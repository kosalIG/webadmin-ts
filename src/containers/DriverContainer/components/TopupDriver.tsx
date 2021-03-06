import React, { useState } from 'react';
import TopupModalForm from './TopupModalForm';
import TopupModalFormConfirm from './TopupModalFormConfirm';
import { TopupModalFormData, TopupDriverProps } from '../interface';

const TopupDriver: React.FC<TopupDriverProps> = ({ fullName, useId }) => {
    const [data, setdata] = useState<TopupModalFormData | null>(null);
    function onFormFinish(data: TopupModalFormData) {
        setdata(data);
    }

    function onHide() {
        setdata(null);
    }
    return (
        <div>
            <TopupModalForm fullName={fullName} onFormFinish={onFormFinish} />
            <TopupModalFormConfirm fullName={fullName} userId={useId} data={data} onHide={onHide} />
        </div>
    );
};

export default TopupDriver;
