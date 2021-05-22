import React from 'react';

const Th: React.FC = ({ children }) => {
    return (
        <th data-a-h="center" data-f-bold="true" data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
            {children}
        </th>
    );
};

export default Th;
