import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add some products first.");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="container py-5">
      <h2 className="text-primary fw-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty. Add some products first.</p>
      ) : (
        <>
          {cart.map((item, idx) => <CartItem key={idx} item={item} />)}
          <div className="mt-3 d-flex justify-content-between">
            <button className="btn btn-outline-secondary" onClick={clearCart}>Clear Cart</button>
            <button className="btn btn-primary" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
