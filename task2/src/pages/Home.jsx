import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Home() {
  const { products, addToCart } = useContext(StoreContext);

  return (
    <div className="container py-5">
      <h2 className="text-primary fw-bold mb-4 text-center">Our Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4" key={product.id}>
            <div className="card shadow-sm h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{product.name}</h5>
                <p className="text-muted mb-2">{product.category}</p>
                <h6 className="fw-bold text-primary">EGP {product.price}</h6>
                <button
                  className="btn btn-primary mt-auto w-100"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
