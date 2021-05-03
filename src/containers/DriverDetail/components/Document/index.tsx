import React from 'react';
import FamilyDoc from './FamilyDoc';
import Content from './Content';
import { DriverData } from '../../interface';

interface DocumentProps {
    driverDetail: DriverData | null;
}
const Index: React.FC<DocumentProps> = ({ driverDetail }) => {
    const { driverInfo } = driverDetail || {};
    const { nationIDImage, drivingLicenseImage, vehicleIDCardImage } = driverInfo || {};

    return (
        <div>
            <FamilyDoc />
            <Content
                title="Personal Identity Card"
                frontSrc={nationIDImage?.front || ''}
                backSrc={nationIDImage?.back || ''}
            />
            <Content
                title="Driving License Card"
                frontSrc={drivingLicenseImage?.front || ''}
                backSrc={drivingLicenseImage?.back || ''}
            />
            <Content
                title="Vehicle Identity Card"
                frontSrc={vehicleIDCardImage?.front || ''}
                backSrc={vehicleIDCardImage?.back || ''}
            />
        </div>
    );
};

export default Index;
