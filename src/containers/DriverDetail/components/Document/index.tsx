import React from 'react';
import FamilyDoc from './FamilyDoc';
import Content from './Content';
import { DriverData, UpdateDriver } from '../../interface';

interface DocumentProps {
    driverDetail: DriverData | null;
    updateDriver: UpdateDriver;
}
const Index: React.FC<DocumentProps> = ({ driverDetail, updateDriver }) => {
    const { driverInfo } = driverDetail || {};
    const { nationIDImage, drivingLicenseImage, vehicleIDCardImage, image4x6, familyImage } = driverInfo || {};
    const { onUpdateDriver } = updateDriver;

    return (
        <div>
            <FamilyDoc photoSrc={image4x6 || ''} familySrc={familyImage || ''} onUpdateDriver={onUpdateDriver} />
            <Content
                title="Personal Identity Card"
                frontSrc={nationIDImage?.front || ''}
                backSrc={nationIDImage?.back || ''}
                onUpdateFront={(file: string) => onUpdateDriver({ driverInfo: { nationIDImage: { front: file } } })}
                onUpdateBack={(file: string) => onUpdateDriver({ driverInfo: { nationIDImage: { back: file } } })}
            />
            <Content
                title="Driving License Card"
                frontSrc={drivingLicenseImage?.front || ''}
                backSrc={drivingLicenseImage?.back || ''}
                onUpdateFront={(file: string) =>
                    onUpdateDriver({ driverInfo: { drivingLicenseImage: { front: file } } })
                }
                onUpdateBack={(file: string) => onUpdateDriver({ driverInfo: { drivingLicenseImage: { back: file } } })}
            />
            <Content
                title="Vehicle Identity Card"
                frontSrc={vehicleIDCardImage?.front || ''}
                backSrc={vehicleIDCardImage?.back || ''}
                onUpdateFront={(file: string) =>
                    onUpdateDriver({ driverInfo: { vehicleIDCardImage: { front: file } } })
                }
                onUpdateBack={(file: string) => onUpdateDriver({ driverInfo: { vehicleIDCardImage: { back: file } } })}
            />
        </div>
    );
};

export default Index;
