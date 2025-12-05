import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(StoreContext);

  return (
    <div className="card shadow-sm h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="text-muted">{product.category}</p>
        <h6 className="fw-bold text-primary">${product.price}</h6>
        <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
