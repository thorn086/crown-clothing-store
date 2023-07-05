import "./checkout.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemInCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>I am the Checkout Page</h1>
      <div>
        {cartItems.map((item) => {
          const { id, name, quantity } = item;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span
                onClick={() => {
                  removeItemInCart(item);
                }}>
                decrement
              </span>
              <br />
              <span
                onClick={() => {
                  addItemToCart(item);
                }}>
                Increment
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CheckOut;
