import React from 'react';
import { Delete } from 'components/ActionIcons';
import { useDelete } from '../api';

const Index: React.FC<{ id: string; getVehicle: () => void }> = ({ id, getVehicle }) => {
    const { deleteVehicle } = useDelete({ callback: getVehicle });
    return (
        <div>
            <Delete onConfirm={() => deleteVehicle(id)} />
        </div>
    );
};

export default Index;
