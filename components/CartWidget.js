import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    const itemCount = 3;

    return (
        <div style={{ position: 'relative', marginLeft: '15px' }}>
            <FaShoppingCart size={24} />
            {itemCount > 0 && (
                <span style={{
                    position: 'absolute',
                    top: -5,
                    right: -10,
                    background: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '12px'
                }}>
                    {itemCount}
                </span>
            )}
        </div>
    );
};

export default CartWidget;