import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(StoreContext);

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0 align-items-center">
        <div className="col-md-3">
          <img src={item.image} className="img-fluid rounded-start" alt={item.name} style={{ height: "120px", objectFit: "cover", width: "100%" }} />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title fw-semibold">{item.name}</h5>
            <p className="card-text text-muted">{item.category}</p>
            <h6 className="text-primary fw-bold">EGP {item.price}</h6>
          </div>
        </div>
        <div className="col-md-3 text-end pe-3">
          <button className="btn btn-outline-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}
