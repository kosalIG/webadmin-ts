import React from 'react';
import dateFormat from 'dateformat';

const Index: React.FC<{ value: Date | any }> = ({ value }) => (
    <>{value ? dateFormat(new Date(value), 'dd - mmm - yyyy, h:MM:ss tt') : '---'}</>
);

export default Index;
