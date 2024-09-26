import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>{greeting}</h2>
            <p>Lista productos</p>
        </div>
    );
};

export default ItemListContainer;