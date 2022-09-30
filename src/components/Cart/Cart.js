import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <div class="col"><h4>Practice Plan Details</h4></div>
            <div class="col"><h5>Practice time: {cart.length}</h5></div>
            <div class="col"><h5>Break time: </h5></div>
        </div>
    );
};

export default Cart;