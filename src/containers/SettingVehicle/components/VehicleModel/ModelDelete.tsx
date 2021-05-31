import React from 'react';
import { Delete } from 'components/ActionIcons';
import { useDelete } from './modelApi';

const Index: React.FC<{ id: string; getModel: () => void }> = ({ id, getModel }) => {
    const { deleteVehicle } = useDelete({ callback: getModel });
    return (
        <div>
            <Delete onConfirm={() => deleteVehicle(id)} />
        </div>
    );
};

export default Index;
