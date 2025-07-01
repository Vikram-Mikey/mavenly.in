import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/addcart.css';

function AddCart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  // Helper to get price by plan
  const getPlanPrice = (plan) => {
    if (plan === 'Basic Plan') return 4999;
    if (plan === 'Pro Plan' ) return 9999;
    if (plan === 'Premium Plan' || plan === 'Primum Plan') return 14999;
    return 0;
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartData);
    // Calculate total
    let sum = 0;
    cartData.forEach(item => {
      sum += getPlanPrice(item.plan);
    });
    setTotal(sum);
  }, []);

  const removeFromCart = idxToRemove => {
    const updatedCart = cart.filter((_, idx) => idx !== idxToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Recalculate total
    let sum = 0;
    updatedCart.forEach(item => {
      sum += getPlanPrice(item.plan);
    });
    setTotal(sum);
  };

  return (
    <section className="addcart-section">
      <div className="addcart-dev-left">
        <div className="addcart-dev-left-header">
          <div className="addcart-dev-left-header-title">Product</div>
          <div className="addcart-dev-left-header-title">Total</div>
        </div>
        <hr className="addcart-dev-left-hr" />
        {cart && cart.length > 0 ? (
          cart.map((item, idx) => (
            <div key={idx} className="addcart-item">
              <div className="addcart-item-img-btn">
                <img src={item.img} alt={item.program} className="addcart-item-img" />
                <button
                  className="addcart-item-remove-btn"
                  onClick={() => removeFromCart(idx)}
                >
                  Remove
                </button>
              </div>
              <div className="addcart-item-details">
                <div className="addcart-item-title">{item.program}</div>
                <div className="addcart-item-plan">{item.plan}</div>
              </div>
              <div className="addcart-item-price">₹{getPlanPrice(item.plan).toLocaleString()}</div>
            </div>
          ))
        ) : (
          <div className="addcart-empty">No items in cart.</div>
        )}
      </div>
      <div className="addcart-dev-right">
        <h2 className="addcart-dev-right-title">Cart Totals</h2>
        <div className="addcart-dev-right-total-programs">Total Programs: {cart.length}</div>
        <div className="addcart-dev-right-total">Total: ₹{total.toLocaleString()}</div>
        <button
          className="addcart-checkout-btn"
          onMouseDown={e => e.currentTarget.style.background = '#ff5757'}
          onMouseUp={e => e.currentTarget.style.background = '#4998da'}
          onMouseLeave={e => e.currentTarget.style.background = '#4998da'}
          onClick={() => alert('Proceeding to checkout...')}
        >
          Checkout
        </button>
      </div>
    </section>
  );
}

export default AddCart;