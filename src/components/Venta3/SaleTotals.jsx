import React from 'react';

const SaleTotals = ({ details }) => {
    const total = details.reduce((acc, product) => acc + product.stotal, 0);

    return (
        <div>
            <h2>Total de Venta</h2>
            <p>Total: ${total.toFixed(2)}</p>
        </div>
    );
};

export default SaleTotals;
