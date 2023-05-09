import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Order Successful!

    Your order was ${order}.
     
    Please show your confirmation number for pickup.
    
    `);
  };

  return (
    <form>
      <label htmlFor="name"></label>
      <label htmlFor="phone"></label>
      <label htmlFor="address"></label>
      <label htmlFor="order"></label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        id="order"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      />
      <button type="submit" onSubmit={handleSubmit}>
        Submit Order
      </button>
    </form>
  );
}

export default FoodOrderForm;
