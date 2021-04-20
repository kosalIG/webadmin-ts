import React from 'react';
import Currency from 'react-currency-formatter';

const Index: React.FC<{ value: number; type: string }> = ({ value, type }) => {
    return <Currency quantity={value} pattern="##,###.00 !" decimal="." group="," currency={type} />;
};

export default Index;
