import React from "react";
import data from "../Data";
import Rating from "./Rating";
import {Link} from 'react-router-dom'
// import Product from './Product'

function ProductScreen(props) {
    const product = data.Products.find(
        (x) => x.id === Number(props.match.params.id)
        );
        
        if (!product) {
            return <div>Product not found</div>;
        }
        return (
            <div>
        <Link to="/">back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>{product.name}</li>
            <li>
              <Rating rating={product.rating} numVal={product.numReviews} />
            </li>
            <li>Price: ${product.price}</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
          <ul>
               <li>
               <div className="price">
                   <div>price</div>
                   <div>${product.price}</div>
                </div>
                </li> 
                
              <li>
                <div className="row">
                  <div>status</div>
                  
                    {product.countInStock > 0 ? (
                      <span className="success">In stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                
              </li>
              <li>
                  <button className="primary-button">Add to cart</button>
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
