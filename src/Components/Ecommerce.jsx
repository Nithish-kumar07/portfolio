import React from 'react';
import './ecommerce.css';
import shoe1 from '../Images/shoe-1.png';
import shoe2 from '../Images/shoe-2.png';
import shoe3 from '../Images/shoe-3.png';
import shoe4 from '../Images/shoe-4.png';
import shoe5 from '../Images/shoe-5.png';
import shoe6 from '../Images/shoe-6.png';
import shoe7 from '../Images/shoe-7.png';
import shoe8 from '../Images/shoe-8.png';

const products = [
  { image: shoe1, name: "Men's Shoes DN 23XX", originalPrice: 150, discountPrice: 133, discount: 25 },
  { image: shoe2, name: "Men's Shoes DN 23XX", originalPrice: 150, discountPrice: 133, discount: 25 },
  { image: shoe3, name: "Men's Shoes DN 23XX", originalPrice: 150, discountPrice: 133, discount: 25 },
  { image: shoe4, name: "Men's Shoes DN 23XX", originalPrice: 150, discountPrice: 133, discount: 25 },
  { image: shoe5, name: "Women's Shoes DN 23XX", originalPrice: 150, discountPrice: 133, discount: 25 },
  { image: shoe6, name: "Women's Shoes DN 23XX", originalPrice: 150, discountPrice: 133, discount: 25 },
  { image: shoe7, name: "Women's Shoes DN 23XX", originalPrice: 150, discountPrice: 133, discount: 35 },
  { image: shoe8, name: "Women's Shoes DN 23XX", originalPrice: 150, discountPrice: 133, discount: 35 },
];

const Ecommerce = () => {
  return (
    <div>
      <div className="shop-section">
        <div className="shop-container">
          <h1 className="shop-title">Special Shoes With Offers</h1>
          <p className="shop-description">A New Arrival Of Shoes with some amazing Prices</p>

          <div className="shop-items">
            {products.map((product, index) => (
              <div className="shop-product" key={index}>
                <div className="shop-product-content">
                  <div className="shop-product-img">
                    <img
                      src={product.image}
                      alt={`Product ${index + 1} - ${product.name}`}
                    />
                  </div>
                  <div className="shop-product-buttons">
                    <button type="button" className="shop-cart-btn">Add to Cart</button>
                    <button type="button" className="shop-buy-btn">Buy Now</button>
                  </div>
                </div>

                <div className="shop-product-info">
                  <a href={`/product/${index + 1}`} className="shop-product-name">
                    {product.name}, New Product
                  </a>
                  <p className="shop-original-price">${product.originalPrice}.00</p>
                  <p className="shop-discount-price">${product.discountPrice}.00</p>
                </div>

                <div className="shop-offer-info">
                  <h2 className="shop-discount">{product.discount}% Off</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
