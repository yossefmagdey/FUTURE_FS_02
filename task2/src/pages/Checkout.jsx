import React from "react";

export default function Checkout() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-primary mb-4">Checkout</h2>
      <div className="card shadow-sm p-4">
        <h5 className="fw-semibold mb-3">Payment Details</h5>
        <input className="form-control mb-3" placeholder="Full Name" type="text" />
        <input className="form-control mb-3" placeholder="Phone Number" type="text" />
        <input className="form-control mb-3" placeholder="Address" type="text" />
        <button className="btn btn-primary w-100" onClick={() => alert("Order Confirmed!")}>Confirm Order</button>
      </div>
    </div>
  );
}
