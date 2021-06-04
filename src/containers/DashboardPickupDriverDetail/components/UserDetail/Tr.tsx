import React from 'react';

const Tr: React.FC<{ text: string }> = ({ text, children }) => (
    <tr>
        <td>{text}</td>
        <td style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 17 }}>{children}</div>
        </td>
    </tr>
);

export default Tr;
