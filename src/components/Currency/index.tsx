import React from 'react';
import Currency from 'react-currency-formatter';
type Type = 'KHR' | 'USD';
const Index: React.FC<{ value: number; type: Type }> = ({ value, type }) => {
    return <Currency quantity={value} pattern="##,###.00 !" decimal="." group="," currency={type} />;
};

export default Index;
