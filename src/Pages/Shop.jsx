import React from "react";
import "./css/shop.css";
import Hero from "../Components/Hero/Hero";
import Items from "../Components/ProductItems/product";
import Popular from "../Components/Popular/popular";
import Category from "../Components/category/Category";
import Footer from "../Components/footer/footer";
import { PRODUCTS } from "../product";
import { Product } from "../Components/ProductItems/product";


export const Shop = () => {
  return (
    <>
      <div className="shop-container">
        <Hero />

        <div className="delivery-card">
          <div className="card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  transform="translate(0 0.5)"
                  fill="#E6EBEA"
                />
                <path
                  d="M2.20312 7.29688C1.73438 7.29688 1.125 7.87812 1.125 8.46406V14.7594L3.58547 15.1109C3.98297 14.4219 4.72969 13.9531 5.57812 13.9531C6.5625 13.9531 7.40625 14.5766 7.72969 15.4531H16.5516C16.875 14.5766 17.7188 13.9531 18.7031 13.9531C19.6875 13.9531 20.5312 14.5766 20.8547 15.4531H22.875V11.8344L21.3984 7.29688H2.20312ZM1.78125 7.95312H20.7938L21.9938 11.7969H13.875V14.7969H9.28125V11.7969H1.78125V7.95312ZM2.625 8.79688V10.9531H5.53125V8.79688H2.625ZM6.375 8.79688V10.9531H9.28125V8.79688H6.375ZM10.125 8.79688V13.9531H11.1562V8.79688H10.125ZM12 8.79688V13.9531H13.0312V8.79688H12ZM13.875 8.79688V10.9531H16.7812V8.79688H13.875ZM17.9344 8.79688V10.9531H20.85L20.175 8.79688H17.9344ZM5.57812 14.7969C4.77187 14.7969 4.125 15.4438 4.125 16.25C4.125 17.0562 4.77187 17.7031 5.57812 17.7031C6.38438 17.7031 7.03125 17.0562 7.03125 16.25C7.03125 15.4438 6.38438 14.7969 5.57812 14.7969ZM18.7031 14.7969C17.8969 14.7969 17.25 15.4438 17.25 16.25C17.25 17.0562 17.8969 17.7031 18.7031 17.7031C19.5094 17.7031 20.1562 17.0562 20.1562 16.25C20.1562 15.4438 19.5094 14.7969 18.7031 14.7969ZM5.57812 15.875C5.67758 15.875 5.77296 15.9145 5.84329 15.9848C5.91362 16.0552 5.95312 16.1505 5.95312 16.25C5.95312 16.3495 5.91362 16.4448 5.84329 16.5152C5.77296 16.5855 5.67758 16.625 5.57812 16.625C5.47867 16.625 5.38329 16.5855 5.31296 16.5152C5.24263 16.4448 5.20312 16.3495 5.20312 16.25C5.20312 16.1505 5.24263 16.0552 5.31296 15.9848C5.38329 15.9145 5.47867 15.875 5.57812 15.875ZM18.7031 15.875C18.8026 15.875 18.898 15.9145 18.9683 15.9848C19.0386 16.0552 19.0781 16.1505 19.0781 16.25C19.0781 16.3495 19.0386 16.4448 18.9683 16.5152C18.898 16.5855 18.8026 16.625 18.7031 16.625C18.6037 16.625 18.5083 16.5855 18.438 16.5152C18.3676 16.4448 18.3281 16.3495 18.3281 16.25C18.3281 16.1505 18.3676 16.0552 18.438 15.9848C18.5083 15.9145 18.6037 15.875 18.7031 15.875Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="card-info">
              <b>
                <p>Free shipping</p>
              </b>
              <p>Delivered to Your Door</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  transform="translate(0 0.5)"
                  fill="#E6EBEA"
                />
                <path
                  d="M2.20312 7.29688C1.73438 7.29688 1.125 7.87812 1.125 8.46406V14.7594L3.58547 15.1109C3.98297 14.4219 4.72969 13.9531 5.57812 13.9531C6.5625 13.9531 7.40625 14.5766 7.72969 15.4531H16.5516C16.875 14.5766 17.7188 13.9531 18.7031 13.9531C19.6875 13.9531 20.5312 14.5766 20.8547 15.4531H22.875V11.8344L21.3984 7.29688H2.20312ZM1.78125 7.95312H20.7938L21.9938 11.7969H13.875V14.7969H9.28125V11.7969H1.78125V7.95312ZM2.625 8.79688V10.9531H5.53125V8.79688H2.625ZM6.375 8.79688V10.9531H9.28125V8.79688H6.375ZM10.125 8.79688V13.9531H11.1562V8.79688H10.125ZM12 8.79688V13.9531H13.0312V8.79688H12ZM13.875 8.79688V10.9531H16.7812V8.79688H13.875ZM17.9344 8.79688V10.9531H20.85L20.175 8.79688H17.9344ZM5.57812 14.7969C4.77187 14.7969 4.125 15.4438 4.125 16.25C4.125 17.0562 4.77187 17.7031 5.57812 17.7031C6.38438 17.7031 7.03125 17.0562 7.03125 16.25C7.03125 15.4438 6.38438 14.7969 5.57812 14.7969ZM18.7031 14.7969C17.8969 14.7969 17.25 15.4438 17.25 16.25C17.25 17.0562 17.8969 17.7031 18.7031 17.7031C19.5094 17.7031 20.1562 17.0562 20.1562 16.25C20.1562 15.4438 19.5094 14.7969 18.7031 14.7969ZM5.57812 15.875C5.67758 15.875 5.77296 15.9145 5.84329 15.9848C5.91362 16.0552 5.95312 16.1505 5.95312 16.25C5.95312 16.3495 5.91362 16.4448 5.84329 16.5152C5.77296 16.5855 5.67758 16.625 5.57812 16.625C5.47867 16.625 5.38329 16.5855 5.31296 16.5152C5.24263 16.4448 5.20312 16.3495 5.20312 16.25C5.20312 16.1505 5.24263 16.0552 5.31296 15.9848C5.38329 15.9145 5.47867 15.875 5.57812 15.875ZM18.7031 15.875C18.8026 15.875 18.898 15.9145 18.9683 15.9848C19.0386 16.0552 19.0781 16.1505 19.0781 16.25C19.0781 16.3495 19.0386 16.4448 18.9683 16.5152C18.898 16.5855 18.8026 16.625 18.7031 16.625C18.6037 16.625 18.5083 16.5855 18.438 16.5152C18.3676 16.4448 18.3281 16.3495 18.3281 16.25C18.3281 16.1505 18.3676 16.0552 18.438 15.9848C18.5083 15.9145 18.6037 15.875 18.7031 15.875Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="card-info">
              <b>
                <p>Free shipping</p>
              </b>
              <p>Delivered to Your Door</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  transform="translate(0 0.5)"
                  fill="#E6EBEA"
                />
                <path
                  d="M2.20312 7.29688C1.73438 7.29688 1.125 7.87812 1.125 8.46406V14.7594L3.58547 15.1109C3.98297 14.4219 4.72969 13.9531 5.57812 13.9531C6.5625 13.9531 7.40625 14.5766 7.72969 15.4531H16.5516C16.875 14.5766 17.7188 13.9531 18.7031 13.9531C19.6875 13.9531 20.5312 14.5766 20.8547 15.4531H22.875V11.8344L21.3984 7.29688H2.20312ZM1.78125 7.95312H20.7938L21.9938 11.7969H13.875V14.7969H9.28125V11.7969H1.78125V7.95312ZM2.625 8.79688V10.9531H5.53125V8.79688H2.625ZM6.375 8.79688V10.9531H9.28125V8.79688H6.375ZM10.125 8.79688V13.9531H11.1562V8.79688H10.125ZM12 8.79688V13.9531H13.0312V8.79688H12ZM13.875 8.79688V10.9531H16.7812V8.79688H13.875ZM17.9344 8.79688V10.9531H20.85L20.175 8.79688H17.9344ZM5.57812 14.7969C4.77187 14.7969 4.125 15.4438 4.125 16.25C4.125 17.0562 4.77187 17.7031 5.57812 17.7031C6.38438 17.7031 7.03125 17.0562 7.03125 16.25C7.03125 15.4438 6.38438 14.7969 5.57812 14.7969ZM18.7031 14.7969C17.8969 14.7969 17.25 15.4438 17.25 16.25C17.25 17.0562 17.8969 17.7031 18.7031 17.7031C19.5094 17.7031 20.1562 17.0562 20.1562 16.25C20.1562 15.4438 19.5094 14.7969 18.7031 14.7969ZM5.57812 15.875C5.67758 15.875 5.77296 15.9145 5.84329 15.9848C5.91362 16.0552 5.95312 16.1505 5.95312 16.25C5.95312 16.3495 5.91362 16.4448 5.84329 16.5152C5.77296 16.5855 5.67758 16.625 5.57812 16.625C5.47867 16.625 5.38329 16.5855 5.31296 16.5152C5.24263 16.4448 5.20312 16.3495 5.20312 16.25C5.20312 16.1505 5.24263 16.0552 5.31296 15.9848C5.38329 15.9145 5.47867 15.875 5.57812 15.875ZM18.7031 15.875C18.8026 15.875 18.898 15.9145 18.9683 15.9848C19.0386 16.0552 19.0781 16.1505 19.0781 16.25C19.0781 16.3495 19.0386 16.4448 18.9683 16.5152C18.898 16.5855 18.8026 16.625 18.7031 16.625C18.6037 16.625 18.5083 16.5855 18.438 16.5152C18.3676 16.4448 18.3281 16.3495 18.3281 16.25C18.3281 16.1505 18.3676 16.0552 18.438 15.9848C18.5083 15.9145 18.6037 15.875 18.7031 15.875Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="card-info">
              <b>
                <p>Free shipping</p>
              </b>
              <p>Delivered to Your Door</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  transform="translate(0 0.5)"
                  fill="#E6EBEA"
                />
                <path
                  d="M2.20312 7.29688C1.73438 7.29688 1.125 7.87812 1.125 8.46406V14.7594L3.58547 15.1109C3.98297 14.4219 4.72969 13.9531 5.57812 13.9531C6.5625 13.9531 7.40625 14.5766 7.72969 15.4531H16.5516C16.875 14.5766 17.7188 13.9531 18.7031 13.9531C19.6875 13.9531 20.5312 14.5766 20.8547 15.4531H22.875V11.8344L21.3984 7.29688H2.20312ZM1.78125 7.95312H20.7938L21.9938 11.7969H13.875V14.7969H9.28125V11.7969H1.78125V7.95312ZM2.625 8.79688V10.9531H5.53125V8.79688H2.625ZM6.375 8.79688V10.9531H9.28125V8.79688H6.375ZM10.125 8.79688V13.9531H11.1562V8.79688H10.125ZM12 8.79688V13.9531H13.0312V8.79688H12ZM13.875 8.79688V10.9531H16.7812V8.79688H13.875ZM17.9344 8.79688V10.9531H20.85L20.175 8.79688H17.9344ZM5.57812 14.7969C4.77187 14.7969 4.125 15.4438 4.125 16.25C4.125 17.0562 4.77187 17.7031 5.57812 17.7031C6.38438 17.7031 7.03125 17.0562 7.03125 16.25C7.03125 15.4438 6.38438 14.7969 5.57812 14.7969ZM18.7031 14.7969C17.8969 14.7969 17.25 15.4438 17.25 16.25C17.25 17.0562 17.8969 17.7031 18.7031 17.7031C19.5094 17.7031 20.1562 17.0562 20.1562 16.25C20.1562 15.4438 19.5094 14.7969 18.7031 14.7969ZM5.57812 15.875C5.67758 15.875 5.77296 15.9145 5.84329 15.9848C5.91362 16.0552 5.95312 16.1505 5.95312 16.25C5.95312 16.3495 5.91362 16.4448 5.84329 16.5152C5.77296 16.5855 5.67758 16.625 5.57812 16.625C5.47867 16.625 5.38329 16.5855 5.31296 16.5152C5.24263 16.4448 5.20312 16.3495 5.20312 16.25C5.20312 16.1505 5.24263 16.0552 5.31296 15.9848C5.38329 15.9145 5.47867 15.875 5.57812 15.875ZM18.7031 15.875C18.8026 15.875 18.898 15.9145 18.9683 15.9848C19.0386 16.0552 19.0781 16.1505 19.0781 16.25C19.0781 16.3495 19.0386 16.4448 18.9683 16.5152C18.898 16.5855 18.8026 16.625 18.7031 16.625C18.6037 16.625 18.5083 16.5855 18.438 16.5152C18.3676 16.4448 18.3281 16.3495 18.3281 16.25C18.3281 16.1505 18.3676 16.0552 18.438 15.9848C18.5083 15.9145 18.6037 15.875 18.7031 15.875Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="card-info">
              <b>
                <p>Free shipping</p>
              </b>
              <p>Delivered to Your Door</p>
            </div>
          </div>
        </div>
        <div className="product-items">
          <h1 style={{ marginBottom: "30px" }}>Similar Items You Might Like</h1>
          <div className="products item-cont">
            {PRODUCTS.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>
        <Popular />
        <Category />
      </div>
    </>
  );
};

export default Shop;
