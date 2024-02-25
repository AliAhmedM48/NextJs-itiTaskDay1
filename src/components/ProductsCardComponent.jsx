import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsCardComponent = (props) => {
  const { id, thumbnail, title, description, brand, price } = props.product;
  return (
    <div className="col-md-4">
      <div className="card text-start">
        <img
          src={thumbnail}
          className="card-img-top"
          style={{ height: 300 }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>
            Brand: <span>{brand}</span>
          </p>
          <p>
            Price: <span>{price}</span>
          </p>
          <Link
            href={"/products/" + id.toString()}
            className="btn btn-dark text-white"
          >
            See More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardComponent;
